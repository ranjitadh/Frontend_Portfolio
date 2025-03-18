import { ArrowDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import Navbar from "@/components/navbar"

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden pt-16">
      <Navbar />
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 dark:from-blue-900/20 dark:to-purple-900/20"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
          <span className="block">Hi, I'm Ranjit Adhikari</span>
          <span className="block text-blue-600 dark:text-blue-400">Frontend Developer</span>
        </h1>
        <p className="mt-3 max-w-md mx-auto text-base sm:text-lg md:mt-5 md:text-xl text-gray-600 dark:text-gray-300">
          Building responsive, high-performance, and user-friendly web applications with React.js, TypeScript, and
          modern frontend technologies.
        </p>
        <div className="mt-8 flex justify-center">
          <Button asChild className="rounded-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white">
            <a href="#contact">Get in Touch</a>
          </Button>
          <Button asChild variant="outline" className="ml-4 rounded-full px-6 py-3">
            <a href="#about">Learn More</a>
          </Button>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-gray-600 dark:text-gray-400">
          <ArrowDown className="h-6 w-6" />
        </a>
      </div>
    </section>
  )
}

