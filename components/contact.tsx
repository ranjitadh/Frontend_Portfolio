"use client"
import { useState } from "react"
import { Mail, Phone, MapPin, Send } from "lucide-react"

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [status, setStatus] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setIsSubmitting(true)
    setStatus("Sending...")

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })

      const data = await res.json()
      if (!res.ok) throw new Error(data.error || "Something went wrong")

      setStatus("✅ Message sent successfully!")
      setForm({ name: "", email: "", subject: "", message: "" })
   } catch (err: unknown) {
  if (err instanceof Error) {
    setStatus("❌ " + err.message)
  } else {
    setStatus("❌ Something went wrong")
  }
}

  }

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900 min-h-screen flex items-center">
      <div className="container mx-auto px-4 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div className="space-y-6">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white">Get In Touch</h2>
          <p className="text-gray-600 dark:text-gray-300">
            I’d love to hear from you! Fill out the form or reach me through the contact info below.
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-md bg-blue-600 text-white">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <p className="font-medium text-gray-900 dark:text-white">Email</p>
                <p className="text-gray-600 dark:text-gray-300">ranzeet60@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="p-3 rounded-md bg-blue-600 text-white">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <p className="font-medium text-gray-900 dark:text-white">Phone</p>
                <p className="text-gray-600 dark:text-gray-300">(+977) 9809517297</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="p-3 rounded-md bg-blue-600 text-white">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <p className="font-medium text-gray-900 dark:text-white">Location</p>
                <p className="text-gray-600 dark:text-gray-300">Saddobato, Lalitpur</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Send Me a Message</h3>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Your Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
              className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-md bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              placeholder="Your Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
              className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-md bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              placeholder="Subject"
              value={form.subject}
              onChange={(e) => setForm({ ...form, subject: e.target.value })}
              required
              className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-md bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              placeholder="Your Message"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              required
              className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-md bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white min-h-[120px] focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold p-3 rounded-md flex items-center justify-center gap-2 transition-all"
            >
              {isSubmitting ? "Sending..." : <><Send className="w-5 h-5" /> Send Message</>}
            </button>
            {status && (
              <p className={`text-center font-medium ${status.startsWith("✅") ? "text-green-600" : "text-red-600"}`}>
                {status}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
