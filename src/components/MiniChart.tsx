import { motion } from 'framer-motion'

/** Mini visualisation décorative — pas une vraie statistique */
export default function MiniChart() {
  const bars = [35, 55, 42, 70, 60, 85, 48]

  return (
    <motion.div
      className="w-36 rotate-[3deg] rounded-sm border-2 border-navy/15 bg-paper p-3 shadow-[4px_4px_0_rgba(29,53,87,0.1)]"
      animate={{ y: [0, 6, 0] }}
      transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
    >
      <span className="tape left-3 top-[-9px] w-10 rotate-[-6deg]" />
      <p className="hand text-sm text-navy">flux data ✦</p>
      <div className="mt-2 flex h-14 items-end gap-1">
        {bars.map((h, i) => (
          <motion.div
            key={i}
            className="flex-1 rounded-t-sm bg-gradient-to-t from-orange to-coral"
            initial={{ height: 0 }}
            whileInView={{ height: `${h}%` }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 * i, duration: 0.5 }}
          />
        ))}
      </div>
      <svg className="mt-2 h-8 w-full" viewBox="0 0 100 30" aria-hidden>
        <motion.path
          d="M0 22 C 15 18, 25 8, 40 12 S 70 25, 100 6"
          fill="none"
          stroke="#1D3557"
          strokeWidth="1.5"
          strokeDasharray="4 3"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4 }}
        />
      </svg>
    </motion.div>
  )
}
