import { SectionContainer } from "@components/section";
import { Button } from "@ui/button";
import { Input } from "@ui/input";
import { Label } from "@ui/label";

export default function NewsletterSection() {
  return (
    <SectionContainer>
      <div className="w-full max-w-3xl px-4 sm:px-0">
        <header className="mb-section text-center">
          <h1 className="text-center font-medium text-8xl mb-title text-brand-black">
            STAY UPDATED
          </h1>
          <p className="text-body max-w-md mx-auto px-4 text-brand-black">
            Subscribe to our newsletter to receive inspiration and news about our latest and future
            projects.
          </p>
        </header>
        <main>
          <form className="space-y-form">
            <div>
              <Label htmlFor="email" className="label-form text-brand-black">
                Email* (Required)
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="Input your Email"
                required
                className="input-underlined input-standard"
              />
            </div>
            <Button
              type="submit"
              className="w-full rounded-xs py-button text-button font-semibold btn-primary"
            >
              Submit
            </Button>
          </form>
        </main>
      </div>
    </SectionContainer>
  );
}
