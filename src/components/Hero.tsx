import type { ReactNode } from 'react'
import { motion } from 'framer-motion'
import {
  BarChart3,
  Bot,
  Database,
  Monitor,
  Terminal,
} from 'lucide-react'
import ScrapbookPhoto from './ScrapbookPhoto'

const stickers = [
  { label: 'Python', rotate: -8, top: '8%', left: '4%', color: 'bg-yellow' },
  { label: 'SQL', rotate: 6, top: '18%', right: '6%', color: 'bg-white' },
  { label: 'IA', rotate: -4, bottom: '28%', left: '8%', color: 'bg-coral text-white border-coral-deep' },
  { label: 'Data', rotate: 10, bottom: '18%', right: '10%', color: 'bg-navy text-cream border-navy' },
]

function FloatingCard({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode
  className?: string
  delay?: number
}) {
  return (
    <motion.div
      className={`absolute hidden rounded-sm border-2 border-navy/20 bg-paper p-3 shadow-[4px_4px_0_rgba(29,53,87,0.12)] paper-texture lg:block ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4, rotate: 0 }}
    >
      <span className="tape tape-clear left-1/2 top-[-10px] w-16 -translate-x-1/2 rotate-[-2deg]" />
      {children}
    </motion.div>
  )
}

export default function Hero() {
  return (
    <section
      id="accueil"
      className="relative min-h-screen overflow-hidden pt-24 pb-16 md:pt-28"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-20 top-32 h-64 w-64 rounded-full bg-orange/15 blur-3xl" />
        <div className="absolute right-0 top-20 h-72 w-72 rounded-full bg-coral/15 blur-3xl" />
        <svg
          className="absolute inset-0 h-full w-full opacity-30"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="flow" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#E85D04" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#1D3557" stopOpacity="0.3" />
            </linearGradient>
          </defs>
          <path
            d="M-20 180 C 120 80, 280 320, 480 160 S 780 80, 1100 220"
            fill="none"
            stroke="url(#flow)"
            strokeWidth="2"
            strokeDasharray="6 8"
          />
          <path
            d="M50 420 C 200 300, 400 500, 650 340 S 950 280, 1200 400"
            fill="none"
            stroke="url(#flow)"
            strokeWidth="1.5"
            strokeDasharray="4 10"
            opacity="0.7"
          />
        </svg>
      </div>

      {stickers.map((s) => (
        <motion.span
          key={s.label}
          className={`sticker absolute z-10 hidden border-navy sm:inline-flex ${s.color}`}
          style={{
            top: s.top,
            left: s.left,
            right: s.right,
            bottom: s.bottom,
            rotate: `${s.rotate}deg`,
          }}
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, type: 'spring', stiffness: 200 }}
          whileHover={{ rotate: s.rotate * -1, scale: 1.1 }}
        >
          {s.label}
        </motion.span>
      ))}

      <FloatingCard className="left-[3%] top-[34%] -rotate-6" delay={0.3}>
        <Monitor className="text-orange" size={36} strokeWidth={1.75} />
        <p className="hand mt-1 text-sm text-navy">Poste de travail</p>
      </FloatingCard>

      <FloatingCard className="right-[3%] top-[32%] rotate-5" delay={0.45}>
        <Terminal className="text-navy" size={32} strokeWidth={1.75} />
        <p className="mt-1 font-mono text-[10px] text-muted">{'>_ pipeline.run()'}</p>
      </FloatingCard>

      <FloatingCard className="bottom-[20%] left-[4%] rotate-3" delay={0.55}>
        <BarChart3 className="text-coral-deep" size={34} strokeWidth={1.75} />
        <p className="hand mt-1 text-sm text-navy">Analyses</p>
      </FloatingCard>

      <FloatingCard className="bottom-[24%] right-[4%] -rotate-4" delay={0.65}>
        <div className="flex items-center gap-2">
          <Database className="text-orange" size={28} />
          <Bot className="text-navy" size={28} />
        </div>
        <p className="hand mt-1 text-sm text-navy">Data → IA</p>
      </FloatingCard>

      <div className="relative z-20 mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:gap-8 lg:px-8">
        <div className="text-center lg:text-left">
          <motion.p
            className="hand mb-4 text-2xl text-orange md:text-3xl"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Portfolio · Mohammed Hebbada
          </motion.p>

          <motion.h1
            className="display text-3xl font-extrabold leading-[1.1] tracking-tight text-navy sm:text-5xl md:text-6xl"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            Bonjour, moi c&apos;est{' '}
            <span className="bg-gradient-to-r from-orange via-coral-deep to-orange-deep bg-clip-text text-transparent">
              Mohammed&nbsp;!
            </span>
          </motion.h1>

          <motion.p
            className="display mt-4 max-w-2xl text-lg font-bold text-navy sm:text-xl md:text-2xl lg:mx-0 mx-auto"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
          >
            Étudiant ingénieur en Intelligence Artificielle &amp; Data
            Engineering
          </motion.p>

          <motion.p
            className="mt-4 max-w-2xl text-base font-semibold leading-relaxed text-coral-deep sm:text-lg lg:mx-0 mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45 }}
          >
            Je transforme les données en solutions intelligentes.
          </motion.p>

          <motion.p
            className="mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg lg:mx-0 mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.55 }}
          >
            Étudiant en 5ème année du cycle ingénieur en AI &amp; Data
            Engineering à l&apos;EMSI, passionné par la Data,
            l&apos;Intelligence Artificielle, le Machine Learning et la
            conception de solutions intelligentes.
          </motion.p>

          <motion.div
            className="mt-8 flex flex-wrap items-center justify-center gap-4 lg:justify-start"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65 }}
          >
            <a
              href="#projets"
              className="gradient-warm rounded-md px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:brightness-110 sm:text-base"
            >
              Découvrir mes projets
            </a>
            <a
              href="#contact"
              className="rounded-md border-2 border-navy bg-paper px-6 py-3 text-sm font-semibold text-navy shadow-[3px_3px_0_rgba(29,53,87,0.15)] transition hover:-translate-y-0.5 hover:shadow-[4px_4px_0_rgba(29,53,87,0.2)] sm:text-base"
            >
              Me contacter
            </a>
          </motion.div>
        </div>

        <motion.div
          className="relative mx-auto w-full max-w-sm lg:max-w-md"
          initial={{ opacity: 0, scale: 0.92, rotate: -4 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ delay: 0.4, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <ScrapbookPhoto
            src="images/hero/profile.png"
            alt="Mohammed Hebbada — portrait professionnel"
            rotate={3.5}
            variant="cutout"
            tape="both"
            className="w-full"
          />
          <p className="hand absolute -bottom-2 -left-2 rounded-sm border-2 border-navy bg-yellow px-3 py-1 text-lg text-navy shadow-[3px_3px_0_rgba(29,53,87,0.15)] rotate-[-6deg] sm:-left-6">
            C&apos;est moi ✦
          </p>
        </motion.div>
      </div>

      <motion.a
        href="#apropos"
        className="hand relative z-20 mt-14 flex items-center justify-center gap-2 text-xl text-navy/70 transition hover:text-orange"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 6, 0] }}
        transition={{
          opacity: { delay: 1 },
          y: { delay: 1.2, duration: 1.8, repeat: Infinity, ease: 'easeInOut' },
        }}
      >
        Défiler pour explorer ↓
      </motion.a>
    </section>
  )
}
