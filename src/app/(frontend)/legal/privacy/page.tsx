import { headers as getHeaders } from "next/headers.js";
import { getPayload } from "payload";

import NavigationSection from "@navigation/navigation-section";
import FooterSection from "@shared/footer-section";
import { SectionContainer, SectionHeader } from "@shared/section-container";

import config from "@/payload.config";

export default async function JobsPage() {
  const headers = await getHeaders();
  const payloadConfig = await config;
  const payload = await getPayload({ config: payloadConfig });
  const { user: _user } = await payload.auth({ headers });

  return (
    <>
      <NavigationSection />
      <SectionContainer width="container" variant="loose">
        <SectionHeader title="Privacy Policy" />

        <div className="max-w-4xl mx-auto space-y-8 text-foreground">
          <div className="space-y-4">
            <p className="text-muted-foreground">Last updated: June 10, 2025</p>
            <p className="text-lg leading-relaxed">
              At Bruno Câmara Arquitetos, we are committed to protecting your privacy and ensuring
              the security of your personal information. This Privacy Policy explains how we
              collect, use, and safeguard your data when you visit our website or interact with our
              services.
            </p>
          </div>

          <div className="space-y-6">
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">1. Information We Collect</h2>
              <div className="space-y-3">
                <h3 className="text-xl font-medium text-foreground">Contact Information</h3>
                <p className="leading-relaxed text-muted-foreground">
                  When you contact us through our forms or email, we may collect:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4 text-muted-foreground">
                  <li>Name and contact details</li>
                  <li>Email address</li>
                  <li>Phone number</li>
                  <li>Project details and requirements</li>
                  <li>Budget information (when provided voluntarily)</li>
                </ul>
              </div>

              <div className="space-y-3">
                <h3 className="text-xl font-medium text-foreground">Technical Information</h3>
                <p className="leading-relaxed text-muted-foreground">
                  We may automatically collect certain technical information including:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4 text-muted-foreground">
                  <li>IP address and general location</li>
                  <li>Browser type and version</li>
                  <li>Device information</li>
                  <li>Pages visited and time spent on our site</li>
                </ul>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">
                2. How We Use Your Information
              </h2>
              <p className="leading-relaxed text-muted-foreground">
                We use the information we collect to:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 text-muted-foreground">
                <li>Respond to your inquiries and provide requested services</li>
                <li>Send you project updates and communications</li>
                <li>Improve our website and services</li>
                <li>Comply with legal obligations</li>
                <li>Send newsletters (only with your explicit consent)</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">3. Cookies and Tracking</h2>
              <p className="leading-relaxed text-muted-foreground">
                Our website does not use cookies for tracking or storing personal information. We
                may use essential technical cookies only for website functionality, such as
                maintaining your session during form submissions.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">4. Data Sharing</h2>
              <p className="leading-relaxed text-muted-foreground">
                We do not sell, trade, or share your personal information with third parties except:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 text-muted-foreground">
                <li>When required by law or legal process</li>
                <li>
                  With trusted service providers who assist in our operations (under strict
                  confidentiality agreements)
                </li>
                <li>With your explicit consent</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">5. Data Security</h2>
              <p className="leading-relaxed text-muted-foreground">
                We implement appropriate technical and organizational measures to protect your
                personal information against unauthorized access, alteration, disclosure, or
                destruction. All form submissions are transmitted securely using industry-standard
                encryption.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">6. Your Rights</h2>
              <p className="leading-relaxed text-muted-foreground">
                Under applicable data protection laws, you have the right to:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 text-muted-foreground">
                <li>Access your personal data</li>
                <li>Correct inaccurate information</li>
                <li>Request deletion of your data</li>
                <li>Object to processing of your data</li>
                <li>Withdraw consent at any time</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">7. Data Retention</h2>
              <p className="leading-relaxed text-muted-foreground">
                We retain your personal information only for as long as necessary to fulfill the
                purposes outlined in this policy or as required by law. Contact information from
                inquiries is typically retained for 3 years unless you request earlier deletion.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">8. Contact Information</h2>
              <div className="bg-muted/20 p-6 rounded-lg space-y-2">
                <p className="font-medium text-foreground">Bruno Câmara Arquitetos</p>
                <p className="text-muted-foreground">Email: info@cvz-construcoes.pt</p>
                <p className="text-muted-foreground">
                  Address: Av. da República 49, 1050-188 Lisboa, Portugal
                </p>
              </div>
              <p className="leading-relaxed text-muted-foreground">
                For any questions about this Privacy Policy or to exercise your rights, please
                contact us using the information above.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">9. Changes to This Policy</h2>
              <p className="leading-relaxed text-muted-foreground">
                We may update this Privacy Policy from time to time. Any changes will be posted on
                this page with an updated revision date. We encourage you to review this policy
                periodically.
              </p>
            </section>
          </div>
        </div>
      </SectionContainer>
      <FooterSection />
    </>
  );
}
