// context/AuthContext.js
"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { authService } from "../services/authService";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Check if user is already logged in (e.g., check token in localStorage)
    const token = localStorage.getItem("token");
    if (token) {
      // Validate token with your backend if needed
      // For now, we'll just set a basic user object
      setUser({ token });
    }
    setLoading(false);
  }, []);

  const signup = async (userData) => {
    try {
      setError(null);
      const response = await authService.signup(userData);
      if (response.token) {
        localStorage.setItem("token", response.token);
        setUser(response.user);
      }
      return response;
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  const signin = async (credentials) => {
    try {
      setError(null);
      const response = await authService.signin(credentials);
      if (response.token) {
        localStorage.setItem("token", response.token);
        setUser(response.user);
      }
      return response;
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  const signout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  const changePassword = async (passwordData) => {
    try {
      setError(null);
      return await authService.changePassword(passwordData);
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  const forgotPassword = async (email) => {
    try {
      setError(null);
      return await authService.forgotPassword(email);
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  const resetPassword = async (resetData) => {
    try {
      setError(null);
      return await authService.resetPassword(resetData);
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  const value = {
    user,
    loading,
    error,
    signup,
    signin,
    signout,
    changePassword,
    forgotPassword,
    resetPassword,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext);
}
