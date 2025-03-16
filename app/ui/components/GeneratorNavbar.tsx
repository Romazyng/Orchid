import Link from 'next/link';
import { Marcellus_SC } from 'next/font/google';
import UserProfile from './UserProfile';
import { signOut } from '@/app/login/actions';
import { createClient } from '@/utils/supabase/server';
import { redirect } from 'next/navigation';

const marcellus = Marcellus_SC({
  subsets: ['latin'], 
  weight: '400',      
  variable: '--font-marcellus', 
});

export default async function GeneratorNavbar() {
    const supabase = await createClient()
    const { data: {user}} = await supabase.auth.getUser()
    
    if(!user) {
        return redirect('/login')
    }

    return (
        <nav className="fixed top-10 left-1/2 transform -translate-x-1/2 lg:w-[70rem] lg:h-[3.5rem] bg-[#EDE2D6] text-white rounded-[10px] z-10 backdrop-blur-sm">
            <div className="container mx-auto flex justify-between items-center">
              <div className="lg:w-[6.9rem] lg:h-[3rem] ml-5 mt-1 flex items-center justify-center">
                <Link href="/" className={`${marcellus.className} antialiased text-3xl text-black`}>
                  Orchid
                </Link>
              </div>
              <div className="flex-1 flex items-center justify-center mt-1">
              <div>
                    <a className="bg-[#F6ECE1] text-black font-semibold cursor-pointer rounded-[36px] lg:w-[6.9rem] lg:h-[3rem] flex items-center justify-center">
                        Contact us
                    </a>
                </div>
                <div>
                    <a className="bg-[#F6ECE1] text-black font-semibold cursor-pointer rounded-[36px] lg:w-[6.9rem] lg:h-[3rem] flex items-center justify-center">
                        Contact us
                    </a>
                </div>
                <div>
                    <a className="bg-[#F6ECE1] text-black font-semibold cursor-pointer rounded-[36px] lg:w-[6.9rem] lg:h-[3rem] flex items-center justify-center">
                        Contact us
                    </a>
                </div>
                <div>
                    <a className="bg-[#F6ECE1] text-black font-semibold cursor-pointer rounded-[36px] lg:w-[6.9rem] lg:h-[3rem] flex items-center justify-center">
                        Contact us
                    </a>
                </div>
                <div>
                    <a className="bg-[#F6ECE1] text-black font-semibold cursor-pointer rounded-[36px] lg:w-[6.9rem] lg:h-[3rem] flex items-center justify-center">
                        Contact us
                    </a>
                </div>
              </div>
            <div className="flex items-center ml-auto mr-4 mt-1">
                {user && (
                  <form action={signOut} className="flex items-center">
                    <UserProfile user={user} /> 
                  </form>
                )}
              </div>
            </div>
          </nav>
      );
}
