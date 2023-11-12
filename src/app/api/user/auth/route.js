import { NextResponse } from "next/server";
import { helpers } from "../../services/helpers";
import prisma from "@/libs/db";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
// import { serialize } from "cookie";
import generateToken from "./token-sign";

export async function POST(req) {
  try {
    const { email, password } = await req.json();

    const existingUser = await prisma.user.findFirst({
      where: {
        email
      }
    });

    if (!existingUser) {
      return NextResponse.json(
        {
          message: "Invalid email or password"
        },
        { status: 401 }
      );
    }

    const validPassword = bcrypt.compareSync(password, existingUser.password);
    
    if (!validPassword) {
      return NextResponse.json(
        {
          message: "Invalid email or password"
        },
        { status: 401 }
        );
      }
      
    const { userId, name } = existingUser;
    const payload = { userId, name, email };
    const token = generateToken({payload});

    return NextResponse.json(
      {
        userId,
        name,
        email,
        token
      },
      {
        status: 200
      }
    );
  } catch (error) {
    if (error.code === "P2002") {
      return NextResponse.json(
        {
          message: "Invalid email or existent"
        },
        { status: 400 }
      );
    }
    return helpers.catchError(error);
  }
}
