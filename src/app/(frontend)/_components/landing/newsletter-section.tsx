import { SimpleFormContainer } from "@shared-layout/form-container";
import { TextField } from "@shared-layout/form-fields";
import { Button } from "@shared-ui/button";
import { SectionContainer } from "@shared/section-container";
import { getTranslations } from "next-intl/server";

export default async function NewsletterSection() {
  const t = await getTranslations();
  return (
    <SectionContainer>
      <SimpleFormContainer
        title={t("newsletter.title")}
        description={t("newsletter.description")}
        width="narrow"
      >
        <TextField
          label={t("common.email")}
          id="email"
          name="email"
          type="email"
          placeholder={t("newsletter.emailPlaceholder")}
          required
        />
        <Button type="submit" className="w-full">
          {t("common.submit")}
        </Button>
      </SimpleFormContainer>
    </SectionContainer>
  );
}
