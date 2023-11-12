'use client'
import { SessionProvider } from "next-auth/react"

export default function SessionAuthProvider({children}) {

  return <SessionProvider>{children}</SessionProvider>
}
