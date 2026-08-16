import { Reveal } from './Reveal'
import { techCategories } from '../data/skills'
import TechStickerCard from './TechSticker'
import FloatingCodeCard from './FloatingCodeCard'
import MiniChart from './MiniChart'

export default function Skills() {
  return (
    <section id="competences" className="section-pad relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-orange/10 to-transparent" />

      {/* Décor flottant */}
      <div className="pointer-events-none absolute inset-0 hidden lg:block" aria-hidden>
        <FloatingCodeCard
          className="absolute top-28 right-[4%] rotate-[4deg]"
          title="Python"
          code={'import pandas as pd\ndf.head()'}
          delay={0.2}
        />
        <FloatingCodeCard
          className="absolute bottom-24 left-[3%] rotate-[-5deg]"
          title="SQL"
          code={'SELECT * FROM data;'}
          delay={0.4}
        />
        <div className="absolute top-[45%] right-[6%]">
          <MiniChart />
        </div>
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="hand text-2xl text-coral-deep">Page 02 · Stickers tech</p>
          <h2 className="display mt-2 text-4xl font-extrabold text-navy sm:text-5xl md:text-6xl">
            Ma boîte à outils
          </h2>
          <p className="mt-4 max-w-xl text-muted">
            Logos collés comme des stickers dans mon carnet — survole-les pour
            découvrir mon usage de chaque techno.
          </p>
        </Reveal>

        <div className="mt-12 space-y-12">
          {techCategories.map((cat, ci) => (
            <Reveal key={cat.title} delay={ci * 0.04}>
              <div
                className="relative rounded-sm border-2 border-navy/10 bg-paper/85 p-5 shadow-[7px_7px_0_rgba(29,53,87,0.07)] paper-texture sm:p-8"
                style={{ transform: `rotate(${cat.rotation}deg)` }}
              >
                <span
                  className={`tape top-[-11px] w-24 ${
                    ci % 2 === 0 ? 'left-6 rotate-[-4deg]' : 'right-8 rotate-[5deg]'
                  }`}
                />
                {ci % 3 === 0 && (
                  <span className="hand absolute -right-1 top-3 hidden rotate-[12deg] text-xl text-orange sm:block">
                    ★
                  </span>
                )}
                <div className="mb-5 flex flex-wrap items-center gap-3">
                  <h3 className="display text-lg font-bold text-navy sm:text-xl">
                    {cat.title}
                  </h3>
                  <span className="hand rounded-sm border border-dashed border-navy/30 bg-yellow/60 px-2 py-0.5 text-sm text-navy">
                    collé au carnet
                  </span>
                </div>

                {/* Composition asymétrique, pas une grille SaaS */}
                <div className="flex flex-wrap items-end justify-start gap-x-3 gap-y-6 sm:gap-x-5 sm:gap-y-8">
                  {cat.stickers.map((sticker, si) => (
                    <div
                      key={sticker.id}
                      className={si % 5 === 2 ? 'mt-4 sm:mt-8' : si % 4 === 1 ? '-mt-1' : ''}
                    >
                      <TechStickerCard sticker={sticker} index={si} />
                    </div>
                  ))}
                </div>

                {ci === 0 && (
                  <p className="hand mt-6 text-right text-xl text-navy/45">
                    ← survole un sticker
                  </p>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
