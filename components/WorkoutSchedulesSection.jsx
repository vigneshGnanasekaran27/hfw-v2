import React from "react";
import { Dumbbell, Heart, Clock, Zap, ArrowRight, UserPen } from "lucide-react";
import AnimatedCTAButton from "./AnimatedCTAButton";

const WorkoutSchedulesSection = () => {
  const workoutPrograms = [
    {
      id: "beginner",
      title: "Beginner Fitness",
      icon: <Heart className="w-8 h-8 text-green-500" />,
      duration: "4 weeks",
      sessionsPerWeek: 3,
      description: "Perfect for those starting their fitness journey",
      features: [
        "Basic strength training",
        "Cardio fundamentals",
        "Proper form guidance",
        "Flexibility work",
      ],
    },
    {
      id: "strength",
      title: "Strength & Power",
      icon: <Dumbbell className="w-8 h-8 text-blue-500" />,
      duration: "8 weeks",
      sessionsPerWeek: 4,
      description: "Build muscle and increase strength",
      features: [
        "Progressive overload",
        "Compound exercises",
        "Recovery protocols",
        "Nutrition guidance",
      ],
    },
    {
      id: "hiit",
      title: "HIIT & Conditioning",
      icon: <Zap className="w-8 h-8 text-red-500" />,
      duration: "6 weeks",
      sessionsPerWeek: 5,
      description: "Boost endurance and burn fat",
      features: [
        "Interval training",
        "Metabolic conditioning",
        "Circuit workouts",
        "Active recovery",
      ],
    },
  ];

  return (
    <div id="schedule" className="py-16 mt-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-2 bg-indigo-100 rounded-full mb-6 shadow-sm border border-indigo-200">
            <UserPen className="w-8 h-8 text-indigo-600" />
          </div>
          <div className="">
            <h2 className="text-4xl font-bold mb-4">
              Personalized Workout Plans
            </h2>
            <p className="text-xl max-w-2xl mx-auto">
              Expert-designed programs to achieve your fitness goals, with clear
              instructions and video guides
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {workoutPrograms.map((program) => (
            <div
              key={program.id}
              className="  rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 dark:shadow-[0px_4px_12px_rgba(102,126,234,0.4)]"
            >
              <div className="flex items-center justify-between mb-6">
                <div>{program.icon}</div>
                <div className="flex items-center text-sm ">
                  <Clock className="w-4 h-4 mr-1" />
                  {program.duration} • {program.sessionsPerWeek}x/week
                </div>
              </div>

              <h3 className="text-2xl font-semibold mb-3">{program.title}</h3>
              <p className=" mb-6">{program.description}</p>

              <div className="space-y-3 mb-6">
                {program.features.map((feature, index) => (
                  <div key={index} className="flex items-center text-sm ">
                    <ArrowRight className="w-4 h-4 mr-2 text-purple-500" />
                    {feature}
                  </div>
                ))}
              </div>

              <button className="w-fit  border-2 border-purple-600 text-purple-600 py-2 px-2 rounded-lg hover:bg-purple-100 transition-colors duration-300 flex items-center justify-center">
                View Program Details
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center ">
          <div className=" rounded-xl p-8 text-center shadow-lg w-fit">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-3xl font-bold mb-4">
                Get Your Custom Program
              </h3>
              <p className="text-xl  mb-6">
                Follow our plans independently or add professional guidance from
                our trainers - the choice is yours
              </p>
              <div className="flex items-center justify-center gap-6">
                <button className="bg-purple-50 text-purple-600 px-6 py-3 rounded-lg hover:bg-purple-100 transition-colors duration-300 flex items-center">
                  Browse All Programs
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
                {/* <AnimatedCTAButton
                  showModal={true}
                  sectionName="Custom Program Consultation"
                  className="bg-purple-500 hover:bg-purple-600"
                  size="lg"
                >
                  Get Started
                </AnimatedCTAButton> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkoutSchedulesSection;
