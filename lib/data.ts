export interface Media {
  type: "image" | "video" | "youtube"
  url?: string
  youtubeId?: string
  startTime?: number // in seconds
}

export interface Project {
  title: string
  description: string
  technologies?: string[]
  media?: Media
}

export interface WorkExperience {
  title: string
  company: string
  description: string
  startDate: string
  endDate?: string
  logo?: string
  projects: Project[]
}

export const workExperiences: WorkExperience[] = [
  {
    title: "Senior Frontend Developer",
    company: "TechCorp Inc.",
    description:
      "Led the development of the company's flagship product, improving performance by 40% and implementing new features that increased user engagement by 25%.",
    startDate: "Jan 2021",
    endDate: "Present",
    logo: "/placeholder.svg?height=64&width=64",
    projects: [
      {
        title: "Dashboard Redesign",
        description:
          "Completely redesigned the analytics dashboard, improving user experience and adding new visualization tools. Check out our case study on the project at [our blog](https://example.com/case-study).",
        technologies: ["React", "TypeScript", "D3.js"],
        media: {
          type: "youtube",
          youtubeId: "dQw4w9WgXcQ",
          startTime: 0,
        },
      },
      {
        title: "Mobile App Integration",
        description:
          "Developed API endpoints and integration points for the new mobile application, ensuring consistent data across platforms.",
        technologies: ["Node.js", "Express", "MongoDB"],
        media: {
          type: "image",
          url: "/placeholder.svg?height=400&width=600",
        },
      },
    ],
  },
  {
    title: "Frontend Developer",
    company: "WebSolutions Ltd.",
    description:
      "Worked on multiple client projects, developing responsive web applications and implementing complex UI components.",
    startDate: "Mar 2018",
    endDate: "Dec 2020",
    logo: "/placeholder.svg?height=64&width=64",
    projects: [
      {
        title: "E-commerce Platform",
        description:
          "Built a custom e-commerce solution for a retail client, including product catalog, shopping cart, and checkout process. Watch our [platform demo on YouTube](https://www.youtube.com/watch?v=dQw4w9WgXcQ&t=42s) to see it in action.",
        technologies: ["React", "Redux", "Stripe API"],
        media: {
          type: "image",
          url: "/placeholder.svg?height=400&width=600",
        },
      },
      {
        title: "Content Management System",
        description:
          "Developed a headless CMS for a media company, allowing them to manage content across multiple platforms.",
        technologies: ["Next.js", "GraphQL", "PostgreSQL"],
        media: {
          type: "video",
          url: "https://example.com/video.mp4",
        },
      },
    ],
  },
  {
    title: "Junior Web Developer",
    company: "Digital Agency",
    description:
      "Started my career working on various client websites, focusing on HTML, CSS, and JavaScript development.",
    startDate: "Jun 2016",
    endDate: "Feb 2018",
    projects: [
      {
        title: "Corporate Website Redesign",
        description: "Participated in the complete redesign of a corporate website for a financial services client.",
        technologies: ["HTML", "CSS", "JavaScript", "jQuery"],
        media: {
          type: "image",
          url: "/placeholder.svg?height=400&width=600",
        },
      },
    ],
  },
]

