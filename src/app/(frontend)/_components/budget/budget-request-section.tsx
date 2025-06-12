import { SimpleFormContainer } from "@shared-layout/form-container";
import { TextAreaField, TextField } from "@shared-layout/form-fields";
import { Button } from "@shared-ui/button";
import { SectionContainer } from "@shared/section-container";
import { getTranslations } from "next-intl/server";

export default async function BudgetRequestSection() {
  const t = await getTranslations();
  return (
    <div id="budget-request">
      <SectionContainer>
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
      </SectionContainer>
    </div>
  );
}
