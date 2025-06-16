"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useFormSubmission } from "@shared-hooks/use-form-submission";
import { FormTextAreaField, FormTextField } from "@shared-layout/react-hook-form-fields";
import { Button } from "@shared-ui/button";
import { Form } from "@shared-ui/form";
import { SectionContainer } from "@shared/section-container";
import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import * as z from "zod";

const budgetRequestSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(1, "Phone is required"),
  message: z.string().optional(),
});

type BudgetRequestFormData = z.infer<typeof budgetRequestSchema>;

export default function BudgetRequestSection() {
  const t = useTranslations();

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
    <div id="budget-request">
      <SectionContainer>
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
      </SectionContainer>
    </div>
  );
}
