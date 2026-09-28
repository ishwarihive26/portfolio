import { profile } from '../data/portfolioData'

export default function Footer() {
  const year = new Date().getFullYear()
  const link = 'transition-colors hover:text-white'

  return (
    <footer className="bg-night py-8 text-sm text-white/60">
      <div className="section-shell flex flex-col items-center justify-between gap-4 sm:flex-row">
        <p>© {year} {profile.name}. Built with React and Tailwind CSS.</p>
        <div className="flex gap-5">
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className={link}>GitHub</a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className={link}>LinkedIn</a>
          <a href={`mailto:${profile.email}`} className={link}>Email</a>
          <a href="#top" className={link}>Back to top</a>
        </div>
      </div>
    </footer>
  )
}
