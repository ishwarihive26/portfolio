import { useEffect, useState } from 'react'
import { profile } from '../data/portfolioData'
import ThemeToggle from './ThemeToggle'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive('#' + e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' },
    )
    links.forEach((l) => {
      const el = document.querySelector(l.href)
      if (el) obs.observe(el)
    })
    return () => {
      window.removeEventListener('scroll', onScroll)
      obs.disconnect()
    }
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 transition duration-300 ${
        scrolled ? 'border-b border-border bg-base/80 shadow-card backdrop-blur-lg' : 'border-b border-transparent'
      }`}
    >
      <nav className="section-shell flex h-16 items-center justify-between">
        <a href="#top" className="flex items-center gap-2.5 font-display text-lg font-bold text-ink">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-signal text-sm text-white">
            IH
          </span>
          {profile.name}
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`rounded-full px-3.5 py-1.5 text-sm font-medium transition-colors ${
                  active === link.href ? 'bg-signal-soft text-signal' : 'text-muted hover:text-ink'
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a href={profile.resumeFile} download className="btn btn-primary hidden !px-5 !py-2 md:inline-flex">
            Resume
          </a>
          <button
            type="button"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-surface md:hidden"
          >
            <div className="space-y-1.5">
              <span className={`block h-0.5 w-5 bg-ink transition-transform ${open ? 'translate-y-2 rotate-45' : ''}`} />
              <span className={`block h-0.5 w-5 bg-ink transition-opacity ${open ? 'opacity-0' : ''}`} />
              <span className={`block h-0.5 w-5 bg-ink transition-transform ${open ? '-translate-y-2 -rotate-45' : ''}`} />
            </div>
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-border bg-base md:hidden">
          <ul className="section-shell flex flex-col gap-1 py-3">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2 text-sm font-medium text-muted hover:bg-signal-soft hover:text-signal"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a href={profile.resumeFile} download onClick={() => setOpen(false)} className="btn btn-primary mt-1 w-full">
                Resume
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
