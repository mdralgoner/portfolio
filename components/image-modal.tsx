"use client"

import { useEffect } from "react"
import Image from "next/image"
import { X } from "lucide-react"

interface ImageModalProps {
  isOpen: boolean
  onClose: () => void
  imageUrl: string
  imageAlt: string
}

export default function ImageModal({ isOpen, onClose, imageUrl, imageAlt }: ImageModalProps) {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }

    if (isOpen) {
      document.body.style.overflow = "hidden"
      window.addEventListener("keydown", handleEsc)
    }

    return () => {
      document.body.style.overflow = ""
      window.removeEventListener("keydown", handleEsc)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm">
      <div className="relative max-h-[90vh] max-w-[90vw]">
        <button
          onClick={onClose}
          className="absolute -right-4 -top-4 rounded-full bg-primary p-2 text-primary-foreground shadow-md"
        >
          <X className="h-5 w-5" />
        </button>
        <div className="relative h-full w-full overflow-hidden rounded-lg">
          <Image
            src={imageUrl || "/placeholder.svg"}
            alt={imageAlt}
            width={1200}
            height={800}
            className="max-h-[90vh] w-auto object-contain"
          />
        </div>
      </div>
    </div>
  )
}

