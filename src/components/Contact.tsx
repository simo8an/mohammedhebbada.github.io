import { Github, Linkedin, Mail, Phone } from 'lucide-react'
import { contact } from '../data/portfolio'
import { Reveal } from './Reveal'

const socials = [
  {
    label: 'Mon profil LinkedIn →',
    href: contact.linkedin,
    icon: Linkedin,
    external: true,
  },
  {
    label: 'Mon GitHub →',
    href: contact.github,
    icon: Github,
    external: true,
  },
  {
    label: `Envoyer un e-mail →`,
    href: `mailto:${contact.email}`,
    icon: Mail,
    external: false,
  },
]

export default function Contact() {
  return (
    <section id="contact" className="section-pad relative">
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-coral/10 to-transparent" />

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Reveal variant="scale">
          <div className="relative overflow-hidden rounded-sm border-2 border-navy/15 bg-paper p-6 shadow-[10px_10px_0_rgba(29,53,87,0.1)] paper-texture sm:p-10 md:p-12">
            <span className="tape left-8 top-[-11px] w-28 rotate-[-4deg]" />
            <span className="tape right-10 top-[-10px] w-24 rotate-[5deg]" />

            <p className="hand text-2xl text-orange">Page 08 · Contact</p>
            <h2 className="display mt-2 text-3xl font-extrabold text-navy sm:text-4xl md:text-5xl">
              On échange&nbsp;?
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
              Vous avez une opportunité, un projet ou simplement envie d&apos;échanger
              autour de la Data et de l&apos;Intelligence Artificielle ? N&apos;hésitez
              pas à me contacter.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center sm:gap-6">
              <a
                href={`mailto:${contact.email}`}
                className="inline-flex items-center gap-2 text-base font-semibold text-navy transition hover:text-orange sm:text-lg"
              >
                <Mail className="text-orange" size={20} />
                {contact.email}
              </a>
              <a
                href={contact.phoneHref}
                className="inline-flex items-center gap-2 text-base font-semibold text-navy transition hover:text-orange sm:text-lg"
              >
                <Phone className="text-coral-deep" size={20} />
                {contact.phone}
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.external ? '_blank' : undefined}
                  rel={s.external ? 'noopener noreferrer' : undefined}
                  className="hand inline-flex items-center gap-2 rounded-sm border-2 border-navy bg-paper px-4 py-2.5 text-sm font-semibold text-navy shadow-[2px_2px_0_rgba(29,53,87,0.08)] transition hover:-translate-y-0.5 hover:rotate-1 hover:bg-navy hover:text-cream"
                >
                  <s.icon size={16} />
                  {s.label}
                </a>
              ))}
            </div>

            <p className="hand mt-8 text-right text-xl text-navy/60">
              Toujours curieux.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
