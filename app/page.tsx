// app/page.tsx
import Link from "next/link";
import { stack } from "@/lib/stack";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground px-6 py-16">
      <div className="mx-auto max-w-6xl">
        {/* intro */}
        <section className="grid gap-10 md:grid-cols-3 md:items-start">
          {/* headline + description */}
          <div className="md:col-span-2">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Creating practical software at the intersection of mobile development, backend logic,
            and machine learning.
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-muted">
              I’m a Computer Science student pursuing my Bachelor’s at Purdue Fort Wayne.
              I build real-world systems with a focus on app development—especially Android—plus clean data
              models and reliable backend behavior. I’m also actively growing my machine learning and
              cybersecurity foundations by building projects that ship, not just demos.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/projects"
                className="rounded-lg bg-accent px-4 py-2 text-sm font-medium text-background hover:opacity-95"
              >
                Explore Projects
              </Link>

              <Link
                href="/about"
                className="rounded-lg border border-border bg-card px-4 py-2 text-sm font-medium hover:bg-background"
              >
                About
              </Link>

              <Link
                href="/contact"
                className="rounded-lg border border-border bg-card px-4 py-2 text-sm font-medium hover:bg-background"
              >
                Contact
              </Link>

              <Link
                href="/resume.pdf"
                className="rounded-lg border border-border bg-card px-4 py-2 text-sm font-medium hover:bg-background"
              >
                Download resume (PDF)
              </Link>
            </div>
          </div>

          {/* Right: Key Skills */}
          <aside className="md:col-span-1">
            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <h2 className="text-sm font-semibold uppercase tracking-wide text-muted">
                Key Skills
              </h2>

              <ul className="mt-4 space-y-2 text-sm text-muted">
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-accent" />
                  Android Development (Java)
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-accent" />
                  Databases & SQL (data modeling, queries)
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-accent" />
                  Backend Logic & APIs (integration mindset)
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-accent" />
                  Data Structures (C/Java fundamentals)
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-accent" />
                  Machine Learning (building foundations)
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-accent" />
                  Git/GitHub (version control workflow)
                </li>
              </ul>

              <div className="mt-6 rounded-xl border border-border bg-background p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-muted">
                  Current focus
                </p>
                <p className="mt-2 text-sm text-muted">
                  Shipping portfolio projects with clean architecture, consistent UI, and strong documentation.
                </p>
              </div>
            </div>
          </aside>
        </section>

        {/* Lower cards */}
        <section className="mt-12 grid gap-6 md:grid-cols-3">
          <Link
            href="/projects"
            className="rounded-2xl border border-border bg-card p-6 shadow-sm transition hover:bg-background"
          >
            <h3 className="text-sm font-semibold text-accent">Projects</h3>
            <p className="mt-2 text-sm text-muted">
              Featured work across Android, backend/data logic, and systems projects.
            </p>
          </Link>

          <Link
            href="/about"
            className="rounded-2xl border border-border bg-card p-6 shadow-sm transition hover:bg-background"
          >
            <h3 className="text-sm font-semibold text-accent">About</h3>
            <p className="mt-2 text-sm text-muted">
              Background, interests, and what I’m working toward next.
            </p>
          </Link>

          <Link
            href="/contact"
            className="rounded-2xl border border-border bg-card p-6 shadow-sm transition hover:bg-background"
          >
            <h3 className="text-sm font-semibold text-accent">Contact</h3>
            <p className="mt-2 text-sm text-muted">
              Reach out for internship opportunities, collaboration, or questions.
            </p>
          </Link>
        </section>

        {/* Tools / Tech Stack */}
<section className="mt-12 rounded-2xl border border-border bg-card p-6 shadow-sm">
  <h2 className="text-xl font-semibold">Tools & Tech Stack</h2>
  <p className="mt-2 text-sm text-muted">
    The tools I’ve used across projects I've completed.
  </p>

  <div className="mt-6 grid gap-6 md:grid-cols-3">
    {stack.map((section) => (
      <div
        key={section.title}
        className="rounded-xl border border-border bg-background p-5"
      >
        <p className="text-xs font-semibold uppercase tracking-wide text-muted">
          {section.title}
        </p>

        <ul className="mt-4 space-y-2 text-sm text-muted">
          {section.items.map((item) => (
            <li key={item} className="flex gap-2">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-accent" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    ))}
  </div>
</section>

      </div>
    </main>
  );
}
