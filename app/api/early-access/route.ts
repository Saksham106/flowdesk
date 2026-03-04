import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const SHEETS_WEBHOOK = process.env.SHEETS_WEBHOOK_URL ?? "";
const DATA_FILE = path.join(process.cwd(), "data", "signups.json");

type Signup = { email: string; createdAt: string };

function localRead(): Signup[] {
  try {
    fs.mkdirSync(path.dirname(DATA_FILE), { recursive: true });
    if (!fs.existsSync(DATA_FILE)) return [];
    return JSON.parse(fs.readFileSync(DATA_FILE, "utf-8"));
  } catch {
    return [];
  }
}

function localWrite(signups: Signup[]) {
  fs.mkdirSync(path.dirname(DATA_FILE), { recursive: true });
  fs.writeFileSync(DATA_FILE, JSON.stringify(signups, null, 2));
}

export async function POST(request: NextRequest) {
  const body = (await request.json().catch(() => ({}))) as { email?: string };
  const email = (body.email ?? "").trim().toLowerCase();

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ success: false, message: "Invalid email." }, { status: 400 });
  }

  if (SHEETS_WEBHOOK) {
    // Production: forward to Google Sheets via Apps Script webhook
    await fetch(SHEETS_WEBHOOK, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, createdAt: new Date().toISOString() }),
    }).catch((err) => console.error("[early-access] Sheets webhook error:", err));
  } else {
    // Local dev fallback: write to data/signups.json
    const signups = localRead();
    if (signups.some((s) => s.email === email)) {
      return NextResponse.json({ success: true, message: "You're already on the list!" });
    }
    signups.push({ email, createdAt: new Date().toISOString() });
    localWrite(signups);
  }

  console.log(`[early-access] Signup: ${email}`);
  return NextResponse.json({ success: true, message: "You're on the list!" });
}

export async function GET() {
  const signups = localRead();
  return NextResponse.json({ count: signups.length, signups });
}

type Signup = { email: string; createdAt: string };

function localRead(): Signup[] {
  try {
    fs.mkdirSync(path.dirname(DATA_FILE), { recursive: true });
    if (!fs.existsSync(DATA_FILE)) return [];
    return JSON.parse(fs.readFileSync(DATA_FILE, "utf-8"));
  } catch {
    return [];
  }
}

function localWrite(signups: Signup[]) {
  fs.mkdirSync(path.dirname(DATA_FILE), { recursive: true });
  fs.writeFileSync(DATA_FILE, JSON.stringify(signups, null, 2));
}

export async function POST(request: NextRequest) {
  const body = (await request.json().catch(() => ({}))) as { email?: string };
  const email = (body.email ?? "").trim().toLowerCase();

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ success: false, message: "Invalid email." }, { status: 400 });
  }

  if (USE_KV) {
    const already = await kv.sismember("early_access_signups", email);
    if (already) {
      return NextResponse.json({ success: true, message: "You're already on the list!" });
    }
    await kv.sadd("early_access_signups", email);
    await kv.lpush("early_access_log", JSON.stringify({ email, createdAt: new Date().toISOString() }));
    const total = await kv.scard("early_access_signups");
    console.log(`[early-access] New signup: ${email} (total: ${total})`);
  } else {
    const signups = localRead();
    if (signups.some((s) => s.email === email)) {
      return NextResponse.json({ success: true, message: "You're already on the list!" });
    }
    signups.push({ email, createdAt: new Date().toISOString() });
    localWrite(signups);
    console.log(`[early-access] New signup: ${email} (total: ${signups.length})`);
  }

  return NextResponse.json({ success: true, message: "You're on the list!" });
}

export async function GET() {
  if (USE_KV) {
    const emails = await kv.smembers("early_access_signups");
    return NextResponse.json({ count: emails.length, signups: emails });
  }
  const signups = localRead();
  return NextResponse.json({ count: signups.length, signups });
}
