"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useFormSubmission } from "@shared-hooks/use-form-submission";
import { FormTextAreaField, FormTextField } from "@shared-layout/react-hook-form-fields";
import { Button } from "@shared-ui/button";
import { Form } from "@shared-ui/form";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useForm } from "react-hook-form";
import * as z from "zod";

const budgetRequestSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(1, "Phone is required"),
  message: z.string().optional(),
});

type BudgetRequestFormData = z.infer<typeof budgetRequestSchema>;

interface BudgetRequestWithImageSectionProps {
  locale: string;
}

export default function BudgetRequestWithImageSection({
  locale,
}: BudgetRequestWithImageSectionProps) {
  const t = useTranslations();
  locale.toString(); // Ensure locale is used, which might be necessary for locale-specific logic

  const form = useForm<BudgetRequestFormData>({
    resolver: zodResolver(budgetRequestSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const { submitForm, isSubmitting } = useFormSubmission({
    endpoint: "/api/budget-request",
    successMessage: t("forms.budgetRequestSuccess"),
    onSuccess: () => {
      form.reset();
    },
  });

  const onSubmit = async (data: BudgetRequestFormData) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("phone", data.phone);
    if (data.message) {
      formData.append("message", data.message);
    }

    await submitForm(formData);
  };

  return (
    <>
      <div className="w-full max-w-2xl mx-auto px-4 sm:px-0">
        <header className="mb-8 md:mb-10 text-center">
          <h1 className="text-center font-medium uppercase text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl mb-4 md:mb-6 text-foreground">
            {t("budget.title")}
          </h1>
          <p className="text-sm md:text-base lg:text-lg max-w-prose mx-auto px-4 text-start text-foreground">
            {t("budget.description")}
          </p>
        </header>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 md:space-y-8">
            <FormTextField
              control={form.control}
              name="name"
              label={t("common.name")}
              placeholder={t("forms.namePlaceholder")}
              required
            />
            <FormTextField
              control={form.control}
              name="phone"
              label={t("common.phone")}
              type="tel"
              placeholder={t("forms.phonePlaceholder")}
              required
            />
            <FormTextField
              control={form.control}
              name="email"
              label={t("common.email")}
              type="email"
              placeholder={t("forms.emailPlaceholder")}
              required
            />
            <FormTextAreaField
              control={form.control}
              name="message"
              label={t("common.message")}
              placeholder={t("forms.messagePlaceholder")}
              rows={4}
            />
            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? t("common.submitting") : t("common.submit")}
            </Button>
          </form>
        </Form>
      </div>
      <div className="w-full max-w-2xl mx-auto mt-8">
        <div className="relative w-full h-[40vh] md:h-[50vh] rounded-lg overflow-hidden">
          <Image
            src="/projects/modern-glass-building-dusk.webp"
            alt={t("accessibility.imageAlt")}
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
