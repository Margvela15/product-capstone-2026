import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_SUPABASE_URL: string;
      NEXT_PUBLIC_SUPABASE_ANON_KEY: string;
    }
  }
}

export async function middleware(request: NextRequest) {
  const SUPABASE_URL = (process.env.NEXT_PUBLIC_SUPABASE_URL as string) ?? "";
  const SUPABASE_KEY = (process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string) ?? "";

  const response = NextResponse.next();

  // Check if environment variables are set
  if (!SUPABASE_URL || !SUPABASE_KEY) {
    console.error("Supabase environment variables are not set.");
    return response;
  }

  const supabase = createServerClient(SUPABASE_URL, SUPABASE_KEY, {
    cookies: {
      getAll() {
        return request.cookies.getAll();
      },
      setAll(cookiesToSet) {
        cookiesToSet.forEach(({ name, value, options }) => {
          response.cookies.set(name, value, options);
        });
      },
    },
  });

  try {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    const isAuthPage =
      request.nextUrl.pathname.startsWith("/login") ||
      request.nextUrl.pathname.startsWith("/signup");

    if (!user && !isAuthPage) {
      return NextResponse.redirect(new URL("/login", request.url));
    }

    if (user && isAuthPage) {
      return NextResponse.redirect(new URL("/", request.url));
    }
  } catch (error) {
    console.error("Error in middleware:", error);
  }

  return response;
}