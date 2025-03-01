import { NextRequest, NextResponse } from "next/server";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// Handle preflight requests
export async function OPTIONS() {
  return new Response(null, { status: 204, headers: corsHeaders });
}

export async function GET() {
  await delay(1000);
  const type: "email" | "phone" = Math.random() > 0.5 ? "email" : "phone";
  return NextResponse.json({ type }, { status: 200, headers: corsHeaders });
}

interface WaitlistRequest {
  type: "email" | "phone";
  value: string;
}

export async function POST(req: NextRequest) {
  await delay(2000);
  try {
    const body: WaitlistRequest = await req.json();

    if (!body.type || !body.value || (body.type !== "email" && body.type !== "phone")) {
      return NextResponse.json(
        { error: "Invalid input: must provide either email or phone" },
        { status: 400, headers: corsHeaders }
      );
    }

    if (body.type === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.value)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400, headers: corsHeaders }
      );
    }

    if (body.type === "phone" && !/^\+?[1-9]\d{1,14}$/.test(body.value)) {
      return NextResponse.json(
        { error: "Invalid phone format" },
        { status: 400, headers: corsHeaders }
      );
    }

    return NextResponse.json(
      { status: "success", message: "You have been added to the waitlist" },
      { status: 200, headers: corsHeaders }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Invalid request format" },
      { status: 400, headers: corsHeaders }
    );
  }
}
