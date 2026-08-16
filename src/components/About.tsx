import { Reveal, Stagger, StaggerItem } from './Reveal'
import { aboutTimeline } from '../data/portfolio'

export default function About() {
  return (
    <section id="apropos" className="section-pad relative">
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-orange/10 to-transparent" />
      
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="hand text-2xl text-orange">Page 01 · À propos</p>
          <h2 className="display mt-2 text-4xl font-extrabold text-navy sm:text-5xl md:text-6xl">
            À propos de moi
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.4fr_1fr]">
          <Reveal variant="scale" className="relative">
            <article className="relative overflow-hidden rounded-sm border-2 border-navy/15 bg-paper p-6 shadow-[8px_8px_0_rgba(29,53,87,0.08)] paper-texture sm:p-8 md:p-10">
              <span className="tape left-8 top-[-11px] w-28 rotate-[-4deg]" />
              <span className="tape right-10 top-[-10px] w-24 rotate-[5deg]" />
              
              <div className="absolute -left-1 top-0 h-full w-1.5 bg-gradient-to-b from-orange via-coral to-navy" aria-hidden />
              
              <p className="text-base leading-relaxed text-navy/90 sm:text-lg">
                Je suis <strong className="text-orange">Mohammed Hebbada</strong>, étudiant
                en 5ème année du cycle ingénieur en AI &amp; Data Engineering à
                l&apos;EMSI.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
                Je m&apos;intéresse particulièrement à la Data Engineering, à la
                Data Science, au Machine Learning et à l&apos;Intelligence
                Artificielle.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
                Mon objectif est de concevoir des solutions capables de transformer
                des données brutes en informations utiles, en combinant développement
                logiciel, analyse de données et intelligence artificielle.
              </p>
              <p className="hand mt-6 text-right text-xl text-navy/60">
                — M.H.
              </p>
            </article>
          </Reveal>

          <Stagger className="flex flex-col gap-5">
            <StaggerItem>
              <aside className="relative overflow-hidden rounded-sm border-2 border-orange/20 bg-paper p-5 shadow-[5px_5px_0_rgba(232,93,4,0.1)] paper-texture">
                <span className="tape left-6 top-[-10px] w-20 rotate-[-3deg]" />
                <p className="hand text-xl text-orange">En ce moment</p>
                <p className="display mt-2 text-lg font-bold text-navy">
                  Étudiant en AI &amp; Data Engineering
                </p>
                <p className="mt-1 text-sm text-muted">EMSI — Maroc</p>
              </aside>
            </StaggerItem>
          </Stagger>
        </div>

        <Reveal className="mt-14">
          <p className="hand mb-6 text-center text-xl text-navy/60">
            Mon évolution →
          </p>
          <ol className="relative mx-auto grid max-w-4xl gap-4 sm:grid-cols-4">
            <div
              className="absolute top-5 left-[12%] right-[12%] hidden h-0.5 bg-gradient-to-r from-orange via-coral to-navy sm:block"
              aria-hidden
            />
            {aboutTimeline.map((step, i) => (
              <li key={step.year} className="relative flex flex-col items-center text-center">
                <span
                  className={`relative z-10 flex h-10 w-10 items-center justify-center rounded-full border-2 border-orange text-xs font-bold ${
                    i === aboutTimeline.length - 1
                      ? 'gradient-warm text-white'
                      : 'bg-paper text-navy'
                  }`}
                >
                  {i + 1}
                </span>
                <p className="display mt-3 text-sm font-bold text-navy">{step.year}</p>
                <p className="mt-1 text-xs text-muted">{step.label}</p>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  )
}
