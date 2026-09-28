export default function ProjectCard({ project, reverse }) {
  const { title, image, description, tech, features, github, demo } = project

  return (
    <article className="group grid items-center gap-8 rounded-3xl border border-border bg-surface p-5 shadow-card transition duration-300 hover:shadow-lift md:grid-cols-[1.4fr_1fr] md:gap-10 md:p-8">
      <div className={reverse ? 'md:order-2' : ''}>
        <div className="overflow-hidden rounded-xl border border-border bg-surface shadow-lift transition duration-300 group-hover:-translate-y-1">
          <div className="flex items-center gap-1.5 border-b border-border bg-base px-4 py-2.5" aria-hidden="true">
            <span className="h-2.5 w-2.5 rounded-full bg-red-300" />
            <span className="h-2.5 w-2.5 rounded-full bg-sun" />
            <span className="h-2.5 w-2.5 rounded-full bg-teal/60" />
          </div>
          {image ? (
            <a
              href={image}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${title} screenshot full size`}
            >
              <img src={image} alt={`${title} screenshot`} loading="lazy" className="block h-auto w-full" />
            </a>
          ) : (
            <div className="flex aspect-[16/9] items-center justify-center bg-signal-soft text-sm font-medium text-signal">
              {title}
            </div>
          )}
        </div>
      </div>

      <div className={reverse ? 'md:order-1' : ''}>
        <h3 className="font-display text-2xl font-bold text-ink">{title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-muted">{description}</p>

        <ul className="mt-5 space-y-2">
          {features.map((feature) => (
            <li key={feature} className="flex items-start gap-2 text-sm text-muted">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal" />
              {feature}
            </li>
          ))}
        </ul>

        <div className="mt-5 flex flex-wrap gap-2">
          {tech.map((t) => (
            <span key={t} className="rounded-full bg-signal-soft px-3 py-1 text-xs font-semibold text-signal">
              {t}
            </span>
          ))}
        </div>

        {(github || demo) && (
          <div className="mt-6 flex gap-3">
            {github && (
              <a href={github} target="_blank" rel="noopener noreferrer" className="btn btn-ghost !px-4 !py-2">
                GitHub
              </a>
            )}
            {demo && (
              <a href={demo} target="_blank" rel="noopener noreferrer" className="btn btn-primary !px-4 !py-2">
                Live demo
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  )
}
