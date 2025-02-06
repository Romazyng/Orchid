import Link from "next/link";
<<<<<<< HEAD
import { RegistrationForm } from "../../components/ui/register-form"
=======
import { RegistrationForm } from "../../components/ui/register-form"
>>>>>>> eaf36ca9955e9f65085fca98c61c6b94f9c7cba4

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
            <RegistrationForm />
          </div>
        </div>
  )
}
