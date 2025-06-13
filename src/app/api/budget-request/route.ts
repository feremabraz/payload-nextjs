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
