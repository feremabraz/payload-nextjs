"use client";

import type { Locale } from "@/types/locale";
import { zodResolver } from "@hookform/resolvers/zod";
import { useFormSubmission } from "@shared-hooks/use-form-submission";
import { FormTextField } from "@shared-layout/react-hook-form-fields";
import { Button } from "@shared-ui/button";
import { Form } from "@shared-ui/form";
import { SectionContainer } from "@shared/section-container";
import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import * as z from "zod";

const newsletterSchema = z.object({
  email: z.string().email("Invalid email address"),
});

type NewsletterFormData = z.infer<typeof newsletterSchema>;

interface NewsletterSectionProps {
  locale: Locale;
}

export default function NewsletterSection({ locale }: NewsletterSectionProps) {
  const t = useTranslations();
  locale.toString(); // Ensure locale is used, which might be necessary for locale-specific logic.

  const form = useForm<NewsletterFormData>({
    resolver: zodResolver(newsletterSchema),
    defaultValues: {
      email: "",
    },
  });

  const { submitForm, isSubmitting } = useFormSubmission({
    endpoint: "/api/newsletter",
    successMessage: t("forms.newsletterSuccess"),
    onSuccess: () => {
      form.reset();
    },
  });

  const onSubmit = async (data: NewsletterFormData) => {
    const formData = new FormData();
    formData.append("email", data.email);
    await submitForm(formData);
  };

  return (
    <SectionContainer>
      <div className="w-full max-w-md mx-auto px-4 sm:px-0">
        <header className="mb-8 md:mb-10 text-center">
          <h1 className="text-center font-medium uppercase text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl mb-4 md:mb-6 text-foreground">
            {t("newsletter.title")}
          </h1>
          <p className="text-sm md:text-base lg:text-lg max-w-prose mx-auto px-4 text-start text-foreground">
            {t("newsletter.description")}
          </p>
        </header>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 md:space-y-8">
            <FormTextField
              control={form.control}
              name="email"
              label={t("common.email")}
              type="email"
              placeholder={t("newsletter.emailPlaceholder")}
              required
            />
            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? t("common.submitting") : t("common.submit")}
            </Button>
          </form>
        </Form>
      </div>
    </SectionContainer>
  );
}
