import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Portfolio() {
  const projects = [
    {
      title: "AutoElite",
      description:
        "Premium automotive marketplace with advanced search, vehicle management, and user authentication",
      image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL"],
      liveUrl: "https://autoelite.vercel.app",
    },
    {
      title: "Engineer Portfolio",
      description:
        "Personal portfolio for a software and electrical engineer",
      image: "https://cdn.discordapp.com/attachments/814662021383061535/1390182238099865751/image.png?ex=686a9f59&is=68694dd9&hm=50235c8da5134d45553fe1762c53184a40c31c404c9a7bb6ad2fe3fe2dc2f4c4",
      technologies: ["React.js", "Tailwind CSS", "SEO"],
      liveUrl: "https://ffschneider.netlify.app",
    },
    {
      title: "Business Website",
      description:
        "Virtual reality business website with 3D models and interactive elements",
      image: "https://cdn.discordapp.com/attachments/814662021383061535/1390182556091289703/image.png?ex=686a9fa5&is=68694e25&hm=240f5d6c766332fa5d11d37659e7081f5c996dde520bb494e7196d0fdb5e581a",
      technologies: ["React", "Three.js", "Tailwind CSS", "SEO", "3D Models"],
      liveUrl: "https://vysionvr.com",
    },
    // {
    //   title: "Mobile Banking App",
    //   description:
    //     "Secure mobile banking application with biometric authentication",
    //   image: "/placeholder.svg?height=300&width=400",
    //   technologies: ["React Native", "Firebase", "Redux", "TypeScript"],
    //   liveUrl: "#",
    //
    // },
    // {
    //   title: "Real Estate Platform",
    //   description:
    //     "Property listing platform with advanced search and virtual tours",
    //   image: "/placeholder.svg?height=300&width=400",
    //   technologies: ["Vue.js", "Laravel", "MySQL", "AWS"],
    //   liveUrl: "#",
    //
    // },
    // {
    //   title: "Social Media App",
    //   description:
    //     "Social networking platform with real-time messaging and content sharing",
    //   image: "/placeholder.svg?height=300&width=400",
    //   technologies: ["React", "Socket.io", "Express", "Redis"],
    //   liveUrl: "#",
    //
    // },
    // {
    //   title: "Learning Management System",
    //   description:
    //     "Educational platform with course management and progress tracking",
    //   image: "/placeholder.svg?height=300&width=400",
    //   technologies: ["Next.js", "Prisma", "PostgreSQL", "Stripe"],
    //   liveUrl: "#",
    //
    // },
  ];

  return (
    <section id="portfolio" className="py-20 bg-background/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            My <span className="text-green-400">Portfolio</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Recent projects that showcase my skills and expertise
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="bg-green-500/10 border-green-500/20 hover:border-green-500/40 transition-all duration-300 overflow-hidden group"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <Button
                    size="sm"
                    className="bg-green-500 hover:bg-green-600 text-black"
                    asChild
                  >
                    {project.title === "AutoElite" ? (
                      <Link href="/autoelite">
                        <ExternalLink size={16} className="mr-2" />
                        Live Demo
                      </Link>
                    ) : (
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink size={16} className="mr-2" />
                        Live Demo
                      </a>
                    )}
                  </Button>
                  {/* <Button
                    size="sm"
                    variant="outline"
                    className="border-green-500 text-green-400 hover:bg-green-500 hover:text-black bg-transparent"
                  >
                    <Github size={16} className="mr-2" />
                    Code
                  </Button> */}
                </div>
              </div>

              <CardContent className="p-6">
                <h3 className="text-foreground font-bold text-xl mb-2">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-green-500/20 text-green-400 text-sm rounded-full border border-green-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          {/* <Button className="bg-green-500 hover:bg-green-600 text-black font-semibold px-8 py-3">
            View All Projects
          </Button> */}
        </div>
      </div>
    </section>
  );
}
