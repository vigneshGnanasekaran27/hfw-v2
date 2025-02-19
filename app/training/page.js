"use client";
import React, { useEffect, Suspense, useState } from "react";
import Image from "next/image";
import { ArrowRight, Clock, Users, MapPin, Check } from "lucide-react";

import { trainingData } from ".//trainingData";
import Link from "next/link";

const LocationBanner = () => (
  <div className="mb-8 p-6 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl text-white shadow-lg transform hover:-translate-y-1 transition-all duration-300">
    <div className="flex items-center gap-3">
      <div className="bg-white/20 p-2 rounded-lg">
        <MapPin className="h-6 w-6" />
      </div>
      <p className="text-lg font-medium">
        Available only in gated communities with gym facilities from Kelambakkam
        to Sholinganallur
      </p>
    </div>
  </div>
);

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");
}

const TrainingModeSelector = ({ selectedMode, onModeChange }) => (
  <div className="flex justify-center gap-4 mb-12">
    {["offline", "online"].map((mode) => (
      <button
        key={mode}
        onClick={() => onModeChange(mode)}
        className={`
          px-8 py-3 rounded-xl font-bold text-lg transition-all duration-300
          ${
            selectedMode === mode
              ? "bg-gradient-to-r from-purple-600 to-purple-500 text-white shadow-lg scale-105"
              : "bg-white text-gray-600 hover:bg-gray-50 shadow-md"
          }
        `}
      >
        {mode.charAt(0).toUpperCase() + mode.slice(1)} Training
      </button>
    ))}
  </div>
);

const CategoryCard = ({ category }) => {
  return (
    <div className="mb-16">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">
          {category.title}
        </h2>
        <p className="text-gray-600 text-lg">{category.description}</p>
      </div>

      <div className="grid grid-cols-1 gap-8">
        {category.programs.map((program) => (
          <Link
            key={program.id}
            href={`/training/${slugify(program.title)}`}
            className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:-translate-y-1 transition-all duration-300"
          >
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="relative h-72 md:h-full">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                <Image
                  src={program.image}
                  alt={program.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 z-20 text-white">
                  <h3 className="text-2xl font-bold mb-2">{program.title}</h3>
                  <p className="text-white/90">{program.description}</p>
                </div>
              </div>

              <div className="p-6 space-y-6">
                <p className="text-gray-600">{program.fullDescription}</p>

                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-purple-500" />
                    <span className="font-semibold">
                      {program.schedule_details.frequency}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-purple-500" />
                    <span className="font-semibold">
                      {program.ideal_for[0]}
                    </span>
                  </div>
                </div>

                <div className="w-full bg-gradient-to-r from-purple-600 to-purple-500 text-white font-bold py-3 px-6 rounded-xl hover:from-purple-700 hover:to-purple-600 transition-all duration-300 flex items-center justify-center gap-2 group">
                  View Program Details
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

const EnrollmentProcess = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  const steps = [
    {
      icon: "💪",
      title: "Select Your Program",
      content: [
        "Browse training options",
        "Choose one-on-one or group",
        "Review program details",
      ],
    },
    {
      icon: "📋",
      title: "Fill Enrollment Form",
      content: [
        "Basic information",
        "Fitness background",
        "Health questionnaire",
      ],
    },
    {
      icon: "📅",
      title: "Schedule Assessment",
      content: [
        "Pick convenient time",
        "Meet your trainer",
        "Discuss your goals",
      ],
    },
    {
      icon: "🎯",
      title: "Start Your Journey",
      content: [
        "Get welcome package",
        "Access training portal",
        "Begin first session",
      ],
    },
  ];

  useEffect(() => {
    // Intersection Observer for animation on scroll
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );

    const element = document.getElementById("enrollment-process");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isAnimating && isVisible) {
      const timer = setInterval(() => {
        setCurrentStep((prev) => (prev + 1) % steps.length);
      }, 4000);
      return () => clearInterval(timer);
    }
  }, [isAnimating, isVisible, steps.length]);

  return (
    <div
      id="enrollment-process"
      className="mt-16 px-4 max-w-4xl mx-auto"
      onMouseEnter={() => setIsAnimating(false)}
      onMouseLeave={() => setIsAnimating(true)}
      role="region"
      aria-label="Enrollment Process Steps"
    >
      <h3 className="text-2xl md:text-3xl font-bold text-center mb-12">
        How to Get Started
      </h3>

      <div className="relative">
        <div className="flex flex-col md:flex-row gap-8 md:gap-4 items-stretch justify-between">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`relative flex-1 min-w-0 ${
                index === currentStep ? "z-10" : "z-0"
              }`}
              role="button"
              tabIndex={0}
              aria-label={`Step ${index + 1}: ${step.title}`}
              onClick={() => setCurrentStep(index)}
              onKeyPress={(e) => e.key === "Enter" && setCurrentStep(index)}
            >
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-gray-200">
                  <div
                    className={`h-full bg-purple-600 transition-all duration-700 ${
                      index < currentStep ? "w-full" : "w-0"
                    }`}
                  />
                </div>
              )}

              <div
                className={`bg-white rounded-xl shadow-lg transition-all duration-500 h-full
                  ${
                    index === currentStep
                      ? "scale-105 bg-purple-50 border-2 border-purple-500"
                      : index < currentStep
                      ? "opacity-75"
                      : "opacity-50"
                  }`}
              >
                <div className="p-6 sm:p-4">
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center text-2xl
                        ${
                          index <= currentStep
                            ? "bg-purple-600 text-white"
                            : "bg-gray-200"
                        }`}
                    >
                      {index < currentStep ? (
                        <Check className="w-6 h-6" />
                      ) : (
                        step.icon
                      )}
                    </div>
                    <div>
                      <div className="text-sm text-purple-600 font-semibold">
                        Step {index + 1}
                      </div>
                      <h4 className="font-bold">{step.title}</h4>
                    </div>
                  </div>

                  <div
                    className={`space-y-2 transition-all duration-300 ${
                      index === currentStep ? "opacity-100" : "opacity-70"
                    }`}
                  >
                    {step.content.map((item, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <ArrowRight className="w-4 h-4 text-purple-500" />
                        <span className="text-sm text-gray-600">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="md:hidden flex justify-center mt-8 mb-4 gap-3">
          {steps.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentStep(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentStep ? "w-8 bg-purple-600" : "w-2 bg-gray-300"
              }`}
              aria-label={`Go to step ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const TrainingContent = () => {
  const [trainingMode, setTrainingMode] = useState("online");
  const [loading, setLoading] = useState(false);

  if (loading)
    return (
      <div className="flex items-center justify-center py-20">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-purple-500"></div>
      </div>
    );

  return (
    <div className="space-y-16">
      <EnrollmentProcess />
      <TrainingModeSelector
        selectedMode={trainingMode}
        onModeChange={setTrainingMode}
      />
      {trainingMode === "offline" && <LocationBanner />}

      {trainingMode === "online" ? (
        <div className="space-y-16">
          {trainingData.online.categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      ) : (
        <div className="space-y-16">
          {trainingData.offline.categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      )}
    </div>
  );
};

const TrainingPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-purple-500 bg-clip-text text-transparent">
            Transform Your Fitness Journey
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from our expertly crafted training programs designed to help
            you achieve your fitness goals with personalized attention and
            proven methods.
          </p>
        </div>

        <Suspense
          fallback={
            <div className="flex items-center justify-center py-20">
              <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-purple-500"></div>
            </div>
          }
        >
          <TrainingContent />
        </Suspense>
      </div>
    </div>
  );
};

export default TrainingPage;
