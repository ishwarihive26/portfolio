import { about, facts } from '../data/portfolioData'

export default function About() {
  return (
    <section id="about" className="bg-base py-20 md:py-24">
      <div className="section-shell grid gap-8 md:grid-cols-[minmax(0,10rem)_1fr]">
        <h2 className="section-title">About</h2>
        <div>
          <div className="max-w-2xl space-y-4 text-base leading-relaxed text-muted">
            {about.paragraphs.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
          <dl className="mt-10 grid gap-4 sm:grid-cols-3">
            {facts.map((f) => (
              <div
                key={f.label}
                className="rounded-2xl border border-border bg-surface p-5 shadow-card transition duration-200 hover:-translate-y-1 hover:shadow-lift"
              >
                <dt className="font-display text-2xl font-bold text-signal">{f.value}</dt>
                <dd className="mt-1 text-sm leading-snug text-muted">{f.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
