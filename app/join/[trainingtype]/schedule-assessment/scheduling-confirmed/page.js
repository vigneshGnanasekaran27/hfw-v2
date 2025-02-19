"use client";
import React from "react";
import { CheckCircle, Calendar, Clock, Video } from "lucide-react";

const SchedulingConfirmed = () => {
  return (
    <div className="max-w-2xl mx-auto px-4 py-16 text-center">
      <div className="mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
          <CheckCircle className="w-8 h-8 text-green-500" />
        </div>
        <h1 className="text-4xl font-bold mb-4">Assessment Scheduled!</h1>
        <p className="text-gray-600">
          Your virtual fitness assessment has been scheduled successfully. Check
          your email for the Google Meet link and further instructions.
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
        <div className="space-y-4">
          <div className="flex items-center justify-center space-x-2 text-gray-700">
            <Calendar className="w-5 h-5 text-purple-500" />
            <span>Wednesday, March 15, 2024</span>
          </div>
          <div className="flex items-center justify-center space-x-2 text-gray-700">
            <Clock className="w-5 h-5 text-purple-500" />
            <span>10:00 AM (45 minutes)</span>
          </div>
          <div className="flex items-center justify-center space-x-2 text-gray-700">
            <Video className="w-5 h-5 text-purple-500" />
            <span>Via Google Meet</span>
          </div>
        </div>
      </div>

      <div className="bg-purple-50 rounded-lg p-6 text-left">
        <h2 className="font-bold mb-4">Preparation Guidelines:</h2>
        <ul className="space-y-2 text-gray-700">
          <li>• Wear comfortable workout clothes</li>
          <li>• Have water nearby</li>
          <li>• Find a quiet space with good lighting</li>
          <li>• Test your camera and microphone beforehand</li>
          <li>• Be ready 5 minutes before the scheduled time</li>
        </ul>
      </div>

      <div className="mt-8">
        <button
          onClick={() => (window.location.href = "/dashboard")}
          className="bg-purple-500 text-white px-6 py-3 rounded-lg hover:bg-purple-600 transition-colors duration-200"
        >
          Go to Dashboard
        </button>
      </div>
    </div>
  );
};

export default SchedulingConfirmed;
