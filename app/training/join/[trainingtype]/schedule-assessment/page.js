"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  Calendar as CalendarIcon,
  Clock,
  ArrowRight,
  CheckCircle,
  Globe,
} from "lucide-react";

const ScheduleAssessment = () => {
  const router = useRouter();
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [userTimeZone, setUserTimeZone] = useState("UTC");

  // Automatically detect and set user's timezone on component mount
  useEffect(() => {
    try {
      const localTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
      setUserTimeZone(localTimeZone);
    } catch (error) {
      console.warn("Failed to get local timezone, falling back to UTC");
      setUserTimeZone("UTC");
    }
  }, []);

  // Get next 14 days for available dates
  const getAvailableDates = () => {
    const dates = [];
    const today = new Date();

    for (let i = 1; i <= 14; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      // Exclude weekends
      if (date.getDay() !== 0 && date.getDay() !== 6) {
        dates.push(date);
      }
    }
    return dates;
  };

  // Generate fixed time slots from 6 AM to 6 PM IST
  const getFixedTimeSlots = () => {
    const slots = [];
    // 6 AM to 6 PM IST
    for (let hour = 6; hour <= 18; hour++) {
      const istTime = `${String(hour).padStart(2, "0")}:00`;

      // Convert IST to UTC for internal handling
      const utcDate = new Date();
      utcDate.setUTCHours(hour - 5, 30, 0, 0); // IST is UTC+5:30

      const localTime = new Intl.DateTimeFormat("en-US", {
        hour: "numeric",
        minute: "numeric",
        hour12: true,
        timeZone: userTimeZone,
      }).format(utcDate);

      const period = hour < 12 ? "Morning" : "Evening";

      slots.push({
        utc: `${String(utcDate.getUTCHours()).padStart(2, "0")}:${String(
          utcDate.getUTCMinutes()
        ).padStart(2, "0")}`,
        local: localTime,
        ist: new Intl.DateTimeFormat("en-US", {
          hour: "numeric",
          minute: "numeric",
          hour12: true,
          timeZone: "Asia/Kolkata",
        }).format(utcDate),
        period: period,
      });
    }
    return slots;
  };

  const formatDate = (date) => {
    try {
      return new Intl.DateTimeFormat("en-US", {
        weekday: "short",
        month: "short",
        day: "numeric",
        timeZone: userTimeZone,
      }).format(date);
    } catch (error) {
      return new Intl.DateTimeFormat("en-US", {
        weekday: "short",
        month: "short",
        day: "numeric",
      }).format(date);
    }
  };

  const formatTimeZoneDisplay = (timeZone) => {
    try {
      const date = new Date();
      const offset = date
        .toLocaleString("en-US", { timeZone, timeZoneName: "short" })
        .split(" ")
        .pop();
      return `${timeZone.replace(/_/g, " ")} (${offset})`;
    } catch (error) {
      return timeZone.replace(/_/g, " ");
    }
  };

  const handleSubmit = () => {
    const meetingDetails = {
      date: selectedDate,
      time: selectedTime,
      timeZone: userTimeZone,
    };
    router.push("/online-training/scheduling-confirmed");
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Schedule Your Assessment</h1>
        <p className="text-gray-600">
          Choose a date and time for your virtual fitness assessment. The
          session will take approximately 45 minutes.
        </p>
      </div>

      {/* Time Zone Display */}
      <div className="mb-8 bg-white rounded-lg p-6 shadow-lg">
        <h2 className="text-xl font-bold mb-4 flex items-center">
          <Globe className="w-5 h-5 mr-2 text-purple-500" />
          Your Time Zone
        </h2>
        <div className="p-2 bg-gray-50 rounded-lg">
          {formatTimeZoneDisplay(userTimeZone)}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Date Selection */}
        <div className="bg-white rounded-lg p-6 shadow-lg">
          <h2 className="text-xl font-bold mb-4 flex items-center">
            <CalendarIcon className="w-5 h-5 mr-2 text-purple-500" />
            Select Date
          </h2>
          <div className="grid grid-cols-1 gap-2">
            {getAvailableDates().map((date) => (
              <button
                key={date.toISOString()}
                onClick={() => setSelectedDate(date)}
                className={`p-3 rounded-lg text-left ${
                  selectedDate &&
                  selectedDate.toDateString() === date.toDateString()
                    ? "bg-purple-500 text-white"
                    : "bg-gray-50 hover:bg-gray-100"
                }`}
              >
                {formatDate(date)}
              </button>
            ))}
          </div>
        </div>

        {/* Time Selection */}
        <div className="bg-white rounded-lg p-6 shadow-lg">
          <h2 className="text-xl font-bold mb-4 flex items-center">
            <Clock className="w-5 h-5 mr-2 text-purple-500" />
            Select Time
          </h2>
          <div className="space-y-4">
            {/* Morning Slots */}
            <div>
              <h3 className="font-semibold mb-2">Morning Slots</h3>
              <div className="grid grid-cols-2 gap-2">
                {getFixedTimeSlots()
                  .filter((slot) => slot.period === "Morning")
                  .map((slot) => (
                    <button
                      key={slot.utc}
                      onClick={() => setSelectedTime(slot)}
                      className={`p-3 rounded-lg ${
                        selectedTime?.utc === slot.utc
                          ? "bg-purple-500 text-white"
                          : "bg-gray-50 hover:bg-gray-100"
                      }`}
                    >
                      {slot.local}
                    </button>
                  ))}
              </div>
            </div>
            {/* Evening Slots */}
            <div>
              <h3 className="font-semibold mb-2">Evening Slots</h3>
              <div className="grid grid-cols-2 gap-2">
                {getFixedTimeSlots()
                  .filter((slot) => slot.period === "Evening")
                  .map((slot) => (
                    <button
                      key={slot.utc}
                      onClick={() => setSelectedTime(slot)}
                      className={`p-3 rounded-lg ${
                        selectedTime?.utc === slot.utc
                          ? "bg-purple-500 text-white"
                          : "bg-gray-50 hover:bg-gray-100"
                      }`}
                    >
                      {slot.local}
                    </button>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Selected Schedule Summary */}
      {selectedDate && selectedTime && (
        <div className="mt-8 bg-purple-50 rounded-lg p-6">
          <h3 className="text-lg font-bold mb-4 flex items-center">
            <CheckCircle className="w-5 h-5 mr-2 text-purple-500" />
            Your Selected Schedule
          </h3>
          <p className="text-gray-700">
            {formatDate(selectedDate)} at {selectedTime.local} (
            {formatTimeZoneDisplay(userTimeZone)})
          </p>
          <p className="text-gray-700 mt-2">
            Time in IST (India): {selectedTime.ist}
          </p>
          <div className="mt-4 text-sm text-gray-600">
            <p>• Assessment duration: 45 minutes</p>
            <p>• Google Meet link will be sent to your email</p>
            <p>• Please be ready 5 minutes before the scheduled time</p>
            <p>• All times are shown in your local time zone</p>
          </div>
        </div>
      )}

      {/* Submit Button */}
      <div className="mt-8 text-center">
        <button
          onClick={handleSubmit}
          disabled={!selectedDate || !selectedTime}
          className={`inline-flex items-center px-6 py-3 rounded-lg text-white font-bold
            ${
              selectedDate && selectedTime
                ? "bg-purple-500 hover:bg-purple-600"
                : "bg-gray-300 cursor-not-allowed"
            }`}
        >
          Confirm Schedule
          <ArrowRight className="ml-2 w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default ScheduleAssessment;
