import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "@/libs/db";
import bcrypt from "bcrypt"

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "user@email.com" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials, _request) {
        const userFound = await prisma.user.findUnique({
            where:{
                email: credentials.email
            }
        })         

        if(!userFound) throw new Error('No user found')

        const validPassword = bcrypt.compareSync(credentials.password, userFound.password)

        if(!validPassword)throw new Error('No user found')

        return {
            id: userFound.id,
            name: userFound.name,
            email:userFound.email
        }
      }
    })
  ],
  pages: {
    signIn:"/login"
  }
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST }