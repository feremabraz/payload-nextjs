import { SimpleFormContainer } from "@shared-layout/form-container";
import { TextAreaField, TextField } from "@shared-layout/form-fields";
import { Button } from "@shared-ui/button";
import { getTranslations } from "next-intl/server";
import Image from "next/image";

interface BudgetRequestWithImageSectionProps {
  locale: string;
}

export default async function BudgetRequestWithImageSection({
  locale,
}: BudgetRequestWithImageSectionProps) {
  const t = await getTranslations({ locale });
  return (
    <>
      <SimpleFormContainer title={t("budget.title")} description={t("budget.description")}>
        <TextField
          label={t("common.name")}
          id="name"
          name="name"
          type="text"
          placeholder={t("forms.namePlaceholder")}
          required
        />
        <TextField
          label={t("common.phone")}
          id="phone"
          name="phone"
          type="tel"
          placeholder={t("forms.phonePlaceholder")}
          required
        />
        <TextField
          label={t("common.email")}
          id="email"
          name="email"
          type="email"
          placeholder={t("forms.emailPlaceholder")}
          required
        />
        <TextAreaField
          label={t("common.message")}
          id="message"
          name="message"
          placeholder={t("forms.messagePlaceholder")}
          rows={4}
        />
        <Button type="submit" className="w-full">
          {t("common.submit")}
        </Button>
      </SimpleFormContainer>
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
