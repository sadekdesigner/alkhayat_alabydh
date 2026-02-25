import { NextResponse } from "next/server";
import { brand } from "@/content/brand";
import { isLocale } from "@/lib/i18n";
import { getTransport } from "@/lib/mail";

type Payload = {
  locale?: "en" | "ar";
  name?: string;
  phone?: string;
  service?: string;
  message?: string;
};

function bad(error: string) {
  return NextResponse.json({ ok: false, error }, { status: 400 });
}

function clean(value: string | undefined) {
  return (value || "").trim();
}

export async function POST(req: Request) {
  let payload: Payload;
  try {
    payload = await req.json();
  } catch {
    return bad("Invalid JSON payload");
  }

  const locale = isLocale(payload.locale || "en") ? payload.locale || "en" : "en";
  const name = clean(payload.name);
  const phone = clean(payload.phone);
  const service = clean(payload.service);
  const message = clean(payload.message);

  if (!name) return bad("Name is required");
  if (!phone) return bad("Phone is required");
  if (!service) return bad("Service is required");
  if (!message) return bad("Message is required");

  const to = process.env.CONTACT_TO_EMAIL || brand.email;
  const from = process.env.CONTACT_FROM_EMAIL || process.env.SMTP_USER;
  if (!from) {
    return NextResponse.json({ ok: false, error: "Missing from email configuration" }, { status: 500 });
  }

  const subject = locale === "ar" ? `طلب جديد من الموقع - ${name}` : `New Website Request - ${name}`;
  const lines = [
    `Brand: ${brand.name}`,
    `Name: ${name}`,
    `Phone: ${phone}`,
    `Service: ${service}`,
    "Message:",
    message
  ];
  const text = lines.join("\n");

  try {
    const transport = getTransport();
    await transport.sendMail({
      from,
      to,
      subject,
      text
    });
    return NextResponse.json({ ok: true });
  } catch (error) {
    const messageText = error instanceof Error ? error.message : "Mail sending failed";
    return NextResponse.json({ ok: false, error: messageText }, { status: 500 });
  }
}
