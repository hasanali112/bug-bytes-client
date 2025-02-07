"use server";

import { cookies } from "next/headers";

export const setTokenInCookie = async (token: string) => {
  (await cookies()).set({
    name: "accessToken",
    value: token,
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    path: "/",
    maxAge: 60 * 60 * 24, // 1 day
  });
};
