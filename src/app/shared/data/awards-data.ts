export interface Award {
  id: string;
  title: string;
  description: string;
  project: string;
  location: string;
  year: string;
  imagePath: string;
  altText: string;
}

export const awards: Award[] = [
  {
    id: "1",
    title: "ArchDaily Building of the Year 2020",
    description: "Building of the Year 2020",
    project: "The White Forest",
    location: "Lisbon, Portugal",
    year: "2024",
    imagePath: "/projects/modern-house-lisbon-pool.webp",
    altText: "The White Forest - ArchDaily Building of the Year 2020",
  },
  {
    id: "2",
    title: "Featured in ArchDaily's Lisbon City Guide",
    description: "Lisbon City Guide",
    project: "The White Forest",
    location: "Lisbon, Portugal",
    year: "2019",
    imagePath: "/projects/minimalist-white-house-curved-pool.webp",
    altText: "The White Forest featured in ArchDaily's Lisbon City Guide",
  },
];
