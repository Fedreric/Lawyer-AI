import { NextResponse } from "next/server";
import { helpers } from "../services/helpers";
import fs from "node:fs";
import path from "node:path";
import buildPdf from "../services/buildPdf";

export async function POST(request) {
  const { text, fileName } = await request.json();
  try {
    const pdf = buildPdf({text, fileName})

    const buffer = Buffer.from(pdf);
    const filePath = path.join(process.cwd(), "public", fileName);

    fs.writeFileSync(filePath, buffer);

    setTimeout(() => {
      fs.unlinkSync(filePath);
    }, 5000);

    return NextResponse.json({ message: "download pdf" }, { status: 200 });
  } catch (error) {
    return helpers.catchError(error);
  }
}
