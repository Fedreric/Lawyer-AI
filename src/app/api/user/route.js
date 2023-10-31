import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET() {
  try {
    const users = await prisma.user.findMany();
    return NextResponse.json(users, {status: 200});
  } catch (error) {
    return NextResponse.json(
      {
        message: error.message
      },
      { status: 404 }
    );
  }
}
export async function POST(request) {
  try {
    const { name, email, password } = await request.json();
    const newUser = await prisma.user.create({
        data:{
            name,
            email,
            password
        }
    })
    return NextResponse.json({
        message:'Created user',
        user: newUser
    },{
        status: 201
    });
  } catch (error) {
    if(error.code === 'P2002'){
        return NextResponse.json(
            {
              message: 'Invalid email or existent'
            },
            { status: 400 }
          );
    }
    return NextResponse.json(
      {
        message: error.message
      },
      { status: 500 }
    );
  }
}
