import { NextRequest, NextResponse } from "next/server";
import { withAuth, withParamValidation } from "./src/middlewares";
import { withPublicParams } from "./src/middlewares/publicParams";

export const config = {
    matcher: ["/dashboard/:path*", "/auth/:path*", "/es/:path*"],
};

export const runtime = "nodejs";

export async function middleware(req: NextRequest) {

    const authRes = await withAuth(req);
    if (authRes) return authRes;

    const paramRes = withParamValidation(req);
    if (paramRes) return paramRes;

    const publicParam = withPublicParams(req);
    if (publicParam) return publicParam;

    return NextResponse.next();
}
