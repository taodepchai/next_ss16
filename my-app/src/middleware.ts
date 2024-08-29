import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
  // Define the default language
  const defaultLocale = 'vi';

  // Extract the pathname from the request URL
  const { pathname } = req.nextUrl;

  // Define the list of supported locales
  const locales = ['en', 'vi'];

  // Check if the pathname starts with any of the supported locales
  const pathnameIsMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}`)
  );

  // If the pathname is missing a locale, redirect to the default locale
  if (pathnameIsMissingLocale) {
    const url = req.nextUrl.clone();
    url.pathname = `/${defaultLocale}${pathname}`;
    return NextResponse.redirect(url);
  }

  // If the pathname has a locale, continue with the request
  return NextResponse.next();
}

// Specify the routes where the middleware should be applied
export const config = {
  matcher: ['/', '/((?!_next|favicon.ico).*)'],
};