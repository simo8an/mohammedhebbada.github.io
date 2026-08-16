import { ExternalLink, Github } from 'lucide-react'
import type { Project } from '../data/portfolio'
import { projects } from '../data/portfolio'
import { Reveal, Stagger, StaggerItem } from './Reveal'

const accentMap = {
  orange: 'from-orange to-coral-deep',
  coral: 'from-coral-deep to-orange',
  navy: 'from-navy to-navy-soft',
  yellow: 'from-yellow to-orange',
}

function ProjectVisual({ project }: { project: Project }) {
  if (project.images && project.images.length > 0) {
    const main = project.images[0]
    return (
      <div className="relative overflow-hidden bg-navy/5">
        <img
          src={main.src}
          alt={main.alt}
          loading="lazy"
          decoding="async"
          className="h-48 w-full object-cover object-top sm:h-52"
        />
        {main.caption && (
          <p className="hand absolute bottom-2 left-2 rounded-sm bg-paper/90 px-2 py-0.5 text-base text-navy shadow">
            {main.caption}
          </p>
        )}
      </div>
    )
  }

  if (project.visual === 'cinematch') {
    return (
      <div className="relative h-48 overflow-hidden bg-gradient-to-br from-navy via-navy-soft to-coral-deep p-4 text-cream">
        <div className="absolute right-3 top-3 rounded-sm bg-orange px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide">
          Recsys
        </div>
        <p className="hand text-2xl text-yellow">Sélection du soir</p>
        <div className="mt-3 grid grid-cols-3 gap-2">
          {['Inception', 'Arrival', 'Her'].map((t, i) => (
            <div
              key={t}
              className="rounded-sm bg-cream/15 p-2 backdrop-blur-sm"
              style={{ transform: `rotate(${(i - 1) * 2}deg)` }}
            >
              <div className="mb-2 h-10 rounded-sm bg-cream/25" />
              <p className="truncate text-[10px] font-medium">{t}</p>
              <p className="text-[9px] text-cream/70">correspondance {92 - i * 4}%</p>
            </div>
          ))}
        </div>
      </div>
    )
  }

  if (project.visual === 'inventory') {
    return (
      <div className="relative h-48 overflow-hidden bg-gradient-to-br from-orange via-coral to-cream p-4">
        <p className="hand text-xl text-navy">Flux</p>
        <div className="mt-3 flex flex-wrap items-center justify-center gap-1.5 text-[10px] font-semibold text-navy">
          {['Produits', 'Données', 'Analyse', 'Prédiction', 'Décision'].map(
            (step, i) => (
              <span key={step} className="flex items-center gap-1">
                <span className="rounded-sm border-2 border-navy/30 bg-paper px-2 py-1 shadow-sm">
                  {step}
                </span>
                {i < 4 && <span className="text-navy/60">→</span>}
              </span>
            ),
          )}
        </div>
        <div className="mt-4 flex h-12 items-end gap-1 px-2">
          {[40, 65, 45, 80, 70, 95].map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-t-sm bg-navy/80"
              style={{ height: `${h}%` }}
            />
          ))}
        </div>
      </div>
    )
  }

  if (project.visual === 'techstore') {
    return (
      <div className="relative h-48 overflow-hidden gradient-navy p-4 text-cream">
        <p className="hand text-2xl text-yellow">TechStore</p>
        <div className="mt-3 grid grid-cols-2 gap-2">
          {['Laptop Pro', 'Kit GPU', 'SSD 1 To', 'Écran'].map((p) => (
            <div key={p} className="rounded-sm border border-cream/20 bg-cream/10 p-2">
              <div className="mb-1 h-6 rounded bg-cream/20" />
              <p className="text-[10px]">{p}</p>
            </div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="relative h-48 overflow-hidden bg-gradient-to-br from-yellow via-cream to-coral/40 p-4">
      <p className="hand text-2xl text-navy">FastBite</p>
      <div className="mt-4 space-y-2">
        {['Burger Signature', 'Menu Midi', 'Commande #482'].map((row) => (
          <div
            key={row}
            className="flex items-center justify-between rounded-sm border-2 border-navy/15 bg-paper/80 px-3 py-1.5 text-xs text-navy"
          >
            <span>{row}</span>
            <span className="h-2 w-2 rounded-full bg-orange" />
          </div>
        ))}
      </div>
    </div>
  )
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const rotate = index % 2 === 0 ? -1.2 : 1.2

  return (
    <StaggerItem>
      <article
        id={`projet-${project.id}`}
        className="group relative flex h-full flex-col overflow-hidden rounded-sm border-2 border-navy/15 bg-paper shadow-[7px_7px_0_rgba(29,53,87,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[10px_10px_0_rgba(232,93,4,0.18)] paper-texture"
        style={{ transform: `rotate(${rotate}deg)` }}
      >
        <span
          className={`tape top-[-11px] w-[72px] ${
            index % 2 === 0 ? 'left-6 rotate-[-5deg]' : 'right-6 rotate-[6deg]'
          }`}
        />
        <ProjectVisual project={project} />
        <div className="flex flex-1 flex-col p-5">
          <div className="flex flex-wrap items-center gap-2">
            <span
              className={`rounded-sm bg-gradient-to-r ${accentMap[project.accent]} px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white`}
            >
              {project.highlight}
            </span>
            <span className="text-[11px] text-muted">{project.type}</span>
          </div>
          <h3 className="display mt-3 text-xl font-bold text-navy">
            {project.title}
          </h3>
          {project.stageCompany && (
            <p className="hand mt-1 text-sm text-orange">
              Projet de stage — {project.stageCompany}
            </p>
          )}
          <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
            {project.description}
          </p>
          <p className="mt-4 text-[11px] font-semibold uppercase tracking-wide text-navy/60">
            Technologies utilisées
          </p>
          <div className="mt-2 flex flex-wrap gap-1.5">
            {project.technologies.slice(0, 6).map((tech) => (
              <span
                key={tech}
                className="rounded-sm border border-navy/15 bg-cream px-2 py-0.5 text-[10px] text-navy"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 6 && (
              <span className="text-[10px] text-muted">
                +{project.technologies.length - 6}
              </span>
            )}
          </div>
          <div className="mt-5 flex flex-wrap gap-2">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hand inline-flex items-center gap-1.5 rounded-sm border-2 border-navy bg-paper px-3 py-1.5 text-xs font-semibold text-navy shadow-[2px_2px_0_rgba(29,53,87,0.1)] transition hover:-translate-y-0.5 hover:rotate-1 hover:bg-navy hover:text-cream"
              >
                <Github size={14} /> Voir le code sur GitHub →
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="hand inline-flex items-center gap-1.5 rounded-sm gradient-warm px-3 py-1.5 text-xs font-semibold text-white shadow-[2px_2px_0_rgba(29,53,87,0.1)] transition hover:-translate-y-0.5 hover:rotate-1"
              >
                <ExternalLink size={14} /> Découvrir le projet →
              </a>
            )}
          </div>
        </div>
      </article>
    </StaggerItem>
  )
}

export default function Projects() {
  return (
    <section id="projets" className="section-pad relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-coral/5 to-transparent" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="hand text-2xl text-orange">Page 03 · Projets</p>
          <h2 className="display mt-2 text-4xl font-extrabold text-navy sm:text-5xl md:text-6xl">
            Mes projets
          </h2>
          <p className="mt-4 max-w-xl text-muted">
            Des fiches de carnet pour mes réalisations IA, Data et Full-Stack.
          </p>
        </Reveal>

        <Stagger className="mt-12 grid gap-8 sm:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </Stagger>
      </div>
    </section>
  )
}
