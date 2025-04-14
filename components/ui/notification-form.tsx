"use client";
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
import Link from "next/link";

const marcellus = Marcellus_SC({
  subsets: ['latin'], 
  weight: '400',      
  variable: '--font-marcellus', 
});

export default function NotificationForm() {
  return (
    <section className="flex flex-col gap-6 justify-center items-center bg-muted">
      <Card className="mx-auto w-96">
        <CardHeader className="text-center">
          <CardTitle className="text-xl">Check your email</CardTitle>
          <CardDescription>
            Thank you for registration, please check your email for instructions.
          </CardDescription>
        </CardHeader>
      </Card>
    </section>
  );
}