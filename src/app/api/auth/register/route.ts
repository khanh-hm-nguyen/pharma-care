import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/db/mongodb";
import { User } from "@/models";
import { AuthService } from "@/services/auth.service";
import { handleCommonErrors } from "@/utils/errorHandler";

/**
 * POST /api/auth/register
 * Creates a new user (Registration)
 */
export async function POST(req: NextRequest) {
  try {
    await connectDB();

    const data = await req.json();

    // basic Validation
    if (!data.name || !data.email || !data.password) {
      return NextResponse.json(
        {
          message: "Please provide all required fields (name, email, password)",
        },
        { status: 400 }
      );
    }

    // check if user already exists
    const userExists = await User.findOne({ email: data.email.toLowerCase() });

    if (userExists) {
      return NextResponse.json(
        { message: "User with this email already exists" },
        { status: 409 }
      );
    }

    const newUser = await AuthService.registerUser(data);

    // return success (excluding password)
    // create a clean object to return to the frontend
    return NextResponse.json(
      {
        message: "User registered successfully",
        user: {
          _id: newUser._id,
          name: newUser.name,
          email: newUser.email,
          role: newUser.role,
        },
      },
      { status: 201 }
    );
  } catch (error) {
    return handleCommonErrors(error);
  }
}
