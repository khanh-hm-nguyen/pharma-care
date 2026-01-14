"use client";

import React, { useState } from "react";
import { Visibility, VisibilityOff, LockOutlined } from "@mui/icons-material";

interface PasswordFieldProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
}

const PasswordField = ({ value, onChange, disabled }: PasswordFieldProps) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative mt-4">
      <label 
        htmlFor="password" 
        className="block text-sm font-medium text-gray-700 mb-1"
      >
        Password
      </label>

      <div className="relative">
        {/* Left Icon (Lock) */}
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <LockOutlined className="text-gray-400" fontSize="small" />
        </div>

        {/* Input */}
        <input
          id="password"
          name="password"
          type={showPassword ? "text" : "password"}
          required
          autoComplete="current-password"
          value={value}
          onChange={onChange}
          disabled={disabled}
          suppressHydrationWarning={true} // <--- Add this line
          className="block w-full rounded-lg border border-gray-300 pl-10 pr-10 py-2.5 text-gray-900 placeholder-gray-400 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 outline-none transition-all disabled:bg-gray-50 disabled:text-gray-500" // <--- Made single line
          placeholder="••••••••"
        />

        {/* Right Icon (Toggle Button) */}
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          disabled={disabled}
          className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600 focus:outline-none transition-colors"
        >
          {showPassword ? (
            <VisibilityOff fontSize="small" />
          ) : (
            <Visibility fontSize="small" />
          )}
        </button>
      </div>
    </div>
  );
};

export default PasswordField;