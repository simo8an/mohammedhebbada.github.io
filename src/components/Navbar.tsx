import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { navLinks } from '../data/portfolio'
import { useScrolled } from '../hooks/useScroll'

export default function Navbar() {
  const scrolled = useScrolled(30)
  const [open, setOpen] = useState(false)

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-cream/90 shadow-[0_8px_30px_rgba(29,53,87,0.08)] backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      <nav
        className={`mx-auto flex max-w-7xl items-center justify-between px-4 transition-all duration-300 sm:px-6 lg:px-8 ${
          scrolled ? 'py-2.5' : 'py-4'
        }`}
        aria-label="Navigation principale"
      >
        <a
          href="#accueil"
          className="display text-lg font-extrabold tracking-tight text-navy sm:text-xl"
        >
          MOHAMMED{' '}
          <span className="bg-gradient-to-r from-orange to-coral-deep bg-clip-text text-transparent">
            HEBBADA
          </span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="rounded-md px-2.5 py-1.5 text-sm font-medium text-navy/80 transition hover:bg-orange/10 hover:text-orange"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="#contact"
            className="gradient-warm rounded-md px-4 py-2 text-sm font-semibold text-white shadow-md transition hover:brightness-110 hover:shadow-lg"
          >
            Me contacter
          </a>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md border-2 border-navy p-2 text-navy lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-navy/10 bg-cream/95 backdrop-blur-md lg:hidden"
          >
            <ul className="flex flex-col gap-1 px-4 py-4">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ x: -12, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.04 }}
                >
                  <a
                    href={link.href}
                    className="block rounded-md px-3 py-2.5 text-base font-medium text-navy hover:bg-orange/10"
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
              <li className="pt-2">
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="gradient-warm block rounded-md px-3 py-3 text-center text-sm font-semibold text-white"
                >
                  Me contacter
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
