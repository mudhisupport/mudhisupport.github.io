import { useState } from "react";
import portrait from "../mudhi.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faBars,
  faClock,
  faCloud,
  faCode,
  faDatabase,
  faEnvelope,
  faFileLines,
  faFlask,
  faFolder,
  faLocationDot,
  faLaptopCode,
  faMoon,
  faPaperPlane,
  faPen,
  faSun,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { Sprout } from "lucide-react";
import javaLogo from "devicon/icons/java/java-plain.svg";
import springLogo from "devicon/icons/spring/spring-original.svg";
import postgresqlLogo from "devicon/icons/postgresql/postgresql-plain.svg";
import dockerLogo from "devicon/icons/docker/docker-plain.svg";

export default function Portfolio() {
  const [dark, setDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    ["Home", "#home"],
    ["About", "#about"],
    ["Projects", "#projects"],
    ["Blog", "#blog"],
    ["Contact", "#contact"],
  ];

  return (
    <div className={dark ? "dark" : ""}>
      <main className="site">
        <nav className="topbar">
          <div className="nav-inner">
            <a className="brand" href="#home" aria-label="Mudhihir JZ home">
              <FontAwesomeIcon icon={faCode} />
              <span>Mudhihir. <b>JZ</b></span>
            </a>

            <div className="nav-links">
              {navLinks.map(([name, link], index) => (
                <a className={index === 0 ? "active" : ""} key={name} href={link}>
                  {name}
                </a>
              ))}
            </div>

            <div className="nav-actions">
              <span className="theme-divider" />
              <button className="theme-toggle" aria-label="Toggle theme" onClick={() => setDark(!dark)}>
                <FontAwesomeIcon icon={faSun} className="sun" />
                <FontAwesomeIcon icon={faMoon} className="moon" />
              </button>
              <button className="menu-button" aria-label="Toggle navigation" onClick={() => setMenuOpen(!menuOpen)}>
                <FontAwesomeIcon icon={menuOpen ? faXmark : faBars} />
              </button>
            </div>
          </div>
          {menuOpen && (
            <div className="mobile-nav">
              {navLinks.map(([name, link]) => (
                <a key={name} href={link} onClick={() => setMenuOpen(false)}>{name}</a>
              ))}
            </div>
          )}
        </nav>

        <section id="home" className="hero">
          <div className="hero-inner">
            <div className="hero-copy">
              <div className="availability"><i /> Available for internships</div>
              <h1>Hi, I'm <span>Mudhihir JZ</span><br />Backend Developer to Come.</h1>
              <p className="hero-subtitle">Currently learning Spring Boot <b>•</b> Java <b>•</b> PostgreSQL</p>
              <div className="hero-buttons">
                <a className="button primary" href="#projects"><FontAwesomeIcon icon={faFolder} /> View Projects <FontAwesomeIcon icon={faArrowRight} /></a>
                <a className="button secondary" href="#contact"><FontAwesomeIcon icon={faEnvelope} /> Contact Me</a>
              </div>
              <div className="skill-row">
                <span><img src={javaLogo} alt="" /> Java</span>
                <span><img src={springLogo} alt="" /> Spring Boot</span>
                <span><img src={postgresqlLogo} alt="" /> PostgreSQL</span>
              </div>
              <div className="location"><FontAwesomeIcon icon={faLocationDot} /> Zanzibar, Tanzania</div>
            </div>

            <div className="hero-visual">
              <div className="scribble scribble-top">〽</div>
              <div className="hero-profile">
                <img src={portrait} alt="Mudhihir JZ" />
              </div>
              <div className="shape shape-a" />
              <div className="shape shape-b" />
            </div>
          </div>
        </section>

        <section id="about" className="section about-section">
          <div className="about-card">
            <div className="about-art" aria-hidden="true">
              <FontAwesomeIcon className="about-laptop" icon={faLaptopCode} />
              <Sprout className="plant" size={43} strokeWidth={1.7} />
              <span className="art-code">&lt;/&gt;</span>
            </div>
            <div className="about-copy">
              <div className="eyebrow"><i /> GET TO KNOW ME</div>
              <h2>About Me</h2>
              <p>I'm Mudhihir JZ, an aspiring backend developer from Zanzibar, Tanzania. I'm currently building my foundation in backend development, focusing on Java, Spring Boot, PostgreSQL and REST APIs.</p>
            </div>
            <div className="about-list">
              {[
                ["01", "Java", "Learning object-oriented programming."],
                ["02", "Spring Boot", "Exploring backend application development."],
                ["03", "PostgreSQL", "Learning relational database management."],
                ["04", "REST APIs", "Understanding API design and integration."],
              ].map(([number, title, text]) => (
                <div className="about-item" key={number}>
                  <b>{number}</b>
                  <div><strong>{title}</strong><span>{text}</span></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="section projects-section">
          <div className="project-grid">
            <div className="project-intro">
              <div className="eyebrow"><i /> WHAT I'M BUILDING</div>
              <h2>Featured Project</h2>
              <p>One project. A continuous journey of<br />experimentation and learning.</p>
            </div>
            <article className="project-card">
              <div className="flask"><FontAwesomeIcon icon={faFlask} /></div>
              <div className="project-details">
                <h3>KilivoLabs</h3>
                <p>An experimental lab for microservices, REST APIs, and cloud-native backend tools. Building scalable systems with Spring Boot &amp; PostgreSQL.</p>
                <div className="tags">
                  <span><img src={springLogo} alt="" />Spring Boot</span>
                  <span><img src={postgresqlLogo} alt="" />PostgreSQL</span>
                  <span><img src={dockerLogo} alt="" />Docker</span>
                </div>
                <div className="project-links">
                  <a href="https://github.com/mudhihirjz" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faFolder} /> View on GitHub</a>
                  <a href="#about">Learn More <FontAwesomeIcon icon={faArrowRight} /></a>
                </div>
              </div>
              <div className="project-art" aria-hidden="true">
                <FontAwesomeIcon icon={faCloud} />
                <FontAwesomeIcon icon={faDatabase} />
              </div>
            </article>
          </div>
        </section>

        <section id="blog" className="section blog-section">
          <article className="blog-card">
            <div className="blog-icon">
              <FontAwesomeIcon icon={faFileLines} />
              <FontAwesomeIcon className="blog-pen" icon={faPen} />
            </div>
            <div className="blog-copy">
              <div className="eyebrow"><i /> MY NOTES</div>
              <h2>Blog</h2>
              <p>A space for sharing development insights,<br />learning experiences and technical discoveries.</p>
            </div>
            <div className="soon"><FontAwesomeIcon icon={faClock} /> Articles coming soon...</div>
          </article>
        </section>

        <section id="contact" className="section contact-section">
          <svg className="plane-trail" viewBox="0 0 220 140" aria-hidden="true">
            <path d="M5 132 C22 109 30 88 20 73 C9 57 17 42 32 48 C47 54 42 76 56 73 C72 70 88 30 105 15" />
          </svg>
          <FontAwesomeIcon className="plane-art" icon={faPaperPlane} />
          <div className="contact-copy">
            <div className="eyebrow"><i /> LET'S CONNECT</div>
            <h2>Have an opportunity?</h2>
            <p>I'm open to internship opportunities, learning experiences<br />and meaningful connections within the software development community.</p>
            <a className="button primary contact-button" href="mailto:mudhisupport@gmail.com"><FontAwesomeIcon icon={faEnvelope} /> Get in Touch</a>
          </div>
          <svg className="rays" viewBox="0 0 72 72" aria-hidden="true">
            <path d="M15 56 10 34M34 52 38 22M51 55 65 39" />
          </svg>
        </section>

        <footer>
          <div className="footer-inner">
            <p>© 2024 Mudhihir JZ · Built with Java &amp; Spring Boot</p>
            <div className="socials">
              <a href="https://github.com/mudhihirjz" aria-label="GitHub">
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a href="https://linkedin.com" aria-label="LinkedIn">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
              <a href="mailto:mudhisupport@gmail.com" aria-label="Email"><FontAwesomeIcon icon={faEnvelope} /></a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
