import db from "@/utils/db";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (request: NextRequest) => {
  const body = await request.json();

  const { email, password } = body;

  const { isValidCredentials, authToken } = await db.matchUserWithPassword(
    email,
    password
  );

  if (isValidCredentials)
    return NextResponse.json({ message: "Welcome Back", authToken });
  else
    return NextResponse.json({
      message: "Email or Password are wrong!",
    });
};
