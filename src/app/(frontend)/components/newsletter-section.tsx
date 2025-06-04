import { SectionContainer } from "@components/section";
import { Button } from "@ui/button";
import { Input } from "@ui/input";
import { Label } from "@ui/label";

export default function NewsletterSection() {
  const inputStyles =
    "border-0 border-b border-[#a4acb9] rounded-none focus-visible:ring-0 focus-visible:ring-offset-0 focus:border-[#000000] placeholder:text-[#a4acb9] bg-transparent w-full py-3 px-1 text-base";
  const labelStyles = "text-sm text-[#000000] mb-1 block font-medium";

  return (
    <SectionContainer>
      <div className="w-full max-w-3xl">
        <header className="mb-10 text-center">
          <h1 className="text-[#000000] text-center font-medium text-[100px] leading-[1.2] tracking-[-4px] mb-6">
            STAY UPDATED
          </h1>
          <p className="text-base md:text-lg text-[#000000] max-w-md mx-auto">
            Subscribe to our newsletter to receive inspiration and news about our latest and future
            projects.
          </p>
        </header>
        <main>
          <form className="space-y-8">
            <div>
              <Label htmlFor="email" className={labelStyles}>
                Email* (Required)
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="Input your Email"
                required
                className={inputStyles}
              />
            </div>
            <Button
              type="submit"
              className="w-full rounded-xs bg-[#121212] text-[#ffffff] hover:bg-[#121212]/90 py-6 text-base font-semibold"
            >
              Submit
            </Button>
          </form>
        </main>
      </div>
    </SectionContainer>
  );
}
