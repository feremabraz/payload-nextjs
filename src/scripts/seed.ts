import { getPayload } from "payload";
import config from "../payload.config";

// Helper function to create properly typed rich text content
const createRichTextContent = (text: string) => ({
  root: {
    children: [
      {
        children: [
          {
            detail: 0,
            format: 0,
            mode: "normal" as const,
            style: "",
            text,
            type: "text",
            version: 1,
          },
        ],
        direction: "ltr" as const,
        format: "" as const,
        indent: 0,
        type: "paragraph",
        version: 1,
      },
    ],
    direction: "ltr" as const,
    format: "" as const,
    indent: 0,
    type: "root",
    version: 1,
  },
});

const seedData = async () => {
  const payload = await getPayload({ config });

  console.log("🌱 Starting to seed data...");

  try {
    // Skip media creation for now - we'll create blog posts and projects without featured images
    // In a real application, you would either:
    // 1. Use the filePath property to upload actual files from the filesystem
    // 2. Upload files through the admin interface first
    // 3. Use a storage adapter (S3, Uploadthing, etc.)

    console.log("📝 Creating content without media for now...");

    // Create sample blog posts
    console.log("📝 Creating blog posts...");
    const blogPosts = [
      {
        title: "New Project Finished: Villa 18, House in Lisbon",
        description:
          "Discover Villa 18, a stunning new architectural project in Lisbon, featuring a unique curved design and a luxurious poolside experience. This project redefines modern living.",
        content: createRichTextContent(
          "Perched on a scenic plot overlooking the tranquil Vale do Silêncio, The House in Lisbon stands as a thoughtful reinterpretation of a single-family dwelling. This project embraces the concept of spatial fluidity by emphasizing the seamless connection between interior and exterior environments.",
        ),
        // featuredImage: null, // We'll add media later
        category: "news" as const,
        date: "2024-03-12",
        slug: "villa-18-house-lisbon",
        published: true,
      },
      {
        title: "Urban Regeneration Insights",
        description:
          "Exploring current trends in urban regeneration and the challenges of repurposing older architectural structures for contemporary use. A look at sustainable development.",
        content: createRichTextContent(
          "Urban regeneration represents one of the most significant challenges and opportunities in contemporary architecture. Our approach focuses on preserving historical character while introducing modern functionality.",
        ),
        // featuredImage: null,
        category: "publications" as const,
        date: "2024-03-10",
        slug: "urban-regeneration-insights",
        published: true,
      },
      {
        title: "The Evolving Urban Skyline",
        description:
          "The latest insights into high-rise construction and the evolving skylines of major cities. Examining new technologies and architectural ambitions in urban development.",
        content: createRichTextContent(
          "The urban skyline continues to evolve as architects push the boundaries of what's possible in high-rise construction. New materials and construction techniques are enabling unprecedented architectural expressions.",
        ),
        // featuredImage: null,
        category: "conferences" as const,
        date: "2024-03-08",
        slug: "evolving-urban-skyline",
        published: true,
      },
      {
        title: "Sustainable Architecture Awards 2024",
        description:
          "Our latest project has been recognized with the Sustainable Architecture Award 2024, highlighting innovative approaches to eco-friendly building design.",
        content: createRichTextContent(
          "We are proud to announce that our commitment to sustainable architecture has been recognized with the 2024 Sustainable Architecture Award. This recognition validates our approach to environmentally conscious design.",
        ),
        // featuredImage: null,
        category: "awards" as const,
        date: "2024-03-05",
        slug: "sustainable-architecture-awards-2024",
        published: true,
      },
    ];

    for (const post of blogPosts) {
      const existingPost = await payload.find({
        collection: "blog",
        where: { slug: { equals: post.slug } },
      });

      if (existingPost.docs.length === 0) {
        await payload.create({
          collection: "blog",
          data: post,
        });
        console.log(`✅ Created blog post: ${post.title}`);
      } else {
        console.log(`⏭️  Blog post already exists: ${post.title}`);
      }
    }

    // Create sample projects
    console.log("🏗️  Creating projects...");
    const projects = [
      {
        title: "Modern House in Lisbon",
        description:
          "A contemporary residential project featuring clean lines and sustainable materials, designed for a family seeking modern comfort in the heart of Lisbon.",
        content: createRichTextContent(
          "This modern house in Lisbon represents our commitment to sustainable design and innovative use of space. The project integrates traditional Portuguese elements with contemporary architectural language, creating a harmonious blend of old and new. The house features an open-plan living area that seamlessly connects to the outdoor pool area, maximizing the indoor-outdoor living experience.",
        ),
        // featuredImage: null,
        // gallery: [], // We'll add media later
        category: "houses" as const,
        location: "Lisbon, Portugal",
        year: 2024,
        projectType: "Residential Architecture",
        client: "Private Client",
        projectSize: "280 m²",
        slug: "modern-house-lisbon",
        published: true,
      },
      {
        title: "Glass Corporate Center",
        description:
          "A striking commercial building that redefines the modern workplace with transparent facades and flexible interior spaces.",
        content: createRichTextContent(
          "The Glass Corporate Center showcases our expertise in commercial architecture, featuring a fully glazed facade that maximizes natural light while maintaining energy efficiency through advanced building systems. The building's design prioritizes flexibility, allowing tenants to adapt spaces to their specific needs while maintaining a cohesive architectural vision.",
        ),
        // featuredImage: null,
        // gallery: [],
        category: "buildings" as const,
        location: "Madrid, Spain",
        year: 2023,
        projectType: "Commercial Building",
        client: "Tech Corporation",
        projectSize: "1,250 m²",
        slug: "glass-corporate-center",
        published: true,
      },
      {
        title: "Minimalist Kitchen Design",
        description:
          "A sleek kitchen renovation that emphasizes clean lines, premium materials, and functional design for modern living.",
        content: createRichTextContent(
          "This minimalist kitchen design demonstrates our approach to interior architecture, where every element serves both aesthetic and functional purposes. The use of high-quality materials creates a timeless appeal, while the layout maximizes efficiency and storage. LED lighting creates ambiance while providing excellent task lighting for cooking and food preparation.",
        ),
        // featuredImage: null,
        // gallery: [],
        category: "interior-design" as const,
        location: "Porto, Portugal",
        year: 2024,
        projectType: "Interior Design",
        client: "Private Residence",
        projectSize: "45 m²",
        slug: "minimalist-kitchen-design",
        published: true,
      },
    ];

    for (const project of projects) {
      const existingProject = await payload.find({
        collection: "projects",
        where: { slug: { equals: project.slug } },
      });

      if (existingProject.docs.length === 0) {
        await payload.create({
          collection: "projects",
          data: project,
        });
        console.log(`✅ Created project: ${project.title}`);
      } else {
        console.log(`⏭️  Project already exists: ${project.title}`);
      }
    }

    console.log("🎉 Seeding completed successfully!");
  } catch (error) {
    console.error("❌ Error seeding data:", error);
    process.exit(1);
  }
};

// Run the seed function
seedData();
