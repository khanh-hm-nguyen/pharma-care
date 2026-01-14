"use client";

import { LoginHeader, LoginForm } from ".";

const LoginPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 sm:px-6 lg:px-8">
      {/* Card Container */}
      <div className="w-full max-w-md space-y-8 bg-white p-10 rounded-2xl shadow-xl border border-gray-100">
        <LoginHeader />
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
