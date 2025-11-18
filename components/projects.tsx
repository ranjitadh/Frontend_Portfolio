import { ExternalLink } from "lucide-react"; // Removed unused 'Github' import
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image"; // Added Next.js Image import

export default function Projects() {
  const projects = [
    {
      title: "DataBrakes Web",
      description:
        "Responsive, interactive data management dashboard built with React.js. Uses component-based architecture, React Hooks for state, Tailwind CSS for styling, and RESTful APIs for dynamic data.",
      image: "/dashboard.png",
      tags: ["React.js", "Tailwind CSS", "REST APIs", "Hooks"],
      demoLink: "#",
      codeLink: "#",
    },
    {
      title: "E-Commerce Platform",
      description:
        "Scalable e-commerce site with product listing, filtering, cart functionality, and secure checkout. Implements dynamic routing, reusable components, and backend integration for inventory/order management.",
      image: "/ecommerce.png",
      tags: ["React.js", "Next.js", "Performance", "SEO"],
      demoLink: "#",
      codeLink: "#",
    },
    {
      title: "Cafe Website",
      description:
        "Modern, visually appealing café website built as a personal project. Emphasized UI/UX design, responsive layout, and custom animations for menu browsing and engagement.",
      image: "/baddakoadda.png",
      tags: ["React.js", "CSS3", "Animations"],
      demoLink: "#",
      codeLink: "#",
    },
    {
      title: "English → Sign Language Translation",
      description:
        "A translation system converting typed English text into sign language videos. Uses Porter Stemming for preprocessing, OpenCV for multimedia handling, and maps keywords to pre-recorded sign videos to improve accessibility.",
      image: "/signlang.png",
      tags: ["OpenCV", "Accessibility", "NLP"],
      demoLink: "#",
      codeLink: "#",
    },
  ];

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
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={500} // Adjust based on your design
                  height={281} // Maintain aspect ratio (16:9 for aspect-video)
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
  );
}