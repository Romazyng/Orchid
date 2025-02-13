import { NextResponse } from "next/server";
import { auth } from "@/auth";
import { NextRequest } from "next/server";

const protectedRoutes = ['/user-info', '/generator']

export async function middleware(req: NextRequest) {
  const session = await auth();
  if (!session?.user && req.nextUrl.pathname.startsWith("/generator")) {
    return NextResponse.redirect(new URL("/login/signin", req.url));
  }
}

export const config = {
  matcher: ["/generator/:path*"],
};
