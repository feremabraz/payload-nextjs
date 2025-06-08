import { FormContainer } from "@shared-layout/form-container";
import { FormField } from "@shared-layout/form-field";
import { SectionContainer } from "@shared-layout/section-container";
import { Button } from "@shared-ui/button";

export default function BudgetRequestSection() {
  return (
    <SectionContainer>
      <FormContainer
        title="BUDGET REQUEST"
        description="Tell us about your project and receive a personalized quote tailored to your goals. No commitment — just a clear plan and expert insight to get started."
      >
        <FormField
          label="Name"
          id="name"
          name="name"
          type="text"
          placeholder="Input your Name"
          required
        />
        <FormField
          label="Phone"
          id="phone"
          name="phone"
          type="tel"
          placeholder="Input your Phone Number"
          required
        />
        <FormField
          label="Email"
          id="email"
          name="email"
          type="email"
          placeholder="Input your Email"
          required
        />
        <FormField
          label="Message"
          id="message"
          name="message"
          type="textarea"
          placeholder="Input your Message Here"
          rows={4}
        />
        <Button type="submit" className="w-full">
          Submit
        </Button>
      </FormContainer>
    </SectionContainer>
  );
}
