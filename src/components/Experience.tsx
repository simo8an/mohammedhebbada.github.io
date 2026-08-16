import type { Experience as ExperienceType } from '../data/portfolio'
import { experiences } from '../data/portfolio'
import { Reveal } from './Reveal'
import ScrapbookPhoto from './ScrapbookPhoto'

function LiyaYoScrapbook({ exp }: { exp: ExperienceType }) {
  const images = exp.images ?? []
  const main = images[0]
  const secondary = images.slice(1)

  return (
    <article
      id="experience-liya-yo"
      className="relative mb-16 overflow-hidden rounded-sm border-2 border-navy/15 bg-paper p-5 shadow-[10px_10px_0_rgba(232,93,4,0.12)] paper-texture sm:p-8 md:p-10"
    >
      <span className="tape left-8 top-[-11px] w-28 rotate-[-4deg]" />
      <span className="tape right-10 top-[-10px] w-24 rotate-[5deg]" />

      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="hand text-2xl text-orange">Mon expérience — LIYA YO</p>
          <h3 className="display mt-1 text-2xl font-extrabold text-navy sm:text-3xl">
            {exp.role}
          </h3>
          <p className="mt-1 text-sm font-semibold text-coral-deep">
            {exp.company} — {exp.location}
          </p>
          <p className="hand mt-1 text-lg text-navy/70">{exp.period}</p>
        </div>
        {exp.current && (
          <span className="rounded-sm bg-orange px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-white">
            En cours
          </span>
        )}
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-wide text-navy/50">
            Missions
          </p>
          <p className="mt-2 text-sm leading-relaxed text-muted sm:text-base">
            {exp.description}
          </p>
          <p className="mt-5 text-[11px] font-semibold uppercase tracking-wide text-navy/50">
            Technologies utilisées
          </p>
          <div className="mt-2 flex flex-wrap gap-1.5">
            {exp.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-sm border border-navy/15 bg-cream px-2 py-0.5 text-[11px] text-navy"
              >
                {tech}
              </span>
            ))}
          </div>
          <p className="hand mt-4 text-lg text-navy/60">
            Data · IA · Machine Learning →
          </p>
        </div>

        {/* Scrapbook collage — images fournies pour LIYA YO */}
        <div className="relative min-h-[280px] sm:min-h-[340px]">
          {main && (
            <div className="relative z-20 mx-auto w-[88%] max-w-sm sm:mx-0">
              <ScrapbookPhoto
                src={main.src}
                alt={main.alt}
                caption={main.caption}
                rotate={main.rotate ?? -2}
                variant="polaroid"
                tape="both"
                className="w-full"
              />
              {main.note && (
                <span className="hand absolute -right-2 top-6 z-30 rounded-sm border-2 border-navy bg-yellow px-2 py-0.5 text-base text-navy shadow rotate-[10deg] sm:-right-6">
                  {main.note}
                </span>
              )}
            </div>
          )}

          {secondary.map((img, i) => (
            <div
              key={img.src}
              className={`relative z-10 mt-4 w-[70%] max-w-[200px] sm:absolute sm:mt-0 sm:w-[55%] sm:max-w-[210px] ${
                i === 0
                  ? 'ml-auto sm:right-0 sm:top-[55%]'
                  : 'sm:left-[8%] sm:bottom-0'
              }`}
            >
              <ScrapbookPhoto
                src={img.src}
                alt={img.alt}
                caption={img.caption}
                rotate={img.rotate ?? 3}
                variant="print"
                tape="center"
                className="w-full"
              />
              {img.note && (
                <span className="hand absolute -left-2 -bottom-2 z-30 rounded-sm border border-navy/20 bg-coral px-2 py-0.5 text-sm text-cream shadow rotate-[-6deg]">
                  {img.note}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </article>
  )
}

export default function Experience() {
  const featured = experiences.filter((e) => e.featured)
  const others = experiences.filter((e) => !e.featured)

  return (
    <section id="experiences" className="section-pad relative">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="hand text-2xl text-coral-deep">Page 04 · Expériences</p>
          <h2 className="display mt-2 text-4xl font-extrabold text-navy sm:text-5xl md:text-6xl">
            Mes expériences
          </h2>
        </Reveal>

        <div className="mt-12">
          {featured.map((exp) => (
            <Reveal key={exp.id}>
              <LiyaYoScrapbook exp={exp} />
            </Reveal>
          ))}
        </div>

        <div className="relative mt-4">
          <div
            className="absolute top-0 bottom-0 left-4 w-0.5 bg-gradient-to-b from-orange via-coral to-navy md:left-1/2 md:-translate-x-1/2"
            aria-hidden
          />

          {others.map((exp, i) => {
            const leftSide = i % 2 === 0
            return (
              <Reveal key={exp.id} className="relative mb-14 md:mb-20">
                <span className="absolute top-6 left-2.5 z-10 h-4 w-4 rounded-full border-2 border-cream gradient-warm md:left-1/2 md:-translate-x-1/2" />

                <div
                  className={`relative ml-12 space-y-5 md:ml-0 md:w-[calc(50%-2rem)] ${
                    leftSide ? 'md:mr-auto' : 'md:ml-auto'
                  }`}
                >
                  <article
                    className={`relative border-2 border-navy/15 bg-paper p-6 shadow-[8px_8px_0_rgba(29,53,87,0.1)] paper-texture sm:p-8 ${
                      leftSide ? 'rotate-[-1deg]' : 'rotate-[1deg]'
                    }`}
                  >
                    <span className="tape left-8 top-[-11px] w-24 rotate-[-3deg]" />
                    <p className="hand text-xl text-orange">{exp.period}</p>
                    <h3 className="display mt-2 text-xl font-bold text-navy sm:text-2xl">
                      {exp.role}
                    </h3>
                    <p className="mt-1 text-sm font-semibold text-coral-deep">
                      {exp.company} — {exp.location}
                    </p>
                    <p className="mt-2 text-[11px] font-semibold uppercase tracking-wide text-navy/50">
                      Ce que j&apos;ai réalisé
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-muted sm:text-base">
                      {exp.description}
                    </p>
                    <p className="mt-4 text-[11px] font-semibold uppercase tracking-wide text-navy/50">
                      Technologies utilisées
                    </p>
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-sm border border-navy/15 bg-cream px-2 py-0.5 text-[11px] text-navy"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </article>

                  {exp.images && exp.images.length > 0 && (
                    <div className="relative flex flex-col items-center gap-3 sm:flex-row sm:flex-wrap sm:items-end sm:justify-center">
                      {exp.images.map((img, idx) => (
                        <ScrapbookPhoto
                          key={img.src}
                          src={img.src}
                          alt={img.alt}
                          caption={img.caption}
                          rotate={img.rotate ?? (idx % 2 === 0 ? -2 : 3)}
                          variant="polaroid"
                          tape={idx === 0 ? 'both' : 'center'}
                          className={
                            idx === 0
                              ? 'w-full max-w-xs sm:max-w-[220px]'
                              : 'w-[70%] max-w-[160px] sm:w-[45%]'
                          }
                        />
                      ))}
                      <p className="hand absolute -bottom-4 right-0 rounded-sm border border-navy/15 bg-yellow px-2 py-0.5 text-base text-navy shadow rotate-[4deg]">
                        Souvenirs de stage
                      </p>
                    </div>
                  )}
                </div>
              </Reveal>
            )
          })}

          <Reveal>
            <div className="relative ml-12 rounded-sm border-2 border-dashed border-navy/30 bg-cream/50 p-6 text-center md:mx-auto md:max-w-md md:ml-auto">
              <p className="hand text-xl text-navy/60">
                Prochaines expériences à venir…
              </p>
              <p className="mt-2 text-sm text-muted">
                La frise s&apos;enrichira au fil des stages et missions.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
