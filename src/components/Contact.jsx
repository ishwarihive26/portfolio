import { useState } from 'react'
import { profile, contact } from '../data/portfolioData'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sent

  function handleChange(e) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    // No backend needed: opens the visitor's email app with the message filled in.
    const subject = encodeURIComponent(`Portfolio message from ${form.name}`)
    const body = encodeURIComponent(`${form.message}

${form.name} (${form.email})`)
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
    setStatus('sent')
  }

  return (
    <section id="contact" className="bg-base py-20 md:py-24">
      <div className="section-shell grid gap-8 md:grid-cols-[minmax(0,10rem)_1fr]">
        <h2 className="section-title">
          Contact
        </h2>

        <div className="grid gap-10 lg:grid-cols-[minmax(0,20rem)_1fr]">
          <div>
            <h3 className="font-display text-lg font-semibold text-ink">
              {contact.heading}
            </h3>
            <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted">
              {contact.subheading}
            </p>

            <ul className="mt-6 space-y-3">
              <li>
                <a
                  href={`mailto:${profile.email}`}
                  className="block rounded-xl border border-border bg-surface px-4 py-3 text-sm font-medium text-ink transition hover:-translate-y-0.5 hover:border-signal hover:text-signal"
                >
                  {profile.email}
                </a>
              </li>
              <li>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-xl border border-border bg-surface px-4 py-3 text-sm font-medium text-ink transition hover:-translate-y-0.5 hover:border-signal hover:text-signal"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-xl border border-border bg-surface px-4 py-3 text-sm font-medium text-ink transition hover:-translate-y-0.5 hover:border-signal hover:text-signal"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>

          <form
            onSubmit={handleSubmit}
            className="max-w-xl space-y-4 rounded-2xl border border-border bg-surface p-6 shadow-card"
            aria-label="Contact form"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="mb-1.5 block text-xs font-medium text-muted"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-border bg-base px-3.5 py-2.5 text-sm text-ink outline-none transition focus:border-signal focus:bg-surface focus:ring-4 focus:ring-signal/10"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="mb-1.5 block text-xs font-medium text-muted"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-border bg-base px-3.5 py-2.5 text-sm text-ink outline-none transition focus:border-signal focus:bg-surface focus:ring-4 focus:ring-signal/10"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="message"
                className="mb-1.5 block text-xs font-medium text-muted"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={form.message}
                onChange={handleChange}
                className="w-full resize-none rounded-lg border border-border bg-base px-3.5 py-2.5 text-sm text-ink outline-none transition focus:border-signal focus:bg-surface focus:ring-4 focus:ring-signal/10"
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary"
            >
              Send Message
            </button>

            {status === 'sent' && (
              <p role="status" className="text-sm text-teal">
                Your email app should open with the message ready to send.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
