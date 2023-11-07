import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
import { helpers } from "../services/helpers";

const prisma = new PrismaClient();
export async function GET() {
  try {
    const users = await prisma.user.findMany();
    return NextResponse.json(users, {status: 200});
  } catch (error) {
    return helpers.catchError(error);
  }
}