import { SectionContainer, SectionHeader } from "@components/section";
import { Button } from "@ui/button";
import { Input } from "@ui/input";
import { Label } from "@ui/label";
import { Textarea } from "@ui/textarea";

export default function BudgetRequestSection() {
  return (
    <SectionContainer>
      <div className="w-full max-w-3xl px-4 sm:px-0">
        <header className="mb-section text-center">
          <h1 className="text-center font-medium uppercase text-8xl mb-title text-brand-black">
            BUDGET REQUEST
          </h1>
          <p className="text-body max-w-md mx-auto px-4 text-brand-black">
            Tell us about your project and receive a personalized quote tailored to your goals. No
            commitment — just a clear plan and expert insight to get started.
          </p>
        </header>
        <main>
          <form className="space-y-form">
            <div>
              <Label htmlFor="name" className="label-form text-brand-black">
                Name* (Required)
              </Label>
              <Input
                id="name"
                name="name"
                type="text"
                placeholder="Input your Name"
                required
                className="input-underlined input-standard"
              />
            </div>
            <div>
              <Label htmlFor="phone" className="label-form text-brand-black">
                Phone* (Required)
              </Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                placeholder="Input your Phone Number"
                required
                className="input-underlined input-standard"
              />
            </div>
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
            <div>
              <Label htmlFor="message" className="label-form text-brand-black">
                Message
              </Label>
              <Textarea
                id="message"
                name="message"
                placeholder="Input your Message Here"
                className="input-underlined input-standard min-h-[var(--height-xs)] md:min-h-[var(--height-md)]"
                rows={4}
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
