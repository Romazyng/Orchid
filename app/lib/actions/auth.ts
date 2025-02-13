'use server'

import { signIn, signOut } from "@/auth"

export const loginGithub = async () => {
    await signIn('github', {redirectTo: '/generator'})
}

export const loginGoogle = async () => {
    await signIn('google', {redirectTo: '/generator'})
}

export const loginout = async () => {
    await signOut({redirectTo: '/login/signin'})
}