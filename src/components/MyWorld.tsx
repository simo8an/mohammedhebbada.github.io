import { worldMoments } from '../data/portfolio'
import { Reveal } from './Reveal'
import ScrapbookPhoto from './ScrapbookPhoto'

export default function MyWorld() {
  if (worldMoments.length === 0) return null

  return (
    <section id="world" className="section-pad relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-coral/10 to-transparent" />

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="hand text-2xl text-orange">Page 07 · Mon univers</p>
          <h2 className="display mt-2 text-4xl font-extrabold text-navy sm:text-5xl md:text-6xl">
            Mon univers
          </h2>
          <p className="mt-4 max-w-xl text-muted">
            Quelques moments, projets et souvenirs qui racontent mon parcours.
          </p>
        </Reveal>

        <div className="mt-12">
          <div className="relative grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            {worldMoments.map((moment, index) => (
              <Reveal key={moment.src} delay={index * 0.08}>
                <div className="relative group">
                  <div className="relative overflow-hidden rounded-sm border-2 border-navy/15 bg-paper shadow-[6px_6px_0_rgba(29,53,87,0.08)] paper-texture">
                    <ScrapbookPhoto
                      src={moment.src}
                      alt={moment.alt}
                      caption={moment.caption}
                      rotate={moment.rotate}
                      variant="polaroid"
                      tape={index % 2 === 0 ? 'both' : 'center'}
                      delay={index * 0.08}
                      className="w-full"
                    />
                    {moment.note && (
                      <span className="hand absolute -right-2 -top-2 z-30 rounded-sm border border-navy/20 bg-coral px-2 py-0.5 text-sm text-cream shadow rotate-[8deg]">
                        {moment.note}
                      </span>
                    )}
                  </div>
                  {index === 0 && (
                    <p className="hand mt-4 text-center text-xl text-navy/60">
                      ← survole une photo
                    </p>
                  )}
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {['Études', 'Projets', 'Apprentissage', 'Data', 'IA'].map((tag, i) => (
              <span
                key={tag}
                className="hand rounded-sm border-2 border-dashed border-navy/25 bg-cream px-3 py-1 text-lg text-navy"
                style={{ transform: `rotate(${(i - 2) * 2}deg)` }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
