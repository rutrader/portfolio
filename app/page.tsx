'use client';

import Link from 'next/link';
import { ArrowUpRight, ArrowUp, ArrowRight } from 'lucide-react';

import { LINK_SECTIONS, PROJECTS, SKILL_GROUPS, WRITINGS } from './_home/homeData';
import type { Link as LinkType } from '@/types';

import { track } from '@vercel/analytics';

const EXTERNAL_LINK_TEXT = ' (opens in new window)';

interface ExternalLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  ariaLabel?: string;
}

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

function langLabel(lang: string): string {
  return lang === 'RU' ? 'Russian' : 'English';
}

export default function Home() {
  return (
    <div className="home" id="top">
      <div className="homeShell">
        <nav className="homeNav" aria-label="Primary">
          <span className="homeWordmark">
            Ruslan Ishemgulov<span className="dot">.</span>
          </span>
          <div className="homeNavLinks">
            <a href="#projects">projects</a>
            <a href="#skills">skills</a>
            <a href="#writing">writing</a>
            <a href="#contact">contact</a>
          </div>
        </nav>

        <main className="homeMain">
          <header className="homeHero" aria-label="Introduction">
            <p className="homeKicker">Software Engineer &middot; Web / AI / Investing</p>
            <h1 className="homeTitle">
              Building useful products, <span className="soft">and studying the systems behind them.</span>
            </h1>
            <p className="homeLede">
              I&rsquo;m Ruslan &mdash; a software engineer. I like learning new things, shipping small products with
              real users, and turning market noise into models.
            </p>
            <div className="homeActions">
              <ExternalLink href="https://github.com/rutrader" className="homeAction">
                GitHub <ArrowUpRight className="homeActionIcon" size={16} aria-hidden="true" />
              </ExternalLink>
              <ExternalLink href="https://linkedin.com/in/ruslan.ishemgulov" className="homeAction">
                LinkedIn <ArrowUpRight className="homeActionIcon" size={16} aria-hidden="true" />
              </ExternalLink>
              <span className="homeMeta">
                <span className="led" aria-hidden="true" />
                Based in Czechia &middot; EN / RU
              </span>
            </div>
          </header>

          <section className="homeSection" id="projects" aria-label="Projects">
            <div className="homeSectionHead">
              <h2 className="homeSectionLabel">Projects</h2>
              <span className="homeSectionDesc">{String(PROJECTS.length).padStart(2, '0')}</span>
            </div>
            <div className="homeRows">
              {PROJECTS.map((project) => (
                <ExternalLink key={project.title} href={project.link} className="homeRow">
                  <span className="homeRowMarker" aria-hidden="true" />
                  <span className="homeRowBody">
                    <span className="homeRowTitle">{project.title}</span>
                    <span className="homeRowDesc">{project.description}</span>
                    <span className="homeRowTags">
                      {project.stacks.map((tag) => (
                        <span key={tag} className="homeRowTag">
                          {tag}
                        </span>
                      ))}
                    </span>
                  </span>
                  <span className="homeRowMeta" aria-hidden="true">
                    <ArrowUpRight className="homeRowIcon" size={16} />
                  </span>
                </ExternalLink>
              ))}
            </div>
          </section>

          <section className="homeSection" id="skills" aria-label="Skills">
            <div className="homeSectionHead">
              <h2 className="homeSectionLabel">Skills</h2>
              <span className="homeSectionDesc">A toolbox I reach for</span>
            </div>
            <div className="homeSkills">
              {SKILL_GROUPS.map((group) => (
                <div key={group.title} className="homeSkill">
                  <span className="homeSkillGrp">{group.title}</span>
                  <span className="homeSkillItems">
                    {group.skills.map((skill, i) => (
                      // The separator trails its own item, so a wrapped line always
                      // starts on a name and the left edge stays flush.
                      <span key={skill.name} className="homeSkillItem">
                        <span className={skill.primary ? 'k' : undefined}>{skill.name}</span>
                        {i < group.skills.length - 1 && (
                          <span className="sep" aria-hidden="true">
                            &middot;
                          </span>
                        )}
                      </span>
                    ))}
                  </span>
                </div>
              ))}
            </div>
          </section>

          <section className="homeSection" id="writing" aria-label="Writing">
            <div className="homeSectionHead">
              <h2 className="homeSectionLabel">Writing</h2>
              <span className="homeSectionDesc">Markets &middot; investing &middot; AI</span>
            </div>
            <div className="homeRows">
              {WRITINGS.map((writing) => {
                const label = `${writing.title} — ${writing.source}, ${writing.langs.map(langLabel).join(' and ')}`;

                // Pieces hosted here stay in the tab and take the same-page
                // arrow; only the outbound ones announce a new window.
                const Arrow = writing.internal ? ArrowRight : ArrowUpRight;
                const body = (
                  <>
                    <span className="homeRowMarker" aria-hidden="true" />
                    <span className="homeRowBody">
                      <span className="homeRowTitle">{writing.title}</span>
                      {writing.description && <span className="homeRowDesc">{writing.description}</span>}
                      <span className="homeRowTags">
                        <span className="homeRowTag">{writing.source}</span>
                        {writing.langs.map((lang) => (
                          <span key={lang} className="homeRowTag">
                            {lang}
                          </span>
                        ))}
                      </span>
                    </span>
                    <span className="homeRowMeta" aria-hidden="true">
                      <Arrow className="homeRowIcon" size={16} />
                    </span>
                  </>
                );

                return writing.internal ? (
                  <Link key={writing.href} href={writing.href} className="homeRow homeRow--compact" aria-label={label}>
                    {body}
                  </Link>
                ) : (
                  <ExternalLink
                    key={writing.href}
                    href={writing.href}
                    className="homeRow homeRow--compact"
                    ariaLabel={label}
                  >
                    {body}
                  </ExternalLink>
                );
              })}
            </div>
          </section>

          <section className="homeContact" id="contact" aria-label="Contact">
            <h2 className="homeContactTitle">
              Open to interesting problems <span className="soft">&mdash; and good conversation.</span>
            </h2>
            <div className="homeChips">
              {getFlattenedLinks().map((l) => (
                <ExternalLink key={l.href} href={l.href} className="homeChip" ariaLabel={l.label}>
                  {l.label}
                </ExternalLink>
              ))}
            </div>
          </section>

          <footer className="homeFooter">
            <span>&copy; {new Date().getFullYear()} ishemgulov.com</span>
            <a className="homeFooterAnchor" href="#top">
              Back to top <ArrowUp size={13} aria-hidden="true" />
            </a>
          </footer>
        </main>
      </div>
    </div>
  );
}
