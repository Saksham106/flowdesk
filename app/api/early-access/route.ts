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
    try {
      const params = new URLSearchParams({ email, createdAt: new Date().toISOString() });
      const res = await fetch(`${SHEETS_WEBHOOK}?${params.toString()}`, { method: "GET" });
      console.log(`[early-access] Sheets response: ${res.status}`);
    } catch (err) {
      console.error("[early-access] Sheets webhook error:", err);
    }
  } else {
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
