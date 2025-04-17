'use server'

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { createClient } from "@/utils/supabase/server"
import { redirect } from "next/navigation"
import { headers } from "next/headers"

async function confirmReset(formData: FormData) {
  'use server' 

  const origin = (await headers()).get('origin') 
  const email = formData.get('email') as string 

  const supabase = await createClient()

  const { error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: `${origin}/reset-password`,
  })

  if (error) {
    
    redirect('/forgot-password?message=Could not authenticate user')
  }

  
  redirect('/login/confirm?message=Password Reset link has been sent to your email')
}

export default async function ForgotForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      
      <form action={confirmReset}>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-5">
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email" 
                type="email"
                placeholder="m@example.com"
                required
              />
            </div>
            <Button type="submit" className="w-full">
              Send Reset Link
            </Button>
          </div>
        </div>
        <div className="text-center text-sm flex mt-2">
          Remember your password?
          <a href="/login/signin" className="ml-2">
            Log in
          </a>
        </div>
      </form>
      <div className="text-balance text-center text-xs text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 hover:[&_a]:text-primary">
        By clicking continue, you agree to our{' '}
        <a href="https://www.termsfeed.com/live/6f6dd509-1d48-45cc-9dbf-1a8f2540113f">Terms of Service</a>{' '}
        and{' '}
        <a href="https://www.termsfeed.com/live/defe1ffe-de9c-4377-bb4f-53465182d40b">Privacy Policy</a>.
      </div>
    </div>
  )
}