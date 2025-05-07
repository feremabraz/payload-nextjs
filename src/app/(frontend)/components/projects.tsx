import Link from 'next/link'
import Image from 'next/image'

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'House in Lisbon',
      image:
        'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop',
    },
    {
      id: 2,
      title: 'Modern Interior',
      image:
        'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1974&auto=format&fit=crop',
    },
    {
      id: 3,
      title: 'Glass Pavilion',
      image:
        'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop',
    },
    {
      id: 4,
      title: 'Minimalist Kitchen',
      image:
        'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop',
    },
    {
      id: 5,
      title: 'Light Study',
      image:
        'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop',
    },
  ]

  return (
    <section id="project" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl md:text-7xl font-bold text-center mb-4">PROJECTS</h2>
        <div className="flex justify-center mb-12">
          <Link href="/projects" className="hover:underline">
            GO TO PROJECTS
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {projects.map((project) => (
            <div key={project.id} className="relative group overflow-hidden">
              <div className="aspect-square relative">
                <Image
                  src={project.image || '/placeholder.svg'}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <h3 className="text-white text-xl font-medium">{project.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
