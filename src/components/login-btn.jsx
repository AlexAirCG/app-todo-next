'use client'

import { useSession, signIn, signOut } from "next-auth/react"
import Image from "next/image"

export default function LoginBtn() {
  const { data: session } = useSession()
  if (session) {
    return (
      <>
      {session.user.email} <br />

          <button onClick={() => signOut()} className="border rounded-md p-2 cursor-pointer">
            Sign out
          </button>
      
      </>
    )
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()} className="border rounded-md p-2 cursor-pointer">Sign in</button>
    </>
  )
}