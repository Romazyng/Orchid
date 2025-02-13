'use client'
import { loginout } from "@/app/lib/actions/auth"

export const SignOutButton = () => {
    return <button onClick={()=>loginout()}>Sign Out</button>
}