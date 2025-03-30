"use client";
import React, { useState } from "react";
import Link from "next/link";
import {
  ChevronRight,
  Target,
  Dumbbell,
  ShieldCheck,
  Shirt,
  Zap,
} from "lucide-react";
import Image from "next/image";
import menimage from "../images/image copy 8.png";
// import womenimage from "../images/image copy 7.png";
import womenModle from "../images/femalemodel.jpeg";
import AnimatedCTAButton from "./AnimatedCTAButton";

import menmodle from "../images/menmodel.jpeg";

export default function FitnessWearShowcase() {
  const [activeCategory, setActiveCategory] = useState("Women");

  const fitnessWearCollections = {
    Women: {
      title: "Women's Performance Wear",
      description:
        "Elevate your fitness journey with precision-engineered gear designed for comfort and performance.",
      heroImage: womenModle,
      highlights: [
        { icon: Target, text: "Precision-Engineered Fit" },
        { icon: Dumbbell, text: "Maximum Performance Support" },
        { icon: ShieldCheck, text: "Advanced Moisture-Wicking" },
      ],
      sections: [
        {
          category: "Training Essentials",
          items: [
            {
              name: "High-Performance Leggings",
              href: "/collections/women-leggings",
            },
            { name: "Sports Bras", href: "/collections/women-sports-bras" },
            {
              name: "Compression Tops",
              href: "/collections/women-compression-tops",
            },
            { name: "Workout Jackets", href: "/collections/women-jackets" },
          ],
        },
        {
          category: "Accessories",
          items: [
            { name: "Fitness Headbands", href: "/collections/women-headbands" },
            { name: "Lightweight Gloves", href: "/collections/women-gloves" },
            { name: "Water Bottles", href: "/collections/women-water-bottles" },
            { name: "Gym Bags", href: "/collections/women-gym-bags" },
          ],
        },
      ],
    },
    Men: {
      title: "Men's Athletic Gear",
      description:
        "Unleash your potential with cutting-edge fitness wear engineered for peak performance.",
      heroImage: menmodle,
      highlights: [
        { icon: Zap, text: "High-Intensity Performance" },
        { icon: Shirt, text: "Advanced Muscle Support" },
        { icon: ShieldCheck, text: "Durability Guaranteed" },
      ],
      sections: [
        {
          category: "Training Essentials",
          items: [
            { name: "Performance Shorts", href: "/collections/men-shorts" },
            {
              name: "Compression Shirts",
              href: "/collections/men-compression-shirts",
            },
            { name: "Workout Tanks", href: "/collections/men-tanks" },
            { name: "Training Hoodies", href: "/collections/men-hoodies" },
          ],
        },
        {
          category: "Accessories",
          items: [
            {
              name: "Weightlifting Gloves",
              href: "/collections/men-weightlifting-gloves",
            },
            {
              name: "Fitness Trackers",
              href: "/collections/men-fitness-trackers",
            },
            {
              name: "Protein Shakers",
              href: "/collections/men-protein-shakers",
            },
            { name: "Gym Backpacks", href: "/collections/men-gym-backpacks" },
          ],
        },
      ],
    },
  };

  const currentCollection = fitnessWearCollections[activeCategory];

  return (
    // <section id="fitness-wear" className="py-16 bg-gradient-to-br from-gray-50 to-gray-100">
    <section id="shop" className="py-16 mt-12 ">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12  ">
          <div className="inline-flex items-center justify-center p-2 bg-rose-100 rounded-full mb-6 shadow-sm border border-rose-200">
            <Shirt className="w-8 h-8 text-rose-600" />
          </div>
          <h2 className="text-4xl font-bold  mb-4">Fitness Wear Collection</h2>
          <p className="text-xl ">Gear Up, Stand Out, Perform Beyond Limits</p>
        </div>

        {/* Category Selector */}
        <div className="flex justify-center mb-12 space-x-4">
          {["Women", "Men"].map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-8 py-3 rounded-full text-lg font-semibold transition duration-300 shadow-md ${
                activeCategory === category
                  ? "  text-purple-600"
                  : "  text-gray-700 hover:bg-gray-100"
              }`}
            >
              {category}'s Wear
            </button>
          ))}
        </div>

        {/* Main Content Area */}
        <div className="grid md:grid-cols-2 gap-10 items-stretch">
          {/* Left Side - Hero Image and Highlights */}
          <div className="  rounded-2xl shadow-xl overflow-hidden flex flex-col">
            <div className="relative w-full h-96">
              <Image
                src={currentCollection.heroImage.src}
                alt={`${activeCategory} Fitness Wear`}
                fill
                className="object-cover object-top"
              />
            </div>
            <div className="p-8 flex-grow">
              <h3 className="text-3xl font-bold   mb-4">
                {currentCollection.title}
              </h3>
              <p className="  mb-6">{currentCollection.description}</p>
              <div className="grid grid-cols-3 gap-4">
                {currentCollection.highlights.map((highlight, index) => (
                  <div
                    key={index}
                    className="text-center  bg-purple-100 rounded-md py-4 px-2 dark:bg-gray-900"
                  >
                    <div className="mx-auto mb-3 w-16 h-16 bg-purple-50 rounded-full flex items-center justify-center  text-purple-600">
                      <highlight.icon className="w-8 h-8 " />
                    </div>
                    <p className="text-sm   font-medium">{highlight.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - Collections */}
          <div className="space-y-6">
            {currentCollection.sections.map((section, sectionIndex) => (
              <div key={sectionIndex} className="  rounded-2xl shadow-lg p-8">
                <h4 className="text-2xl font-bold   mb-6 border-b pb-3  ">
                  {section.category}
                </h4>
                <div className="grid grid-cols-2 gap-4">
                  {section.items.map((item, itemIndex) => (
                    <Link key={itemIndex} href={item.href} className="group">
                      <div className="flex items-center text-blue-600 hover:text-blue-800 transition">
                        <span className="mr-2 group-hover:translate-x-1 transition">
                          {item.name}
                        </span>
                        <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition" />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
            {/* <div>
              <AnimatedCTAButton
                showModal={true}
                sectionName="Fitness Consultation"
                className="bg-purple-500 hover:bg-purple-600" // Custom styling
                size="lg"
              >
                Get Your Personalized Workout Plan
              </AnimatedCTAButton>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
