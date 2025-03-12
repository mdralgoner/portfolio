export type Language = "en" | "ru"

export interface Media {
  type: "image" | "video" | "youtube"
  url?: string
  youtubeId?: string
  startTime?: number
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

export interface Translations {
  // Common UI elements
  name: string
  title: string
  bio: string
  email: string
  telegram: string
  workExperience: string
  present: string
  projects: string
  viewCaseStudy: string
  watchDemo: string

  // Work experiences
  workExperienceData: WorkExperience[]
}

export const translations: Record<Language, Translations> = {
  en: {
    // Common UI elements
    name: "John Doe",
    title: "Full Stack Developer",
    bio: "Passionate developer with 5+ years of experience building web applications. Specialized in React, Next.js, and Node.js. Committed to creating clean, efficient, and user-friendly solutions to complex problems.",
    email: "john.doe@example.com",
    telegram: "@johndoe",
    workExperience: "Work Experience",
    present: "Present",
    projects: "Projects",
    viewCaseStudy: "our blog",
    watchDemo: "platform demo on YouTube",

    // Work experiences
    workExperienceData: [
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
            description:
              "Participated in the complete redesign of a corporate website for a financial services client.",
            technologies: ["HTML", "CSS", "JavaScript", "jQuery"],
            media: {
              type: "image",
              url: "/placeholder.svg?height=400&width=600",
            },
          },
        ],
      },
    ],
  },
  ru: {
    // Common UI elements
    name: "Джон Доу",
    title: "Full Stack Разработчик",
    bio: "Увлеченный разработчик с более чем 5-летним опытом создания веб-приложений. Специализируюсь на React, Next.js и Node.js. Стремлюсь создавать чистые, эффективные и удобные решения сложных задач.",
    email: "john.doe@example.com",
    telegram: "@johndoe",
    workExperience: "Опыт работы",
    present: "Настоящее время",
    projects: "Проекты",
    viewCaseStudy: "нашем блоге",
    watchDemo: "демонстрацию на YouTube",

    // Work experiences
    workExperienceData: [
      {
        title: "Старший Frontend Разработчик",
        company: "TechCorp Inc.",
        description:
          "Руководил разработкой флагманского продукта компании, улучшив производительность на 40% и внедрив новые функции, которые увеличили вовлеченность пользователей на 25%.",
        startDate: "Янв 2021",
        endDate: "Present",
        logo: "/placeholder.svg?height=64&width=64",
        projects: [
          {
            title: "Редизайн Панели Управления",
            description:
              "Полностью переработал панель аналитики, улучшив пользовательский опыт и добавив новые инструменты визуализации. Ознакомьтесь с нашим исследованием проекта в [нашем блоге](https://example.com/case-study).",
            technologies: ["React", "TypeScript", "D3.js"],
            media: {
              type: "youtube",
              youtubeId: "dQw4w9WgXcQ",
              startTime: 0,
            },
          },
          {
            title: "Интеграция Мобильного Приложения",
            description:
              "Разработал API-эндпоинты и точки интеграции для нового мобильного приложения, обеспечив согласованность данных на всех платформах.",
            technologies: ["Node.js", "Express", "MongoDB"],
            media: {
              type: "image",
              url: "/placeholder.svg?height=400&width=600",
            },
          },
        ],
      },
      {
        title: "Frontend Разработчик",
        company: "WebSolutions Ltd.",
        description:
          "Работал над несколькими клиентскими проектами, разрабатывая адаптивные веб-приложения и внедряя сложные компоненты пользовательского интерфейса.",
        startDate: "Мар 2018",
        endDate: "Дек 2020",
        logo: "/placeholder.svg?height=64&width=64",
        projects: [
          {
            title: "Платформа Электронной Коммерции",
            description:
              "Создал индивидуальное решение для электронной коммерции для розничного клиента, включая каталог продуктов, корзину покупок и процесс оформления заказа. Посмотрите нашу [демонстрацию на YouTube](https://www.youtube.com/watch?v=dQw4w9WgXcQ&t=42s), чтобы увидеть его в действии.",
            technologies: ["React", "Redux", "Stripe API"],
            media: {
              type: "image",
              url: "/placeholder.svg?height=400&width=600",
            },
          },
          {
            title: "Система Управления Контентом",
            description:
              "Разработал headless CMS для медиа-компании, позволяющую управлять контентом на нескольких платформах.",
            technologies: ["Next.js", "GraphQL", "PostgreSQL"],
            media: {
              type: "video",
              url: "https://example.com/video.mp4",
            },
          },
        ],
      },
      {
        title: "Младший Веб-разработчик",
        company: "Digital Agency",
        description:
          "Начал свою карьеру, работая над различными веб-сайтами клиентов, сосредоточившись на разработке HTML, CSS и JavaScript.",
        startDate: "Июн 2016",
        endDate: "Фев 2018",
        projects: [
          {
            title: "Редизайн Корпоративного Сайта",
            description:
              "Участвовал в полном редизайне корпоративного веб-сайта для клиента из сферы финансовых услуг.",
            technologies: ["HTML", "CSS", "JavaScript", "jQuery"],
            media: {
              type: "image",
              url: "/placeholder.svg?height=400&width=600",
            },
          },
        ],
      },
    ],
  },
}

