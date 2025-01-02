import React from "react";
import {
  ClipboardCheck,
  Utensils,
  ChefHat,
  ArrowRight,
  Users,
  BookOpen,
  Salad,
} from "lucide-react";

const NutritionConsultation = () => {
  return (
    <div id="nutrition" className="container mx-auto px-4 py-16 mt-12">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}

        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3   rounded-full mb-6">
            <Salad className="w-10 h-10  " />
          </div>
          <h2 className="text-4xl font-bold mb-6">
            Expert Nutrition Consultation
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get a personalized nutrition plan designed by our expert
            nutritionists, with the flexibility to prepare meals yourself or
            order from our kitchen.
          </p>
        </div>

        {/* Process Flow */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-purple-50 rounded-xl p-8 text-center">
            <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
              <BookOpen className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold mb-4">1. Consultation</h3>
            <p className="text-gray-600">
              Meet with our nutritionists to discuss your goals, preferences,
              and lifestyle
            </p>
          </div>

          <div className="bg-purple-50 rounded-xl p-8 text-center">
            <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
              <ClipboardCheck className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold mb-4">2. Custom Plan</h3>
            <p className="text-gray-600">
              Receive your personalized nutrition plan tailored to your specific
              needs
            </p>
          </div>

          <div className="bg-purple-50 rounded-xl p-8 text-center">
            <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
              <Utensils className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold mb-4">3. Meal Options</h3>
            <p className="text-gray-600">
              Choose to prepare meals yourself or order from our kitchen
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-semibold mb-6 flex items-center">
              <Users className="w-6 h-6 mr-3 text-purple-600" />
              Personalized Consultation
            </h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                Initial assessment of your health and fitness goals
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                Detailed discussion of dietary preferences and restrictions
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                Regular follow-ups to track progress and adjust plans
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-semibold mb-6 flex items-center">
              <ChefHat className="w-6 h-6 mr-3 text-purple-600" />
              Kitchen Services
            </h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                Fresh, healthy meals prepared according to your plan
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                Flexible ordering options that fit your schedule
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                Dietary restrictions and preferences accommodated
              </li>
            </ul>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-purple-50 rounded-xl p-12 text-center">
          <h3 className="text-3xl font-bold mb-6">
            Ready to Transform Your Nutrition?
          </h3>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Start your journey to better health with a personalized nutrition
            consultation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-purple-600 text-white px-8 py-4 rounded-lg hover:bg-purple-700 transition-colors flex items-center justify-center">
              Schedule Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
            <button className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-lg hover:bg-purple-50 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NutritionConsultation;
