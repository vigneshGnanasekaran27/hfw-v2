"use client";
import React, { useState } from "react";
import {
  Users,
  UserCheck,
  Laptop,
  Filter,
  ChevronDown,
  Running,
  Dumbbell,
  Zap,
  ArrowRight,
  Download,
} from "lucide-react";
import Image from "next/image";
import copyimage from "../images/image copy 3.png";
import AnimatedCTAButton from "./AnimatedCTAButton";
import Link from "next/link";

export default function TrainingSection() {
  // Training Types
  const trainingTypes = [
    {
      id: "group-training",
      title: "Group Training",
      description: "Motivating group fitness experiences",
      image: copyimage,
      alt: "Group fitness class with multiple participants",
      link: "",
    },
    {
      id: "one-on-one-training",
      title: "One-on-One Training",
      description: "Personalized coaching with expert trainers",
      image: copyimage,
      alt: "Personal trainer working with an individual client",
    },
    {
      id: "online-training",
      title: "Online Training",
      description: "Flexible fitness programs from anywhere",
      image: copyimage,
      alt: "Person doing online fitness training at home",
    },
  ];

  // Workout Schedules with Download Links
  const workoutSchedules = [
    {
      id: "cardio",
      title: "Cardio Blast",
      description: "High-intensity cardiovascular training",
      icon: <Dumbbell className="w-10 h-10 text-red-500" />,
      intensity: "High",
      duration: "45 mins",
      details:
        "A dynamic workout focusing on cardiovascular endurance. Includes interval training, sprint circuits, and high-energy cardio sequences designed to boost metabolism and improve heart health.",
      downloadLink:
        "https://docs.google.com/document/d/1FS2C7YSP6Gr4NE_4aD3R40T2czsNYocf6UVhxRNSxrk/edit?tab=t.0",
    },
    {
      id: "strength",
      title: "Strength Conditioning",
      description: "Full-body resistance and muscle building",
      icon: <Dumbbell className="w-10 h-10 text-blue-500" />,
      intensity: "High",
      duration: "60 mins",
      details:
        "Comprehensive strength training targeting major muscle groups. Utilizes free weights, resistance bands, and bodyweight exercises to build muscle, increase strength, and improve overall body composition.",
      downloadLink: "/workout-schedules/strength-conditioning.pdf",
    },
    {
      id: "endurance",
      title: "Endurance Training",
      description: "Improve stamina and athletic performance",
      icon: <Zap className="w-10 h-10 text-green-500" />,
      intensity: "Moderate",
      duration: "60 mins",
      details:
        "Designed to enhance cardiovascular endurance and muscular stamina. Includes a mix of sustained cardio, circuit training, and progressive overload techniques.",
      downloadLink: "/workout-schedules/endurance-training.pdf",
    },
    {
      id: "mobility",
      title: "Mobility & Flexibility",
      description: "Enhance range of motion and flexibility",
      icon: <Zap className="w-10 h-10 text-purple-500" />,
      intensity: "Low",
      duration: "45 mins",
      details:
        "A gentle yet effective session focusing on improving joint mobility, muscle flexibility, and overall body alignment. Incorporates stretching, yoga-inspired movements, and mobility drills.",
      downloadLink: "/workout-schedules/mobility-flexibility.pdf",
    },
    {
      id: "pilates",
      title: "Pilates Fundamentals",
      description: "Core strength and body awareness",
      icon: <Zap className="w-10 h-10 text-orange-500" />,
      intensity: "Low",
      duration: "45 mins",
      details:
        "Concentrated workout targeting core strength, posture, and body control. Combines traditional Pilates principles with modern fitness techniques to improve stability and muscle tone.",
      downloadLink: "/workout-schedules/pilates-fundamentals.pdf",
    },
  ];

  // State for filtering
  const [filterOpen, setFilterOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("All");

  // Filter options
  const filterOptions = [
    "All",
    "High Intensity",
    "Moderate Intensity",
    "Low Intensity",
  ];

  const handleClick = () => {
    window.location.href = "/training";
  };

  // Filter logic
  const filteredSchedules =
    selectedFilter === "All"
      ? workoutSchedules
      : workoutSchedules.filter((schedule) => {
          const intensityMap = {
            "High Intensity": "High",
            "Moderate Intensity": "Moderate",
            "Low Intensity": "Low",
          };
          return schedule.intensity === intensityMap[selectedFilter];
        });

  return (
    // <section id="training" className="py-16 bg-white">
    <section id="training" className="py-16 ">
      <div className="container mx-auto px-4">
        {/* Training Types Section */}
        <div className="text-center mb-16 ">
          <div className="border-t border-b border-black pt-2  dark:border-white">
            <h2 className="text-4xl font-bold  mb-4">Your Fitness, Your Way</h2>
            <p className="text-xl  max-w-2xl mx-auto mb-8">
              Flexible training options designed to meet your unique fitness
              goals
            </p>
          </div>

          {/* Training Types Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {trainingTypes.map((type, index) => (
              <Link href={`/training?type=${type.id}`} key={type.id}>
                <div
                  key={index}
                  className="  rounded-lg p-6 text-center shadow-md hover:shadow-xl transition duration-300 transform hover:scale-105"
                >
                  <div className="mb-4 w-full h-64 relative overflow-hidden rounded-lg">
                    <Image
                      src={type.image.src}
                      alt={type.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 mt-4">
                    {type.title}
                  </h3>
                  <p className="  mb-4">{type.description}</p>
                </div>
              </Link>
            ))}
          </div>

          {/* Call to Action */}
          <div className="flex justify-center">
            {/* <a
              href="/book-training"
              className="flex items-center bg-primary   px-8 py-4 rounded-full hover:bg-primary-dark transition duration-300 shadow-md"
            >
              Start Your Fitness Journey
              <ArrowRight className="ml-2 w-6 h-6" />
            </a> */}

            <AnimatedCTAButton
              // customAction={handleClick()}
              className="bg-purple-500 hover:bg-purple-600" // Custom styling
              size="lg"
            >
              Start Your Fitness Journey
            </AnimatedCTAButton>
          </div>
        </div>
      </div>
    </section>
  );
}
