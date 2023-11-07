import { getPrismaClient } from '@prisma/client/runtime/library'
import CredentialsProvider from 'next-auth/providers/credentials'

export const authOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "text", placeholder: "jsmith@email.com" },
                password: { label: "Password", type: "password"}
            },
            async authorize(credentials) {
                console.log(credentials)
                // return null
                return { email: "correa@gmail.com", id: "un"}

            },
        }),
    ],
pages:{
    singIn: "/login"
}
};