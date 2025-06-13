import { SectionContainer, SectionHeader } from "@shared/section-container";
import Link from "next/link";
import "./global.css";

export default function NotFound() {
  return (
    <>
      <SectionContainer width="container" variant="loose">
        <SectionHeader title="404" />
        <div className="max-w-4xl mx-auto space-b-8 text-center">
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-4xl font-semibold text-foreground">Page Not Found</h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Sorry, the page you are looking for doesn't exist or has been moved.
              </p>
            </div>
            <div className="space-y-4">
              <p className="text-lg text-muted-foreground">This could happen because:</p>
              <ul className="text-muted-foreground space-y-2 max-w-md mx-auto">
                <li>• You typed the URL incorrectly</li>
                <li>• The page has been moved or deleted</li>
                <li>• You followed an outdated link</li>
              </ul>
            </div>
            <div className="pt-8 space-y-4">
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  href="/"
                  className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
                >
                  Back to Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </SectionContainer>
    </>
  );
}
