import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap } from "lucide-react"

export default function Education() {
  const education = [
    {
      institution: "National College of Engineering",
      degree: "Bachelor in Computer Engineering",
      period: "April 2022 - Present",
      icon: GraduationCap,
    },
    {
      institution: "Gorkha International Public Secondary",
      degree: "Higher Secondary",
      period: "2019",
      icon: GraduationCap,
    },
    {
      institution: "Takshashila Academy Kohapur",
      degree: "Secondary",
      period: "2019",
      icon: GraduationCap,
    },
  ]

  return (
    <section id="education" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">Education</h2>
          <div className="mt-4 max-w-3xl mx-auto">
            <div className="h-1 w-20 bg-blue-600 mx-auto"></div>
          </div>
        </div>

        <div className="max-w-3xl mx-auto space-y-8">
          {education.map((item, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white">
                      <item.icon className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">{item.institution}</h3>
                    <p className="text-blue-600 dark:text-blue-400 font-medium">{item.degree}</p>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">{item.period}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

