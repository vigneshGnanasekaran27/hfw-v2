"use client";

import { useState, useEffect } from "react";
import { useAuth } from "../../../context/AuthContext.jsx";
import { useSearchParams } from "next/navigation";

export default function ResetPasswordForm() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [token, setToken] = useState("");
  const [message, setMessage] = useState(null);
  const [errors, setErrors] = useState([]);
  const searchParams = useSearchParams();
  const { resetPassword } = useAuth();

  useEffect(() => {
    const tokenFromUrl = searchParams.get("token");
    if (tokenFromUrl) {
      setToken(tokenFromUrl);
    }
  }, [searchParams]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(null);
    setErrors([]);

    if (password !== confirmPassword) {
      setErrors(["Passwords do not match"]);
      return;
    }

    if (!token) {
      setErrors(["Reset token is missing"]);
      return;
    }

    try {
      const response = await resetPassword({
        token: token,
        password: password,
        password_confirmation: confirmPassword,
      });

      setMessage("Password has been reset successfully");
      // Clear form
      setPassword("");
      setConfirmPassword("");
    } catch (err) {
      // Handle different error types
      if (err.message.includes("401")) {
        setErrors(["Invalid or expired reset token"]);
      } else if (err.message.includes("422")) {
        setErrors([err.message || "Failed to reset password"]);
      } else {
        setErrors([err.message || "An unexpected error occurred"]);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {errors.length > 0 && (
        <div className="bg-red-50 text-red-500 p-3 rounded">
          {errors.map((error, index) => (
            <div key={index}>{error}</div>
          ))}
        </div>
      )}
      {message && (
        <div className="bg-green-50 text-green-500 p-3 rounded">{message}</div>
      )}

      <div>
        <label htmlFor="password" className="block text-sm font-medium">
          New Password
        </label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          required
          minLength={8}
        />
      </div>

      <div>
        <label htmlFor="confirmPassword" className="block text-sm font-medium">
          Confirm New Password
        </label>
        <input
          type="password"
          id="confirmPassword"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          required
          minLength={8}
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-500 text-white rounded-md py-2 px-4 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        Reset Password
      </button>
    </form>
  );
}
