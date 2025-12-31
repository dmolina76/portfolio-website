// app/projects/page.tsx
import { projects } from "@/lib/projects";
import ProjectsGrid from "./ProjectsGrid";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-background text-foreground px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <h1 className="text-3xl font-bold tracking-tight">Projects</h1>
        <p className="mt-3 text-muted">
          A selection of projects I’ve built—focused on impact, implementation details, and what I learned.
        </p>

        <section className="mt-10">
          <ProjectsGrid projects={projects} />
        </section>
      </div>
    </main>
  );
}
