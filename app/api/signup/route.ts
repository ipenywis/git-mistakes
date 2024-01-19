import db from "@/utils/db";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (request: NextRequest) => {
  const body = await request.json();

  const { email, name, password } = body;

  const userRecord = await db.createUser(email, name, password);

  if (userRecord) return NextResponse.json({ message: "Thank you for signup" });
  else
    return NextResponse.json({
      message: "Something went wrong. Please try again!",
    });
};
