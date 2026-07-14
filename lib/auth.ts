import { betterAuth } from "better-auth";
import { pool } from "@/lib/db";

const baseURL =
  process.env.BETTER_AUTH_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : process.env.V0_RUNTIME_URL
        ? process.env.V0_RUNTIME_URL
        : "http://localhost:3000");

export const auth = betterAuth({
  database: pool,
  baseURL,
  secret: process.env.BETTER_AUTH_SECRET,

  emailAndPassword: {
    enabled: true,
    autoSignIn: true,
  },

  trustedOrigins: [
    "http://localhost:3000",
    "http://127.0.0.1:3000",
    "http://localhost:4171",
    "http://localhost:4172",
    "https://vm-projeto-academico-profissional.vusercontent.net",
    "https://*.vusercontent.net",

    ...(process.env.V0_RUNTIME_URL ? [process.env.V0_RUNTIME_URL] : []),

    ...(process.env.VERCEL_URL ? [`https://${process.env.VERCEL_URL}`] : []),

    ...(process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? [`https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`]
      : []),
  ],

  session: {
    expiresIn: 60 * 60 * 24 * 7,
    updateAge: 60 * 60 * 24,
  },

  advanced: {
    defaultCookieAttributes: {
      sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
      secure: process.env.NODE_ENV === "production",
    },
  },
});
