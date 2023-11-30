import { NextResponse } from "next/server";
import PdfParse from "pdf-parse";
import { resume } from "../services/resume";
import prisma from "@/libs/db";
import { resumeContract } from "../services/cohereAI/resumeContract";

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

    //extract text
    const pdf = await PdfParse(buffer);

    //logica resume
    const response = await resumeContract(pdf);
    //------->
    if (userId === "0") {
      return new Response(
        JSON.stringify({
          message: "PDF Resume!",
          resume: response.generations[0].text
        })
      );
    }
    //if user logged
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

    //save resume in database
    await resume.create({
      userId,
      resumeContent: response.generations[0].text,
      originalId: original.originalId,
      fileName: file.name
    });

    return new Response(
      JSON.stringify({
        message: "PDF Resume!",
        text: response.generations[0].text,
        fileName: file.name
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
  } finally {
    await prisma.$disconnect();
  }
}
