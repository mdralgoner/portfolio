import Image from "next/image"
import Link from "next/link"
import { Mail, MessageCircle } from "lucide-react"

export default function Header() {
  return (
    <header className="bg-primary py-16 text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between">
          <div className="max-w-2xl">
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">John Doe</h1>
            <p className="mb-2 text-xl">Full Stack Developer</p>
            <p className="mb-6 text-primary-foreground/80">
              Passionate developer with 5+ years of experience building web applications. Specialized in React, Next.js,
              and Node.js. Committed to creating clean, efficient, and user-friendly solutions to complex problems.
            </p>

            <div className="flex items-center gap-4">
              <Link
                href="mailto:john.doe@example.com"
                className="flex items-center gap-2 rounded-md bg-primary-foreground/10 px-3 py-2 text-sm font-medium text-primary-foreground hover:bg-primary-foreground/20"
              >
                <Mail className="h-4 w-4" />
                <span>john.doe@example.com</span>
              </Link>

              <Link
                href="https://t.me/johndoe"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-md bg-primary-foreground/10 px-3 py-2 text-sm font-medium text-primary-foreground hover:bg-primary-foreground/20"
              >
                <MessageCircle className="h-4 w-4" />
                <span>@johndoe</span>
              </Link>
            </div>
          </div>

          <div className="relative h-40 w-40 overflow-hidden rounded-full border-4 border-primary-foreground/20 shadow-lg">
            <Image src="/placeholder.svg?height=160&width=160" alt="John Doe" fill className="object-cover" priority />
          </div>
        </div>
      </div>
    </header>
  )
}

