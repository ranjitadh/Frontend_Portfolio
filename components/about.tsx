import { User, Mail, Phone, MapPin } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">About Me</h2>
          <div className="mt-4 max-w-3xl mx-auto">
            <div className="h-1 w-20 bg-blue-600 mx-auto"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Career Objective</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                 I am a Web and Mobile App Developer currently pursuing a degree in Computer Engineering. I have a strong passion for modern web development,
particularly with React.js, and have completed all the foundational prerequisites to build scalable and dynamic applications. I am now seeking
remote or onsite opportunities where I can contribute my skills, grow as a developer, and work on impactful projects.
                </p>

                <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Strengths</h3>
                <ul className="list-disc pl-5 text-gray-600 dark:text-gray-300 space-y-2">
                  <li>Strong problem-solving skills</li>
                  <li>Effective communication and teamwork</li>
                  <li>Ability to quickly adapt to new technologies</li>
                </ul>

                <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
                  Extra-Curricular Activities
                </h3>
                <ul className="list-disc pl-5 text-gray-600 dark:text-gray-300 space-y-2">
                  <li>Member of NCEIT Club</li>
                  <li>Volunteer for Tech Events</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Contact Information</h3>

                <div className="space-y-4">
                  <div className="flex items-start">
                    <User className="h-5 w-5 text-blue-600 dark:text-blue-400 mt-0.5 mr-3" />
                    <div>
                      <h4 className="font-medium text-gray-900 dark:text-white">Name</h4>
                      <p className="text-gray-600 dark:text-gray-300">Ranjit Adhikari</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Mail className="h-5 w-5 text-blue-600 dark:text-blue-400 mt-0.5 mr-3" />
                    <div>
                      <h4 className="font-medium text-gray-900 dark:text-white">Email</h4>
                      <p className="text-gray-600 dark:text-gray-300">ranzeet60@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Phone className="h-5 w-5 text-blue-600 dark:text-blue-400 mt-0.5 mr-3" />
                    <div>
                      <h4 className="font-medium text-gray-900 dark:text-white">Phone</h4>
                      <p className="text-gray-600 dark:text-gray-300">(+977) 9809517297</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-blue-600 dark:text-blue-400 mt-0.5 mr-3" />
                    <div>
                      <h4 className="font-medium text-gray-900 dark:text-white">Location</h4>
                      <p className="text-gray-600 dark:text-gray-300">Saddobato, Lalitpur</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Certifications</h3>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                    <li className="flex items-center">
                      <div className="h-2 w-2 rounded-full bg-blue-600 dark:bg-blue-400 mr-2"></div>
                      Frontend Developer - NCEIT (2023)
                    </li>
                    <li className="flex items-center">
                      <div className="h-2 w-2 rounded-full bg-blue-600 dark:bg-blue-400 mr-2"></div>
                      MERN Stack - NCEIT (2022)
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

