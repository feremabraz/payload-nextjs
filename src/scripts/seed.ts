import config from "@payload-config";
import { getPayload } from "payload";

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
    console.log("📝 Creating content without media for now...");

    console.log("📝 Creating blog posts...");
    const blogPosts = [
      {
        title: "New Project Finished: Villa 18, House in Lisbon",
        description:
          "Discover Villa 18, a stunning new architectural project in Lisbon, featuring a unique curved design and a luxurious poolside experience. This project redefines modern living.",
        content: createRichTextContent(
          "Perched on a scenic plot overlooking the tranquil Vale do Silêncio, The House in Lisbon stands as a thoughtful reinterpretation of a single-family dwelling. This project embraces the concept of spatial fluidity by emphasizing the seamless connection between interior and exterior environments.",
        ),
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

    console.log("🏗️  Creating projects...");
    const projects = [
      {
        title: "Modern House in Lisbon",
        description:
          "A contemporary residential project featuring clean lines and sustainable materials, designed for a family seeking modern comfort in the heart of Lisbon.",
        content: createRichTextContent(
          "This modern house in Lisbon represents our commitment to sustainable design and innovative use of space. The project integrates traditional Portuguese elements with contemporary architectural language, creating a harmonious blend of old and new. The house features an open-plan living area that seamlessly connects to the outdoor pool area, maximizing the indoor-outdoor living experience.",
        ),
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

    console.log("💬 Creating testimonials...");
    const testimonials = [
      {
        quote:
          "CVZ Portugal delivered exceptional architectural solutions that exceeded our expectations. Their attention to detail and innovative approach transformed our vision into reality.",
        author: "Francisco Costa",
        role: "CEO at Costa Development",
        featured: true,
        published: true,
      },
      {
        quote:
          "Working with CVZ was a pleasure. They understood our needs perfectly and created spaces that are both beautiful and functional.",
        author: "Cláudia Mendes",
        role: "Director at Mendes Real Estate",
        featured: true,
        published: true,
      },
      {
        quote:
          "The team at CVZ Portugal brought creativity and professionalism to every aspect of our project. Highly recommended!",
        author: "Pedro Joel",
        role: "Managing Partner at Joel Investments",
        featured: false,
        published: true,
      },
      {
        quote:
          "CVZ's architectural expertise and project management skills made our complex development seamless and successful.",
        author: "Telmo Veloso",
        role: "Project Manager at Veloso Group",
        featured: false,
        published: true,
      },
      {
        quote:
          "Outstanding work from conception to completion. CVZ Portugal sets the standard for modern architectural excellence.",
        author: "Inês Bragança",
        role: "Executive Director at Bragança Holdings",
        featured: true,
        published: true,
      },
    ];

    for (const testimonial of testimonials) {
      const existingTestimonial = await payload.find({
        collection: "testimonials",
        where: { author: { equals: testimonial.author } },
      });

      if (existingTestimonial.docs.length === 0) {
        await payload.create({
          collection: "testimonials",
          data: testimonial,
        });
        console.log(`✅ Created testimonial from: ${testimonial.author}`);
      } else {
        console.log(`⏭️  Testimonial already exists from: ${testimonial.author}`);
      }
    }

    console.log("👥 Creating team members...");
    const teamMembers = [
      {
        name: "Bruno Câmara",
        role: "CEO & Founder",
        bio: "PhD student at the Faculty of Architecture at the University of Coimbra. Graduated from the Faculty of Architecture, University of Lisbon and from the Course of Architecture at the University of Coimbra. He was an Associate Professor at the Faculty of Architecture at the University of Coimbra. Founder of Bruno Câmara Architects since 2008, CEO of Acoveste LTDA Construction since 2012. Expert in Sports Venues, Schools and Urban Rehabilitation.",
        interests: "Architecture, travel, and sports",
        profileImage: 1, // Use first media item as placeholder
        order: 1,
        published: true,
      },
      {
        name: "Diogo Alves",
        role: "CFO & Partner",
        bio: "Holds a degree in Mechanical Engineering from the Instituto Superior Técnico, with experience in Architectural and Civil Construction. During his studies, he specialized in Architecture and Civil Construction and Mechanical Design, placing him among a select group of specialists with joint certification.",
        interests: "3D Planning and Modeling, Aeronautical Mechanics, and Cinema",
        profileImage: 1, // Use first media item as placeholder
        order: 2,
        published: true,
      },
      {
        name: "João Câmara",
        role: "Lead Architect",
        bio: "Master's degree from the Faculty of Architecture, University of Lisbon. Specializes in sustainable design and urban planning with a focus on integrating green technologies into architectural solutions.",
        interests: "Sports, Design, Contemporary Art, and Cinema",
        profileImage: 1, // Use first media item as placeholder
        order: 3,
        published: true,
      },
    ];

    for (const member of teamMembers) {
      const existingMember = await payload.find({
        collection: "team-members",
        where: { name: { equals: member.name } },
      });

      if (existingMember.docs.length === 0) {
        await payload.create({
          collection: "team-members",
          data: member,
        });
        console.log(`✅ Created team member: ${member.name}`);
      } else {
        console.log(`⏭️  Team member already exists: ${member.name}`);
      }
    }

    console.log("🏆 Creating awards...");
    const awards = [
      {
        title: "AIT Award - Building of the Year 2020",
        description: "Building of the Year 2020",
        project: "The White Forest",
        location: "Lisbon, Portugal",
        year: "2024",
        featured: true,
        published: true,
      },
      {
        title: "Featured in ArchDaily's Lisbon City Guide",
        description: "Lisbon City Guide",
        project: "The White Forest",
        location: "Lisbon, Portugal",
        year: "2019",
        featured: true,
        published: true,
      },
    ];

    for (const award of awards) {
      const existingAward = await payload.find({
        collection: "awards",
        where: { title: { equals: award.title } },
      });

      if (existingAward.docs.length === 0) {
        await payload.create({
          collection: "awards",
          data: {
            ...award,
            // Add required awardImage field with a placeholder
            awardImage: 1, // Use the first media item as placeholder
          },
        });
        console.log(`✅ Created award: ${award.title}`);
      } else {
        console.log(`⏭️  Award already exists: ${award.title}`);
      }
    }

    console.log("🏢 Creating studio info sections...");
    const studioSections = [
      {
        title: "Values",
        description:
          "Construction can be small in the big or big in the small, if each commission is understood as an opportunity to materialize a good project. The project approach arises from a double commitment: the will to give a technical response to a specific context and the desire to seek beauty through the built work.",
        image: 1, // Use first media item as placeholder
        order: 1,
        published: true,
      },
      {
        title: "Team",
        description:
          "Our multidisciplinary team combines architectural expertise with innovative design thinking to deliver exceptional results.",
        image: 1, // Use first media item as placeholder
        order: 2,
        published: true,
      },
      {
        title: "Approach",
        description:
          "We believe in sustainable design practices that respect both the environment and the communities we serve.",
        image: 1, // Use first media item as placeholder
        order: 3,
        published: true,
      },
    ];

    for (const section of studioSections) {
      const existingSection = await payload.find({
        collection: "studio-info",
        where: { title: { equals: section.title } },
      });

      if (existingSection.docs.length === 0) {
        await payload.create({
          collection: "studio-info",
          data: section,
        });
        console.log(`✅ Created studio info section: ${section.title}`);
      } else {
        console.log(`⏭️  Studio info section already exists: ${section.title}`);
      }
    }

    console.log("🎉 Seeding completed successfully!");
  } catch (error) {
    console.error("❌ Error seeding data:", error);
    process.exit(1);
  }
};

seedData();
