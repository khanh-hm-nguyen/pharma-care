import { NextResponse } from "next/server";
import { handleCommonErrors } from "@/utils/errorHandler";

export async function GET() {
  try {
    // 1. Create the successful response object first
    const response = NextResponse.json(
      { message: "Logout successful", success: true },
      { status: 200 }
    );

    // 2. Kill the cookie
    response.cookies.set("token", "", {
      httpOnly: true,
      expires: new Date(0), 
      path: "/", 
    });

    return response;

  } catch (error) {
    return handleCommonErrors(error);
  }
}