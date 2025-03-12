import Header from "@/components/header"
import WorkExperience from "@/components/work-experience"
import { workExperiences } from "@/lib/data"

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 py-12">
        <h2 className="mb-8 text-3xl font-bold">Work Experience</h2>
        <div className="space-y-8">
          {workExperiences.map((experience, index) => (
            <WorkExperience key={index} experience={experience} />
          ))}
        </div>
      </div>
    </main>
  )
}

