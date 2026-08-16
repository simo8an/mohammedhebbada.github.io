import { education, educationPhotos } from '../data/portfolio'
import { Reveal, Stagger, StaggerItem } from './Reveal'
import ScrapbookPhoto from './ScrapbookPhoto'
import FloatingCodeCard from './FloatingCodeCard'

const annotations = [
  "Mes années d'études",
  'Apprendre',
  'Évoluer',
  'Construire mon avenir',
  'Toujours curieux',
]

export default function Education() {
  return (
    <section id="parcours" className="section-pad relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-orange/8 via-transparent to-coral/8" />

      <div className="pointer-events-none absolute inset-0 hidden lg:block" aria-hidden>
        <FloatingCodeCard
          className="absolute top-40 right-[3%] rotate-[3deg]"
          title="Data Engineering"
          code={'DATA → ETL → PIPELINE → ANALYSE'}
          delay={0.2}
        />
        <PostItNote className="absolute bottom-32 left-[4%] rotate-[-8deg]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="hand text-2xl text-orange">Page 05 · Formation</p>
          <h2 className="display mt-2 text-4xl font-extrabold text-navy sm:text-5xl md:text-6xl">
            Mon parcours
          </h2>
          <p className="mt-4 max-w-xl text-muted">
            Photos d'études, labs et cours — collés comme dans un vrai carnet
            d'ingénieur.
          </p>
        </Reveal>

        <div className="relative mx-auto mt-14 max-w-4xl">
          <div
            className="absolute top-3 bottom-3 left-[1.15rem] w-0.5 bg-gradient-to-b from-orange to-navy sm:left-1/2 sm:-translate-x-1/2"
            aria-hidden
          />

          <Stagger className="space-y-10">
            {education.map((item, i) => (
              <StaggerItem key={item.year}>
                <div
                  className={`relative flex flex-col sm:flex-row sm:items-start ${
                    i % 2 === 0 ? 'sm:justify-start' : 'sm:justify-end'
                  }`}
                >
                  <span className="absolute top-3 left-3 z-10 h-4 w-4 rounded-full border-2 border-cream gradient-warm sm:left-1/2 sm:-translate-x-1/2" />
                  <article
                    className={`ml-12 w-full max-w-md border-2 border-navy/15 bg-paper p-5 shadow-[6px_6px_0_rgba(29,53,87,0.08)] paper-texture sm:ml-0 ${
                      i % 2 === 0
                        ? 'sm:mr-[calc(50%+1.5rem)] rotate-[-1deg]'
                        : 'sm:ml-[calc(50%+1.5rem)] rotate-[1deg]'
                    }`}
                  >
                    <span
                      className={`tape top-[-10px] w-16 ${
                        i % 2 === 0 ? 'left-5 rotate-[-4deg]' : 'right-5 rotate-[4deg]'
                      }`}
                    />
                    <p className="text-[11px] font-semibold uppercase tracking-wide text-navy/50">
                      Année
                    </p>
                    <p className="hand text-2xl text-orange">{item.year}</p>
                    <p className="mt-2 text-[11px] font-semibold uppercase tracking-wide text-navy/50">
                      Formation
                    </p>
                    <h3 className="display mt-1 text-lg font-bold text-navy">
                      {item.title}
                    </h3>
                    {item.institution && (
                      <>
                        <p className="mt-2 text-[11px] font-semibold uppercase tracking-wide text-navy/50">
                          Établissement
                        </p>
                        <p className="mt-1 text-sm font-semibold text-coral-deep">
                          {item.institution}
                        </p>
                      </>
                    )}
                    {item.details && (
                      <>
                        <p className="mt-3 text-[11px] font-semibold uppercase tracking-wide text-navy/50">
                          Spécialisation
                        </p>
                        <ul className="mt-2 flex flex-wrap gap-2">
                          {item.details.map((d) => (
                            <li key={d} className="sticker border-navy bg-cream text-sm">
                              {d}
                            </li>
                          ))}
                        </ul>
                      </>
                    )}
                  </article>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>

        <Reveal className="mt-16">
          <div className="relative rounded-sm border-2 border-navy/10 bg-paper/70 p-5 shadow-[8px_8px_0_rgba(29,53,87,0.06)] paper-texture sm:p-8">
            <span className="tape left-8 top-[-11px] w-24 rotate-[-4deg]" />
            <span className="tape right-10 top-[-10px] w-20 rotate-[5deg]" />
            <p className="hand mb-2 text-2xl text-navy">Carnet de campus — EMSI</p>
            <p className="mb-8 text-sm text-muted">
              Des photos imprimées, du scotch, et des souvenirs d'apprentissage.
            </p>

            {/* Composition asymétrique scrapbook */}
            <div className="relative grid grid-cols-2 gap-4 md:grid-cols-6 md:gap-5">
              {educationPhotos.map((photo, i) => (
                <div
                  key={photo.src}
                  className={
                    i === 0
                      ? 'col-span-2 md:col-span-3 md:row-span-2'
                      : i === 1
                        ? 'col-span-1 md:col-span-2'
                        : i === 2
                          ? 'col-span-1 md:col-span-1 md:mt-8'
                          : i === 3
                            ? 'col-span-1 md:col-span-2 md:-mt-4'
                            : 'col-span-1 md:col-span-2'
                  }
                >
                  <ScrapbookPhoto
                    src={photo.src}
                    alt={photo.alt}
                    caption={photo.caption}
                    rotate={photo.rotate}
                    variant="polaroid"
                    tape={i % 2 === 0 ? 'both' : 'center'}
                    delay={i * 0.08}
                    annotation={annotations[i]}
                    className="w-full"
                  />
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {['Cahiers', 'Labs', 'Code', 'Graphiques', 'Notes'].map((t, i) => (
                <span
                  key={t}
                  className="hand rounded-sm border-2 border-dashed border-navy/25 bg-cream px-3 py-1 text-lg text-navy"
                  style={{ transform: `rotate(${(i - 2) * 2}deg)` }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function PostItNote({ className }: { className?: string }) {
  return (
    <div
      className={`w-32 bg-yellow p-3 shadow-[3px_3px_0_rgba(29,53,87,0.12)] ${className}`}
    >
      <p className="hand text-lg leading-tight text-navy">
        Toujours en apprentissage ✦
      </p>
    </div>
  )
}
