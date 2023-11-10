import { NextResponse } from "next/server";
import prisma from "@/libs/db";
import { helpers } from "../../services/helpers";
import bcrypt from "bcrypt";
import { registerValidation } from "../../services/validations/register";
import jwt from 'jsonwebtoken';

export async function POST(request) {
  try {
    const { name, email, password, confirmPassword } = await request.json();

    if(password !== confirmPassword){
      return NextResponse.json(
        {
          message: 'Passwords do not match'
        },
        { status: 401 }
      );
    }

    const validation = registerValidation({ name, email, password });

    if (!validation.success) {
      return NextResponse.json(
        {
          errors: validation.error
        },
        { status: 400 }
      );
    }

    const existingUser = await prisma.user.findFirst({
      where: {
        email
      }
    });

    if (existingUser) {
      return NextResponse.json(
        {
          message: "Existing email"
        },
        { status: 400 }
      );
    }

    const salt = bcrypt.genSaltSync(10);
    const bcryptPassword = bcrypt.hashSync(password, salt);

    const newUser = await prisma.user.create({
      data: {
        name,
        email,
        password: bcryptPassword
      }
    });

    // Ahora, después de crear el usuario, generas un token JWT para este usuario recién creado
    const token = jwt.sign({
      userId: newUser.id,
      name: newUser.name,
      email: newUser.email
    }, 'privateKey', { expiresIn: '1d' });
    // Imprimir el token en la consola
    console.log('Token generado:', token);

    const {password: _, ...user} = newUser

    return NextResponse.json(
      {
        message: "Created user",
        user: user,
        token: token // Añade el token en la respuesta
      },
      {
        status: 201
      }
    );

  } catch (error) {
    return helpers.catchError(error);
  }
}
