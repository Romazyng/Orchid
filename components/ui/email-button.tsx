"use client"
import { signIn } from "next-auth/react"
import { useState } from "react"

export function SignIn() {
  const [email, setEmail] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    await signIn("email", { email, callbackUrl: '/generator' })
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2">
      <label>Email</label>
      <input 
        type="email" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
        required
        className="border p-2"
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        Sign in with Magic Link
      </button>
    </form>
  )
}
