import {
  BarChart3,
  Brain,
  Database,
  LineChart,
} from 'lucide-react'
import { services } from '../data/portfolio'
import { Reveal, Stagger, StaggerItem } from './Reveal'

const icons = {
  analysis: BarChart3,
  engineering: Database,
  ai: Brain,
  viz: LineChart,
}

const rotations = [-1.5, 1.2, -0.8, 1.5]

export default function Services() {
  return (
    <section id="savoir-faire" className="section-pad relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="hand text-2xl text-coral-deep">Page 06 · Expertise</p>
          <h2 className="display mt-2 text-4xl font-extrabold text-navy sm:text-5xl md:text-6xl">
            Ce que je sais faire
          </h2>
          <p className="mt-4 max-w-xl text-muted">
            Quatre piliers pour transformer la donnée en valeur.
          </p>
        </Reveal>

        <Stagger className="mt-12 grid gap-6 sm:grid-cols-2">
          {services.map((service, i) => {
            const Icon = icons[service.icon]
            return (
              <StaggerItem key={service.id}>
                <article
                  className="group relative h-full overflow-hidden border-2 border-navy/15 bg-paper p-6 shadow-[7px_7px_0_rgba(29,53,87,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[10px_10px_0_rgba(232,93,4,0.2)] paper-texture sm:p-8"
                  style={{ transform: `rotate(${rotations[i]}deg)` }}
                >
                  <span
                    className={`tape top-[-11px] w-16 ${
                      i % 2 === 0 ? 'left-6 rotate-[-5deg]' : 'right-6 rotate-[5deg]'
                    }`}
                  />
                  <div
                    className={`mb-5 inline-flex rounded-sm p-3 ${
                      i % 2 === 0
                        ? 'gradient-warm text-white'
                        : 'gradient-navy text-cream'
                    }`}
                  >
                    <Icon size={28} strokeWidth={1.75} />
                  </div>
                  <h3 className="display text-xl font-extrabold tracking-tight text-navy sm:text-2xl">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
                    {service.description}
                  </p>
                  <div
                    className="pointer-events-none absolute -right-6 -bottom-6 h-28 w-28 rounded-full bg-orange/10 transition group-hover:scale-125"
                    aria-hidden
                  />
                </article>
              </StaggerItem>
            )
          })}
        </Stagger>
      </div>
    </section>
  )
}
