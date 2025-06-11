import NavigationSection from "@navigation/navigation-section";
import FooterSection from "@shared/footer-section";
import { SectionContainer, SectionHeader } from "@shared/section-container";

export default function NotFound() {
  return (
    <>
      <NavigationSection />
      <SectionContainer width="container" variant="loose">
        <SectionHeader title="404" />
        <div className="max-w-4xl mx-auto space-b-8 text-center">
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-4xl font-semibold text-foreground">Page Not Found</h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                The page you're looking for doesn't exist or has been moved.
              </p>
            </div>
            <div className="space-y-4">
              <p className="text-lg text-muted-foreground">This might have happened because:</p>
              <ul className="text-muted-foreground space-y-2 max-w-md mx-auto">
                <li>• The URL was typed incorrectly</li>
                <li>• The page has been removed or relocated</li>
                <li>• You followed an outdated link</li>
              </ul>
            </div>
            <div className="pt-8 space-y-4">
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="/"
                  className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
                >
                  Back to Home
                </a>
                <a
                  href="/projects"
                  className="inline-flex items-center justify-center rounded-md border border-input bg-background px-8 py-3 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                  View Projects
                </a>
              </div>
            </div>
          </div>
        </div>
      </SectionContainer>
      <FooterSection />
    </>
  );
}
