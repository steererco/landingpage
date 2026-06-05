import { NextRequest, NextResponse } from "next/server";

interface WaitlistBody {
  name: string;
  email: string;
  phone: string;
}

export async function POST(req: NextRequest, res: NextResponse) {
  if (!req.body) {
    return new Response("Body is empty", {
      status: 400,
    });
  }
  const body: WaitlistBody = JSON.parse(await new Response(req.body).text());
  const response = await fetch(process.env.GOOGLE_SCRIPT_URL || "", {
    method: "POST",
    mode: "no-cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: body.name,
      email: body.email,
      phone: body.phone,
    }),
  });

  if (!response.ok) {
    return new Response("Err", {
      status: 500,
    });
  }
  return new Response("Success!", {
    status: 200,
  });
}
