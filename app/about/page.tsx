export default function AboutPage() {
    return (
      <main className="min-h-screen bg-background text-foreground px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <h1 className="text-3xl font-bold tracking-tight">About</h1>
          <p className="mt-3 text-muted">
            A snapshot of who I am, what I build, and what I’m aiming for next.
          </p>
  
          {/* Intro card */}
          <section className="mt-10 rounded-2xl border border-border bg-card p-6 shadow-sm">
            <h2 className="text-xl font-semibold">Hi — I’m Diego.</h2>
            <p className="mt-4 leading-7 text-muted">
              I’m currently finishing my Computer Science Bachelor's at Purdue Fort Wayne with a focus on building practical software:
              mobile apps, backend logic, and Machine Learning systems. I like projects where I can take something
              from “idea” to “working,” especially when there’s real-world applications and constraints.
            </p>
            <p className="mt-4 leading-7 text-muted">
              I’m currently aiming for Software Engineering and ML internships and growing my cybersecurity skill set
              by learning secure design, common vulnerabilities, and defensive fundamentals.
            </p>
          </section>
  
          {/* Two-column sections */}
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {/* Skills */}
            <section className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <h2 className="text-xl font-semibold">Skills</h2>
              <p className="mt-2 text-sm text-muted">
                Tools and technologies I’m comfortable building with.
              </p>
  
              <div className="mt-5 grid grid-cols-2 gap-2">
                {[
                  "Java",
                  "C",
                  "SQL",
                  "Android",
                  "Git/GitHub",
                  "Odoo (XML-RPC)",
                  "ML/AI Training",
                  "Python",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="rounded-xl border border-border bg-background px-3 py-2 text-sm text-muted"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </section>
  
            {/* Focus */}
            <section className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <h2 className="text-xl font-semibold">What I’m focused on</h2>
              <p className="mt-2 text-sm text-muted">
                The kind of work I’m leaning into right now.
              </p>
  
              <ul className="mt-5 list-disc space-y-2 pl-5 text-sm leading-6 text-muted">
                <li>Building clean, maintainable projects with solid structure and documentation.</li>
                <li>Designing systems that handle real-world constraints (offline-first, sync, validation).</li>
                <li>Improving fundamentals in security: secure coding, auth, and common web/app risks.</li>
                <li>Communicating technical work clearly (case studies, demos, stakeholder updates).</li>
              </ul>
            </section>
          </div>
  
          {/* Quick facts */}
          <section className="mt-10 rounded-2xl border border-border bg-card p-6 shadow-sm">
            <h2 className="text-xl font-semibold">Quick facts</h2>
            <div className="mt-5 grid gap-4 md:grid-cols-3">
              <div className="rounded-xl border border-border bg-background p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-muted">Education</p>
                <p className="mt-2 text-sm text-muted">Purdue Fort Wayne</p>
                <p className="text-sm text-muted">B.S. Computer Science</p>
              </div>
              <div className="rounded-xl border border-border bg-background p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-muted">Interests</p>
                <p className="mt-2 text-sm text-muted">Software Engineering</p>
                <p className="text-sm text-muted">Cybersecurity</p>
              </div>
              <div className="rounded-xl border border-border bg-background p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-muted">Current Goal</p>
                <p className="mt-2 text-sm text-muted">Further internship exploration</p>
                <p className="text-sm text-muted">Build + ship portfolio projects</p>
              </div>
            </div>
          </section>
        </div>
      </main>
    );
  }
  