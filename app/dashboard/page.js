"use client";
import React from "react";
// import { useState } from "react";
import {
  Calendar,
  Activity,
  Target,
  Video,
  BarChart,
  Clock,
  Award,
} from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const UserDashboard = () => {
  // Mock data for progress chart
  const progressData = [
    { week: "Week 1", weight: 180, performance: 65 },
    { week: "Week 2", weight: 178, performance: 68 },
    { week: "Week 3", weight: 176, performance: 72 },
    { week: "Week 4", weight: 175, performance: 75 },
  ];

  // Mock data for upcoming workouts
  const upcomingWorkouts = [
    {
      id: 1,
      title: "Upper Body Strength",
      date: "Today, 3:00 PM",
      duration: "45 mins",
      type: "Strength Training",
    },
    {
      id: 2,
      title: "Core Workout",
      date: "Tomorrow, 4:00 PM",
      duration: "30 mins",
      type: "Core",
    },
    {
      id: 3,
      title: "Cardio Session",
      date: "Wed, 5:00 PM",
      duration: "40 mins",
      type: "Cardio",
    },
  ];

  // Mock data for achievements
  const achievements = [
    {
      id: 1,
      title: "4 Week Streak",
      description: "Completed all scheduled workouts",
      icon: <Award className="w-8 h-8 text-yellow-500" />,
    },
    {
      id: 2,
      title: "Personal Best",
      description: "Reached new strength record",
      icon: <Target className="w-8 h-8 text-purple-500" />,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Welcome Section */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold">Welcome back, John!</h1>
          <p className="text-gray-600">
            Keep up the great work on your fitness journey.
          </p>
        </div>
        <button className="bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600">
          Start Workout
        </button>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-white p-4 rounded-lg shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600">Workouts Completed</p>
              <p className="text-2xl font-bold">12</p>
            </div>
            <Activity className="w-8 h-8 text-purple-500" />
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600">Current Streak</p>
              <p className="text-2xl font-bold">4 weeks</p>
            </div>
            <Calendar className="w-8 h-8 text-purple-500" />
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600">Hours Trained</p>
              <p className="text-2xl font-bold">24.5</p>
            </div>
            <Clock className="w-8 h-8 text-purple-500" />
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600">Achievement Points</p>
              <p className="text-2xl font-bold">850</p>
            </div>
            <Award className="w-8 h-8 text-purple-500" />
          </div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Progress Chart */}
        <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-bold mb-4">Your Progress</h2>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={progressData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="week" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="weight" stroke="#8884d8" />
                <Line type="monotone" dataKey="performance" stroke="#82ca9d" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Upcoming Workouts */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-bold mb-4">Upcoming Workouts</h2>
          <div className="space-y-4">
            {upcomingWorkouts.map((workout) => (
              <div key={workout.id} className="border-b pb-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-bold">{workout.title}</h3>
                    <p className="text-gray-600 text-sm">{workout.date}</p>
                    <p className="text-gray-500 text-sm">{workout.duration}</p>
                  </div>
                  <Video className="w-5 h-5 text-purple-500" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Achievements */}
        <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-bold mb-4">Recent Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {achievements.map((achievement) => (
              <div key={achievement.id} className="bg-purple-50 p-4 rounded-lg">
                <div className="flex items-center space-x-3">
                  {achievement.icon}
                  <div>
                    <h3 className="font-bold">{achievement.title}</h3>
                    <p className="text-gray-600 text-sm">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Weekly Goals */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-bold mb-4">Weekly Goals</h2>
          <div className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span>Workouts Completed</span>
                <span className="font-bold">3/5</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-purple-500 rounded-full h-2"
                  style={{ width: "60%" }}
                ></div>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span>Training Hours</span>
                <span className="font-bold">2.5/4</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-purple-500 rounded-full h-2"
                  style={{ width: "62.5%" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
        <button className="bg-white p-4 rounded-lg shadow hover:bg-gray-50 flex items-center justify-center space-x-2">
          <Video className="w-5 h-5 text-purple-500" />
          <span>View Workout Library</span>
        </button>
        <button className="bg-white p-4 rounded-lg shadow hover:bg-gray-50 flex items-center justify-center space-x-2">
          <Calendar className="w-5 h-5 text-purple-500" />
          <span>Schedule Session</span>
        </button>
        <button className="bg-white p-4 rounded-lg shadow hover:bg-gray-50 flex items-center justify-center space-x-2">
          <BarChart className="w-5 h-5 text-purple-500" />
          <span>View Full Progress</span>
        </button>
      </div>
    </div>
  );
};

export default UserDashboard;
