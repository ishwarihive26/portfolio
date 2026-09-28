import { profile } from '../data/portfolioData'

export default function Resume() {
  return (
    <section className="relative overflow-hidden bg-night py-16">
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-signal/40 blur-3xl" aria-hidden="true" />
      <div className="pointer-events-none absolute -bottom-24 left-10 h-64 w-64 rounded-full bg-teal/30 blur-3xl" aria-hidden="true" />
      <div className="section-shell relative flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
        <div>
          <h2 className="font-display text-2xl font-bold text-white">Prefer a one-page summary?</h2>
          <p className="mt-2 max-w-md text-sm text-white/70">
            My resume covers my education, projects and skills in one place.
          </p>
        </div>
        <a href={profile.resumeFile} download className="btn bg-sun text-night hover:-translate-y-0.5 hover:bg-white">
          Download resume (PDF)
        </a>
      </div>
    </section>
  )
}
