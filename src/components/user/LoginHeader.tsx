import React from "react";
import { LockOutlined } from "@mui/icons-material";

const LoginHeader = () => {
  return (
    <div className="flex flex-col items-center mb-6">
      {/* Icon Circle */}
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-teal-600 shadow-lg">
        <LockOutlined sx={{ color: "white", fontSize: 24 }} />
      </div>
      
      {/* Title */}
      <h2 className="text-3xl font-bold tracking-tight text-gray-900">
        Welcome Back
      </h2>
      
      {/* Subtitle */}
      <p className="mt-2 text-sm text-gray-500">
        Sign in to access your Pharmacare account
      </p>
    </div>
  );
};

export default LoginHeader;