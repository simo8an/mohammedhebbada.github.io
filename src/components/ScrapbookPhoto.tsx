import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

type ScrapbookPhotoProps = {
  src: string
  alt: string
  caption?: string
  rotate?: number
  className?: string
  variant?: 'polaroid' | 'print' | 'cutout'
  tape?: 'left' | 'right' | 'center' | 'both' | 'none'
  delay?: number
  annotation?: string
}

export default function ScrapbookPhoto({
  src,
  alt,
  caption,
  rotate = -2,
  className = '',
  variant = 'polaroid',
  tape = 'center',
  delay = 0,
  annotation,
}: ScrapbookPhotoProps) {
  const frame =
    variant === 'polaroid'
      ? 'bg-paper p-2 pb-8 shadow-[6px_8px_0_rgba(29,53,87,0.12)] border-2 border-navy/10'
      : variant === 'cutout'
        ? 'bg-transparent shadow-[8px_10px_20px_rgba(29,53,87,0.18)]'
        : 'bg-paper p-1.5 shadow-[5px_5px_0_rgba(29,53,87,0.1)] border border-navy/15'

  return (
    <motion.figure
      className={`relative inline-block ${frame} ${className}`}
      initial={{
        opacity: 0,
        x: rotate > 0 ? 40 : -40,
        y: 30,
        rotate: rotate * 3,
        scale: 0.92,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
        rotate,
        scale: 1,
      }}
      whileHover={{
        scale: 1.04,
        rotate: rotate * 0.4,
        y: -6,
        boxShadow: '10px 14px 0 rgba(29,53,87,0.14)',
        zIndex: 20,
      }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        type: 'spring',
        stiffness: 160,
        damping: 18,
        delay,
      }}
    >
      {tape !== 'none' && (
        <>
          {(tape === 'center' || tape === 'both' || tape === 'left') && (
            <motion.span
              className={`tape top-[-10px] w-14 sm:w-16 ${
                tape === 'left'
                  ? 'left-3 rotate-[-8deg]'
                  : 'left-1/2 -translate-x-1/2 rotate-[-3deg]'
              }`}
              initial={{ opacity: 0, scaleX: 0.4, y: -8 }}
              whileInView={{ opacity: 1, scaleX: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: delay + 0.35, duration: 0.35 }}
            />
          )}
          {(tape === 'both' || tape === 'right') && (
            <motion.span
              className="tape right-3 top-[-10px] w-14 rotate-[6deg] sm:w-16"
              initial={{ opacity: 0, scaleX: 0.4, y: -8 }}
              whileInView={{ opacity: 1, scaleX: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: delay + 0.45, duration: 0.35 }}
            />
          )}
        </>
      )}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        className={`block w-full object-cover ${
          variant === 'cutout'
            ? 'rounded-sm border-4 border-paper shadow-md'
            : 'rounded-[2px]'
        }`}
      />
      {caption && (
        <motion.figcaption
          className="hand absolute inset-x-2 bottom-1.5 text-center text-lg text-navy sm:text-xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: delay + 0.55 }}
        >
          {caption}
        </motion.figcaption>
      )}
      {annotation && (
        <motion.span
          className="hand absolute -right-3 -bottom-3 z-10 rounded-sm border border-navy/20 bg-yellow px-2 py-0.5 text-base text-navy shadow rotate-[8deg]"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: delay + 0.7 }}
        >
          {annotation}
        </motion.span>
      )}
    </motion.figure>
  )
}

export function NoteChip({
  children,
  className = '',
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <span
      className={`hand inline-block rounded-sm border border-navy/20 bg-paper px-2 py-0.5 text-lg text-navy shadow-sm ${className}`}
    >
      {children}
    </span>
  )
}
