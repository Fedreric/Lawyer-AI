import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
import { helpers } from "../../services/helpers";
import bcrypt from "bcrypt";
import { registerValidation } from "../services/validations/register";

const prisma = new PrismaClient();

export async function POST(request) {
    try {
      const { name, email, password } = await request.json();
  
      registerValidation({ name, email, password });

      const existingUser = await prisma.user.findFirst({
        where:{
          email
        }
      })
  
      if(existingUser){
        return NextResponse.json({
          message: 'Existing email'
        },{ status: 400 })
      }
  
      const salt = bcrypt.genSaltSync(10);
      const bcryptPassword = bcrypt.hashSync(password, salt);
  
      const newUser = await prisma.user.create({
          data:{
              name,
              email,
              password: bcryptPassword
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
      return helpers.catchError(error);
    }
  }
  