import Image from "next/image";
import Link from "next/link";

export default function AboutUs() {
  const sections = [
    {
      id: 1,
      title: "Profile",
      image:
        "https://images.unsplash.com/photo-1664575599736-c5197c684128?q=80&w=2070&auto=format&fit=crop",
      content:
        "Our Portuguese construction company was founded in 2005. The company is formed by a multidisciplinary group of construction professionals who share the same project. The active participation of all its components, teamwork and passion for their work as the essence of the company.",
    },
    {
      id: 2,
      title: "Values",
      image:
        "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2069&auto=format&fit=crop",
      content:
        "Construction can be small in the big or big in the small, if each commission is understood as an opportunity to materialize a good project. The project approach raises from a double commitment: it will to give a technical response to a specific context and the desire to seek beauty through the built work.",
    },
    {
      id: 3,
      title: "Team",
      image:
        "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?q=80&w=2070&auto=format&fit=crop",
      content:
        "Excellence in construction is based on the integration of a network of professionals who agree on the pleasure of their work. A team that produces an environment of shared creativity capable of generating contagious motivation, taking care of what is in process and excited about what is to come.",
    },
    {
      id: 4,
      title: "About us",
      image:
        "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2071&auto=format&fit=crop",
      content:
        "During its history, our company has received several awards and recognitions. Our projects, spread all over Portugal, stand out for their quality, rigor, and responsibility. We are committed to our vision of being part of Portugal's future construction through projects that honor the territory and cultural values.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl md:text-7xl font-bold text-center mb-4">ABOUT US</h2>
        <div className="flex justify-center mb-12">
          <Link href="/about" className="hover:underline">
            GO TO ABOUT US
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {sections.map((section) => (
            <div key={section.id} className="flex flex-col">
              <div className="aspect-square relative mb-4">
                <Image
                  src={section.image || "/placeholder.svg"}
                  alt={section.title}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-medium mb-2">{section.title}</h3>
              <p className="text-sm text-gray-700">{section.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
