import { Link } from "@i18n/navigation";
import { SectionContainer } from "@shared/section-container";
import { getTranslations } from "next-intl/server";

interface WhoAreWeSectionProps {
  locale: string;
}

export default async function WhoAreWeSection({ locale }: WhoAreWeSectionProps) {
  const t = await getTranslations({ locale });

  const navItems = [
    { name: t("navigation.projects"), href: "/projects" },
    { name: t("navigation.studio"), href: "/studio" },
    { name: t("navigation.testimonials"), href: "#testimonials" },
    { name: t("navigation.blogAndNews"), href: "/blog" },
    { name: t("navigation.budgetRequest"), href: "/budget" },
  ];
  return (
    <SectionContainer variant="loose" width="container">
      <section className="w-full">
        <nav>
          <ul className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="text-xs sm:text-sm md:text-md font-medium tracking-wider uppercase text-neutral-600 px-1 py-1 hover:text-foreground transition-colors duration-200 ease-in-out"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </section>
      <section className="flex flex-col items-start gap-8 w-full">
        <h1 className="w-full text-start font-semibold text-3xl text-foreground">
          {t("whoAreWe.title")}
        </h1>
        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-16 w-full">
          <div className="w-full lg:w-[400px] lg:flex-shrink-0">
            <p className="font-normal text-base leading-relaxed text-foreground">
              {t("whoAreWe.description1")}
            </p>
          </div>
          <div className="flex flex-col items-start gap-3 w-full lg:flex-1">
            <p className="font-normal text-base leading-relaxed text-foreground">
              {t("whoAreWe.description2")}
            </p>
          </div>
        </div>
      </section>
    </SectionContainer>
  );
}
