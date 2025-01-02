"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import AnimatedCTAButton from "./AnimatedCTAButton";

import bgKitchen1 from "../images/bg-kitchen1.jpeg";
import bgNutrition from "../images/bg-nutrition.jpeg";
import bgTraining from "../images/bg-training.png";
import bgSchedule from "../images/bg-schedule.jpeg";
import bgGroup from "../images/bg-groupT.jpeg";
import bgCal from "../images/bg-cal.png";
import bgKitchen2 from "../images/bg-kitchen2.png";

export default function SlidingBanner() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: bgKitchen1,
      title: "HopeFit Wellness Kitchen",
      subtitle: "Healthy Meals Tailored for You",
      cta: "Discover Our Kitchen",
    },
    {
      image: bgNutrition,
      title: "Personalized Nutrition Plans",
      subtitle: "Fuel Your Goals with Expert Guidance",
      cta: "View Meal Plans",
    },
    {
      image: bgTraining,
      title: "Holistic Fitness Training",
      subtitle: "Transform Your Mind, Body, and Spirit",
      cta: "Get Started Now",
    },
    {
      image: bgSchedule,
      title: "Customized Workout Schedules",
      subtitle: "Plan Your Path to Peak Fitness",
      cta: "Build Your Schedule",
    },
    {
      image: bgGroup,
      title: "Group Training Sessions",
      subtitle: "Achieve More Together",
      cta: "Join a Class",
    },
    {
      image: bgCal,
      title: "Fitness Calculator",
      subtitle: "Track Your Progress with Precision",
      cta: "Calculate Now",
    },
    {
      image: bgKitchen2,
      title: "Nutritious Meals Delivered",
      subtitle: "Delicious, Healthy, and Convenient",
      cta: "Order Your Meal",
    },
  ];

  // Auto-slide functionality
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000); // Change slide every 5 seconds

    return () => clearInterval(slideInterval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };

  return (
    <section className="relative h-[80vh] w-full overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Background Image */}
          <Image
            src={slide.image}
            alt={slide.title}
            layout="fill"
            objectFit="cover"
            priority={index === 0}
            className="absolute z-10"
          />

          {/* Overlay */}
          {/* <div className="absolute inset-0 bg-black opacity-50 z-20"></div> */}
          <div className="absolute inset-0v"></div>

          {/* Content */}
          <div className="relative z-30 flex items-center justify-center h-full text-center text-rose-500 px-4">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fadeIn">
                {slide.title}
              </h1>
              <p className="text-xl md:text-2xl mb-6 animate-fadeIn">
                {slide.subtitle}
              </p>
              {/* <a
                href="mailto:info@fitnesshub.com?subject=Fitness Journey Inquiry"
                className="bg-primary text-white px-8 py-3 rounded-full text-lg hover:bg-primary-dark transition duration-300 animate-bounce"
              >
                {slide.cta}
              </a> */}
              <div>
                <AnimatedCTAButton
                  showModal={true}
                  sectionName="Fitness Consultation"
                  className="bg-purple-500 hover:bg-purple-600" // Custom styling
                  size="lg"
                >
                  {slide.cta}
                </AnimatedCTAButton>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-40 text-white bg-black/50 p-2 rounded-full"
      >
        &#10094;
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-40 text-white bg-black/50 p-2 rounded-full"
      >
        &#10095;
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-40 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentSlide ? "bg-primary" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
