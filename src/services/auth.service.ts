import { IUser, User } from "@/models";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// Helper interface for the return value
interface LoginResult {
  user: IUser;
  token: string;
}

export class AuthService {
  // 1. REGISTER USER
  static async registerUser(data: Partial<IUser>): Promise<IUser> {
    if (!data.password) {
      throw new Error("Password is required for registration");
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(data.password, salt);

    return await User.create({
      ...data,
      email: data.email?.toLowerCase(),
      password: hashedPassword,
    });
  }

  // 2. LOGIN USER (The part that was missing/failing)
  static async loginUser(data: Partial<IUser>): Promise<LoginResult> {
    const { email, password } = data;

    if (!email || !password) {
      throw new Error("Please provide email and password");
    }

    // Find User & Select Password
    const user = await User.findOne({ email: email.toLowerCase() }).select(
      "+password"
    );

    if (!user) {
      throw new Error("Invalid email or password");
    }

    // Verify Password
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      throw new Error("Invalid email or password");
    }

    // Create JWT Payload
    const tokenData = {
      id: user._id,
      email: user.email,
      role: user.role,
    };

    // Sign Token
    const token = jwt.sign(tokenData, process.env.JWT_SECRET!, {
      expiresIn: "1d",
    });

    return { user, token };
  }
}
