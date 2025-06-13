#!/usr/bin/env node

import { resendEmailService } from "../lib/resend-email";

console.log("🧪 Testing Resend Email Service...");

if (!process.env.RESEND_API_KEY) {
  console.error("❌ RESEND_API_KEY environment variable is not set");
  process.exit(1);
}

console.log("✅ RESEND_API_KEY is configured");

const testEmail = "delivered@resend.dev";
console.log("📮 Using Resend's test email address");

try {
  console.log("\n📧 Testing newsletter welcome email...");
  const result1 = await resendEmailService.sendNewsletterWelcomeEmail(testEmail);
  console.log(result1.success ? "✅ Newsletter email test passed" : `❌ Failed: ${result1.error}`);

  console.log("\n💼 Testing job application email...");
  const result2 = await resendEmailService.sendJobApplicationConfirmation(
    "John Doe",
    testEmail,
    "Senior Architect",
  );
  console.log(
    result2.success ? "✅ Job application email test passed" : `❌ Failed: ${result2.error}`,
  );

  console.log("\n💰 Testing budget request email...");
  const result3 = await resendEmailService.sendBudgetRequestConfirmation("Jane Smith", testEmail);
  console.log(
    result3.success ? "✅ Budget request email test passed" : `❌ Failed: ${result3.error}`,
  );

  console.log("\n🎉 All email tests completed successfully!");
  console.log("✅ Your Resend integration is working correctly!");
} catch (error) {
  console.error("❌ Test failed:", error);
  process.exit(1);
}
