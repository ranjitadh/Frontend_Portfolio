import { Card, CardContent } from "@/components/ui/card"

export default function Skills() {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["JavaScript (ES6+)", "Typescript", "HTML5", "CSS3", "C", "C++"],
      color: "bg-blue-500",
    },
    {
      title: "Frameworks",
      skills: ["React.js", "Bootstrap", "Tailwind CSS"],
      color: "bg-purple-500",
    },
    {
      title: "Tools",
      skills: ["Git", "Webpack", "Babel", "npm/Yarn", "Docker", "Postman"],
      color: "bg-green-500",
    },
  ]

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">Technical Skills</h2>
          <div className="mt-4 max-w-3xl mx-auto">
            <div className="h-1 w-20 bg-blue-600 mx-auto"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="overflow-hidden">
              <div className={`h-2 w-full ${category.color}`}></div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Relevant Coursework</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                  <h4 className="font-medium text-gray-900 dark:text-white">Web Development</h4>
                </div>
                <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                  <h4 className="font-medium text-gray-900 dark:text-white">Data Structures and Algorithms</h4>
                </div>
                <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                  <h4 className="font-medium text-gray-900 dark:text-white">DBMS</h4>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

