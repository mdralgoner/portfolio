"use client"

import { useLanguage } from "@/contexts/language-context"
import Header from "@/components/header"
import WorkExperience from "@/components/work-experience"
import { translations } from "@/lib/translations"

export default function Portfolio() {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 py-12">
        <h2 className="mb-8 text-3xl font-bold">{t.workExperience}</h2>
        <div className="space-y-8">
          {t.workExperienceData.map((experience, index) => (
            <WorkExperience key={index} experience={experience} />
          ))}
        </div>
      </div>
    </main>
  )
}

