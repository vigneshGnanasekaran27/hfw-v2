import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Users,
  PersonStanding,
  Globe,
  Target,
  Clock,
  Calendar,
  CheckCircle2,
  Trophy,
  Flame,
  Activity,
} from "lucide-react";
import AnimatedCTAButton from "./AnimatedCTAButton";
import copyimage from "../images/image copy 2.png";

const TrainingTypesSection = () => {
  const trainingTypes = [
    {
      id: "group-training",
      title: "Group Training",
      description:
        "Experience the energy of group fitness with expert guidance and peer motivation",
      image: copyimage,
      alt: "Group fitness class with multiple participants",
      icon: <Users className="w-6 h-6" />,
      benefits: [
        "Motivating group environment",
        "Cost-effective training options",
        "Structured workout programs",
        "Community support system",
      ],
      stats: {
        sessionsPerWeek: 5,
        maxGroupSize: 12,
        successRate: "92%",
      },
      popular: true,
    },
    {
      id: "one-on-one-training",
      title: "One-on-One Training",
      description:
        "Get personalized attention and customized programs with our expert trainers",
      image: copyimage,
      alt: "Personal trainer working with client",
      icon: <PersonStanding className="w-6 h-6" />,
      benefits: [
        "Personalized attention & feedback",
        "Custom workout plans",
        "Flexible scheduling options",
        "Progress tracking & adjustments",
      ],
      stats: {
        sessionsPerWeek: 3,
        programLength: "12 weeks",
        successRate: "95%",
      },
      featured: true,
    },
    {
      id: "online-training",
      title: "Online Training",
      description:
        "Access professional guidance and workout plans from anywhere, anytime",
      image: copyimage,
      alt: "Person doing online fitness training",
      icon: <Globe className="w-6 h-6" />,
      benefits: [
        "Train from any location",
        "24/7 workout access",
        "Digital progress tracking",
        "On-demand expert support",
      ],
      stats: {
        availability: "24/7",
        programs: "15+",
        successRate: "88%",
      },
    },
  ];

  const features = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Goal-Focused",
      description: "Customized approaches for your specific fitness objectives",
    },
    {
      icon: <Trophy className="w-6 h-6" />,
      title: "Expert Trainers",
      description: "Certified professionals with proven track records",
    },
    {
      icon: <Activity className="w-6 h-6" />,
      title: "Progress Tracking",
      description: "Regular assessments and adjustments for optimal results",
    },
    {
      icon: <Flame className="w-6 h-6" />,
      title: "Proven Results",
      description: "90%+ success rate across all training programs",
    },
  ];

  return (
    <section id="training" className="py-20 mt-12">
      <div className="container mx-auto px-4">
        {/* Enhanced Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-6">
            <Activity className="w-10 h-10 text-primary" />
          </div>
          <h2 className="text-5xl font-bold mb-6 ">
            Transform Your Fitness Journey
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
            Choose from our diverse range of training programs, each designed to
            deliver exceptional results while fitting perfectly into your
            lifestyle.
          </p>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto overflow-hidden">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="font-semibold text-lg mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Training Types Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16 overflow-hidden">
          {trainingTypes.map((type) => (
            <div
              key={type.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <div className="relative h-48 w-full group">
                <Image
                  src={type.image}
                  alt={type.alt}
                  layout="fill"
                  objectFit="cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute top-4 left-4 bg-white/90 rounded-full p-2">
                    {type.icon}
                  </div>
                  {type.popular && (
                    <div className="absolute top-4 right-4 bg-primary text-white text-sm px-3 py-1 rounded-full">
                      Most Popular
                    </div>
                  )}
                  {type.featured && (
                    <div className="absolute top-4 right-4 bg-yellow-400 text-white text-sm px-3 py-1 rounded-full">
                      Featured
                    </div>
                  )}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-3 flex items-center gap-2">
                  {type.title}
                </h3>
                <p className="text-gray-600 mb-4">{type.description}</p>

                <div className="space-y-3 mb-6">
                  {type.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">{benefit}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-gray-50 rounded-lg p-4 mb-6">
                  <div className="grid grid-cols-2 gap-4">
                    {Object.entries(type.stats).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className="font-bold text-lg">{value}</div>
                        <div className="text-xs text-gray-500 capitalize">
                          {key.replace(/([A-Z])/g, " $1").trim()}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <Link href={`/training/${type.id}`}>
                  <div className="w-full bg-primary text-white py-3 px-6 rounded-lg flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors group">
                    Learn More
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Call to Action */}
        <div className="text-center bg-gradient-to-r from-primary/5 to-primary/10 py-16 px-6 rounded-3xl">
          <h3 className="text-3xl font-bold mb-6">
            Ready to Begin Your Transformation?
          </h3>
          <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
            Join HopeFit Wellness today and experience the perfect training
            program for your goals. Our expert team is ready to guide you on
            your fitness journey.
          </p>
          <AnimatedCTAButton
            showModal={true}
            sectionName="Training Consultation"
            className="bg-primary hover:bg-primary/90 group"
            size="lg"
          >
            <span className="flex items-center gap-2">
              Start Your Fitness Journey
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </span>
          </AnimatedCTAButton>
        </div>
      </div>
    </section>
  );
};

export default TrainingTypesSection;
