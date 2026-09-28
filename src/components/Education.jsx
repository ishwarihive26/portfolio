import { education } from '../data/portfolioData'

export default function Education() {
  return (
    <section id="education" className="bg-surface py-20 md:py-24">
      <div className="section-shell grid gap-8 md:grid-cols-[minmax(0,10rem)_1fr]">
        <h2 className="section-title">Education</h2>
        <div className="relative max-w-2xl space-y-8 border-l-2 border-border pl-8">
          {education.map((edu) => (
            <div key={edu.degree + edu.institution} className="relative">
              <span className="absolute -left-[41px] top-1.5 h-4 w-4 rounded-full border-4 border-surface bg-signal ring-2 ring-signal/30" />
              <span className="inline-block rounded-full bg-signal-soft px-3 py-1 text-xs font-semibold text-signal">
                {edu.duration}
              </span>
              <h3 className="mt-2 font-display text-lg font-bold text-ink">{edu.degree}</h3>
              <p className="text-sm text-muted">{edu.institution}</p>
              {edu.details && <p className="mt-1 text-sm font-medium text-ink">{edu.details}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
