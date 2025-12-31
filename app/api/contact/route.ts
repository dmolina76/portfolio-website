import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const name = String(body.name || "").trim();
    const email = String(body.email || "").trim();
    const message = String(body.message || "").trim();

    if (!name || !email || !message) {
      return NextResponse.json(
        { ok: false, error: "Missing name, email, or message." },
        { status: 400 }
      );
    }

    const to = process.env.CONTACT_TO_EMAIL;
    const from = process.env.CONTACT_FROM_EMAIL;

    if (!to || !from) {
      return NextResponse.json(
        { ok: false, error: "Server email env vars are not set." },
        { status: 500 }
      );
    }

    const subject = `Portfolio Contact: ${name}`;
    const text = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;

    const { error } = await resend.emails.send({
      from,
      to,
      subject,
      text,
      replyTo: email, // so you can hit "reply" and respond to them
    });

    if (error) {
      return NextResponse.json(
        { ok: false, error: "Email failed to send." },
        { status: 500 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { ok: false, error: "Bad request." },
      { status: 400 }
    );
  }
}
