"use client";
import React, { useState, useEffect } from "react";
import { Scroll, ArrowRight, Trophy } from "lucide-react";
import Image from "next/legacy/image";
import testimg from "../images/image.png";
import copyimage1 from "../images/image copy 3.png";
import copyimage2 from "../images/image copy 5.png";

export default function EventSection() {
  const events = [
    {
      title: "Fitness Challenge",
      type: "Community Fitness",
      description:
        "Push your limits with our comprehensive fitness challenge designed for all skill levels.",
      icon: <Scroll className="w-16 h-16  " />,
      image: testimg,
    },
    {
      title: "Wellness Expo",
      type: "Health Technology",
      description:
        "Explore cutting-edge wellness technologies and innovative health solutions.",
      icon: <Scroll className="w-16 h-16  " />,
      image: copyimage1,
    },
    {
      title: "Charity Run",
      type: "Community Impact",
      description:
        "Make a difference while staying fit. Join our charity run supporting local health initiatives.",
      icon: <Scroll className="w-16 h-16  " />,
      image: copyimage2,
    },
  ];

  const [activeCard, setActiveCard] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCard((prev) => (prev + 1) % events.length);
    }, 5000); // Auto-scroll every 5 seconds

    return () => clearInterval(interval);
  }, [events.length]);

  return (
    // <section className="py-16 bg-gray-50 relative">
    <section id="events" className="py-16  relative mt-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-2 bg-cyan-100 rounded-full mb-6 shadow-sm border border-cyan-200">
            <Trophy className="w-10 h-10  text-cyan-600  " />
          </div>

          <h2 className="text-4xl font-bold   mb-4">Our Fitness Events</h2>
          <p className="text-xl  ">Discover Engaging Community Experiences</p>
        </div>

        <div className="relative w-full max-w-4xl mx-auto h-[500px] overflow-hidden">
          {events.map((event, index) => (
            <div
              key={index}
              className={`
                absolute top-0 left-0 w-full 
                transition-all duration-700 ease-in-out
                ${
                  activeCard === index
                    ? "opacity-100 translate-x-0 z-20"
                    : "opacity-0 translate-x-full -z-10"
                }
              `}
            >
              <div
                className=" rounded-lg shadow-2xl flex h-[400px] overflow-hidden dark:shadow-[0px_4px_12px_rgba(102,126,234,0.4)]
  "
              >
                {/* Left Side - Icon and Description */}
                <div className="w-1/2 p-8 flex flex-col justify-center">
                  <div className="mb-6 flex items-center">
                    {event.icon}
                    <h3 className="text-3xl font-bold ml-4  ">{event.title}</h3>
                  </div>
                  <p className="  text-lg mb-6">{event.description}</p>
                  <div className="flex items-center">
                    <span className="mr-4   font-semibold">{event.type}</span>
                    <div className="h-px   flex-grow"></div>
                  </div>
                </div>

                {/* Right Side - Event Image */}
                <div className="w-1/2 relative ">
                  <Image
                    src={event.image}
                    alt={`${event.title} image`}
                    fill
                    width={500}
                    height={300}
                    className="absolute inset-0 object-cover "
                    priority={index === 0}
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-light opacity-30"></div>
                </div>
              </div>

              {/* Call to Action Button Below the Card */}
              <div
                className={`
                  mt-4 text-center transition-all duration-700 ease-in-out
                  ${
                    activeCard === index
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-full"
                  }
                `}
              >
                <button
                  className="
                    px-12 py-4     
                    rounded-full text-lg font-semibold
                    hover:bg-primary-dark transition duration-300
                    flex items-center justify-center mx-auto
                  "
                >
                  Enroll in {event.title} <ArrowRight className="ml-2" />
                </button>
              </div>
            </div>
          ))}

          {/* Navigation Dots */}
          <div className="absolute bottom-0 left-0 right-0 flex justify-center">
            {events.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveCard(index)}
                className={`
                  w-3 h-3 rounded-full mx-2 transition-all duration-300
                  ${activeCard === index ? "bg-primary w-6" : " "}
                `}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
