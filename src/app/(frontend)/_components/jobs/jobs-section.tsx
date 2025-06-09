import { FormContainer } from "@shared-layout/form-container";
import { FormField } from "@shared-layout/form-field";
import { Button } from "@shared-ui/button";

export default function JobsSection() {
  return (
    <FormContainer>
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
        placeholder="Input your message Here"
        rows={4}
      />
      <FormField label="Upload CV" id="cv" name="cv" type="file" accept=".pdf,.doc,.docx" />
      <Button type="submit" className="w-full">
        Submit
      </Button>
    </FormContainer>
  );
}
