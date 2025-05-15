// import { NextResponse } from "next/server";
// import { auth } from "@/auth";
// import { NextRequest } from "next/server";
// import { updateSession } from '@/utils/supabase/middleware'

// const protectedRoutes = ["/generator"];

// export async function middleware(req: NextRequest) {
//   const session = await auth();
//   const isProtected = protectedRoutes.some((route) => req.nextUrl.pathname.startsWith(route));

//   if (isProtected && !session?.user) {
//     if (req.nextUrl.pathname.startsWith("/api")) {
//       return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
//     }
//     // redirect
//     return NextResponse.redirect(new URL("/login", req.url));
//   }
//   return await updateSession(req)
// }

// export const config = {
//   matcher: ['/generator', '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)'],
// };

import { NextResponse, type NextRequest } from 'next/server';
import { updateSession } from '@/utils/supabase/middleware';

const protectedRoutes = ['/generator'];

export async function middleware(request: NextRequest) {
  // Вызываем updateSession и получаем готовый supabase + response
  const { supabase, response } = await updateSession(request);

  const isProtected = protectedRoutes.some((route) =>
    request.nextUrl.pathname.startsWith(route)
  );

  if (isProtected) {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      const redirectUrl = new URL('/login/signin', request.url);
      return NextResponse.redirect(redirectUrl);
    }
  }

  return response;
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
};