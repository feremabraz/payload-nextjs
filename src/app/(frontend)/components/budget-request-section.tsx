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
              <Label htmlFor="name">Name* (Required)</Label>
              <Input id="name" name="name" type="text" placeholder="Input your Name" required />
            </div>
            <div>
              <Label htmlFor="phone">Phone* (Required)</Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                placeholder="Input your Phone Number"
                required
              />
            </div>
            <div>
              <Label htmlFor="email">Email* (Required)</Label>
              <Input id="email" name="email" type="email" placeholder="Input your Email" required />
            </div>
            <div>
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                name="message"
                placeholder="Input your Message Here"
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
