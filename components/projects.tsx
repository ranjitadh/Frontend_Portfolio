import { ExternalLink, Github } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function Projects() {
  const projects = [
    {
      title: "Real-time Dashboard",
      description: "Developed an interactive dashboard using React.js for state management, and integrated APIs.",
      image: "/dashboard.png",
      tags: ["React.js", "API Integration", "State Management"],
      demoLink: "#",
      codeLink: "#",
    },
    {
      title: "Cafe Website",
      description: "Built a scalable and optimized Cafe site with modern web technologies.",
      image: "/baddakoadda.png",
      tags: ["React.js", "tailwindcss", "Optimization"],
      demoLink: "https://my-3j553mqd5-ranjitadhs-projects.vercel.app/",
      codeLink: "#",
    },
    {
      title: "Portfolio Website",
      description: "Designed and developed a personal portfolio using React and CSS3.",
      image: "/portfolio.png",
      tags: ["React", "CSS3", "Portfolio"],
      demoLink: "#",
      codeLink: "#",
    },
  ]

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">Projects</h2>
          <div className="mt-4 max-w-3xl mx-auto">
            <div className="h-1 w-20 bg-blue-600 mx-auto"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="aspect-video w-full overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-2">
                  <Button asChild variant="outline" size="sm">
                    <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="flex items-center">
                      <ExternalLink className="h-4 w-4 mr-1" /> Demo
                    </a>
                  </Button>
                 
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

