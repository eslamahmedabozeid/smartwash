import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const locales = ['en', 'ar']
const defaultLocale = 'en'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Check if the pathname is missing a locale
  const pathnameIsMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  )

  if (pathnameIsMissingLocale) {
    // Redirect if there is no locale
    // e.g. /about -> /en/about
    return NextResponse.redirect(
      new URL(`/${defaultLocale}${pathname}${request.nextUrl.search}`, request.url)
    )
  }
}

export const config = {
  // Matcher ignoring public files, api routes, and static assets
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|images|.*\\.svg|.*\\.png|.*\\.ico).*)'],
}
