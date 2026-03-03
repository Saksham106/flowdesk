import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const DATA_FILE = path.join(process.cwd(), "data", "signups.json");

function readSignups(): { email: string; createdAt: string }[] {
  try {
    fs.mkdirSync(path.dirname(DATA_FILE), { recursive: true });
    if (!fs.existsSync(DATA_FILE)) return [];
    return JSON.parse(fs.readFileSync(DATA_FILE, "utf-8"));
  } catch {
    return [];
  }
}

export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => ({})) as { email?: string };
  const email = (body.email ?? "").trim().toLowerCase();

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ success: false, message: "Invalid email." }, { status: 400 });
  }

  const signups = readSignups();

  if (signups.some((s) => s.email === email)) {
    return NextResponse.json({ success: true, message: "You're already on the list!" });
  }

  signups.push({ email, createdAt: new Date().toISOString() });
  fs.writeFileSync(DATA_FILE, JSON.stringify(signups, null, 2));

  console.log(`[early-access] New signup: ${email} (total: ${signups.length})`);
  return NextResponse.json({ success: true, message: "You're on the list!" });
}

export async function GET() {
  const signups = readSignups();
  return NextResponse.json({ count: signups.length, signups });
}
