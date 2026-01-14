"use client";

import { useState } from "react";
import { EmailOutlined } from "@mui/icons-material";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { setCredentials } from "@/lib/redux/features/authSlice";
import PasswordField from "./PasswordField";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "";

const LoginForm = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({ email: "", password: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const res = await fetch(`${BASE_URL}/api/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.message || "Login failed");

      dispatch(setCredentials({ user: data.user }));

      if (data.user.role === "admin") {
        router.push("/dashboard");
      } else {
        router.push("/");
      }
    } catch (err) {
      setError("Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-8 space-y-6">
      {/* Error Alert */}
      {error && (
        <div className="flex items-center p-3 text-sm text-red-700 bg-red-50 border border-red-200 rounded-lg animate-pulse">
          <svg className="w-4 h-4 mr-2 fill-current" viewBox="0 0 20 20">
            <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" />
          </svg>
          {error}
        </div>
      )}

      {/* Email Input */}
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Email Address
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <EmailOutlined className="text-gray-400" fontSize="small" />
          </div>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            autoFocus
            disabled={isLoading}
            value={formData.email}
            onChange={handleChange}
            className="block w-full rounded-lg border border-gray-300 pl-10 py-2.5 
                       text-gray-900 placeholder-gray-400 
                       focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 
                       outline-none transition-all disabled:bg-gray-50 disabled:text-gray-500"
            placeholder="you@example.com"
          />
        </div>
      </div>

      {/* Password Field (Component) */}
      <PasswordField
        value={formData.password}
        onChange={handleChange}
        disabled={isLoading}
      />

      {/* Remember Me & Forgot Password */}
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <input
            id="remember-me"
            name="remember-me"
            type="checkbox"
            disabled={isLoading}
            className="h-4 w-4 rounded border-gray-300 text-teal-600 focus:ring-teal-500 cursor-pointer"
          />
          <label
            htmlFor="remember-me"
            className="ml-2 block text-sm text-gray-900 cursor-pointer"
          >
            Remember me
          </label>
        </div>

        <div className="text-sm">
          <a
            href="#"
            className="font-semibold text-teal-600 hover:text-teal-500 transition-colors"
          >
            Forgot password?
          </a>
        </div>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isLoading}
        className="w-full flex justify-center py-2.5 px-4 border border-transparent rounded-lg shadow-sm text-sm font-bold text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 disabled:opacity-70 disabled:cursor-not-allowed transition-all"
      >
        {isLoading ? (
          <span className="flex items-center gap-2">
            {/* Simple Loading Spinner SVG */}
            <svg
              className="animate-spin h-5 w-5 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            Signing In...
          </span>
        ) : (
          "Sign In"
        )}
      </button>

      {/* Footer Link */}
      <p className="text-center text-sm text-gray-600">
        Don't have an account?{" "}
        <a
          href="#"
          className="font-semibold text-teal-600 hover:text-teal-500 transition-colors"
        >
          Sign Up
        </a>
      </p>
    </form>
  );
};

export default LoginForm;
