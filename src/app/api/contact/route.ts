import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: Request) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { name, email, subject, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: "Jack Wharff Band Site <noreply@jackwharffband.com>",
      to: "jackwharffbooking@gmail.com",
      replyTo: email,
      subject: subject ? `[Contact] ${subject}` : `[Contact] Message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject || "N/A"}\n\n${message}`,
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Failed to send message. Please try again." },
      { status: 500 }
    );
  }
}
