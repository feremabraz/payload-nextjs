import { SimpleFormContainer } from "@shared-layout/form-container";
import { TextField } from "@shared-layout/form-fields";
import { Button } from "@shared-ui/button";
import { SectionContainer } from "@shared/section-container";

export default function NewsletterSection() {
  return (
    <SectionContainer>
      <SimpleFormContainer
        title="STAY UPDATED"
        description="Subscribe to receive inspiration and news about our latest and future projects."
        width="narrow"
      >
        <TextField
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
      </SimpleFormContainer>
    </SectionContainer>
  );
}
