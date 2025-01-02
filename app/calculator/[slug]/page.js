"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

import BMRCalculator from "@/calculators/BMRCalculator";
import TDEECalculator from "@/calculators/TDEECalculator";
import BMICalculator from "@/calculators/BMICalculator";
import IdealWeightCalculator from "@/calculators/IdealWeightCalculator";

const calculatorComponents = {
  bmr: BMRCalculator,
  tdee: TDEECalculator,
  bmi: BMICalculator,
  "ideal-weight": IdealWeightCalculator,
};

// Get calculator titles for meta data
const calculatorTitles = {
  bmr: "BMR Calculator - Calculate Your Basal Metabolic Rate",
  bmi: "BMI Calculator - Check Your Body Mass Index",
  // Add titles for all calculators...
};

const CalculatorSlugPage = ({ params }) => {
  const router = useRouter();
  const { slug } = params;

  useEffect(() => {
    // Redirect to calculators page if slug is invalid
    if (!calculatorComponents[slug]) {
      router.push("/calculator");
    }
  }, [slug, router]);

  // Get the appropriate calculator component
  const CalculatorComponent = calculatorComponents[slug];

  if (!CalculatorComponent) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-700 mb-4">
            Calculator Not Found
          </h1>
          <p className="text-gray-600 mb-6">
            The calculator you're looking for doesn't exist.
          </p>
          <button
            onClick={() => router.push("/calculator")}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            View All Calculators
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <CalculatorComponent />
      </div>
    </div>
  );
};

export default CalculatorSlugPage;
