import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export interface EmailOptions {
  to: string | string[];
  subject: string;
  html: string;
  text?: string;
  from?: string;
}

export class ResendEmailService {
  private defaultFrom: string;

  constructor() {
    this.defaultFrom = process.env.EMAIL_FROM || "onboarding@resend.dev";
  }

  async sendEmail(
    options: EmailOptions,
  ): Promise<{ success: boolean; id?: string; error?: string }> {
    try {
      if (!process.env.RESEND_API_KEY) {
        console.error("RESEND_API_KEY environment variable is not set");
        return { success: false, error: "Email service not configured" };
      }

      const response = await resend.emails.send({
        from: options.from || this.defaultFrom,
        to: Array.isArray(options.to) ? options.to : [options.to],
        subject: options.subject,
        html: options.html,
        text: options.text,
      });

      if (response.error) {
        console.error("Resend API error:", response.error);
        return { success: false, error: response.error.message };
      }

      console.log(`Email sent successfully with ID: ${response.data?.id}`);
      return { success: true, id: response.data?.id };
    } catch (error) {
      console.error("Failed to send email:", error);
      const errorMessage = error instanceof Error ? error.message : "Unknown error";
      return { success: false, error: errorMessage };
    }
  }

  async sendNewsletterWelcomeEmail(email: string): Promise<{ success: boolean; error?: string }> {
    const html = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Welcome to CVZ Portugal Newsletter</title>
        </head>
        <body style="margin: 0; padding: 0; font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
          <div style="max-width: 600px; margin: 0 auto; padding: 20px; background-color: #ffffff;">
            <header style="text-align: center; margin-bottom: 30px;">
              <h1 style="color: #2c3e50; font-size: 28px; margin-bottom: 10px;">Welcome to CVZ Portugal</h1>
              <p style="color: #7f8c8d; font-size: 16px; margin: 0;">Architecture & Design</p>
            </header>
            <main>
              <p style="font-size: 16px; margin-bottom: 20px;">
                Thank you for subscribing to our newsletter! You'll now receive updates about our latest projects, 
                architectural insights, and company news.
              </p>
              <p style="font-size: 16px; margin-bottom: 20px;">
                Stay tuned for exciting content from CVZ Portugal.
              </p>
            </main>
            <footer style="margin-top: 40px; padding-top: 20px; border-top: 1px solid #e9ecef; text-align: center;">
              <p style="color: #6c757d; font-size: 14px; margin: 0;">
                CVZ Portugal - Architecture & Design
              </p>
            </footer>
          </div>
        </body>
      </html>
    `;

    const result = await this.sendEmail({
      to: email,
      subject: "Welcome to CVZ Portugal Newsletter",
      html,
    });

    return { success: result.success, error: result.error };
  }

  async sendJobApplicationConfirmation(
    applicantName: string,
    applicantEmail: string,
    position: string,
  ): Promise<{ success: boolean; error?: string }> {
    const html = `
      <!DOCTYPE html>
      <html>
        <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
          <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
            <h1 style="color: #2c3e50;">Application Received</h1>
            <p>Dear ${applicantName},</p>
            <p>Thank you for your interest in the <strong>${position}</strong> position at CVZ Portugal.</p>
            <p>We have successfully received your application and our team will review it carefully.</p>
            <p>Best regards,<br>The CVZ Portugal Team</p>
          </div>
        </body>
      </html>
    `;

    const result = await this.sendEmail({
      to: applicantEmail,
      subject: "Application Received - CVZ Portugal",
      html,
    });

    return { success: result.success, error: result.error };
  }

  async sendBudgetRequestConfirmation(
    clientName: string,
    clientEmail: string,
  ): Promise<{ success: boolean; error?: string }> {
    const html = `
      <!DOCTYPE html>
      <html>
        <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
          <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
            <h1 style="color: #2c3e50;">Budget Request Received</h1>
            <p>Dear ${clientName},</p>
            <p>Thank you for contacting CVZ Portugal. We have received your budget request and our team will analyze your project requirements carefully.</p>
            <p>We will prepare a detailed proposal and contact you within 2-3 business days.</p>
            <p>Best regards,<br>The CVZ Portugal Team</p>
          </div>
        </body>
      </html>
    `;

    const result = await this.sendEmail({
      to: clientEmail,
      subject: "Budget Request Received - CVZ Portugal",
      html,
    });

    return { success: result.success, error: result.error };
  }
}

export const resendEmailService = new ResendEmailService();
