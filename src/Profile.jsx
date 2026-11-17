import { useState } from "react";
import portrait from "../mudhi.jpeg";
import {
  Sun,
  Moon,
  Mail,
  ArrowRight,
  MapPin,
  GitFork,
  Code2,
  Menu,
  X,
  Database,
  FlaskConical,
  FileText,
  Send,
  Clock3,
  Laptop,
  Sprout,
  Coffee,
} from "lucide-react";

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
              <Code2 size={31} strokeWidth={2.6} />
              <span>Mudhihir <b>JZ</b></span>
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
                <Sun className="sun" size={17} />
                <Moon className="moon" size={17} />
              </button>
              <button className="menu-button" aria-label="Toggle navigation" onClick={() => setMenuOpen(!menuOpen)}>
                {menuOpen ? <X /> : <Menu />}
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
                <a className="button primary" href="#projects"><Laptop size={17} /> View Projects <ArrowRight size={17} /></a>
                <a className="button secondary" href="#contact"><Mail size={17} /> Contact Me</a>
              </div>
              <div className="skill-row">
                <span><Coffee size={19} /> Java</span>
                <span><Sprout size={21} /> Spring Boot</span>
                <span><Database size={20} /> PostgreSQL</span>
              </div>
              <div className="location"><MapPin size={17} fill="currentColor" /> Zanzibar, Tanzania</div>
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
              <Laptop size={132} strokeWidth={1.25} />
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
              <div className="flask"><FlaskConical size={38} /></div>
              <div className="project-details">
                <h3>KilivoLabs</h3>
                <p>An experimental lab for microservices, REST APIs, and cloud-native backend tools. Building scalable systems with Spring Boot &amp; PostgreSQL.</p>
                <div className="tags"><span>Spring Boot</span><span>PostgreSQL</span><span>Docker</span></div>
                <div className="project-links">
                  <a href="https://github.com/mudhihirjz" target="_blank" rel="noreferrer"><GitFork size={15} /> View on GitHub</a>
                  <a href="#about">Learn More <ArrowRight size={15} /></a>
                </div>
              </div>
              <Database className="database-art" size={75} strokeWidth={1.6} />
            </article>
          </div>
        </section>

        <section id="blog" className="section blog-section">
          <article className="blog-card">
            <div className="blog-icon"><FileText size={51} strokeWidth={1.8} /></div>
            <div className="blog-copy">
              <div className="eyebrow"><i /> MY NOTES</div>
              <h2>Blog</h2>
              <p>A space for sharing development insights,<br />learning experiences and technical discoveries.</p>
            </div>
            <div className="soon"><Clock3 size={17} /> Articles coming soon...</div>
          </article>
        </section>

        <section id="contact" className="section contact-section">
          <svg className="plane-trail" viewBox="0 0 220 140" aria-hidden="true">
            <path d="M5 132 C22 109 30 88 20 73 C9 57 17 42 32 48 C47 54 42 76 56 73 C72 70 88 30 105 15" />
          </svg>
          <Send className="plane-art" size={68} strokeWidth={1.5} />
          <div className="contact-copy">
            <div className="eyebrow"><i /> LET'S CONNECT</div>
            <h2>Have an opportunity?</h2>
            <p>I'm open to internship opportunities, learning experiences<br />and meaningful connections within the software development community.</p>
            <a className="button primary contact-button" href="mailto:mudhisupport@gmail.com"><Mail size={17} /> Get in Touch</a>
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
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path fill="currentColor" d="M12 .75a11.25 11.25 0 0 0-3.56 21.92c.56.1.77-.24.77-.54v-2.1c-3.14.69-3.8-1.34-3.8-1.34-.51-1.31-1.26-1.66-1.26-1.66-1.03-.7.08-.69.08-.69 1.14.08 1.74 1.17 1.74 1.17 1.02 1.73 2.67 1.23 3.32.94.1-.73.4-1.23.72-1.52-2.51-.29-5.15-1.27-5.15-5.62 0-1.24.44-2.25 1.16-3.05-.12-.29-.5-1.45.11-3.02 0 0 .95-.3 3.1 1.16a10.75 10.75 0 0 1 5.64 0c2.15-1.46 3.1-1.16 3.1-1.16.61 1.57.23 2.73.11 3.02.72.8 1.16 1.81 1.16 3.05 0 4.36-2.64 5.33-5.16 5.61.41.36.77 1.05.77 2.12v3.09c0 .3.2.65.78.54A11.25 11.25 0 0 0 12 .75Z" />
                </svg>
              </a>
              <a href="https://linkedin.com" aria-label="LinkedIn" className="linkedin-mark">in</a>
              <a href="mailto:mudhisupport@gmail.com" aria-label="Email"><Mail size={21} /></a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
