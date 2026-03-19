import { NextRequest, NextResponse } from "next/server";

const ROOT_DOMAIN = "ringscaleai.com";

export function middleware(req: NextRequest) {
  const host = req.headers.get("host") || "";
  const { pathname } = req.nextUrl;

  if (
    pathname.startsWith("/api") ||
    pathname.startsWith("/_next") ||
    pathname.startsWith("/favicon.ico") ||
    pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  let subdomain = "";

  if (host.includes("localhost")) {
    const cleanHost = host.split(":")[0];
    const parts = cleanHost.split(".");
    if (parts.length > 1 && parts[0] !== "localhost") {
      subdomain = parts[0];
    }
  } else if (host.endsWith(`.${ROOT_DOMAIN}`)) {
    subdomain = host.replace(`.${ROOT_DOMAIN}`, "");
  }

  if (!subdomain || subdomain === "www") {
    return NextResponse.next();
  }

  const url = req.nextUrl.clone();
  url.pathname = `/${subdomain}${pathname}`;
  return NextResponse.rewrite(url);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};