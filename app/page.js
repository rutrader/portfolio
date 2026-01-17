import Link from 'next/link'

import { HOBBIES, LINK_SECTIONS, PROJECTS, SKILLS } from './_home/homeData'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare, faSquareArrowUpRight } from '@fortawesome/pro-thin-svg-icons'
import { faCode, faDatabase, faEnvelope, faServer, faRoute } from '@fortawesome/pro-regular-svg-icons'
import {
  faAppStoreIos,
  faBootstrap,
  faDocker,
  faGithub,
  faInstagram,
  faJs,
  faLinkedin,
  faNodeJs,
  faPhp,
  faReact,
  faSymfony,
  faWordpressSimple,
} from '@fortawesome/free-brands-svg-icons'

function ExternalLink({ href, children, className, ariaLabel }) {
  return (
    <Link href={href} target="_blank" rel="noopener noreferrer" className={className} aria-label={ariaLabel}>
      {children}
    </Link>
  )
}

function getLinkIcon(href) {
  if (!href) return faArrowUpRightFromSquare
  if (href.startsWith('mailto:')) return faEnvelope
  if (href.includes('github.com')) return faGithub
  if (href.includes('linkedin.com')) return faLinkedin
  if (href.includes('instagram.com')) return faInstagram
  if (href.includes('apps.apple.com')) return faAppStoreIos
  return faArrowUpRightFromSquare
}

function getStackIcon(tag) {
  const normalized = String(tag || '').toLowerCase()

  if (normalized.includes('react')) return faReact
  if (normalized.includes('next')) return faCode
  if (normalized.includes('node')) return faNodeJs
  if (normalized.includes('php')) return faPhp
  if (normalized.includes('symfony')) return faSymfony
  if (normalized.includes('docker')) return faDocker
  if (normalized.includes('bootstrap')) return faBootstrap
  if (normalized.includes('mongo')) return faDatabase
  if (normalized.includes('postgres')) return faDatabase
  if (normalized.includes('mysql')) return faDatabase
  if (normalized.includes('context')) return faCode
  if (normalized.includes('netlify')) return faCode
  if (normalized.includes('api')) return faServer
  if (normalized.includes('app store')) return faAppStoreIos
  if (normalized === 'ios') return faAppStoreIos

  return faCode
}

function getCustomStackIconSrc(tag) {
  const normalized = String(tag || '').toLowerCase()

  if (normalized.includes('expo')) return '/icons/expo/logo-type-a.svg'

  return null
}

function getSkillIcon(label) {
  const normalized = String(label || '').toLowerCase()

  if (normalized.includes('next')) return faCode
  if (normalized.includes('react')) return faReact
  if (normalized.includes('typescript')) return faCode
  if (normalized.includes('javascript')) return faJs

  if (normalized === 'php') return faPhp
  if (normalized.includes('symfony')) return faSymfony
  if (normalized.includes('node')) return faNodeJs
  if (normalized.includes('rest')) return faServer
  if (normalized.includes('docker')) return faDocker

  if (normalized.includes('postgres')) return faDatabase
  if (normalized.includes('mysql')) return faDatabase
  if (normalized.includes('mongo')) return faDatabase
  if (normalized.includes('migration')) return faDatabase

  if (normalized.includes('ci/cd')) return faServer
  if (normalized.includes('observ')) return faServer
  if (normalized.includes('design')) return faRoute
  if (normalized.includes('doc')) return faCode
  if (normalized.includes('wordpress')) return faWordpressSimple

  return faCode
}

function getFlattenedLinks() {
  const seen = new Set()
  const flattened = []

  for (const section of LINK_SECTIONS || []) {
    for (const link of section?.links || []) {
      if (!link?.href || seen.has(link.href)) continue
      seen.add(link.href)
      flattened.push(link)
    }
  }

  return flattened
}

export default function Home() {
  return (
    <div className="home" id="top">
      <div className="homeShell">
        <main className="homeMain">
          <section className="homeHero" aria-label="Greeting">
            <h1 className="homeHeroTitle">Hi, I’m Ruslan</h1>
            <p className="homeHeroSubtitle">
              Software engineer. I enjoy learning new things, building useful products, and exploring economics & investing.
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
                      <FontAwesomeIcon icon={faSquareArrowUpRight} className="homeProjectLinkIcon" />
                    </div>
                    <p className="homeProjectDesc">{project.description}</p>
                    <div className="homeProjectTags" aria-label="Tech stack">
                      {project.stacks.slice(0, 3).map((tag) => (
                        <span key={tag} className="homeProjectTag">
                          {getCustomStackIconSrc(tag) ? (
                            // eslint-disable-next-line @next/next/no-img-element
                            <img
                              src={getCustomStackIconSrc(tag)}
                              alt=""
                              className="homeProjectTagCustomIcon"
                              loading="lazy"
                              aria-hidden="true"
                            />
                          ) : (
                            <FontAwesomeIcon
                              icon={getStackIcon(tag)}
                              className="homeProjectTagIcon"
                              size="xl"
                              style={{ color: '#FFD43B' }}
                            />
                          )}
                          <span className="homeProjectTagLabel">{tag}</span>
                        </span>
                      ))}
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

            <div className="homeSkills">
              {SKILLS.map((skill) => (
                <div key={skill.label} className="homeSkillItem">
                  <div className="homeSkillIcon">
                    <FontAwesomeIcon icon={getSkillIcon(skill.label)} size="xl" style={{ color: '#FFD43B' }} />
                  </div>
                  <div className="homeSkillLabel">{skill.label}</div>
                </div>
              ))}
            </div>
          </section>

          <section className="homeSection" id="hobbies" aria-label="Hobbies">
            <header className="homeSectionHeader">
              <h2 className="homeSectionTitle">Hobbies</h2>
              <p className="homeSectionDesc">Stuff I do when I’m not coding.</p>
            </header>

            <div className="homeHobbyGrid">
              {HOBBIES.map((hobby) => (
                <div key={hobby.title} className="homeHobbyCard">
                  <div className="homeHobbyTitle">{hobby.title}</div>
                  <div className="homeHobbyText">{hobby.description}</div>
                </div>
              ))}
            </div>
          </section>

          <section className="homeSection" id="links" aria-label="Links">
            <div className="homeLinksBlock">
              <div className="homeLinksKicker">AROUND THE WEB</div>
              <div className="homeLinksText">Profiles & places where I post updates:</div>

              <div className="homeLinkChips" aria-label="Social links">
                {getFlattenedLinks().map((l) => (
                  <ExternalLink key={l.href} href={l.href} className="homeLinkChip" ariaLabel={l.label}>
                    <FontAwesomeIcon icon={getLinkIcon(l.href)} className="homeLinkChipIcon" aria-hidden="true" />
                  </ExternalLink>
                ))}
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
  )
}
