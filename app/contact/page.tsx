"use client";

import { useState } from "react";

export default function ContactPage() {
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: String(formData.get("name") || "").trim(),
      email: String(formData.get("email") || "").trim(),
      message: String(formData.get("message") || "").trim(),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok || !data?.ok) {
        setStatus("error");
        setErrorMsg(data?.error || "Something went wrong. Please try again.");
        return;
      }

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setErrorMsg("Network error. Please try again.");
    }
  }

  return (
    <main className="min-h-screen bg-background text-foreground px-6 py-16">
      <div className="mx-auto max-w-5xl">
        <h1 className="text-3xl font-bold tracking-tight">Contact</h1>
        <p className="mt-3 text-muted">
          If you’d like to chat about an internship, a project, or anything I’m
          building, feel free to reach out.
        </p>

        <section className="mt-10 rounded-2xl border border-border bg-card p-6 shadow-sm">
          <div className="grid gap-6 md:grid-cols-2">
            {/* Form */}
            <div className="rounded-xl border border-border bg-background p-5">
              <h2 className="text-lg font-semibold">Message me</h2>
              <p className="mt-2 text-sm text-muted">
                Fill this out and hit send.
              </p>

              <form className="mt-6 space-y-4" onSubmit={onSubmit}>
                <div>
                  <label className="text-sm font-medium">Name</label>
                  <input
                    name="name"
                    required
                    placeholder="Your name"
                    className="mt-2 w-full rounded-lg border border-border bg-card px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-accent"
                    disabled={status === "sending"}
                  />
                </div>

                <div>
                  <label className="text-sm font-medium">Email</label>
                  <input
                    name="email"
                    type="email"
                    required
                    placeholder="you@example.com"
                    className="mt-2 w-full rounded-lg border border-border bg-card px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-accent"
                    disabled={status === "sending"}
                  />
                </div>

                <div>
                  <label className="text-sm font-medium">Message</label>
                  <textarea
                    name="message"
                    required
                    rows={6}
                    placeholder="What would you like to talk about?"
                    className="mt-2 w-full resize-none rounded-lg border border-border bg-card px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-accent"
                    disabled={status === "sending"}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-lg bg-accent px-4 py-2 text-sm font-medium text-background hover:opacity-95 disabled:cursor-not-allowed disabled:opacity-60"
                  disabled={status === "sending"}
                >
                  {status === "sending" ? "Sending..." : "Send"}
                </button>

                {status === "success" ? (
                  <p className="text-sm font-medium text-muted">
                    Message sent! I’ll get back to you soon.
                  </p>
                ) : null}

                {status === "error" ? (
                  <p className="text-sm font-medium text-muted">
                    {errorMsg}
                  </p>
                ) : null}

                <p className="text-xs text-muted">
                  This form sends to a serverless endpoint at <code>/api/contact</code>.
                </p>
              </form>
            </div>

            {/* My Info */}
            <div className="rounded-xl border border-border bg-background p-5">
              <h2 className="text-lg font-semibold">My Info</h2>
              <p className="mt-2 text-sm text-muted">
                You can also reach me directly here:
              </p>

              <div className="mt-6 space-y-4">
                <div className="rounded-xl border border-border bg-card p-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-muted">
                    Email
                  </p>
                  <a
                    href="mailto:dms092461@gmail.com"
                    className="mt-2 block text-sm font-medium hover:underline"
                  >
                    dms092461@gmail.com
                  </a>
                </div>

                <div className="rounded-xl border border-border bg-card p-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-muted">
                    Phone
                  </p>
                  <a
                    href="tel:3463795931"
                    className="mt-2 block text-sm font-medium hover:underline"
                  >
                    3463795931
                  </a>
                </div>

                <div className="rounded-xl border border-border bg-card p-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-muted">
                    LinkedIn
                  </p>

                  <a
                    href="https://www.linkedin.com/in/diego-molina75"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-2 block text-sm font-medium hover:underline"
                  >
                    @diego-molina75
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
