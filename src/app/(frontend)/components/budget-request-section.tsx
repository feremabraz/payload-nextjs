import { SectionContainer, SectionHeader } from "@components/section";
import { Button } from "@ui/button";
import { Input } from "@ui/input";
import { Label } from "@ui/label";
import { Textarea } from "@ui/textarea";

export default function BudgetRequestSection() {
  const inputStyles =
    "border-0 border-b rounded-none focus-visible:ring-0 focus-visible:ring-offset-0 bg-transparent w-full py-3 px-1 text-sm md:text-base";
  const labelStyles = "text-xs md:text-sm mb-1 block font-medium";

  return (
    <SectionContainer>
      <div className="w-full max-w-3xl px-4 sm:px-0">
        <header className="mb-8 md:mb-10 text-center">
          <h1
            className="text-center font-medium uppercase text-8xl mb-4 md:mb-6"
            style={{ color: "var(--brand-black)" }}
          >
            BUDGET REQUEST
          </h1>
          <p
            className="text-sm md:text-base lg:text-lg max-w-md mx-auto px-4"
            style={{ color: "var(--brand-black)" }}
          >
            Tell us about your project and receive a personalized quote tailored to your goals. No
            commitment — just a clear plan and expert insight to get started.
          </p>
        </header>
        <main>
          <form className="space-y-6 md:space-y-8">
            <div>
              <Label htmlFor="name" className={`${labelStyles} text-brand-black`}>
                Name* (Required)
              </Label>
              <Input
                id="name"
                name="name"
                type="text"
                placeholder="Input your Name"
                required
                className={`${inputStyles} input-standard`}
              />
            </div>
            <div>
              <Label htmlFor="phone" className={`${labelStyles} text-brand-black`}>
                Phone* (Required)
              </Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                placeholder="Input your Phone Number"
                required
                className={`${inputStyles} input-standard`}
              />
            </div>
            <div>
              <Label htmlFor="email" className={`${labelStyles} text-brand-black`}>
                Email* (Required)
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="Input your Email"
                required
                className={`${inputStyles} input-standard`}
              />
            </div>
            <div>
              <Label htmlFor="message" className={`${labelStyles} text-brand-black`}>
                Message
              </Label>
              <Textarea
                id="message"
                name="message"
                placeholder="Input your Message Here"
                className={`${inputStyles} input-standard min-h-[var(--height-xs)] md:min-h-[var(--height-md)]`}
                rows={4}
              />
            </div>
            <Button
              type="submit"
              className="w-full rounded-xs py-4 md:py-6 text-sm md:text-base font-semibold btn-primary"
            >
              Submit
            </Button>
          </form>
        </main>
      </div>
    </SectionContainer>
  );
}
