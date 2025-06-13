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
    const email = formData.get("email") as string;

    // Validate required fields
    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email format" }, { status: 400 });
    }

    // Check if email already exists
    const existingSubscription = await payload.find({
      collection: "newsletter",
      where: {
        email: {
          equals: email,
        },
      },
    });

    if (existingSubscription.docs.length > 0) {
      const existingSub = existingSubscription.docs[0];

      // If unsubscribed, reactivate
      if (existingSub.status === "unsubscribed") {
        await payload.update({
          collection: "newsletter",
          id: existingSub.id,
          data: {
            status: "active",
            subscribedAt: new Date().toISOString(),
            unsubscribedAt: null,
          },
        });

        return NextResponse.json(
          {
            success: true,
            message: "Newsletter subscription reactivated successfully",
          },
          { status: 200 },
        );
      }

      // If email exists and is active, return conflict
      return NextResponse.json(
        { error: "Email already subscribed to newsletter" },
        { status: 409 },
      );
    }

    // Create newsletter subscription
    const subscription = await payload.create({
      collection: "newsletter",
      data: {
        email,
        status: "active",
      },
    });

    // Send welcome email
    try {
      // Try Resend service first, fallback to Payload email service
      const result = await resendEmailService.sendNewsletterWelcomeEmail(email);
      if (!result.success) {
        console.warn("Resend service failed, trying Payload email service:", result.error);
        await emailService.sendNewsletterWelcomeEmail(email);
      }
    } catch (error) {
      console.error("Failed to send welcome email:", error);
      // Don't fail the subscription if email fails
    }

    return NextResponse.json(
      {
        success: true,
        message: "Newsletter subscription successful",
        id: subscription.id,
      },
      { status: 201 },
    );
  } catch (error) {
    console.error("Error subscribing to newsletter:", error);
    return NextResponse.json({ error: "Failed to subscribe to newsletter" }, { status: 500 });
  }
}
