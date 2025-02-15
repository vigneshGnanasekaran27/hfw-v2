"use client";

import { useState } from "react";
import { useAuth } from "../../../context/AuthContext.jsx";

export default function ForgetPasswordForm() {
  const [email, setEmail] = useState("");
  const { forgotPassword, error } = useAuth();
  const [message, setMessage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await forgotPassword(email);
      setMessage("Password reset link sent to your email.");
    } catch (err) {
      setMessage(null);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {error && <div className="text-red-500">{error}</div>}
      {message && <div className="text-green-500">{message}</div>}
      <div>
        <label htmlFor="email" className="block text-sm font-medium">
          Email
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-1 block w-auto rounded-md border-gray-300 shadow-sm"
          required
        />
      </div>
      <button
        type="submit"
        className="w-auto bg-blue-500 text-white rounded-md py-2 hover:bg-blue-600"
      >
        Send Reset Link
      </button>
    </form>
  );
}
