import { contact } from '../data/portfolio'

export default function SiteFooter() {
  return (
    <footer className="border-t border-navy/10 bg-navy text-cream">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div>
          <p className="display text-lg font-bold">Mohammed Hebbada</p>
          <p className="mt-1 text-sm text-cream/70">
            IA &amp; Data Engineering
          </p>
        </div>

        <nav className="flex flex-wrap gap-4 text-sm" aria-label="Liens du pied de page">
          <a
            href={contact.linkedin}
            className="text-cream/80 transition hover:text-yellow"
            title="URL LinkedIn à renseigner"
          >
            LinkedIn
          </a>
          <span className="text-cream/30" aria-hidden>
            ·
          </span>
          <a
            href={contact.github}
            className="text-cream/80 transition hover:text-yellow"
            title="URL GitHub à renseigner"
          >
            GitHub
          </a>
          <span className="text-cream/30" aria-hidden>
            ·
          </span>
          <a
            href={`mailto:${contact.email}`}
            className="text-cream/80 transition hover:text-yellow"
          >
            E-mail
          </a>
        </nav>

        <div className="text-sm text-cream/60">
          <p>© 2026 Mohammed Hebbada</p>
          <p className="hand mt-1 text-lg text-yellow/80">
            Construit avec curiosité &amp; data.
          </p>
        </div>
      </div>
    </footer>
  )
}
