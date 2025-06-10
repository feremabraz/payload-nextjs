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
        <SectionHeader title="Terms of Service" />

        <div className="max-w-4xl mx-auto space-y-8 text-foreground">
          <div className="space-y-4">
            <p className="text-muted-foreground">Last updated: June 10, 2025</p>
            <p className="text-lg leading-relaxed">
              Welcome to Bruno Câmara Arquitetos. These Terms of Service govern your use of our
              website and services. By accessing or using our website, you agree to be bound by
              these terms.
            </p>
          </div>

          <div className="space-y-6">
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">1. Acceptance of Terms</h2>
              <p className="leading-relaxed text-muted-foreground">
                By accessing and using this website, you accept and agree to be bound by the terms
                and provision of this agreement. If you do not agree to abide by the above, please
                do not use this service.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">2. Use License</h2>
              <p className="leading-relaxed text-muted-foreground">
                Permission is granted to temporarily download one copy of the materials on Bruno
                Câmara Arquitetos' website for personal, non-commercial transitory viewing only.
                This is the grant of a license, not a transfer of title, and under this license you
                may not:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 text-muted-foreground">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose or for any public display</li>
                <li>Attempt to reverse engineer any software contained on the website</li>
                <li>Remove any copyright or other proprietary notations from the materials</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">
                3. Content and Intellectual Property
              </h2>
              <p className="leading-relaxed text-muted-foreground">
                All content on this website, including but not limited to text, graphics, logos,
                images, and software, is the property of Bruno Câmara Arquitetos and is protected by
                Portuguese and international copyright laws.
              </p>
              <div className="space-y-3">
                <h3 className="text-xl font-medium text-foreground">
                  Project Images and Portfolios
                </h3>
                <p className="leading-relaxed text-muted-foreground">
                  The architectural projects, designs, and images displayed on this website are
                  proprietary works of Bruno Câmara Arquitetos. Unauthorized use, reproduction, or
                  distribution is strictly prohibited.
                </p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">4. Website Use and Conduct</h2>
              <p className="leading-relaxed text-muted-foreground">
                You agree to use our website only for lawful purposes and in a way that does not
                infringe the rights of others. You must not:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 text-muted-foreground">
                <li>
                  Use the website in any way that could damage, disable, or impair the service
                </li>
                <li>Attempt to gain unauthorized access to any part of the website</li>
                <li>Submit false or misleading information through our contact forms</li>
                <li>Use automated systems to access the website without permission</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">
                5. Contact Forms and Communications
              </h2>
              <p className="leading-relaxed text-muted-foreground">
                When you submit information through our contact forms, you warrant that:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 text-muted-foreground">
                <li>All information provided is accurate and truthful</li>
                <li>You have the authority to provide such information</li>
                <li>You consent to us contacting you regarding your inquiry</li>
                <li>
                  You understand that submissions do not constitute a binding agreement for services
                </li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">6. Professional Services</h2>
              <div className="space-y-3">
                <p className="leading-relaxed text-muted-foreground">
                  Any architectural or design services provided by Bruno Câmara Arquitetos are
                  subject to separate professional service agreements. This website and these terms
                  do not constitute an offer to provide professional services.
                </p>
                <h3 className="text-xl font-medium text-foreground">Consultation and Quotations</h3>
                <p className="leading-relaxed text-muted-foreground">
                  Initial consultations and project quotations may be provided free of charge, but
                  this does not create any obligation for either party to proceed with a
                  professional engagement.
                </p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">7. Disclaimer</h2>
              <p className="leading-relaxed text-muted-foreground">
                The materials on Bruno Câmara Arquitetos' website are provided on an 'as is' basis.
                Bruno Câmara Arquitetos makes no warranties, expressed or implied, and hereby
                disclaims and negates all other warranties including without limitation, implied
                warranties or conditions of merchantability, fitness for a particular purpose, or
                non-infringement of intellectual property or other violation of rights.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">8. Limitations</h2>
              <p className="leading-relaxed text-muted-foreground">
                In no event shall Bruno Câmara Arquitetos or its suppliers be liable for any damages
                (including, without limitation, damages for loss of data or profit, or due to
                business interruption) arising out of the use or inability to use the materials on
                the website, even if Bruno Câmara Arquitetos or its authorized representative has
                been notified orally or in writing of the possibility of such damage.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">
                9. Privacy and Data Protection
              </h2>
              <p className="leading-relaxed text-muted-foreground">
                Your privacy is important to us. Please review our Privacy Policy, which also
                governs your use of the website, to understand our practices regarding the
                collection and use of your personal information.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">10. Governing Law</h2>
              <p className="leading-relaxed text-muted-foreground">
                These terms and conditions are governed by and construed in accordance with the laws
                of Portugal, and you irrevocably submit to the exclusive jurisdiction of the courts
                in that location.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">11. Changes to Terms</h2>
              <p className="leading-relaxed text-muted-foreground">
                Bruno Câmara Arquitetos may revise these terms of service at any time without
                notice. By using this website, you are agreeing to be bound by the then current
                version of these terms of service.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">12. Contact Information</h2>
              <div className="bg-muted/20 p-6 rounded-lg space-y-2">
                <p className="font-medium text-foreground">Bruno Câmara Arquitetos</p>
                <p className="text-muted-foreground">Email: info@cvz-construcoes.pt</p>
                <p className="text-muted-foreground">
                  Address: Av. da República 49, 1050-188 Lisboa, Portugal
                </p>
              </div>
              <p className="leading-relaxed text-muted-foreground">
                If you have any questions about these Terms of Service, please contact us using the
                information above.
              </p>
            </section>
          </div>
        </div>
      </SectionContainer>
      <FooterSection />
    </>
  );
}
