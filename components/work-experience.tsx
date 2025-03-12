"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronDown, ChevronUp } from "lucide-react"
import ProjectCard from "@/components/project-card"
import type { WorkExperience as WorkExperienceType } from "@/lib/data"

interface WorkExperienceProps {
  experience: WorkExperienceType
}

export default function WorkExperience({ experience }: WorkExperienceProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className="overflow-hidden rounded-lg border bg-card shadow-sm">
      <div className="flex flex-col gap-4 p-6 md:flex-row md:items-center">
        <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-md bg-muted">
          {experience.logo ? (
            <Image
              src={experience.logo || "/placeholder.svg"}
              alt={`${experience.company} logo`}
              fill
              className="object-contain p-2"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-primary/10 text-xl font-bold text-primary">
              {experience.company.charAt(0)}
            </div>
          )}
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-bold">{experience.title}</h3>
          <p className="text-lg text-muted-foreground">{experience.company}</p>
          <p className="text-sm text-muted-foreground">
            {experience.startDate} - {experience.endDate || "Present"}
          </p>
        </div>
      </div>

      <div className="px-6 pb-4">
        <p className="text-card-foreground">{experience.description}</p>
      </div>

      {experience.projects && experience.projects.length > 0 && (
        <>
          <div className="border-t px-6 py-3">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="flex w-full items-center justify-between text-left font-medium"
            >
              <span>Projects ({experience.projects.length})</span>
              {isExpanded ? (
                <ChevronUp className="h-5 w-5 text-muted-foreground" />
              ) : (
                <ChevronDown className="h-5 w-5 text-muted-foreground" />
              )}
            </button>
          </div>

          {isExpanded && (
            <div className="space-y-4 border-t p-6">
              {experience.projects.map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
            </div>
          )}
        </>
      )}
    </div>
  )
}

