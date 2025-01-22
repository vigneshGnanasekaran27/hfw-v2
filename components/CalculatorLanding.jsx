"use client";
import React from "react";
import { useState } from "react";
import {
  Calculator,
  Activity,
  Heart,
  Weight,
  Baby,
  ArrowRight,
} from "lucide-react";

const CalculatorLanding = () => {
  const [selectedCalculator, setSelectedCalculator] = useState("calorie");

  const calculators = [
    {
      id: "calorie",
      icon: <Calculator className="w-8 h-8" />,
      title: "Calorie Calculator",
      description:
        "Get personalized daily calorie recommendations based on your goals",
      previewContent: (
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="  bg-purple-100 dark:bg-gray-900 p-4 rounded-lg">
              <p className="text-sm   ">Daily Target</p>
              <p className="text-xl font-bold text-blue-600">2,500 kcal</p>
            </div>
            <div className="  bg-purple-100  dark:bg-gray-900 p-4 rounded-lg">
              <p className="text-sm   ">Weight Goal</p>
              <p className="text-xl font-bold text-green-600">-0.5 kg/week</p>
            </div>
          </div>
          <div className="  bg-purple-100  dark:bg-gray-900 p-4 rounded-lg">
            <div className="flex justify-between mb-2">
              <span className="text-sm   ">Progress</span>
              <span className="text-sm font-medium">75%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-blue-600 h-2 rounded-full"
                style={{ width: "75%" }}
              ></div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "bmr",
      icon: <Activity className="w-8 h-8" />,
      title: "BMR Calculator",
      description:
        "Calculate your Basal Metabolic Rate to understand your base energy needs",
      previewContent: (
        <div className="space-y-4">
          <div className="  bg-purple-100  dark:bg-gray-900 p-4 rounded-lg text-center">
            <p className="text-sm   ">Your BMR</p>
            <p className="text-3xl font-bold text-blue-600">1,785</p>
            <p className="text-sm   ">calories/day</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="  bg-purple-100  dark:bg-gray-900 p-4 rounded-lg">
              <p className="text-sm   ">Activity Level</p>
              <p className="text-lg font-medium">Moderate</p>
            </div>
            <div className="  bg-purple-100  dark:bg-gray-900 p-4 rounded-lg">
              <p className="text-sm   ">Age Factor</p>
              <p className="text-lg font-medium">+120 cal</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "body-fat",
      icon: <Heart className="w-8 h-8" />,
      title: "Body Fat Calculator",
      description:
        "Estimate your body fat percentage using scientific measurements",
      previewContent: (
        <div className="space-y-4">
          <div className="flex items-center justify-center">
            <div className="relative w-32 h-32">
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-3xl font-bold text-blue-600">18.5%</p>
              </div>
              <svg className="transform -rotate-90 w-32 h-32">
                <circle
                  cx="64"
                  cy="64"
                  r="60"
                  stroke="currentColor"
                  strokeWidth="8"
                  fill="none"
                  className="text-gray-200"
                />
                <circle
                  cx="64"
                  cy="64"
                  r="60"
                  stroke="currentColor"
                  strokeWidth="8"
                  fill="none"
                  strokeDasharray="377"
                  strokeDashoffset="94"
                  className="text-blue-600"
                />
              </svg>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="  bg-purple-100  dark:bg-gray-900 p-4 rounded-lg">
              <p className="text-sm   ">Category</p>
              <p className="text-lg font-medium">Fitness</p>
            </div>
            <div className="  bg-purple-100  dark:bg-gray-900 p-4 rounded-lg">
              <p className="text-sm   ">Status</p>
              <p className="text-lg font-medium text-green-600">Healthy</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "tdee",
      icon: <Weight className="w-8 h-8" />,
      title: "TDEE Calculator",
      description:
        "Find your Total Daily Energy Expenditure for optimal nutrition",
      previewContent: (
        <div className="space-y-4">
          <div className="  bg-purple-100  dark:bg-gray-900 p-4 rounded-lg text-center">
            <p className="text-sm   ">Daily Energy Expenditure</p>
            <p className="text-3xl font-bold text-blue-600">2,450</p>
            <p className="text-sm   ">calories/day</p>
          </div>
          <div className="grid grid-cols-3 gap-2">
            <div className="  bg-purple-100  dark:bg-gray-900 p-3 rounded-lg text-center">
              <p className="text-xs   ">BMR</p>
              <p className="text-sm font-bold">1,785</p>
            </div>
            <div className="  bg-purple-100  dark:bg-gray-900 p-3 rounded-lg text-center">
              <p className="text-xs   ">Activity</p>
              <p className="text-sm font-bold">+545</p>
            </div>
            <div className="  bg-purple-100  dark:bg-gray-900 p-3 rounded-lg text-center">
              <p className="text-xs   ">Exercise</p>
              <p className="text-sm font-bold">+120</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "pregnancy",
      icon: <Baby className="w-8 h-8" />,
      title: "Pregnancy Calculator",
      description:
        "Track pregnancy milestones and get personalized nutrition guidance",
      previewContent: (
        <div className="space-y-4">
          <div className="  bg-purple-100  dark:bg-gray-900 p-4 rounded-lg text-center">
            <p className="text-sm   ">Current Week</p>
            <p className="text-3xl font-bold text-pink-600">Week 24</p>
            <p className="text-sm   ">Second Trimester</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="  bg-purple-100  dark:bg-gray-900 p-4 rounded-lg">
              <p className="text-sm   ">Due Date</p>
              <p className="text-lg font-medium">Aug 15</p>
            </div>
            <div className="  bg-purple-100  dark:bg-gray-900 p-4 rounded-lg">
              <p className="text-sm   ">Weight Gain</p>
              <p className="text-lg font-medium">+12.5 lbs</p>
            </div>
          </div>
        </div>
      ),
    },
  ];

  const handleCalculatorClick = () => {
    window.location.href = "/calculator";
  };

  const handleCalculatorClickId = (calc) => {
    window.location.href = `/calculator/${calc.id}`;
  };

  return (
    <div className="min-h-screen" id="calculator">
      <div className="container mx-auto px-10 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3   rounded-full mb-6">
            <Calculator className="w-10 h-10  " />
          </div>
          <h1 className="text-5xl font-bold mb-6">Smart Health Calculators</h1>
          <p className="text-xl    max-w-2xl mx-auto">
            Make informed decisions about your health and fitness with our suite
            of intelligent calculators. Simple, accurate, and personalized just
            for you.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Left Side - Calculator Preview */}
          <div className="rounded-xl p-6 shadow-lg dark:shadow-[0px_4px_12px_rgba(102,126,234,0.4)]">
            {/* Calculator Tabs */}
            <div className="flex flex-wrap gap-2 mb-6">
              {calculators.map((calc) => (
                <button
                  key={calc.id}
                  onClick={() => setSelectedCalculator(calc.id)}
                  className={`p-3 rounded-lg transition-all ${
                    selectedCalculator === calc.id
                      ? "bg-cyan-300  dark:bg-cyan-800 scale-105"
                      : "  bg-purple-100  dark:bg-gray-900 hover:bg-gray-200"
                  }`}
                >
                  {calc.icon}
                </button>
              ))}
            </div>

            {/* Calculator Preview Content */}
            {calculators.map(
              (calc) =>
                calc.id === selectedCalculator && (
                  <div key={calc.id} className="space-y-6">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="bg-blue-500 w-16 h-16 rounded-2xl flex items-center justify-center ">
                        {calc.icon}
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold ">{calc.title}</h2>
                        <p className="  ">{calc.description}</p>
                      </div>
                    </div>

                    {/* Preview Content */}
                    <div className="p-4 rounded-lg ">{calc.previewContent}</div>
                    <div className="flex justify-center gap-2">
                      <button
                        onClick={() => handleCalculatorClick()}
                        className="bg-purple-50 text-purple-600 px-6 py-3 rounded-lg hover: bg-purple-100  dark:bg-gray-900 transition-colors duration-300 flex items-center"
                      >
                        view all our calculator
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </button>
                      <button
                        onClick={() => handleCalculatorClickId(calc)}
                        className="w-fit bg-blue-600  py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                      >
                        {`try ${calc.title}`}
                      </button>
                    </div>
                  </div>
                )
            )}
          </div>

          {/* Right Side - Features */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold  mb-8">
              Why Choose Our Calculators?
            </h3>

            <div className="space-y-4">
              <div className=" p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow dark:shadow-[0px_4px_12px_rgba(102,126,234,0.4)]">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Calculator className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">
                      Scientific Accuracy
                    </h4>
                    <p className="  ">
                      Our calculators use proven scientific formulas and
                      methodologies to provide accurate results.
                    </p>
                  </div>
                </div>
              </div>

              <div
                className=" p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow dark:shadow-[0px_4px_12px_rgba(102,126,234,0.4)]
"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-green-100 p-3 rounded-lg">
                    <Activity className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">
                      Personalized Results
                    </h4>
                    <p className="  ">
                      Get customized recommendations based on your unique body
                      composition and goals.
                    </p>
                  </div>
                </div>
              </div>

              <div
                className=" p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow dark:shadow-[0px_4px_12px_rgba(102,126,234,0.4)]
"
              >
                <div className="flex items-start gap-4">
                  <div className=" bg-purple-100  dark:bg-gray-900 p-3 rounded-lg">
                    <Heart className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Easy to Use</h4>
                    <p className="  ">
                      Simple interface with clear instructions makes it easy to
                      get the information you need.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalculatorLanding;
