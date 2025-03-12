"use client"

import Image from "next/image"
import Link from "next/link"
import { Mail } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { translations } from "@/lib/translations"
import LanguageSwitcher from "@/components/language-switcher"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTelegram } from "@fortawesome/free-brands-svg-icons"

export default function Header() {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <header className="bg-primary py-16 text-primary-foreground">
      <div className="container mx-auto px-4">
        {/* Top section with logo and language switcher */}
        <div className="flex justify-end items-center gap-4 pb-6">
          <div className="relative h-10 w-10 overflow-hidden rounded-full border-2 border-primary-foreground/20 shadow-sm">
            <Image src="/placeholder.svg?height=40&width=40" alt={t.name} fill className="object-cover" priority />
          </div>
          <LanguageSwitcher />
        </div>

        {/* Main header content */}
        <div className="flex flex-col md:flex-row md:justify-between">
          <div className="max-w-2xl">
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">{t.name}</h1>
            <p className="mb-2 text-xl">{t.title}</p>
            <p className="mb-6 text-primary-foreground/80">{t.bio}</p>

            <div className="flex items-center gap-4">
              <Link
                href={`mailto:${t.email}`}
                className="flex items-center gap-2 rounded-md bg-primary-foreground/10 px-3 py-2 text-sm font-medium text-primary-foreground hover:bg-primary-foreground/20"
              >
                <Mail className="h-4 w-4" />
                <span>{t.email}</span>
              </Link>

              <Link
                href="https://t.me/johndoe"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-md bg-primary-foreground/10 px-3 py-2 text-sm font-medium text-primary-foreground hover:bg-primary-foreground/20"
              >
                <FontAwesomeIcon icon={faTelegram} className="h-4 w-4" />
                <span>{t.telegram}</span>
              </Link>
            </div>
          </div>

          {/* Larger profile photo for desktop view */}
          <div className="hidden md:block relative h-40 w-40 overflow-hidden rounded-full border-4 border-primary-foreground/20 shadow-lg mt-4">
            <Image src="/placeholder.svg?height=160&width=160" alt={t.name} fill className="object-cover" priority />
          </div>

          {/* Smaller profile photo for mobile view */}
          <div className="md:hidden mx-auto mt-8 relative h-32 w-32 overflow-hidden rounded-full border-4 border-primary-foreground/20 shadow-lg">
            <Image src="/placeholder.svg?height=128&width=128" alt={t.name} fill className="object-cover" priority />
          </div>
        </div>
      </div>
    </header>
  )
}

