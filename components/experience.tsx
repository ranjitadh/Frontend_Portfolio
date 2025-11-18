import { Card, CardContent } from "@/components/ui/card"
import { Briefcase } from "lucide-react"

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">Professional Experience</h2>
          <div className="mt-4 max-w-3xl mx-auto">
            <div className="h-1 w-20 bg-blue-600 mx-auto"></div>
          </div>
        </div>

        <div className="max-w-3xl mx-auto">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white">
                    <Briefcase className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Mobile App Developer</h3>
                  <p className="text-blue-600 dark:text-blue-400 font-medium">Khatra Tech</p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">Jan 2023 – Aug 2025</p>
                  <div className="mt-4 space-y-3">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <div className="h-2 w-2 rounded-full bg-blue-600"></div>
                      </div>
                      <p className="ml-3 text-gray-600 dark:text-gray-300">
                        Maintained and enhanced the company mobile application across iOS and Android, ensuring
                        stability and performance.
                      </p>
                    </div>

                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <div className="h-2 w-2 rounded-full bg-blue-600"></div>
                      </div>
                      <p className="ml-3 text-gray-600 dark:text-gray-300">
                        Identified and resolved bugs, optimized app load times, and improved UX via efficient state
                        management and performance tuning.
                      </p>
                    </div>

                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <div className="h-2 w-2 rounded-full bg-blue-600"></div>
                      </div>
                      <p className="ml-3 text-gray-600 dark:text-gray-300">
                        Implemented AI automation features to streamline workflows and enhance app intelligence.
                      </p>
                    </div>

                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <div className="h-2 w-2 rounded-full bg-blue-600"></div>
                      </div>
                      <p className="ml-3 text-gray-600 dark:text-gray-300">
                        Collaborated using Git-based workflows, ensured clean commits and smooth deployments, and
                        performed QA testing to ensure production readiness.
                      </p>
                    </div>

                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <div className="h-2 w-2 rounded-full bg-blue-600"></div>
                      </div>
                      <p className="ml-3 text-gray-600 dark:text-gray-300 font-medium">
                        Key Skills: Mobile App Development · Bug Fixing · AI Automation · Performance Optimization · Quality Assurance · Git · React Native · Supabase · Next.js
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

