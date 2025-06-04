import { SectionContainer } from "@components/section";
import Link from "next/link";

const navItems = [
  { name: "PROJECTS", href: "#" },
  { name: "STUDIO", href: "#" },
  { name: "TESTIMONIALS", href: "#" },
  { name: "BLOG AND NEWS", href: "#" },
  { name: "STORE", href: "#" },
  { name: "BUDGET REQUEST", href: "#" },
];

export default function WhoAreWeSection() {
  return (
    <SectionContainer paddingY="xl" gap="xl" maxWidth="xl">
      <section className="w-full">
        <nav>
          <ul className="flex items-center justify-center gap-3">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="text-md font-medium tracking-wider uppercase text-neutral-600 hover:text-[#000000] transition-colors"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </section>
      <section className="flex flex-col items-center gap-12 w-full">
        <h1 className="w-full text-center font-medium text-[#000000] text-[32px] leading-[1.2] tracking-[-1.28px] text-balance">
          Innovative and Enduring Architecture That Respects Culture, Enhances Spaces, and Elevates
          Everyday Life
        </h1>
        <div className="flex items-start gap-12 w-full">
          <div className="w-[437px] flex-shrink-0">
            <p className="text-[#000000] font-normal text-[18px] leading-[1.4] tracking-[-0.36px]">
              Bruno Câmara Architects is a contemporary architecture firm committed to creating
              spaces that are as functional and sustainable as they are beautiful and inspiring. Our
              work is guided by the belief that architecture should serve people while respecting
              the cultural and environmental context in which it exists. We introduce new spatial
              ideas and bold concepts, always rooted in the fundamentals of solidity, functionality,
              and timeless aesthetic value.
            </p>
          </div>
          <div className="flex flex-1 flex-col items-start gap-3">
            <p className="text-[#000000] font-normal text-[18px] leading-[1.4] tracking-[-0.36px]">
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
