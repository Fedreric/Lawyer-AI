import { NextResponse } from "next/server";
import prisma from "@/libs/db";

export async function GET() {
    try {
      const resumes = await prisma.resume.findMany();
      return NextResponse.json(resumes, {status: 200});
    } catch (error) {
      return NextResponse.json(
        {
          message: error.message
        },
        { status: 404 }
      );
    }
  }