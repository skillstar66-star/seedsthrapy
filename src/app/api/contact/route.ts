import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const accessKey = process.env.WEB3FORMS_ACCESS_KEY;

    console.log("[contact API] Access key present:", !!accessKey);
    console.log("[contact API] Body received:", JSON.stringify(body));

    if (!accessKey) {
      console.error("[contact API] WEB3FORMS_ACCESS_KEY is not set!");
      return NextResponse.json({ success: false, message: "Server config error." }, { status: 500 });
    }

    const payload = {
      access_key: accessKey,
      subject: `New Booking - SEEDS Therapy | ${body.name || body.parentName || "Unknown"}`,
      from_name: "SEEDS Therapy Website",
      botcheck: false,
      name: body.name || body.parentName || "Not provided",
      email: body.email || "Not provided",
      phone: body.phone || "Not provided",
      child_name: body.childName || "Not provided",
      concern: body.concern || "Not provided",
      message: body.message || "No message",
    };

    console.log("[contact API] Sending to Web3Forms...");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(payload),
    });

    const data = await response.json();
    console.log("[contact API] Web3Forms response:", JSON.stringify(data));

    if (data.success) {
      return NextResponse.json({ success: true, message: "Message sent successfully!" });
    } else {
      console.error("[contact API] Web3Forms error:", data);
      return NextResponse.json({ success: false, message: data.message || "Failed to send." }, { status: 500 });
    }
  } catch (err) {
    console.error("[contact API] Exception:", err);
    return NextResponse.json({ success: false, message: "Server error." }, { status: 500 });
  }
}
