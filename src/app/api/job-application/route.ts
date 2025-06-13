import type { Job, JobApplication, Media } from "@/payload-types";
import configPromise from "@payload-config";
import { NextResponse } from "next/server";
import { getPayload } from "payload";
import { z } from "zod";
import { fromZodError } from "zod-validation-error";

// Helper type for Payload file uploads
interface PayloadFile {
  data: Buffer;
  mimetype: string;
  name: string;
  size: number;
}

const payload = await getPayload({ config: configPromise });

const jobApplicationSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(1, "Phone is required"),
  message: z.string().optional(),
  cv: z
    .any()
    .refine((file) => file instanceof File, "CV must be a file.")
    .refine((file) => file.size > 0, "CV is required."),
  portfolio: z
    .any()
    .optional()
    .refine(
      (file) => file === undefined || file === null || (file instanceof File && file.size > 0),
      "Portfolio must be a valid file if provided.",
    ),
  jobId: z.string().optional().nullable(),
});

// Function to convert a File to PayloadFile
async function toPayloadFile(file: File): Promise<PayloadFile> {
  const buffer = await file.arrayBuffer();
  return {
    data: Buffer.from(buffer),
    mimetype: file.type,
    name: file.name,
    size: file.size,
  };
}

export async function POST(request: Request) {
  const formData = await request.formData();

  const cvFile = formData.get("cv") as File;
  const portfolioFile = formData.get("portfolio") as File | null;

  if (!cvFile || !(cvFile instanceof File) || cvFile.size === 0) {
    return NextResponse.json(
      { error: "CV file is required and must not be empty" },
      { status: 400 },
    );
  }

  const validatedFields = jobApplicationSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    message: formData.get("message"),
    cv: cvFile,
    portfolio: portfolioFile || undefined,
    jobId: formData.get("jobId"),
  });

  if (!validatedFields.success) {
    console.error("Validation errors:", validatedFields.error.issues);
    const errorMessage = fromZodError(validatedFields.error).toString();
    return NextResponse.json({ error: errorMessage }, { status: 400 });
  }

  const {
    name,
    email,
    phone,
    message,
    cv: cvFileFromValidation,
    portfolio: portfolioFileFromValidation,
    jobId: jobIdString,
  } = validatedFields.data;

  // Upload files to media collection first
  let cvUpload: Media;
  try {
    const payloadCvFile = await toPayloadFile(cvFileFromValidation);
    cvUpload = await payload.create({
      collection: "media",
      data: { alt: `CV for ${name}` },
      file: payloadCvFile,
    });
  } catch (error) {
    console.error("CV Upload Error:", error);
    return NextResponse.json({ error: "Failed to upload CV." }, { status: 500 });
  }

  let portfolioUpload: Media | undefined;
  if (portfolioFileFromValidation) {
    try {
      const payloadPortfolioFile = await toPayloadFile(portfolioFileFromValidation);
      portfolioUpload = await payload.create({
        collection: "media",
        data: { alt: `Portfolio for ${name}` },
        file: payloadPortfolioFile,
      });
    } catch (error) {
      console.error("Portfolio Upload Error:", error);
      return NextResponse.json({ error: "Failed to upload portfolio." }, { status: 500 });
    }
  }

  // Prepare the application data with media references
  interface ApplicationCreateData {
    name: string;
    email: string;
    phone: string;
    coverLetter?: string;
    position: string;
    cv: number; // Media ID
    portfolio?: number; // Media ID
    jobId?: number;
  }

  const applicationData: ApplicationCreateData = {
    name,
    email,
    phone,
    coverLetter: message || undefined,
    position: "Spontaneous Application",
    cv: cvUpload.id,
  };

  if (portfolioUpload) {
    applicationData.portfolio = portfolioUpload.id;
  }

  // Add job relationship if provided
  if (jobIdString) {
    const numericJobId = Number.parseInt(jobIdString, 10);
    if (!Number.isNaN(numericJobId)) {
      try {
        const jobDoc = await payload.findByID({
          collection: "jobs",
          id: numericJobId,
        });
        if (jobDoc?.id) {
          applicationData.jobId = jobDoc.id;
          if (jobDoc.title) {
            applicationData.position = jobDoc.title;
          }
        } else {
          console.warn(
            `Job with ID ${numericJobId} not found or has invalid ID. Proceeding without linking job.`,
          );
        }
      } catch (findError) {
        console.error(`Error finding job with ID ${numericJobId}:`, findError);
      }
    } else {
      console.warn(`Invalid job ID format: ${jobIdString}. Proceeding without linking job.`);
    }
  }

  try {
    const newApplication = await payload.create({
      collection: "job-applications",
      data: applicationData,
    });

    return NextResponse.json(newApplication, { status: 201 });
  } catch (error) {
    console.error("Job Application Creation Error:", error);
    const errorMessage = error instanceof Error ? error.message : "An unknown error occurred";
    return NextResponse.json(
      { error: `Failed to create job application: ${errorMessage}` },
      { status: 500 },
    );
  }
}
