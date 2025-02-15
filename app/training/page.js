"use client";
import React, { useEffect, Suspense, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import {
  ArrowRight,
  Clock,
  Users,
  CheckCircle,
  MapPin,
  Check,
} from "lucide-react";
const trainingData = {
  online: {
    categories: [
      {
        id: "one-on-one",
        title: "One-on-One Training",
        description:
          "Personalized training sessions tailored to your specific needs",
        programs: [
          {
            id: "one-on-one-hybrid",
            title: "Hybrid Program",
            description: "Combine live sessions with guided workouts",
            image: "/training/one-on-one-hybrid.jpg",
            fullDescription:
              "Get the best of both worlds with our hybrid training program. Combine live personal training sessions with guided workout plans for maximum flexibility and results.",
            benefits: [
              "Two live personal training sessions per week",
              "Customized workout plans for non-live days",
              "Flexible scheduling options",
              "Regular progress tracking",
              "Nutrition guidance",
            ],
            features: [
              "Personal attention from certified trainers",
              "Workout plans tailored to your goals",
              "Progress tracking through our app",
              "Regular form corrections and adjustments",
              "24/7 chat support",
            ],
            schedule_details: {
              duration: "12 weeks recommended",
              frequency: "2 live sessions/week + guided workouts",
              availability: "Morning and evening slots",
              timings: "6 AM - 9 PM (flexible scheduling)",
            },
            ideal_for: [
              "Busy professionals seeking flexibility",
              "Those new to fitness requiring guidance",
              "People who prefer a mix of supervised and independent workouts",
              "Those with varying weekly schedules",
            ],
          },
          {
            id: "one-on-one-live",
            title: "One-on-One Live Training",
            description: "Fully supervised daily personal training sessions",
            mode: "online",
            image: "/training/one-on-one-live.jpg",
            fullDescription:
              "Experience the ultimate in personal attention with daily live training sessions. Perfect for those seeking maximum guidance and accountability.",
            benefits: [
              "Daily live personal training sessions",
              "Maximum accountability and support",
              "Real-time form correction",
              "Personalized program adjustments",
              "Comprehensive progress tracking",
            ],
            features: [
              "Five live sessions per week",
              "Advanced progress tracking",
              "Nutrition planning included",
              "Monthly assessments",
              "Priority support",
            ],
            schedule_details: {
              duration: "12 weeks recommended",
              frequency: "5 live sessions/week",
              availability: "Morning and evening slots",
              timings: "6 AM - 9 PM (scheduled)",
            },
            ideal_for: [
              "Those seeking maximum guidance",
              "People with specific fitness goals",
              "Individuals who thrive with accountability",
              "Those who prefer structured workouts",
            ],
          },
        ],
      },
      {
        id: "group",
        title: "Group Training",
        description:
          "Join our energetic group sessions for motivation and results",
        programs: [
          {
            id: "group-fat-loss",
            title: "Group Fat Loss Program",
            description: "High-energy group sessions focused on fat loss",
            mode: "online",
            image: "/training/group-fat-loss.jpg",
            fullDescription:
              "Join our energetic group sessions designed specifically for fat loss. Get motivated by others while following our proven fat loss protocols.",
            benefits: [
              "Daily group training sessions",
              "Community support and motivation",
              "Structured fat loss program",
              "Regular challenges and goals",
              "Group accountability",
            ],
            features: [
              "Five live sessions per week",
              "Fat loss specific exercises",
              "Group challenges",
              "Progress tracking",
              "Nutrition guidelines",
            ],
            schedule_details: {
              duration: "12 weeks recommended",
              frequency: "5 live sessions/week",
              availability: "Morning and evening batches",
              timings: "6 AM - 9 PM (fixed schedules)",
            },
            ideal_for: [
              "Those with fat loss goals",
              "People who enjoy group workouts",
              "Individuals seeking community support",
              "Those motivated by group energy",
            ],
          },
          {
            id: "group-general-fitness",
            title: "Group General Fitness Program",
            description: "Comprehensive group training for overall fitness",
            mode: "online",
            image: "/training/group-fitness.jpg",
            fullDescription:
              "Build overall fitness with our balanced group training program. Perfect for those seeking to improve strength, endurance, and flexibility.",
            benefits: [
              "Balanced full-body workouts",
              "Varied exercise routines",
              "Community support",
              "Regular fitness assessments",
              "Group motivation",
            ],
            features: [
              "Five live sessions per week",
              "Multi-focus training approach",
              "Form guidance",
              "Progress tracking",
              "Basic nutrition advice",
            ],
            schedule_details: {
              duration: "12 weeks recommended",
              frequency: "5 live sessions/week",
              availability: "Morning and evening batches",
              timings: "6 AM - 9 PM (fixed schedules)",
            },
            ideal_for: [
              "Beginners to intermediate fitness enthusiasts",
              "Those seeking overall fitness improvement",
              "People who enjoy varied workouts",
              "Group workout enthusiasts",
            ],
          },
        ],
      },
    ],
  },
  offline: {
    categories: [
      {
        id: "group",
        title: "Group Training",
        description:
          "Join our energetic group sessions for motivation and results",
        programs: [
          {
            id: "group-fitness",
            title: "Group Fitness Program",
            description:
              "High-energy group sessions in our state-of-the-art facility",
            mode: "offline",
            image: "/training/group-fitness.jpg",
            fullDescription:
              "Experience the power of community-driven fitness in our group training sessions. Work with certified trainers in a motivating environment.",
            benefits: [
              "Motivation and accountability from peers",
              "Cost-effective professional training",
              "Varied workouts to prevent plateaus",
              "Social interaction and community building",
              "Friendly competition to boost performance",
            ],
            features: [
              "Small groups of 6-12 people",
              "Professional equipment provided",
              "Progress tracking and assessments",
              "Flexible schedule options",
              "Monthly fitness challenges",
            ],
            schedule_details: {
              duration: "12 weeks recommended",
              frequency: "3-5 sessions/week",
              availability: "Multiple daily sessions",
              timings: "6 AM - 8 PM (Mon-Fri), 8 AM - 2 PM (Sat-Sun)",
            },
            ideal_for: [
              "Beginners looking for guidance",
              "Social exercisers",
              "Those seeking motivation",
              "Budget-conscious fitness enthusiasts",
              "People with flexible schedules",
            ],
          },
          {
            id: "personal-training",
            title: "Personal Training",
            description: "One-on-one training sessions with expert trainers",
            mode: "offline",
            image: "/training/personal-training.jpg",
            fullDescription:
              "Get personalized attention and customized workouts with our expert personal trainers in our fully-equipped facility.",
            benefits: [
              "Customized workout programs",
              "Dedicated personal attention",
              "Expert form correction",
              "Flexible scheduling",
              "Rapid progress tracking",
            ],
            features: [
              "One-on-one sessions",
              "Full facility access",
              "Comprehensive fitness assessment",
              "Customized nutrition plans",
              "Regular progress reviews",
            ],
            schedule_details: {
              duration: "12 weeks recommended",
              frequency: "2-3 sessions/week",
              availability: "Flexible scheduling",
              timings: "6 AM - 9 PM (Mon-Sat)",
            },
            ideal_for: [
              "Those seeking personalized attention",
              "Beginners needing form guidance",
              "People with specific fitness goals",
              "Those with unique scheduling needs",
              "Individuals with special considerations",
            ],
          },
        ],
      },
      {
        id: "specialized",
        title: "Specialized Training",
        description: "Focused training programs for specific goals",
        programs: [
          {
            id: "strength-conditioning",
            title: "Strength & Conditioning",
            description: "Advanced training for strength and performance",
            mode: "offline",
            image: "/training/strength-conditioning.jpg",
            fullDescription:
              "Take your strength and conditioning to the next level with our specialized program designed for serious fitness enthusiasts.",
            benefits: [
              "Expert strength programming",
              "Performance optimization",
              "Advanced technique coaching",
              "Periodic performance testing",
              "Sport-specific conditioning",
            ],
            features: [
              "Access to specialized equipment",
              "Performance tracking system",
              "Video analysis",
              "Periodized programming",
              "Recovery protocols",
            ],
            schedule_details: {
              duration: "16 weeks recommended",
              frequency: "4-5 sessions/week",
              availability: "Morning and evening slots",
              timings: "6 AM - 8 PM (Mon-Fri)",
            },
            ideal_for: [
              "Advanced fitness enthusiasts",
              "Athletes",
              "Strength sports competitors",
              "Those seeking performance gains",
              "Dedicated fitness practitioners",
            ],
          },
        ],
      },
    ],
  },
};

const LocationBanner = () => (
  <div className="mb-8 p-6 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl text-white shadow-lg transform hover:-translate-y-1 transition-all duration-300">
    <div className="flex items-center gap-3">
      <div className="bg-white/20 p-2 rounded-lg">
        <MapPin className="h-6 w-6" />
      </div>
      <p className="text-lg font-medium">
        Available only in gated communities with gym facilities from Kelambakkam
        to Sholinganallur
      </p>
    </div>
  </div>
);

const TrainingModeSelector = ({ selectedMode, onModeChange }) => (
  <div className="flex justify-center gap-4 mb-12">
    {["offline", "online"].map((mode) => (
      <button
        key={mode}
        onClick={() => onModeChange(mode)}
        className={`
          px-8 py-3 rounded-xl font-bold text-lg transition-all duration-300
          ${
            selectedMode === mode
              ? "bg-gradient-to-r from-purple-600 to-purple-500 text-white shadow-lg scale-105"
              : "bg-white text-gray-600 hover:bg-gray-50 shadow-md"
          }
        `}
      >
        {mode.charAt(0).toUpperCase() + mode.slice(1)} Training
      </button>
    ))}
  </div>
);

const CategoryCard = ({ category, onProgramSelect }) => {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <div className="mb-16">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">
          {category.title}
        </h2>
        <p className="text-gray-600 text-lg">{category.description}</p>
      </div>

      <div className="grid grid-cols-1 gap-8">
        {category.programs.map((program) => (
          <div
            key={program.id}
            className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:-translate-y-1 transition-all duration-300"
          >
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="relative h-72 md:h-full">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                <Image
                  src={program.image}
                  alt={program.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 z-20 text-white">
                  <h3 className="text-2xl font-bold mb-2">{program.title}</h3>
                  <p className="text-white/90">{program.description}</p>
                </div>
              </div>

              <div className="p-6 space-y-6">
                <p className="text-gray-600">{program.fullDescription}</p>

                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-purple-500" />
                    <span className="font-semibold">
                      {program.schedule_details.frequency}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-purple-500" />
                    <span className="font-semibold">
                      {program.ideal_for[0]}
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => onProgramSelect(program)}
                  className="w-full bg-gradient-to-r from-purple-600 to-purple-500 text-white font-bold py-3 px-6 rounded-xl hover:from-purple-700 hover:to-purple-600 transition-all duration-300 flex items-center justify-center gap-2 group"
                >
                  View Program Details
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const ProgramDetails = ({ program, onClose, onEnroll }) => (
  <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
    <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
      <div className="relative h-64">
        <Image
          src={program.image}
          alt={program.title}
          fill
          className="object-cover"
          sizes="100vw"
        />
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors"
        >
          ✕
        </button>
      </div>

      <div className="p-6 space-y-8">
        <div>
          <h3 className="text-3xl font-bold mb-2">{program.title}</h3>
          <p className="text-gray-600">{program.fullDescription}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Benefits */}
          <div className="bg-purple-50 rounded-xl p-6">
            <div className="flex items-center gap-2 mb-4">
              <CheckCircle className="w-5 h-5 text-purple-500" />
              <h4 className="text-lg font-bold">Key Benefits</h4>
            </div>
            <ul className="space-y-3">
              {program.benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">•</span>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Schedule */}
          <div className="bg-purple-50 rounded-xl p-6">
            <div className="flex items-center gap-2 mb-4">
              <Clock className="w-5 h-5 text-purple-500" />
              <h4 className="text-lg font-bold">Schedule</h4>
            </div>
            <div className="space-y-3">
              {Object.entries(program.schedule_details).map(([key, value]) => (
                <div key={key}>
                  <span className="font-semibold capitalize">
                    {key.replace("_", " ")}:{" "}
                  </span>
                  {value}
                </div>
              ))}
            </div>
          </div>

          {/* Ideal For */}
          <div className="bg-purple-50 rounded-xl p-6">
            <div className="flex items-center gap-2 mb-4">
              <Users className="w-5 h-5 text-purple-500" />
              <h4 className="text-lg font-bold">Perfect For</h4>
            </div>
            <ul className="space-y-3">
              {program.ideal_for.map((ideal, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">•</span>
                  <span>{ideal}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <button
          onClick={() => onEnroll(program.id)}
          className="w-full bg-gradient-to-r from-purple-600 to-purple-500 text-white font-bold py-4 px-6 rounded-xl hover:from-purple-700 hover:to-purple-600 transition-all duration-300 flex items-center justify-center gap-2 group"
        >
          Start Your Journey
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  </div>
);

const EnrollmentProcess = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  const steps = [
    {
      icon: "💪",
      title: "Select Your Program",
      content: [
        "Browse training options",
        "Choose one-on-one or group",
        "Review program details",
      ],
    },
    {
      icon: "📋",
      title: "Fill Enrollment Form",
      content: [
        "Basic information",
        "Fitness background",
        "Health questionnaire",
      ],
    },
    {
      icon: "📅",
      title: "Schedule Assessment",
      content: [
        "Pick convenient time",
        "Meet your trainer",
        "Discuss your goals",
      ],
    },
    {
      icon: "🎯",
      title: "Start Your Journey",
      content: [
        "Get welcome package",
        "Access training portal",
        "Begin first session",
      ],
    },
  ];

  useEffect(() => {
    // Intersection Observer for animation on scroll
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );

    const element = document.getElementById("enrollment-process");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isAnimating && isVisible) {
      const timer = setInterval(() => {
        setCurrentStep((prev) => (prev + 1) % steps.length);
      }, 4000);
      return () => clearInterval(timer);
    }
  }, [isAnimating, isVisible, steps.length]);

  return (
    <div
      id="enrollment-process"
      className="mt-16 px-4 max-w-4xl mx-auto"
      onMouseEnter={() => setIsAnimating(false)}
      onMouseLeave={() => setIsAnimating(true)}
      role="region"
      aria-label="Enrollment Process Steps"
    >
      <h3 className="text-2xl md:text-3xl font-bold text-center mb-12">
        How to Get Started
      </h3>

      <div className="relative">
        <div className="flex flex-col md:flex-row gap-8 md:gap-4 items-stretch justify-between">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`relative flex-1 min-w-0 ${
                index === currentStep ? "z-10" : "z-0"
              }`}
              role="button"
              tabIndex={0}
              aria-label={`Step ${index + 1}: ${step.title}`}
              onClick={() => setCurrentStep(index)}
              onKeyPress={(e) => e.key === "Enter" && setCurrentStep(index)}
            >
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-gray-200">
                  <div
                    className={`h-full bg-purple-600 transition-all duration-700 ${
                      index < currentStep ? "w-full" : "w-0"
                    }`}
                  />
                </div>
              )}

              <div
                className={`bg-white rounded-xl shadow-lg transition-all duration-500 h-full
                  ${
                    index === currentStep
                      ? "scale-105 bg-purple-50 border-2 border-purple-500"
                      : index < currentStep
                      ? "opacity-75"
                      : "opacity-50"
                  }`}
              >
                <div className="p-6 sm:p-4">
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center text-2xl
                        ${
                          index <= currentStep
                            ? "bg-purple-600 text-white"
                            : "bg-gray-200"
                        }`}
                    >
                      {index < currentStep ? (
                        <Check className="w-6 h-6" />
                      ) : (
                        step.icon
                      )}
                    </div>
                    <div>
                      <div className="text-sm text-purple-600 font-semibold">
                        Step {index + 1}
                      </div>
                      <h4 className="font-bold">{step.title}</h4>
                    </div>
                  </div>

                  <div
                    className={`space-y-2 transition-all duration-300 ${
                      index === currentStep ? "opacity-100" : "opacity-70"
                    }`}
                  >
                    {step.content.map((item, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <ArrowRight className="w-4 h-4 text-purple-500" />
                        <span className="text-sm text-gray-600">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="md:hidden flex justify-center mt-8 mb-4 gap-3">
          {steps.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentStep(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentStep ? "w-8 bg-purple-600" : "w-2 bg-gray-300"
              }`}
              aria-label={`Go to step ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const TrainingContent = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const type = searchParams.get("type");
  const [trainingMode, setTrainingMode] = useState("online");
  const [selectedProgram, setSelectedProgram] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleEnroll = (trainingType) => {
    router.push(`training/join/${trainingType}`);
  };

  if (loading)
    return (
      <div className="flex items-center justify-center py-20">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-purple-500"></div>
      </div>
    );

  return (
    <div className="space-y-16">
      <EnrollmentProcess />
      <TrainingModeSelector
        selectedMode={trainingMode}
        onModeChange={setTrainingMode}
      />
      {trainingMode === "offline" && <LocationBanner />}

      {trainingMode === "online" ? (
        <div className="space-y-16">
          {trainingData.online.categories.map((category) => (
            <CategoryCard
              key={category.id}
              category={category}
              onProgramSelect={setSelectedProgram}
            />
          ))}
        </div>
      ) : (
        <div className="space-y-16">
          {trainingData.offline.categories.map((category) => (
            <CategoryCard
              key={category.id}
              category={category}
              onProgramSelect={setSelectedProgram}
            />
          ))}
        </div>
      )}

      {selectedProgram && (
        <ProgramDetails
          program={selectedProgram}
          onClose={() => setSelectedProgram(null)}
          onEnroll={handleEnroll}
        />
      )}
    </div>
  );
};

const TrainingPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-purple-500 bg-clip-text text-transparent">
            Transform Your Fitness Journey
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from our expertly crafted training programs designed to help
            you achieve your fitness goals with personalized attention and
            proven methods.
          </p>
        </div>

        <Suspense
          fallback={
            <div className="flex items-center justify-center py-20">
              <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-purple-500"></div>
            </div>
          }
        >
          <TrainingContent />
        </Suspense>
      </div>
    </div>
  );
};

export default TrainingPage;
