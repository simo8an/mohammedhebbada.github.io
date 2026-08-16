import { useRef } from 'react'
import { useInView } from 'framer-motion'
import { stats } from '../data/portfolio'
import { Reveal } from './Reveal'

export default function Stats() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="relative py-16 md:py-20" aria-label="Chiffres clés">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div
            ref={ref}
            className="relative overflow-hidden rounded-sm border-2 border-navy/10 gradient-warm p-8 shadow-[10px_10px_0_rgba(29,53,87,0.15)] sm:p-10"
          >
            <span className="tape left-10 top-[-11px] w-24 rotate-[-3deg]" />
            <span className="tape right-12 top-[-9px] w-20 rotate-[4deg]" />
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat, i) => (
                <div
                  key={stat.sub}
                  className={`text-center text-cream transition duration-700 ${
                    inView
                      ? 'translate-y-0 opacity-100'
                      : 'translate-y-6 opacity-0'
                  }`}
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <p className="display text-3xl font-extrabold sm:text-4xl">
                    {stat.value}
                    {stat.label ? (
                      <span className="ml-1 text-lg font-bold opacity-90">
                        {stat.label}
                      </span>
                    ) : null}
                  </p>
                  <p className="hand mt-2 text-xl text-yellow">{stat.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
