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
    role: "CEO",
    imagePath: "/projects/bright-modern-living-room-garden-view.webp",
    altText: "Bruno Câmara, CEO of Bruno Câmara Architects",
    bio: "PhD student at the Faculty of Architecture at the University of Coimbra Graduated from the Faculty of Architecture, University of Lisbon and from the Course of Architecture at the University of Coimbra. He was an Associate Professor at the Faculty of Architecture at the University of Coimbra. Founder of TERRAFUS Bruno Architects since 2008, CEO of Acoveste LTDA Construction since 2012, from 2020. In 2018, participates as Terrafus collaborator on a large rehabilitation project with entrepreneurship such as Collection and Strong Family Housing, Charitable Projects. Currently, our involvement in projects with those entrepreneurship such as Collection and Strong Family Housing, Charitable Projects. Currently, our expertise in Sports. Venues, Schools and Urban Rehabilitation.",
    interests: "Architecture, travel, and sports",
  },
  {
    id: "2",
    name: "Diogo Alves",
    role: "CFO & Partner",
    imagePath: "/projects/luxury-modern-villa-pool-dusk.webp",
    altText: "Diogo Alves, CFO & Partner",
    bio: "Holds a degree in Mechanical Engineering from the Instituto Superior Técnico (Institute), with experience in Architectural and Civil Construction in Architecture and Energy: Mechanical Engineering. During his studies, he specialized in Architecture and Civil Construction and Mechanical Design from Solentures, placing him among a select group of just 10 individuals with joint certification. He has worked in 3D Planning and Modeling, Aeronautical Mechanics, and Cinema.",
    interests: "3D Planning and Modeling, Aeronautical Mechanics, and Cinema",
  },
  {
    id: "3",
    name: "João Câmara",
    role: "Architect",
    imagePath: "/projects/minimalist-white-gallery-space.webp",
    altText: "João Câmara, Architect",
    bio: "Currently completing an Integrated Master's degree at the Faculty of Architecture, University of Lisbon. A special training advisor to João and Portal. He was ranked first in 2021.",
    interests: "Sports, Design, Contemporary Art, and Cinema",
  },
];
