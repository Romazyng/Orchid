"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Marcellus_SC } from 'next/font/google';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { emailLogin } from "../../app/login/actions";
import { OAuthButtons } from "../../app/login/oauth-signin";
import Link from "next/link";

const marcellus = Marcellus_SC({
  subsets: ['latin'], 
  weight: '400',      
  variable: '--font-marcellus', 
});

export default function LoginForm() {
  const searchParams = useSearchParams();

  return (
    <section className="flex flex-col gap-6 justify-center items-center bg-muted">
      <Card className="mx-auto w-96">
        <CardHeader className="text-center">
          <CardTitle className="text-xl">Login</CardTitle>
          <CardDescription>
            Enter your email and password
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <form id="login-form" className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="m@example.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
              </div>
              <Input
                minLength={6}
                name="password"
                id="password"
                type="password"
                required
              />
            </div>
            <Button formAction={emailLogin} className="w-full">
              Login
            </Button>
          </form>
          <OAuthButtons />
          <div className="text-center text-sm">
            Don&apos;t have an account?{" "}
            <button form="login-form" className="underline">
              <Link href="/login/signup" >Sign up</Link>
            </button>
          </div>
        </CardContent>
      </Card>
      <div className="text-balance text-center text-xs text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 hover:[&_a]:text-primary">
        By clicking login, you agree to our <br/> <Link href="https://www.termsfeed.com/live/6f6dd509-1d48-45cc-9dbf-1a8f2540113f">Terms of Service</Link>{" "}
        and <Link href="https://www.termsfeed.com/live/defe1ffe-de9c-4377-bb4f-53465182d40b">Privacy Policy</Link>.
      </div>
    </section>
  );
}