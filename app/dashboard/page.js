"use client";
import React, { useState, useEffect } from "react";

const Dashboard = () => {
  const [formData, setFormData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchFormData();
  }, []);

  const fetchFormData = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch(
        "http://localhost:3000/api/v1/training_enrollment_forms",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch form data");
      }

      const data = await response.json();

      if (data.length > 0) {
        setFormData(data[0]); // Ensure we work with a single object
      } else {
        setFormData(null);
      }

      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  const renderSection = (title, data) => {
    if (!data) return null;

    return (
      <section className="mb-8 bg-white p-6 rounded-lg shadow">
        <h2 className="text-2xl font-semibold mb-4">{title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {Object.entries(data).map(([key, value]) => (
            <div key={key} className="mb-2">
              <span className="font-medium capitalize">
                {key.replace(/([A-Z])/g, " $1").trim()}:
              </span>
              <span className="ml-1">
                {Array.isArray(value)
                  ? value.join(", ")
                  : value?.toString() || "N/A"}
              </span>
            </div>
          ))}
        </div>
      </section>
    );
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-xl">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-red-500 text-xl">{error}</div>
      </div>
    );
  }

  if (!formData) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-xl">No enrollment form found.</div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Training Enrollment Dashboard</h1>

      {renderSection("Personal Information", formData.personal_info)}
      {renderSection("Fitness Goals", formData.fitness_goals)}
      {renderSection("Activity Level", formData.activity_level)}
      {renderSection("Health Information", formData.health_info)}
      {renderSection("Nutrition Information", formData.nutrition_info)}
      {renderSection("Lifestyle", formData.lifestyle)}
    </div>
  );
};

export default Dashboard;
