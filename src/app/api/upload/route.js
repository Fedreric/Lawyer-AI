import { writeFile } from "fs/promises";
import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import path from "path";
import PdfParse from "pdf-parse";
import fs from "fs";
import { resume } from "../services/resume";
const prisma = new PrismaClient();

export async function POST(request) {
  try {
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
    const pdf = await PdfParse(buffer);
    //save original pdf in database
    const original = await prisma.originalDoc.create({
      data: {
        originalContent: pdf.text,
        user: {
          connect: {
            userId: Number(userId)
          }
        }
      }
    });
    //logica resume

    //------->

    //save resume in database
    await resume.create({ 
        userId,
        resumeContent: 'Resume content',
        originalId: original.originalId,
        fileName: file.name
     });

    fs.unlinkSync(filePath);

    return new Response(
      JSON.stringify({
        message: "PDF Resume!"
      })
    );
  } catch (error) {
    if (error.code === "54000") {
      return NextResponse.json(
        {
          message: "PDF file exceeds size max: 8191 bytes"
        },
        { status: 404 }
      );
    }
    return NextResponse.json(
      {
        message: error.message
      },
      { status: 404 }
    );
  }
//   finally{
//     await prisma.$disconnect();
//   }
}
