import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/navbar";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden pt-16">
      <Navbar />
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 dark:from-blue-900/20 dark:to-purple-900/20"></div>
      <div className="absolute inset-0 pointer-events-none">
        <svg className="w-full h-full opacity-20 dark:opacity-10" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="g1" x1="0" x2="1">
              <stop offset="0%" stopColor="#60A5FA" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#A78BFA" stopOpacity="0.12" />
            </linearGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#g1)" />
        </svg>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
          <span className="block">Hi, I&apos;m Ranjit Adhikari</span>
          <span className="block text-blue-600 dark:text-blue-400">Web & Mobile App Developer</span>
        </h1>
        <p className="mt-3 max-w-md mx-auto text-base sm:text-lg md:mt-5 md:text-xl text-gray-600 dark:text-gray-300">
          Building responsive, high-performance, and user-friendly web and mobile applications using React.js, React
          Native, and modern frontend technologies.
        </p>
        <p className="mt-3 max-w-md mx-auto text-sm text-gray-500 dark:text-gray-400">
          <span className="block">Saddobato, Lalitpur • <a href="mailto:ranzeet60@gmail.com" className="text-blue-600">ranzeet60@gmail.com</a> • (+977) 9809517297</span>
        </p>
        <div className="mt-8 flex justify-center items-center gap-4">
          <Button asChild className="rounded-full px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-indigo-600 hover:to-blue-600 text-white text-lg shadow-md">
            <a href="#contact">Get in Touch</a>
          </Button>
          <Button asChild variant="outline" className="ml-4 rounded-full px-6 py-3 border-gray-200 dark:border-gray-700">
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
  );
}