import type { Payload } from "payload";
import { getPayload } from "payload";
import config from "../payload.config";

// Email templates
export interface EmailTemplate {
  to: string;
  subject: string;
  html: string;
  text?: string;
}

// Newsletter subscription confirmation email
export const createNewsletterWelcomeEmail = (email: string): EmailTemplate => ({
  to: email,
  subject: "Welcome to CVZ Portugal Newsletter",
  html: `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
      <h1 style="color: #333; text-align: center;">Welcome to CVZ Portugal</h1>
      <p style="color: #666; line-height: 1.6;">
        Thank you for subscribing to our newsletter! You'll now receive updates about our latest projects, 
        architectural insights, and company news.
      </p>
      <p style="color: #666; line-height: 1.6;">
        Stay tuned for exciting content from CVZ Portugal.
      </p>
      <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; text-align: center;">
        <p style="color: #999; font-size: 12px;">
          CVZ Portugal - Architecture & Design<br>
          You received this email because you subscribed to our newsletter.
        </p>
      </div>
    </div>
  `,
  text: `
    Welcome to CVZ Portugal
    
    Thank you for subscribing to our newsletter! You'll now receive updates about our latest projects, 
    architectural insights, and company news.
    
    Stay tuned for exciting content from CVZ Portugal.
    
    CVZ Portugal - Architecture & Design
    You received this email because you subscribed to our newsletter.
  `,
});

// Job application received confirmation email
export const createJobApplicationConfirmationEmail = (
  applicantName: string,
  applicantEmail: string,
  position: string,
): EmailTemplate => ({
  to: applicantEmail,
  subject: "Application Received - CVZ Portugal",
  html: `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
      <h1 style="color: #333; text-align: center;">Application Received</h1>
      <p style="color: #666; line-height: 1.6;">
        Dear ${applicantName},
      </p>
      <p style="color: #666; line-height: 1.6;">
        Thank you for your interest in the <strong>${position}</strong> position at CVZ Portugal. 
        We have successfully received your application and our team will review it carefully.
      </p>
      <p style="color: #666; line-height: 1.6;">
        We will contact you within the next few days regarding the next steps in our selection process.
      </p>
      <p style="color: #666; line-height: 1.6;">
        Best regards,<br>
        The CVZ Portugal Team
      </p>
      <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; text-align: center;">
        <p style="color: #999; font-size: 12px;">
          CVZ Portugal - Architecture & Design
        </p>
      </div>
    </div>
  `,
  text: `
    Application Received
    
    Dear ${applicantName},
    
    Thank you for your interest in the ${position} position at CVZ Portugal. 
    We have successfully received your application and our team will review it carefully.
    
    We will contact you within the next few days regarding the next steps in our selection process.
    
    Best regards,
    The CVZ Portugal Team
    
    CVZ Portugal - Architecture & Design
  `,
});

// Budget request confirmation email
export const createBudgetRequestConfirmationEmail = (
  clientName: string,
  clientEmail: string,
): EmailTemplate => ({
  to: clientEmail,
  subject: "Budget Request Received - CVZ Portugal",
  html: `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
      <h1 style="color: #333; text-align: center;">Budget Request Received</h1>
      <p style="color: #666; line-height: 1.6;">
        Dear ${clientName},
      </p>
      <p style="color: #666; line-height: 1.6;">
        Thank you for contacting CVZ Portugal. We have received your budget request and our team 
        will analyze your project requirements carefully.
      </p>
      <p style="color: #666; line-height: 1.6;">
        We will prepare a detailed proposal and contact you within 2-3 business days to discuss 
        your project in more detail.
      </p>
      <p style="color: #666; line-height: 1.6;">
        Best regards,<br>
        The CVZ Portugal Team
      </p>
      <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; text-align: center;">
        <p style="color: #999; font-size: 12px;">
          CVZ Portugal - Architecture & Design
        </p>
      </div>
    </div>
  `,
  text: `
    Budget Request Received
    
    Dear ${clientName},
    
    Thank you for contacting CVZ Portugal. We have received your budget request and our team 
    will analyze your project requirements carefully.
    
    We will prepare a detailed proposal and contact you within 2-3 business days to discuss 
    your project in more detail.
    
    Best regards,
    The CVZ Portugal Team
    
    CVZ Portugal - Architecture & Design
  `,
});

// Email service class
export class EmailService {
  private payload: Payload | null = null;

  private async getPayloadInstance(): Promise<Payload> {
    if (!this.payload) {
      this.payload = await getPayload({ config });
    }
    return this.payload;
  }

  async sendEmail(template: EmailTemplate): Promise<boolean> {
    try {
      const payload = await this.getPayloadInstance();

      await payload.sendEmail({
        to: template.to,
        subject: template.subject,
        html: template.html,
        text: template.text,
      });

      console.log(`Email sent successfully to ${template.to}`);
      return true;
    } catch (error) {
      console.error("Failed to send email:", error);
      return false;
    }
  }

  async sendNewsletterWelcomeEmail(email: string): Promise<boolean> {
    const template = createNewsletterWelcomeEmail(email);
    return this.sendEmail(template);
  }

  async sendJobApplicationConfirmation(
    applicantName: string,
    applicantEmail: string,
    position: string,
  ): Promise<boolean> {
    const template = createJobApplicationConfirmationEmail(applicantName, applicantEmail, position);
    return this.sendEmail(template);
  }

  async sendBudgetRequestConfirmation(clientName: string, clientEmail: string): Promise<boolean> {
    const template = createBudgetRequestConfirmationEmail(clientName, clientEmail);
    return this.sendEmail(template);
  }
}

// Export a singleton instance
export const emailService = new EmailService();
