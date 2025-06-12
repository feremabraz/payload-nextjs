import { getContactInfo, getLegalInfo, getSocialMediaLinks } from "@actions/company-settings";
import { Link } from "@i18n/navigation";
import { FacebookIcon, InstagramIcon, LinkedInIcon } from "@shared-ui/brands";
import { FooterLogo } from "@shared/footer-logo";
import { SectionContainer } from "@shared/section-container";
import { getTranslations } from "next-intl/server";
import type React from "react";

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <li>
    <Link
      href={href}
      className="hover:text-muted-foreground transition-colors duration-200 ease-in-out"
    >
      {children}
    </Link>
  </li>
);

export default async function FooterSection() {
  const t = await getTranslations();

  // Fetch data on server side
  const [contactInfo, socialMedia, legalInfo] = await Promise.all([
    getContactInfo(),
    getSocialMediaLinks(),
    getLegalInfo(),
  ]);

  const footerData = {
    contact: contactInfo[0]?.settings,
    socialLinks: socialMedia[0]?.settings?.socialLinks || [],
    legal: legalInfo[0]?.settings,
  };

  const getSocialIcon = (platform: string) => {
    switch (platform) {
      case "facebook":
        return FacebookIcon;
      case "instagram":
        return InstagramIcon;
      case "linkedin":
        return LinkedInIcon;
      default:
        return FacebookIcon;
    }
  };
  return (
    <SectionContainer className="bg-primary text-secondary dark:bg-primary-foreground dark:text-secondary-foreground">
      <div className="flex flex-col lg:flex-row justify-between gap-8 sm:gap-10 md:gap-12 lg:gap-16 w-full">
        <div className="space-y-6 sm:space-y-8 lg:w-3/4">
          <FooterLogo />
          <div className="space-y-1 text-xs sm:text-sm mt-6 sm:mt-8">
            <p className="font-semibold text-sm sm:text-base mb-2">{t("footer.contactInfo")}</p>
            {footerData.contact?.email && <p>{footerData.contact.email}</p>}
            {footerData.contact?.address?.split("\n").map((line: string, index: number) => (
              <p key={`address-${index}-${line.slice(0, 10)}`}>{line}</p>
            ))}
          </div>
          <div className="flex space-x-3 sm:space-x-4">
            {footerData.socialLinks
              .filter((link: { isActive?: boolean | null }) => link.isActive === true)
              .map((social: { platform: string; url: string }) => {
                const IconComponent = getSocialIcon(social.platform);
                return (
                  <Link
                    key={social.platform}
                    href={social.url}
                    target="_blank"
                    aria-label={social.platform}
                    className="hover:text-muted-foreground transition-colors duration-200 ease-in-out"
                  >
                    <IconComponent size={18} className="sm:w-5 sm:h-5" />
                  </Link>
                );
              })}
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-start gap-6 sm:gap-8 md:gap-10 lg:gap-10 grow shrink-0 basis-0 pt-2 font-semibold">
          <nav className="w-full sm:w-auto">
            <ul className="flex flex-col items-start gap-2 sm:gap-3 grow shrink-0 basis-0 text-sm">
              <NavLink href="/">{t("navigation.home")}</NavLink>
              <NavLink href="/projects">{t("navigation.projects")}</NavLink>
              <NavLink href="/studio">{t("navigation.studio")}</NavLink>
              <NavLink href="/blog">{t("navigation.blogAndNews")}</NavLink>
            </ul>
          </nav>
          <nav className="w-full sm:w-auto">
            <ul className="flex flex-col items-start gap-2 sm:gap-3 grow shrink-0 basis-0 text-sm">
              <NavLink href="/jobs">{t("navigation.openJobs")}</NavLink>
              <NavLink href="/budget">{t("navigation.budgetRequest")}</NavLink>
            </ul>
          </nav>
        </div>
      </div>
      <hr className="border-t w-full my-6 sm:my-8 border-accent" />
      <div className="flex flex-col md:flex-row justify-between items-start self-stretch text-xs sm:text-sm font-semibold gap-3 sm:gap-4 w-full">
        <p className="order-2 md:order-1">
          &copy; {new Date().getFullYear()}{" "}
          {footerData.legal?.copyright || `${t("footer.companyName")}. ${t("common.copyright")}`}
        </p>
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-0 order-1 md:order-2 [&>*+*]:sm:ml-4 md:[&>*+*]:sm:ml-6">
          <Link
            href="/legal/privacy"
            className="hover:text-muted-foreground transition-colors duration-200 ease-in-out"
          >
            {t("footer.privacyPolicy")}
          </Link>
          <Link
            href="/legal/tos"
            className="hover:text-muted-foreground transition-colors duration-200 ease-in-out"
          >
            {t("footer.termsOfService")}
          </Link>
        </div>
      </div>
    </SectionContainer>
  );
}
