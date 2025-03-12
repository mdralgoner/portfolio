"use client"

import { useState, type ReactNode } from "react"
import Image from "next/image"
import type { Project } from "@/lib/data"
import ImageModal from "@/components/image-modal"

interface ProjectCardProps {
  project: Project
}

function formatDescription(description: string): ReactNode {
  // Match markdown-style links: [text](url)
  const linkRegex = /\[([^\]]+)\]$$([^)]+)$$/g

  // Split the description by links
  const parts = description.split(linkRegex)

  if (parts.length === 1) {
    return description
  }

  const result: ReactNode[] = []

  for (let i = 0; i < parts.length; i++) {
    if (i % 3 === 0) {
      // Text before link
      result.push(parts[i])
    } else if (i % 3 === 1) {
      // Link text
      const linkText = parts[i]
      const linkUrl = parts[i + 1]

      result.push(
        <a
          key={i}
          href={linkUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary underline hover:text-primary/80"
        >
          {linkText}
        </a>,
      )
    }
    // Skip URL parts (i % 3 === 2)
  }

  return <>{result}</>
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const renderMedia = () => {
    if (!project.media) return null

    switch (project.media.type) {
      case "image":
        return (
          <div className="relative h-full w-full cursor-pointer" onClick={() => setIsModalOpen(true)}>
            <Image src={project.media.url || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
          </div>
        )
      case "video":
        return <video src={project.media.url} controls className="h-full w-full object-cover" />
      case "youtube":
        const embedUrl = `https://www.youtube.com/embed/${project.media.youtubeId}${
          project.media.startTime ? `?start=${project.media.startTime}` : ""
        }`
        return (
          <div className="relative h-0 w-full pb-[56.25%]">
            <iframe
              src={embedUrl}
              title={project.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute left-0 top-0 h-full w-full border-0"
            />
          </div>
        )
      default:
        return null
    }
  }

  return (
    <div className="overflow-hidden rounded-lg border bg-card shadow-sm">
      <div className="flex flex-col md:flex-row">
        <div className="flex-1 p-6">
          <h4 className="mb-2 text-lg font-bold">{project.title}</h4>
          <p className="text-card-foreground">{formatDescription(project.description)}</p>
          {project.technologies && (
            <div className="mt-4">
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {project.media && <div className="relative h-48 w-full md:h-auto md:w-1/3">{renderMedia()}</div>}
      </div>

      {project.media && project.media.type === "image" && (
        <ImageModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          imageUrl={project.media.url || ""}
          imageAlt={project.title}
        />
      )}
    </div>
  )
}

