"use client";
import { useState } from "react";
import {
  Heart,
  Phone,
  MessageCircle,
  Smile,
  X,
  Feather,
  PenTool,
  Compass,
} from "lucide-react";

const EmpathySupport = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const supportMessages = [
    {
      text: "Your pain is real, and so is your strength.",
      icon: Feather,
      color: "text-indigo-500",
    },
    {
      text: "This moment doesn't define you—it's just a moment in your journey.",
      icon: Compass,
      color: "text-teal-500",
    },
    {
      text: "You are heard, you are seen, you are valued.",
      icon: MessageCircle,
      color: "text-purple-500",
    },
    {
      text: "Your feelings are valid, no matter what they are.",
      icon: PenTool,
      color: "text-pink-500",
    },
    {
      text: "Healing isn't about being perfect. It's about being authentic.",
      icon: Heart,
      color: "text-rose-500",
    },
    {
      text: "You don't have to carry this weight alone.",
      icon: Smile,
      color: "text-blue-500",
    },
  ];

  const supportResources = [
    {
      title: "Crisis Support",
      description: "Immediate, confidential help",
      phone: "1-800-HOPE-LINE",
      phoneLink: "tel:+1-800-273-8255",
    },
    {
      title: "Online Counseling",
      description: "Professional support, anytime",
      phone: "Virtual Support",
      phoneLink: "https://www.betterhelp.com",
    },
  ];

  return (
    <div className="relative">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex items-center space-x-2  hover:text-primary transition duration-300 focus:outline-none"
        aria-label={isExpanded ? "Close support menu" : "Open support menu"}
      >
        {isExpanded ? (
          <X className="w-6 h-6" />
        ) : (
          <>
            <Heart className="w-6 h-6 text-pink-500" />
            <span className="hidden md:inline">Support</span>
          </>
        )}
      </button>

      {isExpanded && (
        <div
          className="fixed top-16 right-4 w-full max-w-md max-h-[calc(100vh-8rem)] 
                     bg-gradient-to-br from-white to-blue-50 shadow-2xl rounded-2xl 
                     p-6 z-50 border border-gray-100 
                     overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 
                     scrollbar-track-gray-100"
        >
          <div className="sticky top-0 bg-gradient-to-r from-white to-blue-50 z-10 pb-4">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <Heart className="text-pink-500" size={32} />
                <h2 className="text-2xl font-bold text-gray-900">
                  You Are Not Alone
                </h2>
              </div>
            </div>

            {/* Support Resources */}
            <div className="space-y-4">
              {supportResources.map((resource, index) => (
                <div
                  key={index}
                  className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 
                             hover:shadow-md transition-all duration-300"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">
                        {resource.title}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {resource.description}
                      </p>
                    </div>
                    <a
                      href={resource.phoneLink}
                      className="text-primary hover:underline font-bold"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {resource.phone}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6 mt-4">
            <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
              <p className="text-gray-700 text-base leading-relaxed mb-4">
                This is a safe, judgment-free space. Whatever emotions you're
                experiencing right now are valid. You don't need to explain or
                justify your feelings—they simply are.
              </p>
              <div className="flex items-center space-x-3 text-sm text-gray-500">
                <Heart className="text-pink-500" size={20} />
                <span>Your story matters. Your healing matters.</span>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-gray-900">
                Compassionate Reminders
              </h3>
              {supportMessages.map((message, index) => {
                const IconComponent = message.icon;
                return (
                  <div
                    key={index}
                    className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 
                               flex items-start space-x-4 hover:shadow-md transition-all duration-300"
                  >
                    <IconComponent
                      className={`${message.color} w-6 h-6 flex-shrink-0 mt-1`}
                    />
                    <span className="text-gray-700 text-base">
                      {message.text}
                    </span>
                  </div>
                );
              })}
            </div>

            <div className="text-center bg-gray-50 p-4 rounded-xl">
              <p className="text-sm text-gray-600 italic">
                "Vulnerability is not winning or losing; it's having the courage
                to show up and be seen when we have no control over the
                outcome." - Brené Brown
              </p>
            </div>
          </div>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-500">
              Remember: Your strength is not measured by never falling, but by
              rising every time you fall.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default EmpathySupport;
