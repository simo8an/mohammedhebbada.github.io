import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Bot,
  Brain,
  ChartColumnIncreasing,
  Cpu,
  Database,
  Layers,
  MessageSquareText,
  Sparkles,
  Waves,
  Workflow,
} from 'lucide-react'
import type { TechSticker } from '../data/skills'

const iconMap = {
  brain: Brain,
  bot: Bot,
  message: MessageSquareText,
  sparkles: Sparkles,
  workflow: Workflow,
  database: Database,
  waves: Waves,
  chart: ChartColumnIncreasing,
  cpu: Cpu,
  layers: Layers,
}

type Props = {
  sticker: TechSticker
  index?: number
}

export default function TechStickerCard({ sticker, index = 0 }: Props) {
  const [hovered, setHovered] = useState(false)
  const [imgError, setImgError] = useState(false)
  const Icon = sticker.icon ? iconMap[sticker.icon] : null

  return (
    <motion.div
      className="relative inline-flex"
      initial={{ opacity: 0, y: 24, rotate: sticker.rotate - 6, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, rotate: sticker.rotate, scale: 1 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{
        delay: index * 0.04,
        type: 'spring',
        stiffness: 220,
        damping: 18,
      }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
    >
      <motion.button
        type="button"
        className={`relative flex min-w-[92px] flex-col items-center gap-1.5 rounded-sm border-2 border-navy px-3 py-2.5 shadow-[3px_3px_0_rgba(26,26,26,0.14)] ${sticker.color}`}
        style={{ rotate: `${sticker.rotate}deg` }}
        whileHover={{
          y: -8,
          rotate: sticker.rotate * -0.35,
          scale: 1.08,
          boxShadow: '5px 8px 0 rgba(26,26,26,0.18)',
        }}
        transition={{ type: 'spring', stiffness: 400, damping: 22 }}
        aria-label={sticker.name}
      >
        <span
          className={`tape top-[-9px] h-[16px] w-10 ${
            index % 2 === 0 ? 'left-2 rotate-[-8deg]' : 'right-2 rotate-[7deg]'
          }`}
        />
        <span className="flex h-10 w-10 items-center justify-center">
          {sticker.logo && !imgError ? (
            <img
              src={sticker.logo}
              alt=""
              width={36}
              height={36}
              className="h-9 w-9 object-contain"
              loading="lazy"
              onError={() => setImgError(true)}
            />
          ) : Icon ? (
            <Icon
              size={28}
              strokeWidth={1.75}
              className={
                sticker.color.includes('text-cream') ? 'text-cream' : 'text-navy'
              }
            />
          ) : (
            <span className="hand text-xl text-navy">{sticker.name.slice(0, 2)}</span>
          )}
        </span>
        <span
          className={`hand text-base leading-none ${
            sticker.color.includes('text-cream') ? 'text-cream' : 'text-navy'
          }`}
        >
          {sticker.name}
        </span>
      </motion.button>

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, y: 6, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 4, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="pointer-events-none absolute left-1/2 top-full z-30 mt-2 w-48 -translate-x-1/2 rounded-sm border-2 border-navy bg-paper px-3 py-2 shadow-[4px_4px_0_rgba(29,53,87,0.15)]"
          >
            <p className="display text-xs font-bold text-navy">{sticker.name}</p>
            <p className="hand mt-1 text-base leading-tight text-coral-deep">
              « {sticker.note} »
            </p>
            <span className="absolute -top-1.5 left-1/2 h-3 w-3 -translate-x-1/2 rotate-45 border-l-2 border-t-2 border-navy bg-paper" />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
