"use client";

import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import {
  siAstro,
  siDocker,
  siGithub,
  siInstagram,
  siMongodb,
  siMysql,
  siNextdotjs,
  siNodedotjs,
  siPhp,
  siPostgresql,
  siReact,
  siSymfony,
  siTypescript,
} from 'simple-icons';

import { HOBBIES, LINK_SECTIONS, PROJECTS, SKILL_GROUPS, WRITINGS } from './_home/homeData';
import type { Link as LinkType } from '@/types';

import { track } from '@vercel/analytics';

// LinkedIn was removed from simple-icons (trademark request); inline its path.
const LINKEDIN_PATH =
  'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z';

interface ExternalLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  ariaLabel?: string;
}

const EXTERNAL_LINK_TEXT = ' (opens in new window)';

function ExternalLink({ href, children, className, ariaLabel }: ExternalLinkProps) {
  return (
    <Link
      href={href}
      target="_blank"
      onClick={() => track('external_link_click', { href })}
      rel="noopener noreferrer"
      className={className}
      aria-label={ariaLabel ? `${ariaLabel}${EXTERNAL_LINK_TEXT}` : undefined}
    >
      {children}
      {!ariaLabel && <span className="sr-only">{EXTERNAL_LINK_TEXT}</span>}
    </Link>
  );
}

function BrandGlyph({ path, className }: { path: string; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true" focusable="false">
      <path d={path} />
    </svg>
  );
}

function getLinkBrandPath(href: string): string | null {
  if (href.includes('github.com')) return siGithub.path;
  if (href.includes('linkedin.com')) return LINKEDIN_PATH;
  if (href.includes('instagram.com')) return siInstagram.path;
  return null;
}

// Returns a brand logo only when a real one exists; unmatched tags render text-only.
function getStackBrandPath(tag: string): string | null {
  const normalized = String(tag || '').toLowerCase();

  if (normalized.includes('next')) return siNextdotjs.path;
  if (normalized.includes('react')) return siReact.path;
  if (normalized.includes('node')) return siNodedotjs.path;
  if (normalized === 'php') return siPhp.path;
  if (normalized.includes('symfony')) return siSymfony.path;
  if (normalized.includes('docker')) return siDocker.path;
  if (normalized.includes('astro')) return siAstro.path;
  if (normalized.includes('typescript')) return siTypescript.path;
  if (normalized.includes('mongo')) return siMongodb.path;
  if (normalized.includes('postgres')) return siPostgresql.path;
  if (normalized.includes('mysql')) return siMysql.path;

  return null;
}

function getFlattenedLinks(): LinkType[] {
  const seen = new Set<string>();
  const flattened: LinkType[] = [];

  for (const section of LINK_SECTIONS || []) {
    for (const link of section?.links || []) {
      if (!link?.href || seen.has(link.href)) continue;
      seen.add(link.href);
      flattened.push(link);
    }
  }

  return flattened;
}

export default function Home() {
  return (
    <div className="home" id="top">
      <div className="homeShell">
        <main className="homeMain">
          <section className="homeHero" aria-label="Greeting">
            <h1 className="homeHeroTitle">Hi, I'm Ruslan</h1>
            <p className="homeHeroSubtitle">
              Software engineer. I enjoy learning new things, building useful products, and exploring economics &
              investing.
            </p>
          </section>

          <section className="homeSection" id="projects" aria-label="Projects">
            <header className="homeSectionHeader">
              <h2 className="homeSectionTitle">Projects</h2>
              <p className="homeSectionDesc">Small, focused projects with real users and real constraints.</p>
            </header>

            <ul className="homeProjectList">
              {PROJECTS.map((project) => (
                <li key={project.title}>
                  <ExternalLink href={project.link} className="homeProjectCard">
                    <div className="homeProjectHead">
                      <div className="homeProjectTitleRow">
                        <h3 className="homeProjectTitle">{project.title}</h3>
                      </div>
                      <ArrowUpRight className="homeProjectLinkIcon" size={18} aria-hidden="true" />
                    </div>
                    <p className="homeProjectDesc">{project.description}</p>
                    {project.highlights.length > 0 && (
                      <ul className="homeProjectHighlights" aria-label="Highlights">
                        {project.highlights.map((highlight) => (
                          <li key={highlight} className="homeProjectHighlight">
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    )}
                    <div className="homeProjectTags" aria-label="Tech stack">
                      {project.stacks.slice(0, 3).map((tag) => {
                        const brandPath = getStackBrandPath(tag);
                        return (
                          <span key={tag} className="homeProjectTag">
                            {brandPath && <BrandGlyph path={brandPath} className="homeProjectTagIcon" />}
                            <span className="homeProjectTagLabel">{tag}</span>
                          </span>
                        );
                      })}
                    </div>
                  </ExternalLink>
                </li>
              ))}
            </ul>
          </section>

          <section className="homeSection" id="skills" aria-label="Skills">
            <header className="homeSectionHeader">
              <h2 className="homeSectionTitle">Skills</h2>
              <p className="homeSectionDesc">A toolbox I reach for most often.</p>
            </header>

            <ul className="homeSkillGroups">
              {SKILL_GROUPS.map((group) => (
                <li key={group.title} className="homeSkillGroup">
                  <h3 className="homeSkillGroupTitle">{group.title}</h3>
                  <ul className="homeSkillGroupList">
                    {group.skills.map((skill) => (
                      <li key={skill} className="homeSkillItem">
                        <span className="homeSkillLabel">{skill}</span>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </section>

          <section className="homeSection" id="writing" aria-label="Writing">
            <header className="homeSectionHeader">
              <h2 className="homeSectionTitle">Writing</h2>
              <p className="homeSectionDesc">
                Notes on markets, investing &amp; AI — in English on LinkedIn, and more in Russian on my blog.
              </p>
            </header>

            <ul className="homeWritingList">
              {WRITINGS.map((writing) => (
                <li key={writing.href}>
                  <ExternalLink
                    href={writing.href}
                    className="homeWritingCard"
                    ariaLabel={`${writing.title} — ${writing.source}, ${writing.langs
                      .map((lang) => (lang === 'RU' ? 'Russian' : 'English'))
                      .join(' and ')}`}
                  >
                    <span className="homeWritingMain">
                      <span className="homeWritingTitle">{writing.title}</span>
                      {writing.description && <span className="homeWritingDesc">{writing.description}</span>}
                      <span className="homeWritingSource">{writing.source}</span>
                    </span>
                    <span className="homeWritingLangs" aria-hidden="true">
                      {writing.langs.map((lang) => (
                        <span key={lang} className={`homeWritingLang homeWritingLang--${lang.toLowerCase()}`}>
                          {lang}
                        </span>
                      ))}
                    </span>
                  </ExternalLink>
                </li>
              ))}
            </ul>
          </section>

          <section className="homeSection" id="hobbies" aria-label="Hobbies">
            <header className="homeSectionHeader">
              <h2 className="homeSectionTitle">Hobbies</h2>
              <p className="homeSectionDesc">Stuff I do when I'm not coding.</p>
            </header>

            <ul className="homeHobbyGrid">
              {HOBBIES.map((hobby) => (
                <li key={hobby.title} className="homeHobbyCard">
                  <div className="homeHobbyTitle">{hobby.title}</div>
                  <div className="homeHobbyText">{hobby.description}</div>
                </li>
              ))}
            </ul>
          </section>

          <section className="homeSection" id="links" aria-label="Links">
            <div className="homeLinksBlock">
              <div className="homeLinksKicker">AROUND THE WEB</div>
              <div className="homeLinksText">Profiles & places where I post updates:</div>

              <div className="homeLinkChips" aria-label="Social links">
                {getFlattenedLinks().map((l) => {
                  const brandPath = getLinkBrandPath(l.href);
                  return (
                    <ExternalLink key={l.href} href={l.href} className="homeLinkChip" ariaLabel={l.label}>
                      {brandPath && <BrandGlyph path={brandPath} className="homeLinkChipIcon" />}
                      <span className="homeLinkChipLabel">{l.label}</span>
                    </ExternalLink>
                  );
                })}
              </div>
            </div>

            <footer className="homeFooter">
              <div className="homeFooterLine">© {new Date().getFullYear()} ishemgulov.com</div>
              <div className="homeFooterLine">
                <a className="homeFooterAnchor" href="#top">
                  Back to top
                </a>
              </div>
            </footer>
          </section>
        </main>
      </div>
    </div>
  );
}
