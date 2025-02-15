'use client'
import { loginout } from "@/app/lib/actions/auth"
import { useState } from "react";

export const SignOutButton = () => {

    return <button onClick={()=> loginout()} className="text-[20px] text-white">Sign Out</button>
}