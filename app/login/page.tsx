"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { emailLogin } from "./actions";
import { OAuthButtons } from "./oauth-signin";
import Link from "next/link";

export default function Login() {
  const searchParams = useSearchParams();
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    if (searchParams.get("showNotification") === "true") {
      setShowNotification(true);

      setTimeout(() => {
        setShowNotification(false);
      }, 5000);
    }
  }, [searchParams]);

  return (
    <section className="h-[calc(100vh-57px)] flex justify-center items-center">
      {showNotification && (
        <div className="notification">
          Проверьте вашу почту для подтверждения регистрации!
        </div>
      )}

      <Card className="mx-auto max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription>
            Enter your email and password below to login to your account
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
              <Link href="/login/signup">Sign up</Link>
            </button>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}