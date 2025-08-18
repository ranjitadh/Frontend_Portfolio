import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { name, email, subject, message } = body

    if (!name || !email || !subject || !message) {
      return new Response(JSON.stringify({ error: "All fields are required" }), { status: 400 })
    }

    const newMessage = await prisma.contact.create({
      data: { name, email, subject, message },
    })

    return new Response(JSON.stringify({ success: true, data: newMessage }))
} catch (error) {
  console.error("❌ Error saving contact:", error)
  const errorMessage = typeof error === "object" && error !== null && "message" in error
    ? (error as { message: string }).message
    : "An unknown error occurred";
  return new Response(JSON.stringify({ error: errorMessage }), { status: 500 })
}

}

export async function GET() {
  try {
    const messages = await prisma.contact.findMany({
      orderBy: { createdAt: "desc" }, // optional: latest first
    })

    return new Response(JSON.stringify({ success: true, data: messages }))
  } catch (error) {
    console.error("❌ Error fetching messages:", error)
    return new Response(JSON.stringify({ error: "Server error" }), { status: 500 } )
  }
}
