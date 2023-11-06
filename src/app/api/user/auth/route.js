import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
import { helpers } from "../../services/helpers";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

export async function POST(request) {
    try {
      const { email, password } = await request.json();
  
      const existingUser = await prisma.user.findFirst({
        where:{
          email
        }
      })
  
      if(!existingUser){
        return NextResponse.json({
          message: 'Invalid email or password'
        },{ status: 400 })
      }
  
      const validPassword = bcrypt.compareSync(password, existingUser.password)

      if(!validPassword){
        return NextResponse.json({
          message: 'Invalid email or password'
        },{ status: 400 })
      }
  
      return NextResponse.json({
          message:'Log in',
          userId: existingUser.userId,
          name: existingUser.name
      },{
          status: 200
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
      return helpers.catchError(error);
    }
  }
  