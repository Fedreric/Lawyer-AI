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

    await fs.promises.writeFile(filePath, buffer);
    await fs.promises.unlink(filePath);

    return NextResponse.json({ message: "download pdf" }, { status: 200 });
  } catch (error) {
    return helpers.catchError(error);
  }
}
