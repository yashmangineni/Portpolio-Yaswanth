







import { useState } from 'react'
import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from 'framer-motion'

import {
  ArrowDownRight,
  ArrowUpRight,
  Check,
  ExternalLink,
  Menu,
  MoveUpRight,
  X,
} from "lucide-react";
import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { MdPhone, MdEmail } from "react-icons/md";
import profileImage from './pic.jpeg'
import logo from './logo.png'

/* =========================================================
   TYPES
========================================================= */

type Skill = {
  name: string
  description: string
  category: string
}


/* =========================================================
   SKILLS
========================================================= */

const primarySkillNames = [
  'C#',
  '.NET',
  'Enterprise Resource Planning (ERP)',
  'Java',
  'Spring Boot',
  'React',
  'Angular',
  
  'JavaScript',
  'Node.js',
  'Python',
  'MongoDB',
  'SQL',
];

const skills: Skill[] = [
  /* =====================================================
     BACKEND
  ===================================================== */

  {
    name: 'C#',
    category: 'Backend',
    description:
      'Object-oriented programming for building reliable application and backend systems.',
  },

  {
    name: '.NET',
    category: 'Backend',
    description:
      'Modern application development with the .NET ecosystem and backend services.',
  },

  {
    name: '.NET Web API',
    category: 'Backend',
    description:
      'RESTful backend services and APIs for connecting applications and business systems.',
  },
{
    name: 'Enterprise Resource Planning (ERP)',
    category: 'Business Systems',
    description:
      'Business-focused systems that connect processes, data, workflows and organizational operations.',
  },
  {
    name: 'Java',
    category: 'Backend',
    description:
      'A general-purpose language for application development and backend systems.',
  },

  {
    name: 'Spring Boot',
    category: 'Backend',
    description:
      'Production-ready Java applications, backend services and REST APIs.',
  },

  {
    name: 'Node.js',
    category: 'Backend',
    description:
      'Server-side runtime for building APIs, backend services and web applications.',
  },

  

 ,

  /* =====================================================
     BUSINESS SYSTEMS
  ===================================================== */

  

  /* =====================================================
     FRONTEND
  ===================================================== */

  {
    name: 'React',
    category: 'Frontend',
    description:
      'Component-based interfaces for building modern and interactive web applications.',
  },

  {
    name: 'Angular',
    category: 'Frontend',
    description:
      'Structured frontend applications with reusable components and clear application flows.',
  },

  {
    name: 'TypeScript',
    category: 'Frontend',
    description:
      'Typed JavaScript development for maintainable and scalable application code.',
  },

  {
    name: 'JavaScript',
    category: 'Frontend',
    description:
      'The core language behind interactive interfaces and modern web application logic.',
  },

  {
    name: 'HTML5',
    category: 'Frontend',
    description:
      'Semantic structure for accessible, responsive and resilient web experiences.',
  },



  /* =====================================================
     DATABASE
  ===================================================== */

  {
    name: 'MongoDB',
    category: 'Database',
    description:
      'Document-oriented database for flexible and scalable application data.',
  },

  {
    name: 'SQL',
    category: 'Database',
    description:
      'Relational data management, queries and structured application databases.',
  },

  /* =====================================================
     DEVELOPMENT
  ===================================================== */

  {
    name: 'REST APIs',
    category: 'Development',
    description:
      'Clear API contracts that connect frontend applications with backend systems.',
  },

  

  {
    name: 'CRUD',
    category: 'Development',
    description:
      'Creating, reading, updating and deleting application data through complete workflows.',
  },


  {
    name: 'Git',
    category: 'Development',
    description:
      'Version control for tracking changes and managing application development safely.',
  },

  {
    name: 'GitHub',
    category: 'Development',
    description:
      'Source control, collaboration and project delivery workflows.',
  },

  {
    name: 'VS Code',
    category: 'Development',
    description:
      'Development environment for writing, debugging and managing application code.',
  },

  {
    name: 'Postman',
    category: 'Development',
    description:
      'API testing and exploration for validating backend services and integrations.',
  },

  /* =====================================================
     DESIGN
  ===================================================== */

];

const primarySkills = skills.filter((skill) =>
  primarySkillNames.includes(skill.name),
)

const secondarySkills = skills.filter(
  (skill) => !primarySkillNames.includes(skill.name),
)


/* =========================================================
   SKILL ICONS
========================================================= */

const skillGlyphs: Record<string, string> = {
  'C#': 'C#',
  '.NET': '.NET',
  '.NET Web API': 'API',
  'Enterprise Resource Planning (ERP)': 'ERP',
  Java: 'J',
  'Spring Boot': 'SB',
  React: '◌',
  Angular: 'A',
  TypeScript: 'TS',
  JavaScript: 'JS',
  'Node.js': 'N',
  Python: 'PY',
  MongoDB: '◆',
  SQL: 'DB',
  'REST APIs': 'API',
  CRUD: 'C',
  Git: 'git',
  GitHub: 'GH',
  'VS Code': 'VS',
  Postman: 'PM',
  Figma: 'Fg',
};


/* =========================================================
   FILTERS
========================================================= */

const stackFilters = [
  'All',
  'Frontend',
  'Backend',
  'Database',
  'Tools',
]

const skillsForFilter = (filter: string) => {
  if (filter === 'All') {
    return skills
  }

  if (filter === 'Tools') {
    return skills.filter(
      (skill) => skill.category === 'Development',
    )
  }

  return skills.filter(
    (skill) => skill.category === filter,
  )
}


/* =========================================================
   OTHER CONTENT
========================================================= */

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Stack', href: '#stack' },
  { label: 'Work', href: '#work' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

const capabilities = [
  [
    '01',
    'Web interfaces',
    'Responsive, modern and interactive frontend experiences.',
  ],
  [
    '02',
    'Full-stack applications',
    'Complete applications connecting frontend, backend and databases.',
  ],
  [
    '03',
    'Admin systems',
    'Dashboards and content management systems.',
  ],
  [
    '04',
    'APIs & data',
    'REST APIs, CRUD systems, authentication and database integration.',
  ],
  [
    '05',
    'Responsive experiences',
    'Interfaces that work across desktop, tablet and mobile.',
  ],
  [
    '06',
    'Deployed applications',
    'Taking applications from development to production.',
  ],
]

const timeline = [
  [
    '01',
    'Learn',
    'Explore the tools, patterns and ideas behind the problem.',
  ],
  [
    '02',
    'Build',
    'Turn understanding into a working interface or system.',
  ],
  [
    '03',
    'Test',
    'Check behavior, responsiveness and the awkward edge cases.',
  ],
  [
    '04',
    'Deploy',
    'Move the work into a real production environment.',
  ],
  [
    '05',
    'Improve',
    'Use feedback and observation to make the next version better.',
  ],
]

const education = [
  {
    degree: 'Bachelor of Technology (B.Tech)',
    institution: 'Kallam Haranadha Reddy Institute of Technology',
    specialization: 'Artificial Intelligence and Machine Learning',
    year: '2020 - 2024',
  },
]
const labAreas = [
  'Frontend',
  'Animation',
  'API',
  'UI',
  'Backend',
  'Database',
]


/* =========================================================
   REVEAL ANIMATION
========================================================= */

function Reveal({
  children,
  delay = 0,
  className = '',
}: {
  children: React.ReactNode
  delay?: number
  className?: string
}) {
  const reduceMotion = useReducedMotion()

  return (
    <motion.div
      className={className}
      initial={
        reduceMotion
          ? undefined
          : {
              opacity: 0,
              y: 22,
            }
      }
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.14,
      }}
      transition={{
        duration: 0.62,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  )
}


/* =========================================================
   APP
========================================================= */

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  const [selectedSkill, setSelectedSkill] =
    useState<Skill>(skills[0])

  const [showCaseStudy, setShowCaseStudy] =
    useState(false)

  const [labArea, setLabArea] =
    useState('Frontend')

  const [activeSkillFilter, setActiveSkillFilter] =
    useState('All')
const [showContactForm, setShowContactForm] =
  useState(false)

  /* =======================================================
     FILTERED SKILLS
  ======================================================= */

  const filteredSkills =
    skillsForFilter(activeSkillFilter)

  const orbitSkills =
    activeSkillFilter === 'All'
      ? primarySkills
      : filteredSkills


  /* =======================================================
     CIRCLE POSITION CALCULATION
     
     Every skill gets an angle around the circle.
     
     Example:
     React       = top
     Angular     = top-right
     TypeScript  = right
     Node.js     = bottom-right
     ...
  ======================================================= */

  const orbitPositions = orbitSkills.map(
    (_, index) => {
      const angle =
        -90 +
        (index * 360) /
          Math.max(orbitSkills.length, 1)

      const radians =
        (angle * Math.PI) / 180

      /*
        Radius controls how far the skills
        are from the center.

        39 means 39% of the big circle.
      */

      const radius =
        activeSkillFilter === 'All'
          ? 39
          : 36

      const x =
        radius * Math.cos(radians)

      const y =
        radius * Math.sin(radians)

      return {
        x,
        y,
      }
    },
  )


  /* =======================================================
     MOUSE GLOW
  ======================================================= */

  const handleMouseMove = (
    event: React.MouseEvent<HTMLDivElement>,
  ) => {
    const root = event.currentTarget

    root.style.setProperty(
      '--mouse-x',
      `${event.clientX}px`,
    )

    root.style.setProperty(
      '--mouse-y',
      `${event.clientY}px`,
    )
  }


  return (
    <div
      className="site-shell"
      onMouseMove={handleMouseMove}
    >

    {/* ===================================================
    NAVIGATION
=================================================== */}

<header className="nav-wrap">

  <nav
    className="nav"
    aria-label="Primary navigation"
  >

    {/* BRAND */}

   <a
  href="#top"
  className="brand"
  aria-label="Yaswanth Mangineni — Home"
  onClick={() => setMenuOpen(false)}
>
  <img
    src={logo}
    alt="Yaswanth Logo"
    className="brand-logo"
  />
</a>


    {/* DESKTOP NAVIGATION */}

    <div className="nav-links">

      {navItems.map((item) => (

        <a
          key={item.href}
          href={item.href}
          onClick={() => setMenuOpen(false)}
        >
          {item.label}
        </a>

      ))}

    </div>


    {/* RIGHT SIDE — DEVELOPER SYSTEM */}

    <div
      className="nav-status"
      aria-label="Developer system"
    >

      <i />

      <span>
        Developer system
      </span>

    </div>


    {/* MOBILE MENU BUTTON */}

    <button
      className="menu-button"
      type="button"
      aria-label={
        menuOpen
          ? "Close navigation menu"
          : "Open navigation menu"
      }
      aria-expanded={menuOpen}
      onClick={() => setMenuOpen(!menuOpen)}
    >

      {menuOpen ? (
        <X size={19} />
      ) : (
        <Menu size={19} />
      )}

    </button>

  </nav>


  {/* =================================================
      MOBILE MENU
  ================================================= */}

  <AnimatePresence>

    {menuOpen && (

      <motion.div
        className="mobile-menu"
        initial={{
          opacity: 0,
          y: -12,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        exit={{
          opacity: 0,
          y: -12,
        }}
        transition={{
          duration: 0.25,
        }}
      >

        <div className="mobile-menu-label">
          Navigation
        </div>


        {navItems.map((item) => (

          <a
            key={item.href}
            href={item.href}
            onClick={() => setMenuOpen(false)}
          >

            <span>
              {item.label}
            </span>

            <ArrowUpRight size={16} />

          </a>

        ))}

      </motion.div>

    )}

  </AnimatePresence>

</header>


      <main id="top">
{/* =================================================
    HERO
================================================= */}

<section className="hero">

  {/* BACKGROUND GLOW */}
  <div className="hero-bg-glow hero-bg-glow-one" />
  <div className="hero-bg-glow hero-bg-glow-two" />

  {/* =================================================
      LEFT — HERO CONTENT
  ================================================= */}

  <div className="hero-copy">

    <motion.p
      className="eyebrow"
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.15, duration: 0.5 }}
    >
      FULL-STACK WEB DEVELOPER
    </motion.p>


    <motion.h1
      className="hero-title"
      initial={{ opacity: 0, y: 35 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.25,
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <span>Mangineni</span>

      <span className="hero-name-accent">
        Yaswanth
      </span>
    </motion.h1>


    <motion.p
      className="hero-description"
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.55,
        duration: 0.5,
      }}
    >
      I build modern, scalable web applications that
      <br className="desktop-only" />
      turn ideas into real-world solutions.
    </motion.p>


    {/* =================================================
        BUTTONS
    ================================================= */}

    <motion.div
      className="hero-actions"
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.75,
        duration: 0.5,
      }}
    >

      <a
        href="#work"
        className="button button-primary"
      >
        View My Work
        <ArrowUpRight size={18} />
      </a>


      <a
        href="/resume.pdf"
        className="button button-resume"
        target="_blank"
        rel="noreferrer"
      >
        Download Resume

        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M12 3v12" />
          <path d="m7 10 5 5 5-5" />
          <path d="M5 21h14" />
        </svg>

      </a>

    </motion.div>


    {/* =================================================
        SOCIAL ICONS
    ================================================= */}

    <motion.div
      className="hero-socials"
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.9,
        duration: 0.5,
      }}
    >

      {/* GITHUB */}

      <a
        href="https://github.com/yashmangineni"
        target="_blank"
        rel="noreferrer"
        aria-label="GitHub"
        title="GitHub"
      >
        <FaGithub size={21} />
      </a>


      {/* LINKEDIN */}

      <a
        href="https://www.linkedin.com/in/yash6945"
        target="_blank"
        rel="noreferrer"
        aria-label="LinkedIn"
        title="LinkedIn"
      >
        <FaLinkedinIn size={21} />
      </a>


      {/* WHATSAPP */}

      <a
        href="https://wa.me/916309586945?text=Hello%20Yaswanth%2C%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20connect."
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp"
        title="WhatsApp"
      >
        <FaWhatsapp size={21} />
      </a>


      {/* EMAIL */}

      <a
        href="https://mail.google.com/mail/?view=cm&fs=1&to=yaswanthmangineni@gmail.com"
        target="_blank"
        rel="noreferrer"
        aria-label="Email"
        title="Email"
      >
        <MdEmail size={21} />
      </a>

    </motion.div>

  </div>


  {/* =================================================
      RIGHT — PROFILE IMAGE
  ================================================= */}

  <div className="hero-visual">

    {/* GREEN 3D GLOW */}

    <div className="hero-image-glow" />

    <motion.div
      className="hero-photo"
      initial={{
        opacity: 0,
        scale: 0.9,
        x: 45,
        rotateY: -8,
      }}
      animate={{
        opacity: 1,
        scale: 1,
        x: 0,
        rotateY: 0,
      }}
      transition={{
        delay: 0.35,
        duration: 0.9,
        ease: [0.22, 1, 0.36, 1],
      }}
    >

      <img
        src={profileImage}
        alt="Yaswanth Mangineni — Full-stack web developer"
      />


      {/* DARK IMAGE OVERLAY */}

      <div className="hero-photo-overlay" />


      {/* IMAGE CONTENT */}

      <div className="hero-photo-content">

        <div>
          <strong>
            YASWANTH MANGINENI
          </strong>

          <span>
            FULL-STACK DEVELOPER
          </span>
        </div>

        <span className="hero-photo-number">
          01
        </span>

      </div>


      {/* OPPORTUNITY BADGE */}

      <div className="hero-opportunity">

        <span className="opportunity-dot" />

        {/* <span>
          Open to Opportunities
        </span> */}

      </div>

    </motion.div>

  </div>


  {/* =================================================
      TECHNOLOGY META
  ================================================= */}

  

</section>
{/* =================================================
    ABOUT
================================================= */}

<section id="about" className="about section-pad">
  <div className="section-grid">

    <Reveal className="section-label">
      <span>02</span>
      <span>About</span>
    </Reveal>

    <div className="about-content">

      <Reveal>
        <h2 className="about-title">
          Building digital products.
          <br />
          <em>From idea to implementation.</em>
        </h2>
      </Reveal>

      <Reveal delay={0.08}>
        <div className="about-description">

          <p className="about-lead">
            I’m a Full-Stack Developer focused on building
            modern web applications and complete digital
            experiences — from frontend interfaces to
            backend systems and deployment.
          </p>

          <p className="about-text">
            My work combines product-focused thinking,
            clean development practices and practical
            problem solving. I enjoy understanding how
            a system should work, building the right
            architecture and turning ideas into reliable
            applications.
          </p>

          <p className="about-text">
            I also work with business-oriented systems,
            including ERP applications, APIs, database
            integrations and application workflows. This
            helps me approach development beyond just
            the interface and understand the complete
            system behind a product.
          </p>

        </div>
      </Reveal>

      {/* HOW I WORK */}
      <Reveal delay={0.15}>
        <div className="about-approach">

          <div className="about-approach-header">
            <span className="small-label">
              HOW I WORK
            </span>

            <span className="about-approach-line" />
          </div>

          <div className="about-process">

            <div className="about-process-item">
              <span>01</span>
              <strong>Understand</strong>
            </div>

            <div className="about-process-arrow">→</div>

            <div className="about-process-item">
              <span>02</span>
              <strong>Plan</strong>
            </div>

            <div className="about-process-arrow">→</div>

            <div className="about-process-item">
              <span>03</span>
              <strong>Build</strong>
            </div>

            <div className="about-process-arrow">→</div>

            <div className="about-process-item">
              <span>04</span>
              <strong>Integrate</strong>
            </div>

            <div className="about-process-arrow">→</div>

            <div className="about-process-item">
              <span>05</span>
              <strong>Refine</strong>
            </div>

          </div>

        </div>
      </Reveal>

      {/* CLOSING STATEMENT */}
      <Reveal delay={0.22}>
        <div className="about-statement">

          <span>“</span>

          <div>
            <p>
             Curiosity drives the learning
              
              <br />
              Experience shapes the solution.
            </p>

            
          </div>

        </div>
      </Reveal>

    </div>
  </div>
</section>
        {/* =================================================
            TECH STACK
        ================================================= */}

        <section
          id="stack"
          className="stack section-pad"
        >

          <div className="section-grid">

            <Reveal className="section-label">
              <span>03</span>
              <span>Technology</span>
            </Reveal>


            <div>

              <Reveal className="stack-heading">
                <h2>
                  My <em>tech stack.</em>
                </h2>

                <p>
                  Technologies I use to build
                  modern web applications.
                </p>
              </Reveal>


              <div className="stack-layout">


                {/* =========================================
                    BIG SKILL ORBIT
                ========================================= */}

                <motion.div
                  className="skill-orbit"
                  initial={{
                    opacity: 0,
                    scale: 0.94,
                  }}
                  whileInView={{
                    opacity: 1,
                    scale: 1,
                  }}
                  viewport={{
                    once: true,
                  }}
                  aria-label="Interactive technology orbit"
                >

                  {/* ORBIT RINGS */}

                  <div className="orbit-ring orbit-ring-outer" />

                  <div className="orbit-ring orbit-ring-middle" />

                  <div className="orbit-ring orbit-ring-inner" />


                  {/* CENTER */}

                  <div className="orbit-center">

                    <span>
                      Full stack
                    </span>

                    <strong>
                      Developer
                    </strong>

                    <i />

                  </div>


                  {/* SPARKS */}

                  <div className="orbit-spark spark-one" />

                  <div className="orbit-spark spark-two" />


                  {/* =======================================
                      SKILLS AROUND THE CIRCLE

                      IMPORTANT:
                      x/y calculated above are applied
                      directly here.
                  ======================================= */}

                  {orbitSkills.map(
                    (skill, index) => {

                      const position =
                        orbitPositions[index]

                      return (
                        <button
                          key={skill.name}
                          className={`skill-node ${
                            selectedSkill.name ===
                            skill.name
                              ? 'is-active'
                              : ''
                          }`}
                          style={
                            {
                              '--orbit-x':
                                `${position.x}%`,

                              '--orbit-y':
                                `${position.y}%`,
                            } as React.CSSProperties
                          }
                          onClick={() =>
                            setSelectedSkill(skill)
                          }
                          onMouseEnter={() =>
                            setSelectedSkill(skill)
                          }
                        >

                          <span className="skill-glyph">
                            {
                              skillGlyphs[
                                skill.name
                              ]
                            }
                          </span>

                          <span>
                            {skill.name}
                          </span>

                        </button>
                      )
                    },
                  )}

                </motion.div>


                {/* =========================================
                    SKILL INSPECTOR
                ========================================= */}

                <div className="stack-detail">

                  {/* FILTERS */}

                  <div className="filter-row">

                    {stackFilters.map(
                      (filter) => (
                        <button
                          key={filter}
                          className={
                            activeSkillFilter ===
                            filter
                              ? 'is-active'
                              : ''
                          }
                          onClick={() => {

                            const nextSkills =
                              skillsForFilter(
                                filter,
                              )

                            setActiveSkillFilter(
                              filter,
                            )

                            setSelectedSkill(
                              filter === 'All'
                                ? primarySkills[0]
                                : nextSkills[0],
                            )
                          }}
                        >
                          {filter}
                        </button>
                      ),
                    )}

                  </div>


                  {/* INSPECTOR */}

                  <AnimatePresence mode="wait">

                    <motion.div
                      className="skill-inspector"
                      key={selectedSkill.name}
                      initial={{
                        opacity: 0,
                        y: 12,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      exit={{
                        opacity: 0,
                        y: -8,
                      }}
                      transition={{
                        duration: 0.35,
                      }}
                    >

                      <div className="inspector-top">

                        <span className="small-label">
                          Selected technology /
                          {' '}
                          {selectedSkill.category ===
                          'Development'
                            ? 'Tools'
                            : selectedSkill.category}
                        </span>

                        <span className="active-badge">
                          <i />
                          Actively using
                        </span>

                      </div>


                      <h3>

                        <span className="inspector-glyph">
                          {
                            skillGlyphs[
                              selectedSkill.name
                            ]
                          }
                        </span>

                        {selectedSkill.name}

                      </h3>


                      <span className="skill-role">
                        {selectedSkill.category}
                      </span>


                      <p>
                        {selectedSkill.description}
                      </p>


                      <span className="inspector-mark">
                        <Check size={14} />
                        In the toolkit
                      </span>


                      <div className="concept-chips">

                        <span>
                          Components
                        </span>

                        <span>
                          Integration
                        </span>

                        <span>
                          Responsive UI
                        </span>

                      </div>

                    </motion.div>

                  </AnimatePresence>

                </div>

              </div>


              {/* =================================================
                  OTHER TECHNOLOGIES
              ================================================= */}

              <div className="other-tech">
                <div className="other-tech-heading">
                  <span className="small-label">Additional technologies</span>
                  <h3>
                    More tools I <em>work with.</em>
                  </h3>
                </div>

                <div className="other-tech-grid">
                  
                  
                 
                 
                  <div className="other-tech-card">
                    <span className="other-tech-icon">V</span>
                    <div><strong>Vercel</strong><span>Deployment</span></div>
                  </div>
                  <div className="other-tech-card">
                    <span className="other-tech-icon">NL</span>
                    <div><strong>Netlify</strong><span>Web deployment</span></div>
                  </div>
                  <div className="other-tech-card">
                    <span className="other-tech-icon">GH</span>
                    <div><strong>GitHub Actions</strong><span>CI / CD</span></div>
                  </div>
                  <div className="other-tech-card">
                    <span className="other-tech-icon">C</span>
                    <div><strong>MongoDB Atlas</strong><span>Cloud database</span></div>
                  </div>
                   <div className="other-tech-card">
                    <span className="other-tech-icon">JWT</span>
                    <div><strong>JWT</strong><span>Authentication</span></div>
                  </div>
                </div>
              </div>



              

              

            </div>

          </div>

        </section>


        
      {/* =================================================
    WORK
================================================= */}

<section id="work" className="work section-pad">

  <div className="section-grid">

    <Reveal className="section-label">
      <span>04</span>
      <span>Selected work</span>
    </Reveal>

    <div>

      {/* WORK INTRO */}

      <Reveal>

        <p className="work-intro">
          A full-stack digital experience built for
          managing and presenting Ganesh Utsav
          information, media and activities.
        </p>

      </Reveal>


      {/* PROJECT */}

      <Reveal>

        <article className="project-showcase">


          {/* =========================================
              PROJECT VISUAL
          ========================================= */}

          <div className="project-visual">

            <div className="visual-window">

              {/* BROWSER BAR */}

              <div className="window-bar">

                <i />
                <i />
                <i />

                <span>
                  ganeshustav-balaganeshyouth.netlify.app
                </span>

              </div>


              {/* SCREEN */}

              <div className="visual-screen">

                <span className="screen-kicker">
                  Ganapati Memories
                </span>

                <strong>
                  Digital Experience
                </strong>

                <span className="screen-year">
                  2026
                </span>

                <span className="screen-line" />

                <span className="screen-copy">
                  Celebration.
                  <br />
                  Together.
                </span>

              </div>

            </div>

          </div>


          {/* =========================================
              PROJECT CONTENT
          ========================================= */}

          <div className="project-copy">


            {/* TOP */}

            <div className="project-top">

              <span className="project-number">
                01
              </span>

              <span className="project-status">
                <i />
                Live project
              </span>

            </div>


            {/* TITLE */}

            <h3 className="project-title">
  <span>Ganapati Memories</span>
  <em>Digital Experience</em>
</h3>


            {/* DESCRIPTION */}

            <p>
              A complete full-stack Ganesh Utsav
              digital experience developed to present
              yearly celebrations, event information,
              committee members, Seva details,
              images and videos through a responsive
              web platform.
            </p>

            <p>
              The public website is built with Angular,
              while a separate React administration
              dashboard manages website content
              through a Node.js and Express.js REST API.
            </p>


            {/* TECHNOLOGY */}

            <div className="project-tech">

              Angular · React · Node.js · Express.js
              · MongoDB Atlas · Render · Netlify

            </div>


            {/* =========================================
                SYSTEM ARCHITECTURE
            ========================================= */}

            <div className="project-architecture">

              <div className="architecture-label">
                SYSTEM ARCHITECTURE
              </div>


              {/* PUBLIC WEBSITE FLOW */}

              <div className="architecture-flow">

                <span>
                  Angular

                  <small>
                    Public Website
                  </small>
                </span>


                <b>
                  →
                </b>


                <span>
                  Express API

                  <small>
                    Node.js Backend
                  </small>
                </span>


                <b>
                  →
                </b>


                <span>
                  MongoDB

                  <small>
                    Atlas Database
                  </small>
                </span>

              </div>


              {/* ADMIN FLOW */}

              <div className="architecture-admin">

                <span>
                  React Admin

                  <small>
                    Content Management
                  </small>
                </span>


                <b>
                  →
                </b>


                <span>
                  Express API

                  <small>
                    Shared Backend
                  </small>
                </span>

              </div>

            </div>


            {/* =========================================
                FEATURES
            ========================================= */}

            <div className="project-features">

              {[
                '2023 / 2024 / 2025 / 2026 information',

                '2026 welcome section',

                'Angular public website',

                'React admin dashboard',

                'Node.js backend',

                'Express.js REST API',

                'MongoDB Atlas cloud database',

                'Admin authentication',

                'Dynamic content management',

                'Images & video management',

                'Committee members',

                'Ganesh event information',

                'Seva & contact information',

                'CRUD operations',

                'API integration',

                'Render backend deployment',

                'Netlify frontend deployment',

              ].map((feature) => (

                <span key={feature}>

                  <Check size={14} />

                  {feature}

                </span>

              ))}

            </div>


            {/* =========================================
                ACTIONS
            ========================================= */}

            <div className="project-actions">

              <a
                className="button button-primary"
                href="https://ganeshustav-balaganeshyouth.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >

                Live project

                <ExternalLink size={15} />

              </a>


              <button
                className="text-link"
                onClick={() =>
                  setShowCaseStudy(true)
                }
              >

                Case study

                <MoveUpRight size={15} />

              </button>

            </div>


          </div>

        </article>

      </Reveal>

    </div>

  </div>

</section>

      {/* =================================================
    EXPERIENCE
================================================= */}

<section id="experience" className="experience section-pad">

  <div className="section-grid">

    <Reveal className="section-label">
      <span>05</span>
      <span>Experience</span>
    </Reveal>

    <div>

      <Reveal>

        <h2 className="section-heading">
          Professional
          <br />
          <em>experience.</em>
        </h2>

      </Reveal>


      <Reveal delay={0.08}>

        <article className="experience-card">

          {/* TOP */}
          <div className="experience-header">

            <div>

              <span className="small-label">
                PROFESSIONAL EXPERIENCE
              </span>

              <h3>
                ERP Application Developer &amp; .NET Developer
              </h3>

              <p className="experience-company">
                Mindspire Solutions Private Limited
              </p>

            </div>

            <span className="experience-period">
              1 Year
            </span>

          </div>


          {/* DESCRIPTION */}
          <div className="experience-description">

            <p>
              Working on ERP application development using .NET,
              Infor CSI, customized forms and business workflows.
              Developing APIs and application integrations while
              building and customizing user interfaces connected
              with MySQL databases.
            </p>

          </div>


          {/* RESPONSIBILITIES */}
          <div className="experience-details">

            <span className="small-label">
              KEY RESPONSIBILITIES
            </span>


            <div className="experience-grid">

              <div className="experience-item">
                <span>01</span>

                <strong>ERP Application Development</strong>

                <p>
                  Working with ERP applications and Infor CSI,
                  including business processes and customized
                  ERP forms.
                </p>
              </div>


              <div className="experience-item">
                <span>02</span>

                <strong>ERP Forms &amp; Workflows</strong>

                <p>
                  Working with ERP forms and business modules
                  such as PO, CO, BOM and other application
                  workflows.
                </p>
              </div>


              <div className="experience-item">
                <span>03</span>

                <strong>.NET Web API Development</strong>

                <p>
                  Developing REST APIs using .NET Web API to
                  connect application interfaces with backend
                  services and business data.
                </p>
              </div>


              <div className="experience-item">
                <span>04</span>

                <strong>Database Integration</strong>

                <p>
                  Connecting customized application forms and
                  services with MySQL databases for retrieving
                  and managing business data.
                </p>
              </div>


              <div className="experience-item">
                <span>05</span>

                <strong>Customized UI Development</strong>

                <p>
                  Creating and customizing user interfaces
                  based on business requirements and ERP
                  application workflows.
                </p>
              </div>


              <div className="experience-item">
                <span>06</span>

                <strong>Barcode &amp; Item Scanning</strong>

                <p>
                  Working with item barcode scanning workflows
                  to support faster item identification and
                  business operations.
                </p>
              </div>

            </div>

          </div>


         

        </article>

      </Reveal>

    </div>

  </div>

</section>

{/* =================================================
            CAPABILITIES
        ================================================= */}

        <section
          id="capabilities"
          className="capabilities section-pad"
        >

          <div className="section-grid">

            <Reveal className="section-label">
              <span>06</span>
              <span>What I build</span>
            </Reveal>

            <div>
<h2 className="section-heading">
  From logic
  <br />
  <em>to application.</em>
</h2>

              <div className="capability-list">

                {capabilities.map(
                  (
                    [number, title, text],
                  ) => (
                    <Reveal key={number}>

                      <div className="capability-row">

                        <span>
                          {number}
                        </span>

                        <div>

                          <h3>
                            {title}
                          </h3>

                          <p>
                            {text}
                          </p>

                        </div>

                        <ArrowUpRight size={20} />

                      </div>

                    </Reveal>
                  ),
                )}

              </div>

            </div>

          </div>

        </section>


{/* =================================================
    EDUCATION
================================================= */}

<section className="education section-pad">

  <div className="section-grid">

    <Reveal className="section-label">
      <span>07</span>
      <span>Education</span>
    </Reveal>

    <div>

      <Reveal>
        <h2 className="section-heading">
          Academic
          <br />
          <em>background.</em>
        </h2>
      </Reveal>

      <Reveal delay={0.08}>
        <div className="education-card">

          <span className="education-number">
            01
          </span>

          <div className="education-info">

            <span className="small-label">
              EDUCATION
            </span>

            <h3>
              {education[0].degree}
            </h3>

            <p>
              {education[0].institution}
            </p>

            <span className="education-specialization">
              {education[0].specialization}
            </span>

          </div>

          <span className="education-year">
            {education[0].year}
          </span>

        </div>
      </Reveal>

    </div>

  </div>

</section>
      {/* =================================================
    CONTACT
================================================= */}

<section
  id="contact"
  className="contact section-pad"
>
  <div className="contact-inner">

    {/* LEFT — CONTACT INTRO */}

    <Reveal>
      <span className="small-label">
        08 / Contact
      </span>

      <h2>
        Let's
        <br />
        connect.
      </h2>

      <p>
        Have an idea, question, or
        something interesting you'd
        like to build?
      </p>

      <button
        type="button"
        className="contact-cta"
        onClick={() => setShowContactForm(true)}
      >
        Send a message
        <ArrowUpRight size={16} />
      </button>
    </Reveal>


    {/* RIGHT — CONTACT LINKS */}

    <Reveal
      delay={0.12}
      className="contact-note"
    >
      <span className="small-label">
        Find me here
      </span>

      <div className="contact-links">

        {/* EMAIL */}

        <a
          href="mailto:yaswanthmangineni@gmail.com"
        >
          <span>
            <small>Email</small>
            yaswanthmangineni@gmail.com
          </span>

          <ArrowUpRight size={16} />
        </a>


        {/* GITHUB */}

        <a
          href="https://github.com/yashmangineni"
          target="_blank"
          rel="noreferrer"
        >
          <span>
            <small>GitHub</small>
            github.com/yashmangineni
          </span>

          <ArrowUpRight size={16} />
        </a>


        {/* LINKEDIN */}

        <a
          href="https://www.linkedin.com/in/yash6945"
          target="_blank"
          rel="noreferrer"
        >
          <span>
            <small>LinkedIn</small>
            linkedin.com/in/yash6945
          </span>

          <ArrowUpRight size={16} />
        </a>

      </div>
    </Reveal>

  </div>
</section>


{/* =================================================
    CONTACT FORM MODAL
================================================= */}

<AnimatePresence>
  {showContactForm && (
    <motion.div
      className="contact-modal-backdrop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={() => setShowContactForm(false)}
    >
      <motion.div
        className="contact-form-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="contact-form-title"

        initial={{
          opacity: 0,
          y: 25,
          scale: 0.97,
        }}

        animate={{
          opacity: 1,
          y: 0,
          scale: 1,
        }}

        exit={{
          opacity: 0,
          y: 20,
          scale: 0.97,
        }}

        transition={{
          duration: 0.3,
        }}

        onClick={(event) =>
          event.stopPropagation()
        }
      >

        {/* FORM HEADER */}

        <div className="contact-form-header">

          <div>
            <span className="small-label">
              Send a message
            </span>

            <h3 id="contact-form-title">
              Let's connect.
            </h3>
          </div>


          {/* CLOSE BUTTON */}

          <button
            type="button"
            className="contact-form-close"
            onClick={() =>
              setShowContactForm(false)
            }
            aria-label="Close contact form"
          >
            <X size={18} />
          </button>

        </div>


       {/* CONTACT FORM */}

<form
  className="contact-form"
  onSubmit={(event) => {
    event.preventDefault()

    const form = event.currentTarget
    const formData = new FormData(form)

    const name = String(
      formData.get("name") || ""
    )

    const email = String(
      formData.get("email") || ""
    )

    const subject = String(
      formData.get("subject") || ""
    )

    const message = String(
      formData.get("message") || ""
    )

    const gmailUrl =
      `https://mail.google.com/mail/?view=cm&fs=1` +
      `&to=yaswanthmangineni@gmail.com` +
      `&su=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(
        `Name: ${name}\n` +
        `Email: ${email}\n\n` +
        `Message:\n${message}`
      )}`

    window.open(
      gmailUrl,
      "_blank",
      "noopener,noreferrer"
    )
  }}
>

  {/* NAME + EMAIL */}

  <div className="contact-form-row">

    <label>
      <span>Name</span>

      <input
        type="text"
        name="name"
        placeholder="Your name"
        autoComplete="name"
        required
      />
    </label>


    <label>
      <span>Email</span>

      <input
        type="email"
        name="email"
        placeholder="your@email.com"
        autoComplete="email"
        required
      />
    </label>

  </div>


  {/* SUBJECT */}

  <label>
    <span>Subject</span>

    <input
      type="text"
      name="subject"
      placeholder="What would you like to discuss?"
      required
    />
  </label>


  {/* MESSAGE */}

  <label>
    <span>Message</span>

    <textarea
      name="message"
      rows={6}
      placeholder="Tell me a little about your idea..."
      required
    />
  </label>


  {/* SUBMIT */}

  <button
    type="submit"
    className="contact-form-submit"
  >
    Send message
    <ArrowUpRight size={16} />
  </button>

</form>

      </motion.div>
    </motion.div>
  )}
</AnimatePresence>
     {/* ===================================================
    FOOTER
=================================================== */}

<footer className="footer">

  {/* LEFT — BRAND + SOCIALS */}
  <div className="footer-brand">

    <h2 className="footer-name">
      YASWANTH <span>MANGINENI</span>
    </h2>

    <p className="footer-role">
      FULL-STACK WEB DEVELOPER
      <br />
      BUILDING MODERN WEB EXPERIENCES.
    </p>

    {/* SOCIAL ICONS */}
    <div className="footer-socials">

      {/* Phone */}
      <a
        href="tel:+916309586945"
        aria-label="Phone"
        title="Phone"
      >
        <MdPhone size={20} />
      </a>

      {/* WhatsApp */}
      <a
        href="https://wa.me/916309586945?text=Hello%20Yaswanth%2C%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20connect."
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp"
        title="WhatsApp"
      >
        <FaWhatsapp size={20} />
      </a>

      {/* GitHub */}
      <a
        href="https://github.com/yashmangineni"
        target="_blank"
        rel="noreferrer"
        aria-label="GitHub"
        title="GitHub"
      >
        <FaGithub size={20} />
      </a>

      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com/in/yash6945"
        target="_blank"
        rel="noreferrer"
        aria-label="LinkedIn"
        title="LinkedIn"
      >
        <FaLinkedinIn size={20} />
      </a>

      {/* Email */}
      <a
        href="https://mail.google.com/mail/?view=cm&fs=1&to=yaswanthmangineni@gmail.com"
        target="_blank"
        rel="noreferrer"
        aria-label="Email"
        title="Email"
      >
        <MdEmail size={20} />
      </a>

    </div>

  </div>


  {/* CENTER — QUICK LINKS */}
  <div className="footer-links">

    <span className="footer-label">
      Explore
    </span>

    <a href="#about">
      About
    </a>

    <a href="#stack">
      Stack
    </a>

    <a href="#work">
      Work
    </a>

    <a href="#experience">
      Experience
    </a>

    <a href="#contact">
      Contact
    </a>

  </div>


  {/* RIGHT — BACK TO TOP */}
  <a
    href="#top"
    className="back-top"
  >
    <span>Back to top</span>
    <ArrowUpRight size={15} />
  </a>


  {/* BOTTOM */}
  <div className="footer-bottom">

    <span>
      © 2026 Yaswanth Mangineni
    </span>

    <span>
      Digital work · Thoughtfully crafted
    </span>

  </div>

</footer>





{/* ===================================================
    FLOATING WHATSAPP
=================================================== */}

<motion.a
  href="https://wa.me/916309586945?text=Hello%20Yaswanth%2C%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20connect."
  target="_blank"
  rel="noreferrer"
  className="whatsapp-float"
  aria-label="Contact Yaswanth on WhatsApp"
  initial={{
    opacity: 0,
    scale: 0.8,
  }}
  animate={{
    opacity: 1,
    scale: 1,
  }}
  transition={{
    delay: 1.2,
    duration: 0.4,
  }}
>
  <span className="whatsapp-pulse" />

  <svg
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path
      d="M20.52 3.48A11.87 11.87 0 0 0 12.05 0C5.48 0 .13 5.35.13 11.92c0 2.1.55 4.15 1.6 5.96L.03 24l6.26-1.64a11.9 11.9 0 0 0 5.75 1.47h.01c6.57 0 11.92-5.35 11.92-11.92 0-3.19-1.24-6.18-3.45-8.43ZM12.05 21.84h-.01a9.9 9.9 0 0 1-5.05-1.38l-.36-.21-3.72.98.99-3.63-.23-.37a9.9 9.9 0 1 1 8.38 4.61Zm5.43-7.42c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.74-1.64-2.04-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.5 1.69.64.71.23 1.36.2 1.87.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z"
    />
  </svg>
</motion.a>



      {/* ===================================================
          CASE STUDY MODAL
      =================================================== */}

      <AnimatePresence>

        {showCaseStudy && (

          <motion.div
            className="modal-backdrop"
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
          >

            <motion.div
              className="case-modal"
              role="dialog"
              aria-modal="true"
              aria-labelledby="case-title"
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: 20,
              }}
            >

              <button
                className="modal-close"
                onClick={() =>
                  setShowCaseStudy(false)
                }
                aria-label="Close case study"
              >
                <X size={18} />
              </button>


              <span className="small-label">
                Real client project / 01
              </span>


              <h2 id="case-title">
                Ganesh Utsav — Digital Experience
              </h2>


              <p className="lead">
                A responsive event website
                with dynamic content and an
                administration system for
                managing website images and
                content.
              </p>


              <div className="case-grid">

                <div>

                  <span className="small-label">
                    My role
                  </span>

                  <p>
                    Full-stack development,
                    integration and deployment.
                  </p>

                </div>


                <div>

                  <span className="small-label">
                    Technology
                  </span>

                  <p>
                    Angular ·React · Node.js ·
                    MongoDB Atlas 
                  </p>

                </div>


                <div>

                  <span className="small-label">
                    Key features
                  </span>

                  <p>
                    Responsive website,
                    admin authentication,
                    dashboard, image management,
                    dynamic content and backend API.
                  </p>

                </div>


                <div>

                  <span className="small-label">
                    Live project
                  </span>

                  <p>
                    Production website available
                    at the live project link.
                  </p>

                </div>

              </div>


              <a
                className="button button-primary"
                href="https://ganeshustav-balaganeshyouth.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                Visit live project
                <ExternalLink size={16} />
              </a>

            </motion.div>

          </motion.div>

        )}

            </AnimatePresence>

    </main>

    </div>
  )
}

export default App