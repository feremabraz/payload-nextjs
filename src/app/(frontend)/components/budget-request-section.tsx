import { SectionContainer, SectionHeader } from "@components/section";
import { Button } from "@ui/button";
import { Input } from "@ui/input";
import { Label } from "@ui/label";
import { Textarea } from "@ui/textarea";

export default function BudgetRequestSection() {
  return (
    <SectionContainer>
      <div className="w-full max-w-3xl px-4 sm:px-0">
        <header className="mb-8 md:mb-10 text-center">
          <h1 className="text-center font-medium uppercase text-8xl mb-4 md:mb-6 text-foreground">
            BUDGET REQUEST
          </h1>
          <p className="text-sm md:text-base lg:text-lg max-w-md mx-auto px-4 text-foreground">
            Tell us about your project and receive a personalized quote tailored to your goals. No
            commitment — just a clear plan and expert insight to get started.
          </p>
        </header>
        <main>
          <form className="space-y-6 md:space-y-8">
            <div>
              <Label
                htmlFor="name"
                className="block text-xs md:text-sm font-medium mb-1 text-foreground"
              >
                Name* (Required)
              </Label>
              <Input
                id="name"
                name="name"
                type="text"
                placeholder="Input your Name"
                required
                className="border-0 border-b border-muted bg-transparent rounded-none w-full px-1 py-3 text-sm md:text-base text-foreground placeholder:text-muted focus:border-ring focus-visible:outline-none focus-visible:ring-0"
              />
            </div>
            <div>
              <Label
                htmlFor="phone"
                className="block text-xs md:text-sm font-medium mb-1 text-foreground"
              >
                Phone* (Required)
              </Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                placeholder="Input your Phone Number"
                required
                className="border-0 border-b border-muted bg-transparent rounded-none w-full px-1 py-3 text-sm md:text-base text-foreground placeholder:text-muted focus:border-ring focus-visible:outline-none focus-visible:ring-0"
              />
            </div>
            <div>
              <Label
                htmlFor="email"
                className="block text-xs md:text-sm font-medium mb-1 text-foreground"
              >
                Email* (Required)
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="Input your Email"
                required
                className="border-0 border-b border-muted bg-transparent rounded-none w-full px-1 py-3 text-sm md:text-base text-foreground placeholder:text-muted focus:border-ring focus-visible:outline-none focus-visible:ring-0"
              />
            </div>
            <div>
              <Label
                htmlFor="message"
                className="block text-xs md:text-sm font-medium mb-1 text-foreground"
              >
                Message
              </Label>
              <Textarea
                id="message"
                name="message"
                placeholder="Input your Message Here"
                className="border-0 border-b border-muted bg-transparent rounded-none w-full px-1 py-3 text-sm md:text-base text-foreground placeholder:text-muted focus:border-ring focus-visible:outline-none focus-visible:ring-0 min-h-20 md:min-h-40"
                rows={4}
              />
            </div>
            <Button type="submit" className="w-full">
              Submit
            </Button>
          </form>
        </main>
      </div>
    </SectionContainer>
  );
}
