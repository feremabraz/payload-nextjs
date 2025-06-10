import { SimpleFormContainer } from "@shared-layout/form-container";
import { TextAreaField, TextField } from "@shared-layout/form-fields";
import { Button } from "@shared-ui/button";
import Image from "next/image";

export default function BudgetRequestWithImageSection() {
  return (
    <>
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
      <div className="w-full max-w-2xl mx-auto mt-8">
        <div className="relative w-full h-[40vh] md:h-[50vh] rounded-lg overflow-hidden">
          <Image
            src="/projects/modern-glass-building-dusk.webp"
            alt="Modern architectural design showcasing our budget request services"
            fill
            quality={100}
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 672px"
          />
        </div>
      </div>
    </>
  );
}
