import { FormContainer } from "@shared-components/form-container";
import { FormField } from "@shared-components/form-field";
import { SectionContainer } from "@shared-components/section-container";
import { Button } from "@ui/button";

export default function NewsletterSection() {
  return (
    <SectionContainer>
      <FormContainer
        title="STAY UPDATED"
        description="Subscribe to our newsletter to receive inspiration and news about our latest and future projects."
      >
        <FormField
          label="Email"
          id="email"
          name="email"
          type="email"
          placeholder="Input your Email"
          required
        />
        <Button type="submit" className="w-full">
          Submit
        </Button>
      </FormContainer>
    </SectionContainer>
  );
}
