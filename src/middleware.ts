import NextAuth from "next-auth";
import authConfig from "./auth.config";
import { NextResponse } from "next/server";

const { auth } = NextAuth(authConfig);

const locales = ["en", "es"];
const defaultLocale = "es";

function getLocale() {
  return defaultLocale;
}

export default auth((request) => {
  const { nextUrl } = request;
  console.log("pathname", nextUrl.pathname);
  // Check if the pathname includes a locale
  const pathnameHasLocale = locales.some(
    (locale) =>
      nextUrl.pathname.startsWith(`/${locale}/`) ||
      nextUrl.pathname === `/${locale}`
  );

  if (pathnameHasLocale) return NextResponse.next();

  // Redirect to default locale if no locale is present
  const locale = getLocale();

  // check if the pathname is not an API route
  if (!nextUrl.pathname.startsWith("/api")) {
    request.nextUrl.pathname = `/${locale}${nextUrl.pathname}`;
    return NextResponse.redirect(new URL(nextUrl.pathname, nextUrl));
  }

  return NextResponse.next();
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
