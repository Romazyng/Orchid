"use client";
import { Marcellus_SC } from 'next/font/google';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

const marcellus = Marcellus_SC({
  subsets: ['latin'], 
  weight: '400',      
  variable: '--font-marcellus', 
});

export default function ConfirmationForm() {
  return (
    <section className="flex flex-col gap-6 justify-center items-center bg-muted">
      <Card className="mx-auto w-96">
        <CardHeader className="text-center">
          <CardTitle className="text-xl">Check your email</CardTitle>
          <CardDescription>
            Password reset link has been sent to your email
          </CardDescription>
        </CardHeader>
      </Card>
    </section>
  );
}