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

import { type NextRequest } from 'next/server'
import { updateSession } from '@/utils/supabase/middleware'

export async function middleware(request: NextRequest) {
  // update user's auth session
  return await updateSession(request)
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * Feel free to modify this pattern to include more paths.
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
}