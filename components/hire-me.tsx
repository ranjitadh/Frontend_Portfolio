import { Button } from "@/components/ui/button"

export default function HireMe() {
  return (
    <section id="hire" className="py-12 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-lg shadow-md bg-gradient-to-r from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Hire me on Upwork</h3>
          <p className="mt-2 text-gray-600 dark:text-gray-300">I'm available for freelance projects — let's build something great together.</p>

          <div className="mt-6">
            <Button asChild className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full">
              <a
                href="https://www.upwork.com/freelancers/~0193267b112e1a1b2d?mp_source=share"
                target="_blank"
                rel="noopener noreferrer"
              >
                Hire me on Upwork
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
