import { NextResponse } from "next/server";

const WEBHOOK_URL = process.env.GOOGLE_SHEETS_WEBHOOK_URL ?? "";

const ALLOWED_TYPES = ["contact", "career"] as const;
type SubmissionType = (typeof ALLOWED_TYPES)[number];

const MAX_LENGTH = 5000;

function clean(value: unknown): string {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, MAX_LENGTH);
}

export async function POST(request: Request) {
  try {
    const contentType = request.headers.get("content-type") ?? "";
    let payload: Record<string, unknown> = {};

    if (contentType.includes("application/json")) {
      const body = await request.json();
      if (body && typeof body === "object") payload = body as Record<string, unknown>;
    } else if (contentType.includes("application/x-www-form-urlencoded")) {
      const form = await request.formData();
      form.forEach((value, key) => {
        payload[key] = typeof value === "string" ? value : "";
      });
    } else {
      return NextResponse.json({ ok: false, error: "Unsupported content type" }, { status: 415 });
    }

    const type = clean(payload.type).toLowerCase();
    if (!ALLOWED_TYPES.includes(type as SubmissionType)) {
      return NextResponse.json({ ok: false, error: "Invalid form type" }, { status: 400 });
    }

    const fields: Record<string, string> = {};
    for (const [key, value] of Object.entries(payload)) {
      if (key === "type") continue;
      fields[key] = clean(value);
    }

    if (!fields.name || !fields.email || !fields.phone) {
      return NextResponse.json({ ok: false, error: "Missing required fields" }, { status: 400 });
    }

    const sheetPayload = {
      type,
      timestamp: new Date().toISOString(),
      ...fields,
    };

    if (WEBHOOK_URL) {
      await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(sheetPayload),
        cache: "no-store",
      }).catch((err) => {
        console.error("Google Sheets webhook error:", err);
      });
    } else {
      console.warn("GOOGLE_SHEETS_WEBHOOK_URL not set — submission logged only:", sheetPayload);
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Submit API error:", error);
    return NextResponse.json({ ok: false, error: "Server error" }, { status: 500 });
  }
}
