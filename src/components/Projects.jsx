import { projects } from '../data/portfolioData'
import ProjectCard from './ProjectCard'

export default function Projects() {
  return (
    <section id="projects" className="bg-base py-20 md:py-24">
      <div className="section-shell">
        <h2 className="section-title">Projects</h2>
        <p className="mt-4 max-w-xl text-muted">
          Built end to end, from the database to the interface.
        </p>
        <div className="mt-10 space-y-8">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} reverse={i % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  )
}
