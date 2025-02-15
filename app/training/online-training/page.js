"use client";
import React, { useEffect, Suspense, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import axios from "axios";
import {
  ArrowRight,
  Clock,
  Users,
  Target,
  CheckCircle,
  MapPin,
} from "lucide-react";

// Location notification banner component
const LocationBanner = () => (
  <div className="mb-8 p-4 bg-purple-50 border border-purple-200 rounded-lg flex items-center gap-2">
    <MapPin className="h-4 w-4 text-purple-500 shrink-0" />
    <p className="text-purple-700 text-sm">
      Currently available: from Kelambakkam to Sholinganallur and only in gated
      communities with gym facilities.
    </p>
  </div>
);

// Training mode selector component
const TrainingModeSelector = ({ selectedMode, onModeChange }) => (
  <div className="flex justify-center gap-4 mb-12">
    <button
      onClick={() => onModeChange("offline")}
      className={`px-6 py-2 rounded-lg font-semibold transition-colors ${
        selectedMode === "offline"
          ? "bg-purple-500 text-white"
          : "bg-gray-100 text-gray-600 hover:bg-gray-200"
      }`}
    >
      Offline Training
    </button>
    <button
      onClick={() => onModeChange("online")}
      className={`px-6 py-2 rounded-lg font-semibold transition-colors ${
        selectedMode === "online"
          ? "bg-purple-500 text-white"
          : "bg-gray-100 text-gray-600 hover:bg-gray-200"
      }`}
    >
      Online Training
    </button>
  </div>
);

// Separate component for the content that uses useSearchParams
const TrainingContent = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const type = searchParams.get("type");
  const [trainingMode, setTrainingMode] = useState("offline");
  const [trainings, setTrainings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/v1/training_details")
      .then((response) => {
        setTrainings(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (type) {
      const element = document.getElementById(type);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }
  }, [type]);

  const handleEnroll = (trainingType) => {
    router.push(`training/join/${trainingType}`);
  };

  if (loading) return <div className="text-center py-8">Loading...</div>;
  if (error)
    return <div className="text-center py-8 text-red-500">Error: {error}</div>;

  const filteredTrainingDetails = trainings.filter(
    (training) => training.mode === trainingMode
  );

  return (
    <div className="space-y-32">
      <TrainingModeSelector
        selectedMode={trainingMode}
        onModeChange={setTrainingMode}
      />

      {trainingMode === "offline" && <LocationBanner />}

      {filteredTrainingDetails.map((training) => (
        <div key={training.id} id={training.id} className="space-y-12">
          {/* Header Section */}
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="w-full md:w-1/2 relative h-96">
              <Image
                src={training.image}
                alt={training.title}
                fill
                className="object-cover rounded-lg"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            <div className="w-full md:w-1/2 space-y-6">
              <h2 className="text-4xl font-bold">{training.title}</h2>
              <p className="text-xl text-gray-600">{training.description}</p>
              <p className="text-lg">{training.fullDescription}</p>
              <button
                onClick={() => handleEnroll(training.id)}
                className="bg-purple-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-purple-600 flex items-center justify-center transition-colors"
              >
                Enroll Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Details Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Benefits & Features */}
            <div className="space-y-6">
              <div className="bg-purple-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <CheckCircle className="w-6 h-6 mr-2 text-purple-500" />
                  Key Benefits
                </h3>
                <ul className="space-y-3">
                  {training.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-purple-500 mr-2">•</span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-purple-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <Target className="w-6 h-6 mr-2 text-purple-500" />
                  Features
                </h3>
                <ul className="space-y-3">
                  {training.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-purple-500 mr-2">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Schedule Details */}
            <div className="space-y-6">
              <div className="bg-purple-50 p-6 rounded-lg h-full">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <Clock className="w-6 h-6 mr-2 text-purple-500" />
                  Schedule Details
                </h3>
                <div className="space-y-3">
                  <p>
                    <strong>Duration:</strong>{" "}
                    {training.schedule_details.duration}
                  </p>
                  <p>
                    <strong>Frequency:</strong>{" "}
                    {training.schedule_details.frequency}
                  </p>
                  <p>
                    <strong>Availability:</strong>{" "}
                    {training.schedule_details.availability}
                  </p>
                  <p>
                    <strong>Timings:</strong>{" "}
                    {training.schedule_details.timings}
                  </p>
                </div>
              </div>
            </div>

            {/* Ideal For */}
            <div className="space-y-6">
              <div className="bg-purple-50 p-6 rounded-lg h-full">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <Users className="w-6 h-6 mr-2 text-purple-500" />
                  Ideal For
                </h3>
                <ul className="space-y-3">
                  {training.ideal_for.map((ideal, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-purple-500 mr-2">•</span>
                      {ideal}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

// Main component wrapped with Suspense
const TrainingPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h1 className="text-5xl font-bold text-center mb-8">Training Programs</h1>
      <p className="text-lg text-center max-w-3xl mx-auto mb-16">
        Discover the perfect training program to achieve your fitness goals.
        Whether you prefer group motivation, personalized attention, or flexible
        online options, we have you covered.
      </p>

      <Suspense fallback={<div>Loading...</div>}>
        <TrainingContent />
      </Suspense>
    </div>
  );
};

export default TrainingPage;
