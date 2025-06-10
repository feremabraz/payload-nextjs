import { SimpleFormContainer } from "@shared-layout/form-container";
import { TextAreaField, TextField } from "@shared-layout/form-fields";
import { Button } from "@shared-ui/button";
import { SectionContainer } from "@shared/section-container";

export default function BudgetRequestSection() {
  return (
    <div id="budget-request">
      <SectionContainer>
        <SimpleFormContainer
          title="BUDGET REQUEST"
          description="Tell us about your project and receive a personalized quote tailored to your goals. No commitment — just a clear plan and expert insight to get started."
        >
          <TextField
            label="Name"
            id="name"
            name="name"
            type="text"
            placeholder="Input your Name"
            required
          />
          <TextField
            label="Phone"
            id="phone"
            name="phone"
            type="tel"
            placeholder="Input your Phone Number"
            required
          />
          <TextField
            label="Email"
            id="email"
            name="email"
            type="email"
            placeholder="Input your Email"
            required
          />
          <TextAreaField
            label="Message"
            id="message"
            name="message"
            placeholder="Input your Message Here"
            rows={4}
          />
          <Button type="submit" className="w-full">
            Submit
          </Button>
        </SimpleFormContainer>
      </SectionContainer>
    </div>
  );
}
