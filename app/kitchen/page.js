"use client";
import React, { useState, useMemo } from "react";
import { ChefHat, Clock, Search, Filter, X } from "lucide-react";

export default function KitchenPage() {
  const [activeTab, setActiveTab] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [showFilters, setShowFilters] = useState(false);

  const meals = {
    breakfast: [
      {
        id: "protein-oats",
        title: "Protein-Packed Oatmeal",
        description: "Steel-cut oats with protein powder and mixed berries",
        calories: 350,
        preparationTime: "10 mins",
        rating: 4.8,
        reviewCount: 156,
        macros: { protein: 24, carbs: 45, fat: 8 },
        image: "/api/placeholder/400/300",
        tags: ["High Protein", "Vegetarian"],
        category: "vegetarian",
      },
      {
        id: "avocado-toast",
        title: "Avocado Toast",
        description: "Sourdough toast with mashed avocado and poached eggs",
        calories: 380,
        preparationTime: "15 mins",
        rating: 4.7,
        reviewCount: 142,
        macros: { protein: 18, carbs: 35, fat: 22 },
        image: "/api/placeholder/400/300",
        tags: ["Vegetarian", "Healthy Fats"],
        category: "vegetarian",
      },
      {
        id: "vegan-smoothie-bowl",
        title: "Vegan Smoothie Bowl",
        description: "Açai blend topped with fresh fruits and granola",
        calories: 320,
        preparationTime: "12 mins",
        rating: 4.9,
        reviewCount: 168,
        macros: { protein: 12, carbs: 48, fat: 14 },
        image: "/api/placeholder/400/300",
        tags: ["Vegan", "Antioxidants"],
        category: "vegan",
      },
    ],
    lunch: [
      {
        id: "power-bowl",
        title: "Chicken Power Bowl",
        description: "Quinoa bowl with grilled chicken and roasted vegetables",
        calories: 450,
        preparationTime: "25 mins",
        rating: 4.9,
        reviewCount: 128,
        macros: { protein: 35, carbs: 30, fat: 15 },
        image: "/api/placeholder/400/300",
        tags: ["High Protein", "Balanced"],
        category: "non-vegetarian",
      },
      {
        id: "tofu-stir-fry",
        title: "Tofu Vegetable Stir-Fry",
        description: "Crispy tofu with seasonal vegetables in teriyaki sauce",
        calories: 380,
        preparationTime: "20 mins",
        rating: 4.6,
        reviewCount: 92,
        macros: { protein: 22, carbs: 45, fat: 16 },
        image: "/api/placeholder/400/300",
        tags: ["Vegan", "High Protein"],
        category: "vegan",
      },
    ],
    dinner: [
      {
        id: "salmon-plate",
        title: "Baked Salmon Plate",
        description: "Wild-caught salmon with sweet potato and asparagus",
        calories: 480,
        preparationTime: "30 mins",
        rating: 4.9,
        reviewCount: 142,
        macros: { protein: 42, carbs: 25, fat: 22 },
        image: "/api/placeholder/400/300",
        tags: ["Omega-3", "High Protein"],
        category: "non-vegetarian",
      },
      {
        id: "vegan-curry",
        title: "Chickpea Curry",
        description: "Spiced chickpeas in coconut curry with brown rice",
        calories: 420,
        preparationTime: "25 mins",
        rating: 4.8,
        reviewCount: 112,
        macros: { protein: 18, carbs: 62, fat: 14 },
        image: "/api/placeholder/400/300",
        tags: ["Vegan", "Plant Protein"],
        category: "vegan",
      },
    ],
    snacks: [
      {
        id: "protein-smoothie",
        title: "Berry Protein Smoothie",
        description: "Mixed berries, protein powder, and almond milk blend",
        calories: 220,
        preparationTime: "5 mins",
        rating: 4.7,
        reviewCount: 98,
        macros: { protein: 20, carbs: 25, fat: 5 },
        image: "/api/placeholder/400/300",
        tags: ["Quick", "Pre-workout"],
        category: "vegetarian",
      },
    ],
  };

  // Get all meals in a flat array
  const allMeals = useMemo(() => {
    return Object.values(meals).flat();
  }, []);

  // Filter meals based on search query, category, and meal time
  const filteredMeals = useMemo(() => {
    let filtered = activeTab === "all" ? allMeals : meals[activeTab];

    // Filter by category
    if (selectedCategory !== "all") {
      filtered = filtered.filter((meal) => meal.category === selectedCategory);
    }

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (meal) =>
          meal.title.toLowerCase().includes(query) ||
          meal.description.toLowerCase().includes(query) ||
          meal.tags.some((tag) => tag.toLowerCase().includes(query))
      );
    }

    return filtered;
  }, [activeTab, selectedCategory, searchQuery, allMeals]);

  const MealCard = ({ meal }) => (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105">
      <div className="relative h-48 w-full">
        <img
          src={meal.image}
          alt={meal.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 right-4 bg-white/90 px-3 py-1 rounded-full text-sm font-medium">
          {meal.calories} cal
        </div>
        <div
          className={`absolute top-4 left-4 px-3 py-1 rounded-full text-sm font-medium ${
            meal.category === "vegan"
              ? "bg-green-100 text-green-700"
              : meal.category === "vegetarian"
              ? "bg-yellow-100 text-yellow-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {meal.category.charAt(0).toUpperCase() + meal.category.slice(1)}
        </div>
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-semibold">{meal.title}</h3>
          <span className="flex items-center gap-1 text-sm bg-purple-100 text-purple-600 px-3 py-1 rounded-full">
            <Clock className="w-4 h-4" />
            {meal.preparationTime}
          </span>
        </div>

        <p className="text-gray-600 mb-4">{meal.description}</p>

        <div className="flex gap-2 mb-4 flex-wrap">
          {meal.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs bg-gray-100 px-2 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="grid grid-cols-3 text-center bg-gray-50 rounded-lg p-4">
          <div className="border-r border-gray-200">
            <span className="font-bold block text-lg">
              {meal.macros.protein}g
            </span>
            <span className="text-xs text-gray-500">Protein</span>
          </div>
          <div className="border-r border-gray-200">
            <span className="font-bold block text-lg">
              {meal.macros.carbs}g
            </span>
            <span className="text-xs text-gray-500">Carbs</span>
          </div>
          <div>
            <span className="font-bold block text-lg">{meal.macros.fat}g</span>
            <span className="text-xs text-gray-500">Fat</span>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-purple-50 to-transparent pt-24 pb-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center mb-6">
            <ChefHat className="w-12 h-12 text-purple-600" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
            HopeFit Kitchen Menu
          </h1>
          <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto">
            Discover our chef-crafted meals, designed to fuel your fitness
            journey with precision nutrition and exceptional taste.
          </p>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row gap-4 mb-6 justify-center items-center">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search meals..."
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <button
              className={`flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 ${
                showFilters ? "bg-purple-50 border-purple-200" : ""
              }`}
              onClick={() => setShowFilters(!showFilters)}
            >
              {showFilters ? (
                <X className="w-5 h-5" />
              ) : (
                <Filter className="w-5 h-5" />
              )}
              {showFilters ? "Close Filters" : "Filters"}
            </button>
          </div>
        </div>

        {/* Filter Options */}
        {showFilters && (
          <div className="bg-white p-4 rounded-lg shadow-sm mb-6">
            <h3 className="font-medium mb-3">Dietary Preferences</h3>
            <div className="flex flex-wrap gap-2">
              {["all", "vegan", "vegetarian", "non-vegetarian", "custom"].map(
                (category) => (
                  <button
                    key={category}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                      selectedCategory === category
                        ? "bg-purple-600 text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category === "all"
                      ? "All Meals"
                      : category.charAt(0).toUpperCase() + category.slice(1)}
                  </button>
                )
              )}
            </div>
          </div>
        )}

        {/* Tabs Section */}
        <div className="mb-8">
          <div className="flex justify-center space-x-2 border-b border-gray-200 overflow-x-auto">
            {["all", ...Object.keys(meals)].map((tab) => (
              <button
                key={tab}
                className={`px-4 py-2 font-medium text-sm transition-colors duration-200 whitespace-nowrap ${
                  activeTab === tab
                    ? "text-purple-600 border-b-2 border-purple-600"
                    : "text-gray-600 hover:text-purple-600"
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab === "all"
                  ? "All Meals"
                  : tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6 text-gray-600">
          Showing {filteredMeals.length}{" "}
          {filteredMeals.length === 1 ? "meal" : "meals"}
        </div>

        {/* Meals Grid */}
        {filteredMeals.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredMeals.map((meal) => (
              <MealCard key={meal.id} meal={meal} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              No meals found matching your criteria
            </p>
            <button
              className="mt-4 text-purple-600 hover:text-purple-700"
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("all");
                setActiveTab("all");
              }}
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
