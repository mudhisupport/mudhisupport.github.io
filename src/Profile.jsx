import { useState } from "react";
import {
  Sun, Moon, GitFork, Mail, ArrowUpRight,
  MapPin, Code2, Terminal, Menu, X
} from "lucide-react";

export default function Portfolio() {
  const [dark, setDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const skills = ["Java", "Spring Boot", "PostgreSQL"];

  const navLinks = [
    ["Home", "#home"],
    ["About", "#about"],
    ["Projects", "#projects"],
    ["Blog", "#blog"],
    ["Contact", "#contact"],
  ];

  return (
    <div className={dark
      ? "dark min-h-screen"
      : "min-h-screen"
    }>
      <main className="bg-white text-slate-800 dark:bg-[#0b1120] dark:text-slate-100 transition-colors duration-300">

        {/* NAVIGATION */}
        <nav className="sticky top-0 z-50 border-b border-slate-100 dark:border-slate-800 bg-white/90 dark:bg-[#0b1120]/90 backdrop-blur-lg">
          <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">

            <a href="#home" className="text-xl font-bold tracking-tight">
              Mudhihir<span className="text-blue-600">JZ.</span>
            </a>

            <div className="hidden md:flex items-center gap-8">
              {navLinks.map(([name, link]) => (
                <a key={name} href={link}
                  className="text-sm font-medium text-slate-600 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400 transition">
                  {name}
                </a>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => setDark(!dark)}
                aria-label="Toggle dark mode"
                className="p-2.5 rounded-full border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
              >
                {dark
                  ? <Sun size={19} className="text-amber-400" />
                  : <Moon size={19} />}
              </button>

              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="md:hidden p-2"
                aria-label="Toggle navigation"
              >
                {menuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>

          {menuOpen && (
            <div className="md:hidden px-6 pb-5 flex flex-col gap-4">
              {navLinks.map(([name, link]) => (
                <a key={name} href={link}
                  onClick={() => setMenuOpen(false)}
                  className="text-sm font-medium">
                  {name}
                </a>
              ))}
            </div>
          )}
        </nav>

        {/* HERO */}
        <section id="home" className="max-w-6xl mx-auto px-6 pt-28 pb-28 md:pt-36 md:pb-36">

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-green-200 bg-green-50 dark:bg-green-950/40 dark:border-green-900 px-4 py-2 text-xs font-semibold text-green-700 dark:text-green-400 mb-8">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              Available for Internships
            </div>

            <p className="text-blue-600 dark:text-blue-400 font-semibold tracking-wide mb-4">
              HELLO, WORLD! 👋
            </p>

            <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight mb-6">
              Hi, I'm <span className="text-blue-600">Mudhihir JZ</span>
            </h1>

            <h2 className="text-2xl md:text-3xl font-semibold text-slate-600 dark:text-slate-300 mb-6">
              Aspiring Backend Developer.
            </h2>

            <p className="text-lg leading-relaxed text-slate-500 dark:text-slate-400 max-w-2xl mb-8">
              Currently learning Spring Boot, Java & PostgreSQL.
              Exploring backend engineering, API development
              and building reliable software systems.
            </p>

            <div className="flex flex-wrap gap-3 mb-10">
              {skills.map(skill => (
                <span key={skill}
                  className="px-4 py-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-sm font-medium">
                  {skill}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <a href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold transition shadow-lg shadow-blue-600/20">
                View Projects <ArrowUpRight size={18} />
              </a>

              <a href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 font-semibold transition">
                Contact Me <Mail size={17} />
              </a>
            </div>

            <div className="flex items-center gap-2 mt-12 text-sm text-slate-400">
              <MapPin size={16} />
              Zanzibar, Tanzania
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="bg-slate-50 dark:bg-[#101a2c] py-24">
          <div className="max-w-6xl mx-auto px-6">
            <div className="max-w-2xl">
              <p className="text-blue-600 font-semibold text-sm mb-3">
                GET TO KNOW ME
              </p>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                About Me
              </h2>
              <p className="text-slate-600 dark:text-slate-400 leading-8 text-lg">
                I'm Mudhihir JZ, an aspiring backend developer
                from Zanzibar, Tanzania. I'm currently building
                my foundation in backend development, focusing
                on Java, Spring Boot, PostgreSQL and REST APIs.
                My goal is to understand how reliable software
                systems work behind the scenes and develop
                practical solutions through continuous learning.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-5 mt-12">
              {[
                ["01", "Java", "Learning object-oriented programming"],
                ["02", "Spring Boot", "Exploring backend application development"],
                ["03", "PostgreSQL", "Learning relational database management"],
                ["04", "REST APIs", "Understanding API design and integration"]
              ].map(([number, title, description]) => (
                <div key={number}
                  className="bg-white dark:bg-[#162238] p-6 rounded-2xl border border-slate-100 dark:border-slate-800">
                  <span className="text-blue-500 text-sm font-bold">{number}</span>
                  <h3 className="text-xl font-bold mt-3 mb-2">{title}</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="max-w-6xl mx-auto px-6 py-24">
          <p className="text-blue-600 font-semibold text-sm mb-3">
            WHAT I'M BUILDING
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured Project
          </h2>
          <p className="text-slate-500 dark:text-slate-400 mb-12">
            One project. A continuous journey of experimentation and learning.
          </p>

          <div className="max-w-3xl rounded-3xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm hover:shadow-xl transition duration-300">
            <div className="bg-[#111827] p-8 md:p-12 text-white relative overflow-hidden">
              <div className="absolute -right-10 -top-20 w-64 h-64 rounded-full border border-white/10" />
              <div className="absolute -right-2 -top-12 w-48 h-48 rounded-full border border-white/10" />

              <div className="relative">
                <div className="w-14 h-14 rounded-2xl bg-blue-600 flex items-center justify-center mb-8">
                  <Terminal size={28} />
                </div>
                <span className="text-blue-400 text-sm font-semibold tracking-widest">
                  FEATURED PROJECT
                </span>
                <h3 className="text-3xl md:text-4xl font-bold mt-3">
                  KilivoLabs<span className="text-blue-500">.</span>
                </h3>
                <p className="text-slate-400 mt-4 max-w-lg leading-7">
                  Experimenting with microservices, REST APIs,
                  and cloud-native backend tools.
                </p>
              </div>
            </div>

            <div className="p-8">
              <p className="text-slate-600 dark:text-slate-400 leading-7 mb-7">
                An experimental lab for microservices, REST APIs,
                and cloud-native backend tools. Building scalable
                systems with Spring Boot & PostgreSQL.
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {["Spring Boot", "PostgreSQL", "Docker"].map(tag => (
                  <span key={tag}
                    className="px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-xs font-semibold">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-5">
                <a href="#about"
                  className="inline-flex items-center gap-2 text-slate-600 dark:text-slate-300 font-semibold hover:text-blue-600">
                  Learn More <ArrowUpRight size={16} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* BLOG */}
        <section id="blog" className="bg-slate-50 dark:bg-[#101a2c] py-20">
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-blue-600 font-semibold text-sm mb-3">
              MY NOTES
            </p>
            <h2 className="text-3xl font-bold mb-4">Blog</h2>
            <p className="text-slate-500 dark:text-slate-400">
              A space for sharing development insights, learning
              experiences and technical discoveries. Articles coming soon.
            </p>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="max-w-6xl mx-auto px-6 py-24">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-14 h-14 bg-blue-100 dark:bg-blue-950 rounded-2xl flex items-center justify-center mx-auto mb-6 text-blue-600">
              <Code2 size={28} />
            </div>
            <p className="text-blue-600 font-semibold text-sm mb-3">
              LET'S CONNECT
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-5">
              Have an opportunity?
            </h2>
            <p className="text-slate-500 dark:text-slate-400 leading-7 mb-8">
              I'm open to internship opportunities, learning
              experiences and meaningful connections within
              the software development community.
            </p>
            <a href="mailto:mudhisupport@gmail.com"
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-7 py-3.5 rounded-xl font-semibold hover:bg-blue-700 transition">
              Get in Touch <Mail size={18} />
            </a>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="border-t border-slate-200 dark:border-slate-800">
          <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-5">
            <p className="text-sm text-slate-500 text-center">
              © {new Date().getFullYear()} Mudhihir JZ · Built with React & Tailwind CSS
            </p>

            <div className="flex items-center gap-5">
              <a href="https://github.com/mudhihirjz"
                aria-label="GitHub" className="text-slate-500 hover:text-blue-600">
                <GitFork size={19} />
              </a>
              <a href="mailto:mudhisupport@gmail.com"
                aria-label="Email" className="text-slate-500 hover:text-blue-600">
                <Mail size={19} />
              </a>
            </div>
          </div>
        </footer>

      </main>
    </div>
  );
}
