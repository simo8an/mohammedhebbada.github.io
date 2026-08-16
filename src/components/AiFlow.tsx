import { motion } from 'framer-motion'
import { Bot } from 'lucide-react'
import { Reveal } from './Reveal'
import FloatingCodeCard from './FloatingCodeCard'

const nodes = [
  { label: 'Data', x: '8%', y: '55%' },
  { label: 'Python', x: '28%', y: '28%' },
  { label: 'Modèle', x: '52%', y: '55%' },
  { label: 'ML', x: '72%', y: '28%' },
  { label: 'Prédiction', x: '88%', y: '55%' },
]

export default function AiFlow() {
  return (
    <section className="relative overflow-hidden py-16 md:py-24" aria-label="Composition IA">
      <div className="absolute inset-0 bg-gradient-to-r from-navy/5 via-transparent to-orange/10" />

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="hand text-2xl text-orange">Page carnet · IA</p>
          <h2 className="display mt-2 text-3xl font-extrabold text-navy sm:text-4xl md:text-5xl">
            Du flux de données à la prédiction
          </h2>
          <p className="mt-3 max-w-xl text-muted">
            Une petite composition pour visualiser comment je pense les
            solutions Data &amp; IA.
          </p>
        </Reveal>

        <div className="relative mt-12 min-h-[280px] rounded-sm border-2 border-navy/10 bg-paper/80 p-6 shadow-[8px_8px_0_rgba(29,53,87,0.08)] paper-texture sm:min-h-[320px] sm:p-10">
          <span className="tape left-8 top-[-11px] w-24 rotate-[-3deg]" />
          <span className="tape right-10 top-[-10px] w-20 rotate-[5deg]" />

          {/* Lignes de flux animées */}
          <svg
            className="absolute inset-0 h-full w-full opacity-60"
            aria-hidden
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="aiFlow" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#E85D04" />
                <stop offset="100%" stopColor="#1D3557" />
              </linearGradient>
            </defs>
            <motion.path
              d="M60 160 C 140 80, 220 220, 320 160 S 520 80, 640 160"
              fill="none"
              stroke="url(#aiFlow)"
              strokeWidth="2"
              strokeDasharray="6 8"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.8, ease: 'easeInOut' }}
            />
          </svg>

          <div className="relative z-10 flex flex-col items-center gap-6 sm:hidden">
            {['Data', '↓', 'Modèle', '↓', 'Prédiction'].map((t) => (
              <span
                key={t}
                className={`hand text-xl ${t === '↓' ? 'text-orange' : 'rounded-sm border-2 border-navy bg-cream px-3 py-1 text-navy shadow-sm'}`}
              >
                {t}
              </span>
            ))}
          </div>

          <div className="relative z-10 hidden h-56 sm:block">
            <motion.div
              className="absolute left-1/2 top-2 flex -translate-x-1/2 flex-col items-center"
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-sm border-2 border-navy gradient-warm text-white shadow-[4px_4px_0_rgba(29,53,87,0.15)]">
                <Bot size={28} />
              </div>
              <p className="hand mt-1 text-xl text-navy">IA</p>
            </motion.div>

            {nodes.map((n, i) => (
              <motion.span
                key={n.label}
                className="sticker absolute border-navy bg-paper"
                style={{ left: n.x, top: n.y }}
                initial={{ opacity: 0, scale: 0.7 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 * i }}
                whileHover={{ scale: 1.1, rotate: -4 }}
              >
                {n.label}
              </motion.span>
            ))}
          </div>

          <p className="hand relative z-10 mt-4 text-center text-xl text-navy/55 sm:mt-0">
            DATA → ETL → PIPELINE → ANALYSE → MODÈLE → PRÉDICTION
          </p>

          <div className="pointer-events-none absolute -right-2 bottom-4 hidden md:block">
            <FloatingCodeCard
              title="Machine Learning"
              code={'model.fit(X_train, y_train)'}
              delay={0.3}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
