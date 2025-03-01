"use client";
import React, { useState, useEffect } from "react";
import {
  Home,
  Dumbbell,
  ChefHat,
  ShoppingBag,
  Menu,
  X,
  Settings,
  Users,
  FileText,
} from "lucide-react";
import { jwtDecode } from "jwt-decode";

import TrainingDashboard from "@/dashboard/user/TrainingDashboard";
import KitchenDashboard from "@/dashboard/user/KitchenDashboard";
import HomeOverview from "@/dashboard/user/HomeOverview";

import AdminHomeOverview from "@/dashboard/admin/AdminHomeOverview";
import AdminTrainingDashboard from "@/dashboard/admin/AdminTrainingDashboard";
import AdminKitchenDashboard from "@/dashboard/admin/AdminKitchenDashboard";
import LoginPopup from "@/dashboard/LoginPopup"; // Adjust the import path based on your file structure

const DashboardLayout = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [activeModule, setActiveModule] = useState("home");
  const [isAdmin, setIsAdmin] = useState(false);
  const [showLoginPopup, setShowLoginPopup] = useState(false);

  useEffect(() => {
    const checkAuth = () => {
      const token = localStorage.getItem("token");

      if (!token) {
        // Show the login popup if no token is found
        setShowLoginPopup(true);
        return;
      }

      try {
        const decodedToken = jwtDecode(token);
        setIsAdmin(decodedToken.is_admin ?? false);
      } catch (error) {
        console.error("Invalid token:", error);
        setIsAdmin(false);
        // Show the login popup if token is invalid
        setShowLoginPopup(true);
      }
    };

    checkAuth();

    // Listen for storage changes (e.g., if token is removed in another tab)
    window.addEventListener("storage", checkAuth);

    return () => {
      window.removeEventListener("storage", checkAuth);
    };
  }, []);

  const handleNavigateToLogin = () => {
    window.location.href = "/auth/signin"; // Replace with your login page URL
  };

  const handleNavigateToRoot = () => {
    window.location.href = "/"; // Navigate to root page
  };

  const handleClosePopup = () => {
    setShowLoginPopup(false);
  };

  const userModules = [
    { id: "home", name: "Home", icon: Home },
    { id: "training", name: "Training", icon: Dumbbell },
    { id: "kitchen", name: "Kitchen", icon: ChefHat },
    { id: "shop", name: "Shop", icon: ShoppingBag },
  ];

  const adminModules = [
    ...userModules,
    { id: "users", name: "User Management", icon: Users },
    { id: "reports", name: "Reports", icon: FileText },
    { id: "settings", name: "Settings", icon: Settings },
  ];

  const modules = isAdmin ? adminModules : userModules;

  // Access Denied component for non-admin users trying to access admin routes
  const AccessDenied = () => (
    <div className="flex flex-col items-center justify-center h-[60vh]">
      <div className="text-red-500 text-6xl mb-4">
        <X size={64} />
      </div>
      <h2 className="text-2xl font-bold text-gray-800 mb-2">Access Denied</h2>
      <p className="text-gray-600">
        You don't have permission to access this page.
      </p>
      <button
        onClick={() => setActiveModule("home")}
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
      >
        Return to Home
      </button>
    </div>
  );

  const renderContent = () => {
    switch (activeModule) {
      case "home":
        return isAdmin ? <AdminHomeOverview /> : <HomeOverview />;
      case "training":
        return isAdmin ? <AdminTrainingDashboard /> : <TrainingDashboard />;
      case "kitchen":
        return isAdmin ? <AdminKitchenDashboard /> : <KitchenDashboard />;
      case "users":
        return isAdmin ? <div>User Management</div> : <AccessDenied />;
      case "reports":
        return isAdmin ? <div>Reports</div> : <AccessDenied />;
      case "settings":
        return isAdmin ? <div>Settings</div> : <AccessDenied />;
      default:
        return <div>Module under development</div>;
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Login Popup */}
      {showLoginPopup && (
        <LoginPopup
          onClose={handleClosePopup}
          onNavigateToLogin={handleNavigateToLogin}
          onNavigateToRoot={handleNavigateToRoot}
        />
      )}

      {/* Sidebar */}
      <div
        className={`${
          isSidebarOpen ? "w-64" : "w-20"
        } bg-gray-900 text-white transition-all duration-300 ease-in-out`}
      >
        <div className="p-4 flex justify-between items-center">
          <h2
            className={`${
              isSidebarOpen ? "block" : "hidden"
            } font-bold text-xl`}
          >
            {isAdmin ? "Admin Dashboard" : "Dashboard"}
          </h2>
          <button
            onClick={() => setSidebarOpen(!isSidebarOpen)}
            className="p-2 hover:bg-gray-800 rounded"
          >
            {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Admin Status Indicator */}
        {isSidebarOpen && (
          <div className="px-4 py-2">
            <div
              className={`rounded-md p-2 text-sm ${
                isAdmin ? "bg-green-800" : "bg-gray-800"
              }`}
            >
              Status: {isAdmin ? "Admin" : "User"}
            </div>
          </div>
        )}

        <nav className="mt-6">
          {modules.map((module) => (
            <button
              key={module.id}
              onClick={() => setActiveModule(module.id)}
              className={`w-full flex items-center p-4 hover:bg-gray-800 transition-colors ${
                activeModule === module.id ? "bg-gray-800" : ""
              }`}
            >
              <module.icon size={20} />
              <span className={`${isSidebarOpen ? "ml-4" : "hidden"}`}>
                {module.name}
              </span>
            </button>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <div className="p-8">{renderContent()}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
