import { SimpleFormContainer } from "@shared-layout/form-container";
import { FileField, TextAreaField, TextField } from "@shared-layout/form-fields";
import { Button } from "@shared-ui/button";

export default function JobsSection() {
  return (
    <SimpleFormContainer>
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
        placeholder="Input your message Here"
        rows={4}
      />
      <FileField label="Upload CV" id="cv" name="cv" accept=".pdf,.doc,.docx" />
      <Button type="submit" className="w-full">
        Submit
      </Button>
    </SimpleFormContainer>
  );
}
