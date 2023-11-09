import { NextResponse } from "next/server";
import { helpers } from "../../services/helpers";
import prisma from "@/libs/db";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';

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
        },{ status: 401 })
      }
  
      const validPassword = bcrypt.compareSync(password, existingUser.password)
      
      if(!validPassword){
        return NextResponse.json({
          message: 'Invalid email or password'
        },{ status: 401 })
      }
      
      // Si el usuario es autenticado correctamente:
      const token = jwt.sign({ email: existingUser.email }, 'privateKey', { expiresIn: '1d' });
      // Imprimir el token en la consola
      console.log('Token generado:', token);
      
      return NextResponse.json({
        message:'Log in',
        userId: existingUser.userId,
        name: existingUser.name,
        token: token // Añade el token en la respuesta
      },
      {
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
  