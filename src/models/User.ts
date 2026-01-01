import { Schema, model, models, Document } from "mongoose";
import bcrypt from "bcryptjs";

// 1. Interface definition
export interface IUser extends Document {
  name: string;
  email: string;
  password?: string;
  role: "user" | "admin" | "pharmacist";
  image?: string;
  createdAt: Date;
  updatedAt: Date;
  // Instance methods
  comparePassword(candidatePassword: string): Promise<boolean>;
}

const UserSchema = new Schema<IUser>(
  {
    name: {
      type: String,
      required: [true, "Full name is required"],
      trim: true,
      minlength: [2, "Name must be at least 2 characters"],
      maxlength: [50, "Name cannot exceed 50 characters"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true, // Creates a unique index
      trim: true,
      lowercase: true,
      validate: {
        validator: function (email: string) {
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Standard RFC 5322 regex
          return emailRegex.test(email);
        },
        message: "Please provide a valid email address",
      },
    },
    password: {
      type: String,
      // Password is required only if not using OAuth (e.g. Google Login)
      // We handle this conditional logic in the controller usually, but here we can make it optional
      // in schema but enforce length if provided.
      select: false, // Security: Never return password in queries by default
      minlength: [6, "Password must be at least 6 characters"],
    },
    role: {
      type: String,
      enum: {
        values: ["user", "admin", "pharmacist"],
        message: "{VALUE} is not a valid role",
      },
      default: "user",
    },
    image: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

// --- MIDDLEWARE ---

// 1. Pre-save hook to hash password
UserSchema.pre("save", async function (next) {
  if (!this.isModified("password") || !this.password) return;

  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
  } catch (error) {
    throw error;
  }
});

// 2. Instance method to check password
UserSchema.methods.comparePassword = async function (
  candidatePassword: string
): Promise<boolean> {
  if (!this.password) return false;
  return bcrypt.compare(candidatePassword, this.password);
};

// --- INDEXES ---
UserSchema.index({ role: 1 });

const User = models.User || model<IUser>("User", UserSchema);
export default User;
