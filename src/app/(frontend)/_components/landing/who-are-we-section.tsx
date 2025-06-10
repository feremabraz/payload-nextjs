import { SectionContainer } from "@shared/section-container";
import Link from "next/link";

const navItems = [
  { name: "PROJECTS", href: "#projects" },
  { name: "STUDIO", href: "#studio" },
  { name: "TESTIMONIALS", href: "#testimonials" },
  { name: "BLOG AND NEWS", href: "#blog-news" },
  { name: "BUDGET REQUEST", href: "#budget-request" },
];

export default function WhoAreWeSection() {
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
        <h1 className="w-full text-start font-semibold text-2xl text-foreground">
          Innovative and Enduring Architecture That Respects Culture, Enhances Spaces, and Elevates
          <br />
          Everyday Life
        </h1>
        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-16 w-full">
          <div className="w-full lg:w-[400px] lg:flex-shrink-0">
            <p className="font-normal text-base leading-relaxed text-foreground">
              Bruno Câmara Architects is a contemporary architecture firm committed to creating
              spaces that are as functional and sustainable as they are beautiful and inspiring. Our
              work is guided by the belief that architecture should serve people while respecting
              the cultural and environmental context in which it exists. We introduce new spatial
              ideas and bold concepts, always rooted in the fundamentals of solidity, functionality,
              and timeless aesthetic value.
            </p>
          </div>
          <div className="flex flex-col items-start gap-3 w-full lg:flex-1">
            <p className="font-normal text-base leading-relaxed text-foreground">
              With a constant drive for excellence, we carefully manage each phase of the
              architectural process—from design to implementation—ensuring that every project meets
              the highest standards in quality, innovation, and technical performance. Our goal is
              not only to meet our clients&apos; expectations but to exceed them, delivering
              cost-effective and cutting-edge solutions that contribute positively to the built
              environment and the communities they serve.
            </p>
          </div>
        </div>
      </section>
    </SectionContainer>
  );
}
