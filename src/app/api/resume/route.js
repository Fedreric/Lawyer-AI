import { NextResponse } from "next/server";
import prisma from "@/libs/db";
import jwt from "jsonwebtoken";
import { helpers } from "../services/helpers";
export async function GET() {
  try {
    const token = helpers.searchToken();

    if (!token) {
      return NextResponse.json(
        {
          message: "No token"
        },
        {
          status: 401
        }
      );
    }

    const payload = jwt.verify(token, process.env.SECRET_JWT);

    const resumes = await prisma.resume.findMany();
    return NextResponse.json(resumes, { status: 200 });
  } catch (error) {
    if (error.message === "invalid token") {
      return NextResponse.json(
        {
          message: error.message
        },
        {
          status: 401
        }
      );
    }
    return helpers.catchError(error);
  } finally {
    await prisma.$disconnect();
  }
}
