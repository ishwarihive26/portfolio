import { useEffect, useState } from 'react'
import { profile } from '../data/portfolioData'

const roles = ['MERN stack apps', 'AI-powered tools', 'clean REST APIs']

const chips = [
  { label: 'React', color: '#38bdf8', pos: 'left-0 top-4 sm:-left-6' },
  { label: 'Node.js', color: '#84cc16', pos: 'right-0 top-12 sm:-right-8' },
  { label: 'MongoDB', color: '#16a34a', pos: 'bottom-10 left-0 sm:-left-10' },
  { label: 'Express', color: '#161936', pos: 'bottom-0 right-2 sm:-right-2' },
]

function useTypewriter(words) {
  const [text, setText] = useState(words[0])
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    let w = 0, i = 0, deleting = false, t
    const tick = () => {
      const word = words[w]
      i += deleting ? -1 : 1
      setText(word.slice(0, i))
      let delay = deleting ? 35 : 70
      if (!deleting && i === word.length) { deleting = true; delay = 1600 }
      else if (deleting && i === 0) { deleting = false; w = (w + 1) % words.length; delay = 300 }
      t = setTimeout(tick, delay)
    }
    setText('')
    t = setTimeout(tick, 500)
    return () => clearTimeout(t)
  }, [words])
  return text
}

const d = (n) => ({ animationDelay: `${n * 110}ms` })

export default function Hero() {
  const typed = useTypewriter(roles)

  return (
    <section id="top" className="relative overflow-hidden">
      <div className="hero-bg" aria-hidden="true" />
      <div className="section-shell relative grid items-center gap-14 pb-20 pt-10 md:grid-cols-[1.3fr_1fr] md:pb-28 md:pt-16">
        <div className="order-2 md:order-1">
          <p
            style={d(0)}
            className="hero-rise inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3.5 py-1.5 text-sm font-medium text-ink shadow-card"
          >
            <span className="h-2 w-2 animate-pulse rounded-full bg-teal" />
            Open to internships
          </p>
          <h1
            style={d(1)}
            className="hero-rise mt-6 font-display text-5xl font-extrabold leading-[1.05] tracking-tight text-ink sm:text-6xl lg:text-7xl"
          >
            Hi, I'm {profile.name}
          </h1>
          <p style={d(2)} className="hero-rise mt-5 font-display text-2xl font-semibold text-signal sm:text-3xl">
            <span className="sr-only">{profile.role}</span>
            <span aria-hidden="true">
              I build {typed}
              <span className="caret" />
            </span>
          </p>
          <p style={d(3)} className="hero-rise mt-6 max-w-xl text-base leading-relaxed text-muted">
            {profile.tagline}
          </p>

          <div style={d(4)} className="hero-rise mt-9 flex flex-wrap items-center gap-3">
            <a href={profile.resumeFile} download className="btn btn-primary">Download resume</a>
            <a href="#projects" className="btn btn-ghost">See my projects</a>
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">GitHub</a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">LinkedIn</a>
          </div>
        </div>

        <div style={d(2)} className="hero-rise order-1 flex justify-center md:order-2">
          <div className="avatar-wrap relative h-52 w-52 sm:h-64 sm:w-64">
            <span className="avatar-glow" aria-hidden="true" />
            <span className="avatar-ring" aria-hidden="true" />
            <img
              src={profile.photo}
              alt={`Portrait of ${profile.name}`}
              width="256"
              height="256"
              className="avatar-img relative h-full w-full rounded-full border-4 border-base object-cover object-top"
            />
            {chips.map((c, i) => (
              <span
                key={c.label}
                style={{ animationDelay: `${i * 0.7}s` }}
                className={`chip-float absolute ${c.pos} flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1.5 text-xs font-semibold text-ink shadow-card`}
              >
                <span className="h-2 w-2 rounded-full" style={{ background: c.color }} />
                {c.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
