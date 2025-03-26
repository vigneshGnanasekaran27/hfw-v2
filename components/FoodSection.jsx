"use client";
import React, { useState } from "react";
import Image from "next/image";
import food1 from "../images/food1.png";
import country_chicken from "../images/country_chicken.png";
import grilled_fish from "../images/grilled_fish.png";
import garlic_herb_prawns from "../images/garlic_herb_prawns.png";

import { useRouter } from "next/navigation";
import {
  ChefHat,
  Utensils,
  Heart,
  UserCheck,
  Clock,
  Leaf,
  Scale,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
// import { CTAModal } from "./CTAModal";
// import AnimatedCTAButton from "./AnimatedCTAButton";

export default function FoodSection() {
  // const [isExploreOpen, setIsExploreOpen] = useState(false);
  // const [activeTab, setActiveTab] = useState("featured");
  const router = useRouter();

  const topMeals = [
    {
      id: "grilledFishDiet",
      title: "Lean Grilled Fish Meal",
      description:
        "Perfectly grilled fish with steamed vegetables, rich in Omega-3 and protein.",
      calories: 380,
      preparationTime: "Pre-book: Before One Day",
      rating: 4.9,
      reviewCount: 150,
      macros: { protein: 42, carbs: 15, fat: 10 },
      image: grilled_fish,
      tags: ["High Protein", "Low Carb", "Omega-3"],
      bestFor: "Muscle Recovery & Weight Loss",
    },
    {
      id: "garlicPrawnDiet",
      title: "Garlic Herb Prawn Meal",
      description:
        "Sautéed prawns in light garlic herb sauce with quinoa and greens.",
      calories: 400,
      preparationTime: "Pre-book: Before One Day",
      rating: 4.8,
      reviewCount: 110,
      macros: { protein: 38, carbs: 20, fat: 12 },
      image: garlic_herb_prawns,
      tags: ["Lean Protein", "Low Fat", "Seafood"],
      bestFor: "Lean Muscle Growth & Energy Boost",
    },
    {
      id: "countryChickenDiet",
      title: "Country Chicken Bowl",
      description:
        "Slow-cooked country chicken with millets and fiber-rich vegetables.",
      calories: 450,
      preparationTime: "Pre-book: Before One Day",
      rating: 4.7,
      reviewCount: 95,
      macros: { protein: 45, carbs: 30, fat: 15 },
      image: country_chicken,
      tags: ["High Protein", "Balanced Diet", "Gut Health"],
      bestFor: "Strength & Immunity Boost",
    },
  ];

  const benefits = [
    {
      icon: <Utensils className="w-6 h-6" />,
      title: "Custom Prepared",
      description:
        "Every meal tailored to your specific nutritional needs and preferences",
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Health Focused",
      description:
        "Scientifically balanced nutrition supporting your wellness journey",
    },
    {
      icon: <UserCheck className="w-6 h-6" />,
      title: "Expert Designed",
      description: "Crafted by certified nutritionists and professional chefs",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Fresh & Timely",
      description: "Made fresh daily and delivered according to your schedule",
    },
    {
      icon: <Leaf className="w-6 h-6" />,
      title: "Quality Ingredients",
      description: "Premium, locally-sourced ingredients for optimal nutrition",
    },
    {
      icon: <Scale className="w-6 h-6" />,
      title: "Portion Control",
      description: "Precisely measured portions to meet your goals",
    },
  ];

  return (
    <section id="kitchen" className="py-20 ">
      <div className="container mx-auto px-4">
        {/* Enhanced Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-6">
            <ChefHat className="w-10 h-10 text-primary" />
          </div>
          <h2 className="text-3xl font-bold mb-6 ">HopeFit Wellness Kitchen</h2>
          <p className="text-s  max-w-3xl mx-auto mb-10 leading-relaxed">
            Experience the perfect fusion of science and culinary artistry at
            HopeFit Wellness. Our in-house kitchen crafts personalized meals
            that not only tantalize your taste buds but fuel your fitness
            journey with precision.
          </p>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto overflow-hidden">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="p-6 bg-purple-100 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 dark:bg-gray-900"
              >
                <div className="flex items-center gap-4">
                  <div className="bg-purple-50  flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full   text-purple-600">
                    {benefit.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-1">
                      {benefit.title}
                    </h3>
                    <p className="text-sm">{benefit.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Featured Meals Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Featured Meal Plans</h3>
            <p className=" max-w-2xl mx-auto">
              Discover our chef-crafted meal plans, each designed to support
              different fitness goals while delivering exceptional taste and
              nutrition.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 overflow-hidden py-9 px-4">
            {topMeals.map((meal) => (
              <Link href={`/kitchen/${meal.id}`}>
                <div
                  key={meal.id}
                  className="rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl dark:shadow-[0px_4px_12px_rgba(102,126,234,0.4)] relative group"
                >
                  <div className="relative h-48 w-full">
                    <Image
                      src={meal.image.src}
                      alt={meal.title}
                      layout="fill"
                      objectFit="cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-4 left-4 text-white">
                        <p className="font-medium">Best For:</p>
                        <p className="text-sm">{meal.bestFor}</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-semibold flex-1">
                        {meal.title}
                      </h3>
                      <span className="flex items-center gap-1 text-sm  px-3 py-1 rounded-full">
                        <Clock className="w-4 h-4" />
                        {meal.preparationTime}
                      </span>
                    </div>

                    <p className="  mb-4">{meal.description}</p>

                    <div className="flex items-center gap-2 mb-4">
                      <div className="flex items-center gap-1">
                        <span className="text-yellow-400">★</span>
                        <span className="font-medium">{meal.rating}</span>
                      </div>
                      <span className="">|</span>
                      <span className="text-sm ">
                        {meal.reviewCount} reviews
                      </span>
                    </div>

                    <div className="grid grid-cols-3 text-center bg-purple-100 rounded-lg p-4 dark:bg-gray-900">
                      <div className="border-r border-gray-200">
                        <span className="font-bold block text-lg">
                          {meal.macros.protein}g
                        </span>
                        <span className="text-xs ">Protein</span>
                      </div>
                      <div className="border-r border-gray-200">
                        <span className="font-bold block text-lg">
                          {meal.macros.carbs}g
                        </span>
                        <span className="text-xs ">Carbs</span>
                      </div>
                      <div>
                        <span className="font-bold block text-lg">
                          {meal.macros.fat}g
                        </span>
                        <span className="text-xs ">Fat</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="w-fit  py-3 flex items-center justify-center gap-2  transition-colors group">
                      Learn More
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
