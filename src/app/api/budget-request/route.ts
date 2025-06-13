import { emailService } from "@/lib/email";
import { resendEmailService } from "@/lib/resend-email";
import config from "@/payload.config";
import { type NextRequest, NextResponse } from "next/server";
import { getPayload } from "payload";

export async function POST(request: NextRequest) {
  try {
    const payload = await getPayload({ config });
    const formData = await request.formData();

    // Extract form data
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const message = formData.get("message") as string;

    // Validate required fields
    if (!name || !email || !phone) {
      return NextResponse.json({ error: "Name, email, and phone are required" }, { status: 400 });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email format" }, { status: 400 });
    }

    // Create budget request in Payload
    const budgetRequest = await payload.create({
      collection: "budget-requests",
      data: {
        name,
        email,
        phone,
        message,
        status: "pending",
        priority: "normal",
      },
    });

    // Send confirmation email to client
    try {
      // Try Resend service first, fallback to Payload email service
      const result = await resendEmailService.sendBudgetRequestConfirmation(name, email);
      if (!result.success) {
        console.warn("Resend service failed, trying Payload email service:", result.error);
        await emailService.sendBudgetRequestConfirmation(name, email);
      }
    } catch (emailError) {
      console.error("Failed to send budget request confirmation email:", emailError);
      // Don't fail the request creation if email fails
    }

    return NextResponse.json(
      {
        success: true,
        message: "Budget request submitted successfully",
        id: budgetRequest.id,
      },
      { status: 201 },
    );
  } catch (error) {
    console.error("Error submitting budget request:", error);
    return NextResponse.json({ error: "Failed to submit budget request" }, { status: 500 });
  }
}
