"use client";
import React, { useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import { ArrowRight, Clock, Users, Target, CheckCircle } from "lucide-react";

const TrainingPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const type = searchParams.get("type");

  const trainingDetails = [
    {
      id: "group-training",
      title: "Group Training",
      image: "/api/placeholder/800/600",
      description:
        "Join our energetic group sessions where motivation meets results. Perfect for those who thrive in a community setting.",
      fullDescription:
        "Experience the power of community-driven fitness in our group training sessions. Our expert trainers create dynamic workouts that accommodate all fitness levels while fostering a supportive environment.",
      benefits: [
        "Motivation and accountability from peers",
        "Cost-effective professional training",
        "Varied workouts to prevent plateaus",
        "Social interaction and community building",
        "Friendly competition to boost performance",
      ],
      features: [
        "Small groups of 6-12 people",
        "Professional equipment provided",
        "Progress tracking and assessments",
        "Flexible schedule options",
        "Monthly fitness challenges",
      ],
      scheduleDetails: {
        duration: "60 minutes per session",
        frequency: "3-5 sessions per week recommended",
        availability: "Morning, afternoon, and evening slots",
        timings: "6AM-8PM (Mon-Fri), 8AM-2PM (Sat-Sun)",
      },
      idealFor: [
        "Beginners looking for guidance",
        "Social exercisers",
        "Those seeking motivation",
        "Budget-conscious fitness enthusiasts",
        "People with flexible schedules",
      ],
    },
    {
      id: "one-on-one-training",
      title: "One-on-One Training",
      image: "/api/placeholder/800/600",
      description:
        "Personalized attention and custom workout plans tailored to your specific goals.",
      fullDescription:
        "Transform your fitness journey with dedicated one-on-one attention from our certified personal trainers. We create personalized programs that adapt to your progress and ensure proper form and technique.",
      benefits: [
        "Undivided attention from expert trainer",
        "Customized workout programming",
        "Detailed form correction",
        "Faster goal achievement",
        "Flexible scheduling options",
      ],
      features: [
        "Initial fitness assessment",
        "Customized nutrition planning",
        "Monthly progress photos",
        "Body composition analysis",
        "24/7 trainer support via app",
      ],
      scheduleDetails: {
        duration: "45-60 minutes per session",
        frequency: "2-4 sessions per week recommended",
        availability: "Flexible scheduling",
        timings: "5AM-9PM (Mon-Sun)",
      },
      idealFor: [
        "Goal-oriented individuals",
        "Those requiring special attention",
        "Injury rehabilitation",
        "Advanced athletes",
        "Busy professionals",
      ],
    },
    {
      id: "online-training",
      title: "Online Training",
      image: "/api/placeholder/800/600",
      description: "Expert guidance and support from anywhere, anytime.",
      fullDescription:
        "Take your workout wherever you go with our comprehensive online training program. Get professional guidance and support through our digital platform.",
      benefits: [
        "Train from any location",
        "Flexible workout timing",
        "Cost-effective personal training",
        "Access to workout library",
        "Regular progress tracking",
      ],
      features: [
        "Custom workout app access",
        "Weekly video check-ins",
        "Exercise technique videos",
        "Community support group",
        "Nutrition tracking tools",
      ],
      scheduleDetails: {
        duration: "Flexible workout duration",
        frequency: "Recommended 3-5 workouts per week",
        availability: "24/7 platform access",
        timings: "Workout anytime",
      },
      idealFor: [
        "Self-motivated individuals",
        "Frequent travelers",
        "Those with home gyms",
        "Budget-conscious clients",
        "Tech-savvy fitness enthusiasts",
      ],
    },
  ];

  useEffect(() => {
    if (type) {
      const element = document.getElementById(type);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }
  }, [type]);

  const handleEnroll = (trainingType) => {
    router.push(`/enroll/${trainingType}`);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 ">
      <h1 className="text-5xl font-bold text-center mb-8">Training Programs</h1>
      <p className="text-xl text-center max-w-3xl mx-auto mb-16">
        Discover the perfect training program to achieve your fitness goals.
        Whether you prefer group motivation, personalized attention, or flexible
        online options, we have you covered.
      </p>

      <div className="space-y-32">
        {trainingDetails.map((training) => (
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
                  className="bg-purple-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-purple-600 flex items-center justify-center"
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
                      {training.scheduleDetails.duration}
                    </p>
                    <p>
                      <strong>Frequency:</strong>{" "}
                      {training.scheduleDetails.frequency}
                    </p>
                    <p>
                      <strong>Availability:</strong>{" "}
                      {training.scheduleDetails.availability}
                    </p>
                    <p>
                      <strong>Timings:</strong>{" "}
                      {training.scheduleDetails.timings}
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
                    {training.idealFor.map((ideal, index) => (
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
    </div>
  );
};

const Training = () => {
  <Suspense>
    <TrainingPage />
  </Suspense>;
};

export default Training;
