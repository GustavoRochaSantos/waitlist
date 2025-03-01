import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  const type: "email" | "phone" = Math.random() > 0.5 ? "email" : "phone";
  return NextResponse.json({ type }, { status: 200 });
}


interface WaitlistRequest {
  type: "email" | "phone";
  value: string;
}

export async function POST(req: NextRequest) {
  try {
    const body: WaitlistRequest = await req.json();

    if (!body.type || !body.value || (body.type !== "email" && body.type !== "phone")) {
      return NextResponse.json(
        { error: "Invalid input: must provide either email or phone" },
        { status: 400 }
      );
    }

    if (body.type === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.value)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    if (body.type === "phone" && !/^\+?[1-9]\d{1,14}$/.test(body.value)) {
      return NextResponse.json(
        { error: "Invalid phone format" },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { status: "success", message: "You have been added to the waitlist" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Invalid request format" },
      { status: 400 }
    );
  }
}
