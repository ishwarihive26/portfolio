import { skills } from '../data/portfolioData'

export default function Skills() {
  return (
    <section id="skills" className="bg-surface py-20 md:py-24">
      <div className="section-shell grid gap-8 md:grid-cols-[minmax(0,10rem)_1fr]">
        <h2 className="section-title">Skills</h2>
        <div className="grid gap-5 sm:grid-cols-2">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="rounded-2xl border border-border bg-base p-6">
              <h3 className="font-display text-base font-semibold text-ink">{category}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {items.map((item) => (
                  <li
                    key={item}
                    className="cursor-default rounded-full border border-border bg-surface px-3.5 py-1.5 text-sm text-ink transition duration-200 hover:-translate-y-0.5 hover:border-signal hover:bg-signal-soft hover:text-signal"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
