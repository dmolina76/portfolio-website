// app/projects/ProjectsGrid.tsx
"use client";

import { useEffect, useState } from "react";

type ProjectDetailsSection = {
  title: string;
  bullets?: string[];
  text?: string;
};

type ProjectDetails = {
  summary: string[]; // 3 paragraphs
  sections: ProjectDetailsSection[];
};

type Project = {
  title: string;
  subtitle: string;
  bullets: string[];
  tags: string[];
  details?: ProjectDetails;
};

function KeySkillDot() {
  return <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent" />;
}

export default function ProjectsGrid({ projects }: { projects: Project[] }) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<Project | null>(null);

  const close = () => {
    setOpen(false);
    setActive(null);
  };

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {/* Grid */}
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p) => (
          <button
            key={p.title}
            type="button"
            onClick={() => {
              setActive(p);
              setOpen(true);
            }}
            className={[
              "text-left rounded-2xl border border-border bg-card p-6 shadow-sm",
              "transition",
              "hover:ring-2 hover:ring-accent hover:shadow-sm",
              "focus:outline-none focus-visible:ring-2 focus-visible:ring-accent",
            ].join(" ")}
          >
            <h3 className="text-lg font-semibold">{p.title}</h3>
            <p className="mt-2 text-sm text-muted">{p.subtitle}</p>

            <p className="mt-5 text-xs font-semibold uppercase tracking-wide text-muted">
              Details
            </p>
            <ul className="mt-2 list-disc space-y-2 pl-5 text-sm leading-6 text-muted">
              {p.bullets.slice(0, 3).map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>

            <div className="mt-5 flex flex-wrap gap-2">
              {p.tags.slice(0, 6).map((t) => (
                <span
                  key={`${p.title}-${t}`}
                  className="rounded-full border border-border bg-background px-3 py-1 text-xs text-muted"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-5 text-sm font-medium text-muted">
              Click to expand →
            </div>
          </button>
        ))}
      </div>

      {/* Modal */}
      {open && active && (
        <div className="fixed inset-0 z-50" role="dialog" aria-modal="true">
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/60" onClick={close} />

          {/* Panel wrapper */}
          <div className="absolute inset-0 flex items-center justify-center p-4">
            <div className="w-full max-w-5xl overflow-hidden rounded-2xl border border-border bg-background shadow-sm">
              {/* Header */}
              <div className="flex items-start justify-between gap-4 border-b border-border p-6">
                <div>
                  <h2 className="text-2xl font-bold tracking-tight">
                    {active.title}
                  </h2>
                  <p className="mt-2 text-sm text-muted">{active.subtitle}</p>
                </div>

                <button
                  type="button"
                  onClick={close}
                  className="rounded-lg border border-border bg-card px-3 py-2 text-sm font-medium hover:bg-background"
                >
                  Close
                </button>
              </div>

              {/* Scrollable content (THIS was missing/misplaced) */}
              <div className="max-h-[75vh] overflow-y-auto p-6">
                {/* Project Summary (3 paragraphs) */}
                {active.details?.summary?.length ? (
                  <section className="rounded-xl border border-border bg-card p-5">
                    <p className="text-xs font-semibold uppercase tracking-wide text-muted">
                      Project Summary
                    </p>

                    <div className="mt-3 space-y-3 text-sm leading-7 text-muted">
                      {active.details.summary.map((para) => (
                        <p key={para}>{para}</p>
                      ))}
                    </div>
                  </section>
                ) : null}

                {/* Sections */}
                {active.details?.sections?.length ? (
                  <div className="mt-6 grid gap-6 md:grid-cols-2">
                    {active.details.sections.map((s) => (
                      <section
                        key={s.title}
                        className="rounded-xl border border-border bg-card p-5"
                      >
                        <p className="text-xs font-semibold uppercase tracking-wide text-muted">
                          {s.title}
                        </p>

                        {s.text ? (
                          <p className="mt-3 text-sm leading-7 text-muted">
                            {s.text}
                          </p>
                        ) : null}

                        {s.bullets?.length ? (
                          <ul className="mt-4 space-y-2 text-sm text-muted">
                            {s.bullets.map((b) => (
                              <li key={b} className="flex gap-2">
                                <KeySkillDot />
                                <span>{b}</span>
                              </li>
                            ))}
                          </ul>
                        ) : null}
                      </section>
                    ))}
                  </div>
                ) : (
                  // Fallback if no details provided
                  <div className="mt-6 grid gap-6 md:grid-cols-3">
                    <section className="md:col-span-2 rounded-xl border border-border bg-card p-5">
                      <p className="text-xs font-semibold uppercase tracking-wide text-muted">
                        Details
                      </p>
                      <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-muted">
                        {active.bullets.map((b) => (
                          <li key={b}>{b}</li>
                        ))}
                      </ul>
                    </section>

                    <section className="rounded-xl border border-border bg-card p-5">
                      <p className="text-xs font-semibold uppercase tracking-wide text-muted">
                        Tech
                      </p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {active.tags.map((t) => (
                          <span
                            key={`${active.title}-${t}`}
                            className="rounded-full border border-border bg-background px-3 py-1 text-xs text-muted"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </section>
                  </div>
                )}

                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href="/contact"
                    className="rounded-lg bg-accent px-4 py-2 text-sm font-medium text-background hover:opacity-95"
                  >
                    Ask me about this project
                  </a>
                  <button
                    type="button"
                    onClick={close}
                    className="rounded-lg border border-border bg-card px-4 py-2 text-sm font-medium hover:bg-background"
                  >
                    Back to projects
                  </button>
                </div>

                <p className="mt-6 text-xs text-muted">
                  Tip: click outside the popup or press{" "}
                  <span className="font-medium">Esc</span> to close.
                </p>
              </div>
              {/* end scrollable content */}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
