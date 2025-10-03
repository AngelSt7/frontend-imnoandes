import { NextRequest, NextResponse } from "next/server";
import { User } from "../features/shared";

const PUBLIC_AUTH_PREFIXES = [
  "/auth/iniciar-sesion",
  "/auth/crear-cuenta",
  "/auth/olvide-contrasena",
  "/es",
  "/es/buscar",
];

const TEMP_ONLY = new Set(["/auth/completar-perfil"]);
const ALLOW_WHEN_AUTHED = new Set(["/auth/logout"]);

function isPublicAuth(pathname: string): boolean {
  return PUBLIC_AUTH_PREFIXES.some(prefix => pathname.startsWith(prefix));
}

export async function withAuth(req: NextRequest): Promise<NextResponse | null> {
  const url = req.nextUrl;
  const pathname = url.pathname;

  const token = req.cookies.get("SESSION")?.value ?? null;

  if (token) {
    try {
      const user = await User.validate(token);
      if (user) {
        const now = Math.floor(Date.now() / 1000);
        const isTemp = user.exp - now < 6 * 60;

        if (!isTemp && pathname.startsWith("/auth")) {
          const to = new URL("/es", req.url);
          return NextResponse.redirect(to);
        }

      }
    } catch {
    }
  }

  if (!url.pathname.startsWith("/dashboard")) {
    return null;
  }

  if (!token) {
    if (isPublicAuth(pathname)) {
      return null;
    }

    const to = new URL("/auth/iniciar-sesion", req.url);
    to.search = "";
    return NextResponse.redirect(to);
  }

  let user;
  try {
    user = await User.validate(token);
    if (!user) throw new Error("invalid token");
  } catch (err) {
    const to = new URL("/auth/iniciar-sesion", req.url);
    to.search = "";
    return NextResponse.redirect(to);
  }

  const now = Math.floor(Date.now() / 1000);
  const isTemp = user.exp - now < 6 * 60;

  if (isTemp && !TEMP_ONLY.has(pathname)) {
    const to = new URL(`/auth/completar-perfil?token=${token}`, req.url);
    to.search = "";
    return NextResponse.redirect(to);
  }

  if (!isTemp && pathname.startsWith("/auth") && !ALLOW_WHEN_AUTHED.has(pathname)) {
    const to = new URL("/es", req.url);
    to.search = "";
    return NextResponse.redirect(to);
  }

  return null;
}
