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

    console.log("📚 Creating publications...");
    const publications = [
      {
        title: "HOUSE IN LISBON",
        publication: "ARCH DAILY PUBLICATION",
        date: "February, 2020",
        published: true,
      },
      {
        title: "Diário Imobiliário",
        publication: "HOUSE IN LISBON",
        date: "May, 2020",
        published: true,
      },
      {
        title: "Espaço de Arquitetura",
        publication: "HOUSE IN LISBON",
        date: "January, 2020",
        published: true,
      },
      {
        title: "TIMEOUT",
        publication: "Monsorrato a new space: the White Forest",
        date: "July, 2019",
        published: true,
      },
      {
        title: "Público P3",
        publication: "A White Forest is born in Monsorrato",
        date: "August, 2019",
        published: true,
      },
      {
        title: "DESIGNBOOM",
        publication: "Bruno Câmara Architects adds 3460 wooden posts to White Forest",
        date: "July, 2019",
        published: true,
      },
      {
        title: "ARCH DAILY PUBLICATION",
        publication: "White Forest in Monsorrato / Bruno Câmara Architectos",
        date: "August, 2019",
        published: true,
      },
      {
        title: "LISBOA SECRETA",
        publication: "The White Forest: Monsorrato's new glass",
        date: "August, 2019",
        published: true,
      },
      {
        title: "SOCIAL DESIGN MAGAZINE",
        publication: "Floresta Branca em Monsorrato, Lisboa, Portugal",
        date: "August, 2019",
        published: true,
      },
      {
        title: "Attitude Interior Design Magazine",
        publication: "White Forest in Monsorrato",
        date: "August, 2019",
        published: true,
      },
      {
        title: "Espaço de Arquitetura",
        publication: "White Forest in Monsorrato",
        date: "August, 2019",
        published: true,
      },
    ];

    for (const publication of publications) {
      const existingPublication = await payload.find({
        collection: "publications",
        where: { title: { equals: publication.title } },
      });

      if (existingPublication.docs.length === 0) {
        await payload.create({
          collection: "publications",
          data: publication,
        });
        console.log(`✅ Created publication: ${publication.title}`);
      } else {
        console.log(`⏭️  Publication already exists: ${publication.title}`);
      }
    }

    console.log("🏢 Creating company settings...");
    const companySettings = [
      {
        name: "Contact Information",
        category: "contact" as const,
        settings: {
          email: "info@cvz-construcoes.pt",
          phone: "+351 21 234 5678",
          address: "Av. da República 49\n1050-188 Lisboa\nPortugal",
        },
        isActive: true,
        order: 1,
      },
      {
        name: "Social Media Links",
        category: "social" as const,
        settings: {
          socialLinks: [
            {
              platform: "facebook" as const,
              url: "https://www.facebook.com/cvzconstrucoes",
              isActive: true,
            },
            {
              platform: "instagram" as const,
              url: "https://www.instagram.com/cvz_construcoes/",
              isActive: true,
            },
            {
              platform: "linkedin" as const,
              url: "https://www.linkedin.com/in/cvz-constru%C3%A7%C3%B5es-bb09b515a/",
              isActive: true,
            },
          ],
        },
        isActive: true,
        order: 2,
      },
      {
        name: "Company Information",
        category: "company" as const,
        settings: {
          companyName: "Bruno Câmara Arquitetos",
          companyDescription:
            "Contemporary architecture firm committed to creating spaces that are as functional and sustainable as they are beautiful and inspiring.",
        },
        isActive: true,
        order: 3,
      },
      {
        name: "Legal Information",
        category: "legal" as const,
        settings: {
          copyright: "BRUNO CÂMARA ARQUITETOS. All rights reserved.",
        },
        isActive: true,
        order: 4,
      },
    ];

    for (const setting of companySettings) {
      const existingSetting = await payload.find({
        collection: "company-settings",
        where: { name: { equals: setting.name } },
      });

      if (existingSetting.docs.length === 0) {
        await payload.create({
          collection: "company-settings",
          data: setting,
        });
        console.log(`✅ Created company setting: ${setting.name}`);
      } else {
        console.log(`⏭️  Company setting already exists: ${setting.name}`);
      }
    }

    console.log("💫 Creating values and mission content...");
    const valuesAndMission = [
      {
        title: "Quality",
        type: "value" as const,
        content:
          "We are dedicated to delivering exceptional construction quality by prioritizing our clients' satisfaction at every stage. From the foundation to the final finishes, we apply the correct material methodologies and best practices to ensure that every detail meets the highest standards. Our commitment to quality is reflected in the durability, aesthetics, and performance of each project we complete.",
        summary: "Exceptional construction quality prioritizing client satisfaction",
        order: 1,
        published: true,
        featuredOnHomepage: true,
      },
      {
        title: "Rigor",
        type: "value" as const,
        content:
          "Our multidisciplinary team operates with precision and discipline, ensuring that every project adheres strictly to its defined work plan. Through careful planning, coordination, and execution, we guarantee that deadlines are met without compromising on the integrity of the work. This rigorous approach allows us to consistently deliver reliable results while maintaining efficiency and accountability.",
        summary: "Precision and discipline in every project phase",
        order: 2,
        published: true,
        featuredOnHomepage: true,
      },
      {
        title: "Responsibility",
        type: "value" as const,
        content:
          "We recognize our role in shaping a more sustainable future through conscious construction practices. By integrating the latest eco-friendly solutions and technologies, we actively seek to reduce the environmental impact of our work. Sustainability is not just a feature— it's a responsibility we embrace in every decision we make, from design to material selection and execution.",
        summary: "Sustainable practices for a better future",
        order: 3,
        published: true,
        featuredOnHomepage: true,
      },
      {
        title: "Company Mission",
        type: "mission" as const,
        content:
          "Bruno Câmara Architects is a contemporary architecture firm committed to creating spaces that are as functional and sustainable as they are beautiful and inspiring. Our work is guided by the belief that architecture should serve people while respecting the cultural and environmental context in which it exists.",
        summary: "Creating functional, sustainable, and inspiring spaces",
        order: 0,
        published: true,
        featuredOnHomepage: false,
      },
    ];

    for (const item of valuesAndMission) {
      const existingItem = await payload.find({
        collection: "values-and-mission",
        where: { title: { equals: item.title } },
      });

      if (existingItem.docs.length === 0) {
        await payload.create({
          collection: "values-and-mission",
          data: item,
        });
        console.log(`✅ Created values/mission: ${item.title}`);
      } else {
        console.log(`⏭️  Values/mission already exists: ${item.title}`);
      }
    }

    console.log("⚖️  Creating legal pages...");
    const legalPages = [
      {
        title: "Privacy Policy",
        pageType: "privacy" as const,
        slug: "privacy",
        lastUpdated: "2025-06-10",
        introduction: {
          content:
            "At Bruno Câmara Arquitetos, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, and safeguard your data when you visit our website or interact with our services.",
        },
        sections: [
          {
            heading: "1. Information We Collect",
            content: "We collect information in the following ways:",
            subsections: [
              {
                subheading: "Contact Information",
                content: "When you contact us through our forms or email, we may collect:",
                listItems: [
                  { item: "Name and contact details" },
                  { item: "Email address" },
                  { item: "Phone number" },
                  { item: "Project details and requirements" },
                  { item: "Budget information (when provided voluntarily)" },
                ],
              },
              {
                subheading: "Technical Information",
                content: "We may automatically collect certain technical information including:",
                listItems: [
                  { item: "IP address and general location" },
                  { item: "Browser type and version" },
                  { item: "Device information" },
                  { item: "Pages visited and time spent on our site" },
                ],
              },
            ],
            order: 1,
          },
          {
            heading: "2. How We Use Your Information",
            content: "We use the information we collect to:",
            listItems: [
              { item: "Respond to your inquiries and provide requested services" },
              { item: "Send you project updates and communications" },
              { item: "Improve our website and services" },
              { item: "Comply with legal obligations" },
              { item: "Send newsletters (only with your explicit consent)" },
            ],
            order: 2,
          },
          {
            heading: "3. Cookies and Tracking",
            content:
              "Our website uses cookies to enhance your browsing experience. Cookies are small text files stored on your device that help us understand how you use our site. You can control cookie settings through your browser preferences.",
            order: 3,
          },
          {
            heading: "4. Data Security",
            content:
              "We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.",
            order: 4,
          },
          {
            heading: "5. Your Rights",
            content: "Under applicable data protection laws, you have the right to:",
            listItems: [
              { item: "Access your personal information" },
              { item: "Correct inaccurate data" },
              { item: "Request deletion of your data" },
              { item: "Object to processing of your data" },
              { item: "Request data portability" },
            ],
            order: 5,
          },
        ],
        contactInfo: {
          includeContact: true,
          heading: "Contact Us",
          content:
            "If you have any questions about this Privacy Policy, please contact us at info@cvz-construcoes.pt or Av. da República 49, 1050-188 Lisboa, Portugal.",
        },
        published: true,
        order: 1,
      },
      {
        title: "Terms of Service",
        pageType: "terms" as const,
        slug: "tos",
        lastUpdated: "2025-06-10",
        introduction: {
          content:
            "Welcome to Bruno Câmara Arquitetos. These Terms of Service govern your use of our website and services. By accessing or using our website, you agree to be bound by these terms.",
        },
        sections: [
          {
            heading: "1. Acceptance of Terms",
            content:
              "By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.",
            order: 1,
          },
          {
            heading: "2. Use License",
            content:
              "Permission is granted to temporarily download one copy of the materials on Bruno Câmara Arquitetos' website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:",
            listItems: [
              { item: "Modify or copy the materials" },
              { item: "Use the materials for any commercial purpose or for any public display" },
              { item: "Attempt to reverse engineer any software contained on the website" },
              { item: "Remove any copyright or other proprietary notations from the materials" },
            ],
            order: 2,
          },
          {
            heading: "3. Content and Intellectual Property",
            content:
              "All content on this website, including but not limited to text, graphics, logos, images, and software, is the property of Bruno Câmara Arquitetos and is protected by Portuguese and international copyright laws.",
            subsections: [
              {
                subheading: "Project Images and Portfolios",
                content:
                  "The architectural projects, designs, and images displayed on this website are proprietary works of Bruno Câmara Arquitetos. Unauthorized use, reproduction, or distribution is strictly prohibited.",
              },
            ],
            order: 3,
          },
          {
            heading: "4. Website Use and Conduct",
            content:
              "You agree to use our website only for lawful purposes and in a way that does not infringe the rights of others. You must not:",
            listItems: [
              {
                item: "Use the website in any way that could damage, disable, or impair the service",
              },
              { item: "Attempt to gain unauthorized access to any part of the website" },
              { item: "Submit false or misleading information through our contact forms" },
              { item: "Use automated systems to access the website without permission" },
            ],
            order: 4,
          },
          {
            heading: "5. Contact Forms and Communications",
            content:
              "When you submit information through our contact forms, you warrant that the information provided is accurate and that you have the right to provide such information.",
            order: 5,
          },
          {
            heading: "6. Disclaimer",
            content:
              "The information on this website is provided on an 'as is' basis. To the fullest extent permitted by law, Bruno Câmara Arquitetos excludes all representations, warranties, conditions and terms relating to our website and the use of this website.",
            order: 6,
          },
          {
            heading: "7. Limitation of Liability",
            content:
              "Bruno Câmara Arquitetos shall not be liable for any direct, indirect, incidental, consequential, or special damages arising out of or in connection with your use of this website.",
            order: 7,
          },
          {
            heading: "8. Changes to Terms",
            content:
              "Bruno Câmara Arquitetos reserves the right to revise these terms of service at any time without notice. By using this website, you are agreeing to be bound by the current version of these terms of service.",
            order: 8,
          },
        ],
        contactInfo: {
          includeContact: true,
          heading: "Contact Us",
          content:
            "If you have any questions about these Terms of Service, please contact us at info@cvz-construcoes.pt or Av. da República 49, 1050-188 Lisboa, Portugal.",
        },
        published: true,
        order: 2,
      },
    ];

    for (const page of legalPages) {
      const existingPage = await payload.find({
        collection: "legal-pages",
        where: { slug: { equals: page.slug } },
      });

      if (existingPage.docs.length === 0) {
        await payload.create({
          collection: "legal-pages",
          data: page,
        });
        console.log(`✅ Created legal page: ${page.title}`);
      } else {
        console.log(`⏭️  Legal page already exists: ${page.title}`);
      }
    }

    console.log("💼 Creating job listings...");
    const jobs = [
      {
        title: "Senior Architect",
        slug: "senior-architect",
        department: "architecture" as const,
        location: "Lisbon, Portugal",
        employmentType: "full-time" as const,
        experienceLevel: "senior" as const,
        summary:
          "We are seeking a creative and experienced Senior Architect to lead design projects and mentor our growing team. The ideal candidate will have a strong portfolio in contemporary architecture and sustainable design.",
        description:
          "As a Senior Architect at Bruno Câmara Arquitetos, you will be responsible for leading architectural design projects from concept to completion. You will work closely with clients, coordinate with engineering teams, and ensure that all projects meet our high standards for innovation, sustainability, and functionality. This role offers the opportunity to work on diverse projects including residential, commercial, and public buildings.",
        responsibilities: [
          { responsibility: "Lead architectural design for major projects" },
          { responsibility: "Develop design concepts and present to clients" },
          { responsibility: "Coordinate with engineering and construction teams" },
          { responsibility: "Mentor junior architects and interns" },
          { responsibility: "Ensure compliance with building codes and regulations" },
          { responsibility: "Participate in business development activities" },
        ],
        requirements: [
          { requirement: "Master's degree in Architecture" },
          { requirement: "Licensed architect with 7+ years of experience" },
          { requirement: "Proficiency in AutoCAD, Revit, and 3D modeling software" },
          { requirement: "Strong portfolio demonstrating design excellence" },
          { requirement: "Experience with sustainable design principles" },
          { requirement: "Excellent communication and presentation skills" },
          { requirement: "Fluency in Portuguese and English" },
        ],
        preferredQualifications: [
          { qualification: "Experience with LEED or BREEAM certification" },
          { qualification: "Knowledge of local building codes and regulations" },
          { qualification: "Project management certification" },
          { qualification: "Experience in residential and commercial projects" },
        ],
        benefits: [
          { benefit: "Competitive salary commensurate with experience" },
          { benefit: "Health insurance coverage" },
          { benefit: "Professional development opportunities" },
          { benefit: "Flexible working arrangements" },
          { benefit: "Annual performance bonus" },
          { benefit: "Conference and training budget" },
        ],
        salaryRange: {
          showSalary: true,
          minSalary: 45000,
          maxSalary: 65000,
          currency: "EUR" as const,
          salaryNote: "Based on experience and qualifications",
        },
        applicationInstructions:
          "Please submit your CV, portfolio, and a cover letter explaining your interest in sustainable architecture.",
        contactEmail: "careers@brunocamara-arquitectos.pt",
        featured: true,
        urgent: false,
        published: true,
        order: 10,
      },
      {
        title: "Project Manager",
        slug: "project-manager",
        department: "project-management" as const,
        location: "Lisbon, Portugal",
        employmentType: "full-time" as const,
        experienceLevel: "mid" as const,
        summary:
          "Join our team as a Project Manager to oversee architectural projects from inception to completion, ensuring timely delivery and client satisfaction.",
        description:
          "We are looking for an organized and detail-oriented Project Manager to coordinate our architectural projects. You will be responsible for project planning, resource allocation, timeline management, and client communication. This role requires someone who can balance multiple projects while maintaining our high standards of quality and service.",
        responsibilities: [
          { responsibility: "Manage multiple architectural projects simultaneously" },
          { responsibility: "Coordinate with architects, engineers, and contractors" },
          { responsibility: "Develop and maintain project schedules and budgets" },
          { responsibility: "Serve as primary client liaison" },
          { responsibility: "Monitor project progress and resolve issues" },
          { responsibility: "Ensure quality control and compliance standards" },
        ],
        requirements: [
          { requirement: "Bachelor's degree in Architecture, Engineering, or related field" },
          { requirement: "3-5 years of project management experience" },
          { requirement: "PMP certification preferred" },
          { requirement: "Strong organizational and communication skills" },
          { requirement: "Experience with project management software" },
          { requirement: "Knowledge of construction processes" },
        ],
        preferredQualifications: [
          { qualification: "Experience in architectural project management" },
          { qualification: "Familiarity with Portuguese construction regulations" },
          { qualification: "Bilingual proficiency (Portuguese/English)" },
        ],
        benefits: [
          { benefit: "Competitive salary" },
          { benefit: "Health and dental insurance" },
          { benefit: "Professional certification support" },
          { benefit: "Flexible schedule options" },
        ],
        salaryRange: {
          showSalary: true,
          minSalary: 35000,
          maxSalary: 50000,
          currency: "EUR" as const,
        },
        featured: true,
        urgent: false,
        published: true,
        order: 8,
      },
      {
        title: "Junior Architect",
        slug: "junior-architect",
        department: "architecture" as const,
        location: "Lisbon, Portugal",
        employmentType: "full-time" as const,
        experienceLevel: "entry" as const,
        summary:
          "An exciting opportunity for a recent graduate or early-career architect to join our innovative team and contribute to cutting-edge architectural projects.",
        description:
          "We are seeking a motivated Junior Architect to join our team. This is an excellent opportunity for someone starting their career in architecture to gain experience working on diverse projects while learning from experienced professionals. You will assist in design development, technical documentation, and client presentations.",
        responsibilities: [
          { responsibility: "Assist in design development and documentation" },
          { responsibility: "Prepare technical drawings and specifications" },
          { responsibility: "Support senior architects in project delivery" },
          { responsibility: "Participate in client meetings and presentations" },
          { responsibility: "Conduct research on materials and building systems" },
          { responsibility: "Assist with permit applications and approvals" },
        ],
        requirements: [
          { requirement: "Bachelor's or Master's degree in Architecture" },
          { requirement: "0-2 years of professional experience" },
          { requirement: "Proficiency in AutoCAD and SketchUp" },
          { requirement: "Basic knowledge of Revit or other BIM software" },
          { requirement: "Strong design sense and attention to detail" },
          { requirement: "Willingness to learn and grow" },
        ],
        preferredQualifications: [
          { qualification: "Portfolio demonstrating design skills" },
          { qualification: "Internship experience in architecture firms" },
          { qualification: "Knowledge of sustainable design principles" },
        ],
        benefits: [
          { benefit: "Mentorship program with senior architects" },
          { benefit: "Training and professional development" },
          { benefit: "Health insurance" },
          { benefit: "Growth opportunities within the firm" },
        ],
        salaryRange: {
          showSalary: true,
          minSalary: 25000,
          maxSalary: 35000,
          currency: "EUR" as const,
        },
        featured: false,
        urgent: false,
        published: true,
        order: 5,
      },
      {
        title: "Interior Designer",
        slug: "interior-designer",
        department: "design" as const,
        location: "Lisbon, Portugal",
        employmentType: "full-time" as const,
        experienceLevel: "mid" as const,
        summary:
          "Seeking a talented Interior Designer to create innovative and functional interior spaces that complement our architectural vision.",
        description:
          "We are looking for a creative Interior Designer to work on residential and commercial projects. You will collaborate with our architectural team to create cohesive design solutions that enhance the user experience and reflect our commitment to contemporary, sustainable design.",
        responsibilities: [
          { responsibility: "Develop interior design concepts and schemes" },
          { responsibility: "Select materials, finishes, and furnishings" },
          { responsibility: "Create detailed interior design drawings and specifications" },
          { responsibility: "Coordinate with architects and contractors" },
          { responsibility: "Present design concepts to clients" },
          { responsibility: "Oversee interior fit-out and installation" },
        ],
        requirements: [
          { requirement: "Bachelor's degree in Interior Design or related field" },
          { requirement: "3-5 years of interior design experience" },
          {
            requirement: "Proficiency in design software (AutoCAD, SketchUp, Adobe Creative Suite)",
          },
          { requirement: "Strong understanding of materials and finishes" },
          { requirement: "Excellent visual presentation skills" },
          { requirement: "Knowledge of building codes and accessibility requirements" },
        ],
        preferredQualifications: [
          { qualification: "Experience in residential and commercial projects" },
          { qualification: "Knowledge of sustainable materials and practices" },
          { qualification: "Portfolio showcasing diverse project types" },
        ],
        benefits: [
          { benefit: "Creative and collaborative work environment" },
          { benefit: "Competitive compensation package" },
          { benefit: "Professional development opportunities" },
          { benefit: "Health insurance coverage" },
        ],
        salaryRange: {
          showSalary: false,
        },
        featured: false,
        urgent: false,
        published: true,
        order: 6,
      },
      {
        title: "Architecture Intern",
        slug: "architecture-intern",
        department: "architecture" as const,
        location: "Lisbon, Portugal",
        employmentType: "internship" as const,
        experienceLevel: "entry" as const,
        summary:
          "Gain valuable hands-on experience in a dynamic architecture firm while contributing to innovative projects and learning from industry professionals.",
        description:
          "Our internship program offers architecture students and recent graduates the opportunity to gain practical experience in a professional setting. Interns will work alongside experienced architects on various projects, from initial concept development to construction documentation.",
        responsibilities: [
          { responsibility: "Assist with design development and research" },
          { responsibility: "Prepare architectural drawings and models" },
          { responsibility: "Support project documentation and presentation materials" },
          { responsibility: "Participate in team meetings and design reviews" },
          { responsibility: "Conduct site visits and documentation" },
          { responsibility: "Assist with administrative tasks as needed" },
        ],
        requirements: [
          { requirement: "Currently enrolled in or recent graduate of Architecture program" },
          { requirement: "Basic knowledge of architectural design principles" },
          { requirement: "Familiarity with CAD software" },
          { requirement: "Strong work ethic and eagerness to learn" },
          { requirement: "Good communication and teamwork skills" },
          { requirement: "Portfolio of academic or personal projects" },
        ],
        preferredQualifications: [
          { qualification: "Previous internship or work experience in architecture" },
          { qualification: "Knowledge of BIM software (Revit, ArchiCAD)" },
          { qualification: "Interest in sustainable design" },
        ],
        benefits: [
          { benefit: "Mentorship and professional guidance" },
          { benefit: "Exposure to diverse project types" },
          { benefit: "Networking opportunities" },
          { benefit: "Potential for full-time employment after internship" },
        ],
        salaryRange: {
          showSalary: true,
          minSalary: 800,
          maxSalary: 1200,
          currency: "EUR" as const,
          salaryNote: "Monthly stipend",
        },
        applicationDeadline: "2025-08-15",
        featured: false,
        urgent: true,
        published: true,
        order: 3,
      },
    ];

    for (const job of jobs) {
      const existingJob = await payload.find({
        collection: "jobs",
        where: { slug: { equals: job.slug } },
      });

      if (existingJob.docs.length === 0) {
        await payload.create({
          collection: "jobs",
          data: job,
        });
        console.log(`✅ Created job listing: ${job.title}`);
      } else {
        console.log(`⏭️  Job listing already exists: ${job.title}`);
      }
    }

    console.log("🎉 Seeding completed successfully!");
  } catch (error) {
    console.error("❌ Error seeding data:", error);
    process.exit(1);
  } finally {
    process.exit(0);
  }
};

seedData();
