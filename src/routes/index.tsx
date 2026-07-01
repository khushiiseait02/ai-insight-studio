import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  ArrowUpRight,
  Sparkles,
  ShoppingBag,
  Brain,
  Zap,
  Database,
} from "lucide-react";
import avatarGlow from "@/assets/avatar-glow.png";
import neuroScanHero from "@/assets/gyenoproj.jpeg";
import eduHubHero from "../assets/Education.jpeg";
import hospitalHero from "../assets/Healthcare.jpeg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "P N Khushi — Information Science Engineer & Designer" },
      {
        name: "description",
        content:
          "Portfolio of an Information Science engineer crafting AI-powered products and full-stack web experiences with a designer's eye.",
      },
      { property: "og:title", content: "P N Khushi — Information Science Engineer & Designer" },
      {
        property: "og:description",
        content:
          "AI-powered products and full-stack web experiences, crafted with a designer's eye.",
      },
    ],
  }),
  component: Portfolio,
});

const workExperience: Array<{
  title: string;
  company: string;
  description: string;
  tag: string;
  image?: string;
}> = [
  {
    title: "Python Full Stack Intern",
    company: "Dhee Coding Lab",
    description:
      "Worked on full-stack web application development using Python, Django, HTML, CSS, JavaScript, and SQL. Built responsive interfaces, developed backend APIs, integrated databases, and collaborated on real-world projects following software development best practices.",
    tag: "Internship",
  },
];

const featuredProjects = [
  {
    label: "Featured Project",
    title: "AI-Powered Gynecological Diagnostics",
    description:
      "An AI-powered gynecological disease diagnosis platform that analyzes ultrasound and medical images using deep learning to detect PCOS and ovarian cancer, complemented by an intelligent chatbot for symptom guidance and patient support.",
    link: "https://github.com/khushiiseait02/gyneo",
    image: neuroScanHero,
  },
  {
    label: "Featured Project",
    title: "Edu Hub",
    description:
      "A full-stack e-learning platform that enables students to access courses, track learning progress, and interact with educational content through a responsive and user-friendly web interface.",
    link: "https://github.com/khushiiseait02/EDU-HUB-",
    image: eduHubHero,
  },
  {
    label: "Featured Project",
    title: "Hospital Management System",
    description:
      "A comprehensive hospital management web application that streamlines patient records, appointments, billing, authentication, and administrative workflows through a secure and intuitive interface.",
    link: "https://github.com/khushiiseait02/Hospital_Management_System",
    image: hospitalHero,
  },
];

const skills = [
   {
    title: "Backend Technologies",
    icon: Zap,
    description: " Python, Django, Flask, REST APIs, authentication, business logic, and deployment workflows.",
  },

  {
    title: "Frontend Technologies",
    icon: Brain,
    description: " HTML, CSS, JavaScript,React responsive UI development.",
  },
 
  {
    title: "Database & Data Management",
    icon: Database,
    description: "SQL, relational databases, schema design, data modeling, and efficient query handling.",
  },
];

const spotlights = [
  {
    title: "AI Support Chatbot",
    tech: "React · Node.js · OpenAI",
    icon: Sparkles,
    description: "A GPT-4-powered support panel handling live customer queries and ticket routing.",
  },
  {
    title: "Chrono Style Storefront",
    tech: "HTML · CSS · JavaScript",
    icon: ShoppingBag,
    description: "A responsive luxury watch boutique with optimized assets and crisp navigation.",
  },
];

function Portfolio() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-core-bg font-sans text-slate-300 selection:bg-accent-violet/40 selection:text-white">
      {/* NAV */}
      <nav className="fixed top-0 z-50 w-full bg-core-bg/70 backdrop-blur-md">
        <div className="mx-auto flex h-20 w-full max-w-6xl items-center justify-between gap-3 px-4 sm:px-6">
          <a href="#top" className="shrink-0 font-script text-2xl font-bold text-white sm:text-3xl">
            P N Khushi
          </a>
          <div className="flex min-w-0 flex-1 items-center justify-end gap-3 overflow-x-auto whitespace-nowrap text-xs font-medium text-slate-300 sm:gap-4 sm:text-sm md:gap-8 md:text-base">
            <a href="#top" className="transition-colors hover:text-accent-violet-glow">
              Home
            </a>
            <a href="#about" className="transition-colors hover:text-accent-violet-glow">
              About
            </a>
            <a href="#work" className="transition-colors hover:text-accent-violet-glow">
              Experience
            </a>
            <a href="#projects" className="transition-colors hover:text-accent-violet-glow">
              Projects
            </a>
            <a href="#contact" className="transition-colors hover:text-accent-violet-glow">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section id="top" className="relative px-6 pt-32 pb-24 md:pt-40 md:pb-32">
        <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
          {/* Avatar with glow */}
          <div className="relative flex justify-center md:justify-start">
            <div className="absolute inset-0 -z-10 mx-auto h-[420px] w-[420px] translate-y-6 rounded-full bg-accent-violet/30 blur-[100px]" />
            <img
              src={avatarGlow}
              alt="Avatar of an Information Science engineer working on a laptop"
              width={1024}
              height={1024}
              className="relative h-[380px] w-[380px] object-contain md:h-[460px] md:w-[460px]"
            />
          </div>

          {/* Headline */}
          <div className="relative">
            {/* Hello callout */}
            <div className="mb-6 flex items-center gap-3">
              <svg
                width="60"
                height="40"
                viewBox="0 0 60 40"
                fill="none"
                className="-scale-x-100 text-slate-400"
                aria-hidden
              >
                <path
                  d="M5 35 C 20 25, 35 20, 55 8 M 55 8 L 45 12 M 55 8 L 52 18"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  fill="none"
                />
              </svg>
              <span className="text-base text-slate-300">
                Hello! I Am{" "}
                <span className="font-semibold text-accent-violet-glow">P N Khushi</span>
              </span>
            </div>

            <p className="mb-3 font-script text-3xl text-slate-400">An Engineer who</p>

            <h1 className="font-display text-5xl font-bold leading-[1.05] tracking-tight text-white md:text-7xl">
              Builds the{" "}
              <span className="relative inline-block">
                <span className="relative z-10 bg-gradient-to-r from-accent-violet-glow to-accent-violet bg-clip-text text-transparent">
                  future
                </span>
                <svg
                  className="absolute -inset-x-3 -inset-y-2 z-0 h-full w-[calc(100%+1.5rem)]"
                  viewBox="0 0 200 80"
                  preserveAspectRatio="none"
                  fill="none"
                  aria-hidden
                >
                  <ellipse
                    cx="100"
                    cy="40"
                    rx="92"
                    ry="32"
                    stroke="#a855f7"
                    strokeOpacity="0.5"
                    strokeWidth="2"
                    fill="none"
                  />
                </svg>
              </span>
              <br />
              one line of code
              <br />
              at a time<span className="text-accent-violet">.</span>
            </h1>

            <p className="mt-6 max-w-md text-base leading-relaxed text-slate-400">
              Because a system shouldn't just run flawlessly—it should look unforgettable.
            </p>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 font-display text-4xl font-bold text-white md:text-5xl">
            I'm a Software Engineer<span className="ml-1 inline-block h-12 w-[3px] animate-pulse bg-accent-violet-glow align-middle" />
          </h2>
          <p className="mb-6 text-lg leading-relaxed text-slate-300">
            Currently, I'm a{" "}
            <span className="font-semibold text-white">Python Full-Stack Intern</span> at{" "}
            <span className="inline-flex items-center gap-2 rounded-md bg-accent-violet/10 px-2 py-0.5 font-semibold text-accent-violet-glow">
              Dhee Coding Lab
            </span>
            , building production web apps and data systems.
          </p>
          <p className="max-w-2xl text-base leading-relaxed text-slate-400">
            A self-taught designer and Information Science engineer, working at the seam of
            deep learning and full-stack engineering for the last 3+ years. I build meaningful,
            delightful digital products that hold the line between user needs and business goals.
          </p>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="px-6 pb-8">
        <div className="mx-auto grid max-w-6xl gap-4 md:grid-cols-3">
          {[
            { value: "3+", label: "Years building experiences" },
            { value: "5+", label: "Projects" },
            { value: "AI + Web", label: "Hybrid expertise in ML systems and full-stack apps" },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-white/5 bg-surface/70 px-6 py-6 text-center"
            >
              <div className="font-display text-4xl font-bold text-white">{item.value}</div>
              <div className="mt-2 text-sm text-slate-400">{item.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* WORK EXPERIENCE */}
      <section id="work" className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-12 font-display text-3xl font-bold text-white md:text-4xl">
            Work Experience
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-1 lg:grid-cols-1">
            {workExperience.map((p) => (
              <article
                key={p.title}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/5 bg-surface transition-all hover:-translate-y-1 hover:border-accent-violet/40 lg:flex-row"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-gradient-to-br from-accent-violet/30 via-surface-2 to-core-bg lg:w-[42%] lg:aspect-auto">
                  {p.image ? (
                    <img
                      src={p.image}
                      alt={p.title}
                      width={640}
                      height={480}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform group-hover:scale-105"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center">
                      <span className="font-script text-5xl text-accent-violet-glow/60">
                        {p.tag}
                      </span>
                    </div>
                  )}
                </div>
                <div className="flex flex-1 flex-col p-6 lg:justify-center">
                  <span className="mb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-accent-violet-glow">
                    {p.tag}
                  </span>
                  <h3 className="mb-3 font-display text-lg font-bold leading-snug text-white">
                    {p.title}
                  </h3>
                  <p className="mb-6 flex-1 text-sm leading-relaxed text-slate-400">
                    {p.description}
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.15em] text-white transition-colors hover:text-accent-violet-glow"
                  >
                    Learn More <ArrowRight className="size-3.5" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* AVAILABILITY BANNER */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <p className="font-display text-2xl leading-relaxed text-slate-300 md:text-3xl">
            I'm currently looking to join a{" "}
            <span className="text-white">cross-functional team</span>
          </p>
          <p className="mt-3 text-lg text-slate-500">
            that values improving people's lives through accessible, thoughtful design.
          </p>
        </div>
      </section>

      {/* SKILLS */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <p className="mb-2 font-script text-2xl text-accent-violet-glow">What I do</p>
          <h2 className="mb-12 font-display text-3xl font-bold text-white md:text-4xl">
            Three disciplines, one workflow.
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {skills.map((s) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.title}
                  className="rounded-2xl border border-white/5 bg-surface p-8 transition-colors hover:border-accent-violet/40"
                >
                  <div className="mb-6 flex size-12 items-center justify-center rounded-xl bg-accent-violet/15 text-accent-violet-glow">
                    <Icon className="size-6" />
                  </div>
                  <h3 className="mb-3 font-display text-xl font-bold text-white">{s.title}</h3>
                  <p className="text-sm leading-relaxed text-slate-400">{s.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl space-y-24">
          {featuredProjects.map((p) => (
            <div key={p.title} className="grid items-center gap-10 md:grid-cols-2">
              <div>
                <p className="mb-3 font-script text-2xl text-accent-violet-glow">{p.label}</p>
                <h3 className="mb-5 font-display text-3xl font-bold leading-tight text-white md:text-4xl">
                  {p.title}
                </h3>
                <p className="mb-8 text-base leading-relaxed text-slate-400">{p.description}</p>
                <a
                  href={p.link}
                  className="inline-flex items-center gap-2 rounded-full border border-accent-violet/40 bg-accent-violet/10 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-violet/20"
                >
                  Visit project <ArrowUpRight className="size-4" />
                </a>
              </div>
              <div className="group overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/8 to-white/2 shadow-[0_0_0_1px_rgba(255,255,255,0.02),0_18px_60px_-24px_rgba(168,85,247,0.65)]">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-core-bg/60 via-transparent to-transparent" />
                  <img
                    src={p.image}
                    alt={p.title}
                    width={1280}
                    height={960}
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>
            </div>
          ))}

          {/* Spotlights row */}
          <div>
            <p className="mb-6 font-script text-2xl text-accent-violet-glow">Side quests</p>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {spotlights.map((s) => {
                const Icon = s.icon;
                return (
                  <div
                    key={s.title}
                    className="flex items-start gap-4 rounded-2xl border border-white/5 bg-surface p-6"
                  >
                    <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-accent-violet/15 text-accent-violet-glow">
                      <Icon className="size-5" />
                    </div>
                    <div>
                      <h4 className="font-display text-lg font-bold text-white">{s.title}</h4>
                      <p className="text-xs uppercase tracking-[0.15em] text-slate-500">
                        {s.tech}
                      </p>
                      <p className="mt-2 text-sm leading-relaxed text-slate-400">
                        {s.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="relative px-6 py-24">
        <div className="absolute inset-x-0 top-0 -z-10 mx-auto h-96 max-w-3xl rounded-full bg-accent-violet/20 blur-[120px]" />
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-3 font-script text-3xl text-accent-violet-glow">Let's Connect</p>
          <h2 className="mb-6 font-display text-4xl font-bold leading-tight text-white md:text-6xl">
            Let’s Connect and Create Something Meaningful
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-base text-slate-400">
            Open to roles, collaborations, and meaningful product work. If you have a problem worth
            solving, I’d love to hear about it.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="mailto:khushiise024@gmail.com"
              className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-bold text-core-bg transition-colors hover:bg-accent-violet-glow hover:text-white"
            >
              Email <ArrowUpRight className="size-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/khushipn"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-8 py-4 text-sm font-bold text-white transition-colors hover:border-accent-violet/40 hover:bg-accent-violet/10"
            >
              LinkedIn <ArrowUpRight className="size-4" />
            </a>
            <a
              href="https://github.com/khushiiseait02"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-8 py-4 text-sm font-bold text-white transition-colors hover:border-accent-violet/40 hover:bg-accent-violet/10"
            >
              GitHub <ArrowUpRight className="size-4" />
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/5 px-6 py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 md:flex-row">
          <span className="font-script text-2xl text-white">P N Khushi</span>
          <div className="text-xs uppercase tracking-[0.2em] text-slate-500">
            © 2026 — Khushi P N. All rights reserved.
          </div>
          <div className="flex gap-3">
            {[
              { Icon: Github, href: "https://github.com/khushiiseait02", label: "GitHub" },
              { Icon: Linkedin, href: "https://www.linkedin.com/in/khushipn", label: "LinkedIn" },
              { Icon: Mail, href: "mailto:khushiise024@gmail.com", label: "Email" },
            ].map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="flex size-10 items-center justify-center rounded-full bg-white/5 text-slate-400 transition-colors hover:bg-accent-violet hover:text-white"
              >
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
