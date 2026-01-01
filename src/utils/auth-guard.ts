import { NextRequest } from "next/server";
import { getDataFromToken } from "@/utils/getDataFromToken";

export function verifyAdmin(req: NextRequest) {
  // 1. Get user data from the token
  const user = getDataFromToken(req);

  // 2. Check if user exists (Is Logged In?)
  if (!user) {
    throw new Error("Unauthorized: Please log in");
  }

  // 3. Check Role (Is Admin?)
  if (user.role !== "admin") {
    throw new Error("Forbidden: You do not have admin privileges");
  }

  // 4. Return user info if everything is good
  return user;
}
