import { writeFile } from "fs/promises";
import { NextResponse } from "next/server";
import path from "path";
import PdfParse from "pdf-parse";

export async function POST(request) {
  const data = await request.formData();
  const file = data.get("file");

  if (!file) {
    return NextResponse.json({ success: false });
  }

  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  const filePath = path.join(process.cwd(), "public", file.name);
  writeFile(filePath, buffer);

  console.log(`open ${filePath} to see the uploaded file`);

  const pdf =  await PdfParse(buffer)
  console.log(pdf.text)

  return new Response(
    JSON.stringify({
      message: "uploaded file",
      path: filePath
    })
  );
}
