// services/authService.js
import axios from "axios";

const API_BASE_URL = "http://localhost:3000/api/v1/auth";

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

export const authService = {
  async signup(userData) {
    try {
      const response = await axiosInstance.post("/signup", { user: userData });
      return response.data;
    } catch (error) {
      throw error.response?.data?.message || error.message || "Signup failed";
    }
  },

  async signin(credentials) {
    try {
      const response = await axiosInstance.post("/signin", {
        user: credentials,
      });

      // If the response includes a token, store it in localStorage
      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
      }

      return response.data;
    } catch (error) {
      throw error.response?.data?.message || error.message || "Sign in failed";
    }
  },

  async changePassword(passwordData) {
    try {
      const response = await axiosInstance.patch(
        "/change_password",
        { user: passwordData },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      return response.data;
    } catch (error) {
      throw (
        error.response?.data?.message ||
        error.message ||
        "Password change failed"
      );
    }
  },

  async forgotPassword(email) {
    try {
      const response = await axiosInstance.post("/forgot_password", {
        user: { email },
      });
      return response.data;
    } catch (error) {
      throw (
        error.response?.data?.message ||
        error.message ||
        "Failed to send reset instructions"
      );
    }
  },

  async resetPassword(resetData) {
    try {
      const response = await axiosInstance.patch("/reset_password", {
        user: resetData,
      });
      return response.data;
    } catch (error) {
      throw (
        error.response?.data?.message ||
        error.message ||
        "Password reset failed"
      );
    }
  },
};
