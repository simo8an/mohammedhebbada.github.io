import { motion } from 'framer-motion'

type Props = {
  title: string
  code: string
  className?: string
  delay?: number
}

export default function FloatingCodeCard({
  title,
  code,
  className = '',
  delay = 0,
}: Props) {
  return (
    <motion.div
      className={`w-48 rounded-sm border-2 border-navy/20 bg-navy p-3 font-mono text-[10px] text-cream shadow-[5px_5px_0_rgba(232,93,4,0.25)] ${className}`}
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      animate={{ y: [0, -8, 0] }}
      transition={{
        opacity: { delay, duration: 0.5 },
        y: { delay: delay + 0.5, duration: 5, repeat: Infinity, ease: 'easeInOut' },
      }}
    >
      <span className="tape tape-clear left-1/2 top-[-8px] w-12 -translate-x-1/2" />
      <p className="hand mb-1 text-sm text-yellow">{title}</p>
      <pre className="whitespace-pre-wrap leading-relaxed text-cream/85">{code}</pre>
    </motion.div>
  )
}
