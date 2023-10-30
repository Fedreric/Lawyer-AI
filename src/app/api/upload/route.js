import { writeFile } from "fs/promises";
import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import path from "path";
import PdfParse from "pdf-parse";

const prisma = new PrismaClient();

export async function POST(request) {
    // extract data: PDF, userId
   const data = await request.formData();
   const file = data.get("file");
   const userId = data.get("userId");

  if (!file) {
    return NextResponse.json({ success: false });
  }

  //Convert data in buffer
  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);
  //save pdf in local
  const filePath = path.join(process.cwd(), "public", file.name);
  writeFile(filePath, buffer);

  //extract text
  const pdf =  await PdfParse(buffer)
  //save original pdf in database
  await prisma.originalDoc.create({
    data:{
        originalContent: pdf.text,
        authorId: Number(userId)
    }
  })

  //extract ID original pdf
  const { originalId } = await prisma.originalDoc.findFirst({
    where:{
        originalContent: pdf.text
    }
  })
  //logica resume

  //------->

  //save resume in database
  await prisma.resume.create({
    data:{
        authorId: userId,
        originalID: originalId,
        name: 'Resume ' + file.name,
        resumeContent: 'Resume content'
    }
  })

  return new Response(
    JSON.stringify({
      message: "PDF Resume!"
    })
  );
}
