import { NextResponse } from "next/server";
import prisma from "@/libs/db";
import { helpers } from "../services/helpers";

export async function GET() {
  try {
    const users = await prisma.user.findMany();
    return NextResponse.json(users, {status: 200});
  } catch (error) {
    return helpers.catchError(error);
  }
}