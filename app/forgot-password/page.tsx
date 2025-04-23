import ForgotForm  from "@/app/ui/components/forgot-password"
import Link from "next/link"

import { Marcellus_SC } from 'next/font/google';

const marcellus = Marcellus_SC({
  subsets: ['latin'], 
  weight: '400',      
  variable: '--font-marcellus', 
});

export default function LoginPage() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-muted p-6 md:p-10">
          <div className="flex w-full max-w-sm flex-col gap-6">
            <Link href="/" className="flex items-center gap-2 self-center ">
              <div className="flex h-6 w-6 items-center justify-center">
                <p className={`${marcellus.className} text-black text-[2rem] font-bold`}>
                    Orchid
                </p>
              </div>
            </Link>
            <ForgotForm />
          </div>
        </div>
  )
}

// import Link from 'next/link';
// import { headers } from 'next/headers';
// import { createClient } from '@/utils/supabase/server';
// import { redirect } from 'next/navigation';

// export default async function ForgotPassword({
//   searchParams,
// }: {
//   searchParams: { message: string };
// }) {
//   const supabase = await createClient();

//   const {
//     data: { session },
//   } = await supabase.auth.getSession();

//   if (session) {
//     return redirect('/');
//   }

//   const confirmReset = async (formData: FormData) => {
//     'use server';

//     const origin = (await headers()).get('origin');
//     const email = formData.get('email') as string;
//     const supabase = await createClient();

//     const { error } = await supabase.auth.resetPasswordForEmail(email, {
//       redirectTo: `${origin}/reset-password`,
//     });

//     if (error) {
//       return redirect('/forgot-password?message=Could not authenticate user');
//     }

//     return redirect(
//       '/login/confirm?message=Password Reset link has been sent to your email address'
//     );
//   };

//   return (
//     <div>

//       <Link
//         href="/"
//         className="py-2 px-4 rounded-md no-underline text-foreground bg-btn-background hover:bg-btn-background-hover text-sm m-4"
//       >
//         Home
//       </Link>

//       <div className="w-full px-8 sm:max-w-md mx-auto mt-4">
//         <form
//           className="animate-in flex-1 flex flex-col w-full justify-center gap-2 text-foreground mb-4"
//           action={confirmReset}
//         >
//           <label className="text-md" htmlFor="email">
//             Enter Email Address
//           </label>
//           <input
//             className="rounded-md px-4 py-2 bg-inherit border mb-6"
//             name="email"
//             placeholder="you@example.com"
//             required
//           />

//           <button className="bg-indigo-700 rounded-md px-4 py-2 text-foreground mb-2">
//             Confirm
//           </button>

//           {searchParams?.message && (
//             <p className="mt-4 p-4 bg-foreground/10 text-foreground text-center">
//               {searchParams.message}
//             </p>
//           )}
//         </form>

//         <Link
//           href="/login"
//           className="rounded-md no-underline text-foreground text-sm"
//         >
//           Remember your password? Sign in
//         </Link>
//       </div>
//     </div>
//   );
// }

// 'use server'

// import { cn } from "@/lib/utils"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import { createClient } from "@/utils/supabase/server"
// import { redirect } from "next/navigation"
// import { headers } from "next/headers"

// async function confirmReset(formData: FormData) {
//   'use server' 

//   const origin = (await headers()).get('origin') 
//   const email = formData.get('email') as string 
//   const supabase = await createClient()

//   const { error } = await supabase.auth.resetPasswordForEmail(email, {
//     redirectTo: `${origin}/reset-password`,
//   })

//   if (error) {
    
//     redirect('/forgot-password?message=Could not authenticate user')
//   }

  
//   redirect('/login/confirm?message=Password Reset link has been sent to your email')
// }

// export default async function ForgotForm({
//   className,
//   ...props
// }: React.ComponentPropsWithoutRef<"div">) {
//   return (
//     <div className={cn("flex flex-col gap-6", className)} {...props}>
//       <form action={confirmReset}>
//         <div className="flex flex-col gap-6">
//           <div className="flex flex-col gap-5">
//             <div>
//               <Label htmlFor="email">Email</Label>
//               <Input
//                 id="email"
//                 name="email" 
//                 type="email"
//                 placeholder="m@example.com"
//                 required
//               />
//             </div>
//             <Button type="submit" className="w-full">
//               Send Reset Link
//             </Button>
//           </div>
//         </div>
//         <div className="text-center text-sm flex mt-2">
//           Remember your password?
//           <a href="/login/signin" className="ml-2">
//             Log in
//           </a>
//         </div>
//       </form>
//       <div className="text-balance text-center text-xs text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 hover:[&_a]:text-primary">
//         By clicking continue, you agree to our{' '}
//         <a href="https://www.termsfeed.com/live/6f6dd509-1d48-45cc-9dbf-1a8f2540113f">Terms of Service</a>{' '}
//         and{' '}
//         <a href="https://www.termsfeed.com/live/defe1ffe-de9c-4377-bb4f-53465182d40b">Privacy Policy</a>.
//       </div>
//     </div>
//   )
// }