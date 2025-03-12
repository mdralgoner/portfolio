"use client"

import { useLanguage } from "@/contexts/language-context"
import { Button } from "@/components/ui/button"

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "ru" : "en")
  }

  // Show the flag/text of the language you can switch to
  const languageToShow = language === "en" ? "RU" : "EN"

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleLanguage}
      className="flex items-center justify-center h-10 w-10 rounded-full bg-primary-foreground/10 text-sm font-medium text-primary-foreground hover:bg-primary-foreground/20 border border-primary-foreground/30"
    >
      {languageToShow}
    </Button>
  )
}

