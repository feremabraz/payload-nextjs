export interface TeamMember {
  id: string;
  name: string;
  role: string;
  imagePath: string;
  altText: string;
  bio: string;
  interests?: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: "1",
    name: "Bruno Câmara",
    role: "CEO & Founder",
    imagePath: "/studio/team_1.webp",
    altText: "Bruno Câmara, CEO of Bruno Câmara Architects",
    bio: "PhD student at the Faculty of Architecture at the University of Coimbra. Graduated from the Faculty of Architecture, University of Lisbon and from the Course of Architecture at the University of Coimbra. He was an Associate Professor at the Faculty of Architecture at the University of Coimbra. Founder of Bruno Câmara Architects since 2008, CEO of Acoveste LTDA Construction since 2012. Expert in Sports Venues, Schools and Urban Rehabilitation.",
    interests: "Architecture, travel, and sports",
  },
  {
    id: "2",
    name: "Diogo Alves",
    role: "CFO & Partner",
    imagePath: "/studio/team_2.webp",
    altText: "Diogo Alves, CFO & Partner",
    bio: "Holds a degree in Mechanical Engineering from the Instituto Superior Técnico, with experience in Architectural and Civil Construction. During his studies, he specialized in Architecture and Civil Construction and Mechanical Design, placing him among a select group of specialists with joint certification.",
    interests: "3D Planning and Modeling, Aeronautical Mechanics, and Cinema",
  },
  {
    id: "3",
    name: "João Câmara",
    role: "Lead Architect",
    imagePath: "/studio/team_3.webp",
    altText: "João Câmara, Lead Architect",
    bio: "Master's degree from the Faculty of Architecture, University of Lisbon. Specializes in sustainable design and urban planning with a focus on integrating green technologies into architectural solutions.",
    interests: "Sports, Design, Contemporary Art, and Cinema",
  },
  {
    id: "4",
    name: "Ana Silva",
    role: "Senior Architect",
    imagePath: "/studio/team_4.webp",
    altText: "Ana Silva, Senior Architect",
    bio: "Graduate of the University of Porto with over 10 years of experience in residential and commercial architecture. Known for innovative approaches to spatial design and material use.",
    interests: "Photography, Sustainable Design, Urban Planning",
  },
  {
    id: "5",
    name: "Miguel Costa",
    role: "Interior Designer",
    imagePath: "/studio/team_5.webp",
    altText: "Miguel Costa, Interior Designer",
    bio: "With a background in Fine Arts and Interior Design from Lisbon School of Design, Miguel brings artistic sensibility to interior spaces that complement architectural concepts.",
    interests: "Art History, Furniture Design, Lighting Design",
  },
  {
    id: "6",
    name: "Carolina Martins",
    role: "Project Manager",
    imagePath: "/studio/team_6.webp",
    altText: "Carolina Martins, Project Manager",
    bio: "MBA with specialization in Project Management. Experienced in coordinating complex architectural projects from initial client consultation through to final delivery.",
    interests: "Process Optimization, Team Leadership, Client Relations",
  },
  {
    id: "7",
    name: "Pedro Nunes",
    role: "Technical Director",
    imagePath: "/studio/team_7.webp",
    altText: "Pedro Nunes, Technical Director",
    bio: "Civil Engineering graduate with expertise in structural solutions for challenging architectural designs. Ensures all projects meet rigorous technical standards.",
    interests: "Structural Engineering, Building Codes, Construction Technologies",
  },
  {
    id: "8",
    name: "Sofia Oliveira",
    role: "Sustainability Consultant",
    imagePath: "/studio/team_8.webp",
    altText: "Sofia Oliveira, Sustainability Consultant",
    bio: "Environmental Engineering background with focus on sustainable building practices. Certified in LEED and other green building standards.",
    interests: "Renewable Energy, Green Building Materials, Water Conservation",
  },
  {
    id: "9",
    name: "Ricardo Santos",
    role: "3D Visualization Specialist",
    imagePath: "/studio/team_9.webp",
    altText: "Ricardo Santos, 3D Visualization Specialist",
    bio: "Fine Arts graduate specialized in architectural visualization. Creates photorealistic renders that bring architectural concepts to life for clients.",
    interests: "VR/AR Technology, Digital Art, Animation",
  },
];
