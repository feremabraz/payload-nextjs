import { Button } from "@ui/button";
import { Input } from "@ui/input";
import { Label } from "@ui/label";
import { Textarea } from "@ui/textarea";

export default function BudgetRequest() {
  const inputStyles =
    "border-0 border-b border-[#a4acb9] rounded-none focus-visible:ring-0 focus-visible:ring-offset-0 focus:border-[#000000] placeholder:text-[#a4acb9] bg-transparent w-full py-3 px-1 text-base";
  const labelStyles = "text-sm text-[#000000] mb-1 block font-medium";

  return (
    <div className="flex flex-col items-center justify-center py-20 bg-[#ffffff] p-4 sm:p-8 selection:bg-[#121212] selection:text-[#ffffff]">
      <div className="w-full max-w-xl">
        <header className="mb-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-[#000000] mb-6">BUDGET REQUEST</h1>
          <p className="text-base md:text-lg text-[#000000] max-w-md mx-auto">
            Tell us about your project and receive a personalized quote tailored to your goals. No
            commitment — just a clear plan and expert insight to get started.
          </p>
        </header>
        <main>
          <form className="space-y-8">
            <div>
              <Label htmlFor="name" className={labelStyles}>
                Name* (Required)
              </Label>
              <Input
                id="name"
                name="name"
                type="text"
                placeholder="Input your Name"
                required
                className={inputStyles}
              />
            </div>
            <div>
              <Label htmlFor="phone" className={labelStyles}>
                Phone* (Required)
              </Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                placeholder="Input your Phone Number"
                required
                className={inputStyles}
              />
            </div>
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
            <div>
              <Label htmlFor="message" className={labelStyles}>
                Message
              </Label>
              <Textarea
                id="message"
                name="message"
                placeholder="Input your Message Here"
                className={`${inputStyles} min-h-[100px]`}
                rows={4}
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-[#121212] text-[#ffffff] hover:bg-[#121212]/90 py-6 text-base font-semibold"
            >
              Submit
            </Button>
          </form>
        </main>
      </div>
    </div>
  );
}
