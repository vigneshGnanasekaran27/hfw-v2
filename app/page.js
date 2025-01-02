import Navigation from "../components/Navigation";
import SlidingBanner from "../components/SlidingBanner";
import FoodSection from "../components/FoodSection";
import TrainingSection from "../components/TrainingSection";
import ShopSection from "../components/ShopSection";
import WorkshopSection from "../components/WorkshopSection";
import EventSection from "../components/EventSection";
import BlogSection from "../components/BlogSection";
import TestimonialSection from "../components/TestimonialSection";
import Footer from "../components/Footer";
import ContactUs from "../components/ContactUs";
import Team from "../components/Team";
import AboutUs from "@/components/AboutUs";
import FAQSection from "@/components/FAQSection";
import FitnessCalculator from "@/components/FitnessCalculator";
import CTAPopup from "@/components/CTAPopup";
import NutritionConsultation from "../components/NutritionConsultation";
import WorkoutSchedulesSection from "@/components/WorkoutSchedulesSection";
import TrainingTypesSection from "@/components/TrainingTypesSection";
export default function Home() {
  const offers = [
    "20% off first purchase",
    "Free shipping on orders over $50",
    "Buy one, get one 50% off",
  ];

  return (
    <>
      <Navigation />
      <SlidingBanner />
      <FoodSection />
      <NutritionConsultation />
      {/* <TrainingSection /> */}
      <TrainingTypesSection />
      <WorkoutSchedulesSection />
      <ShopSection />
      <WorkshopSection />
      <EventSection />
      <BlogSection />
      <FitnessCalculator />
      <TestimonialSection />
      <Team />
      <AboutUs />
      <ContactUs />
      <FAQSection />
      <CTAPopup offers={offers} />
      <Footer />
    </>
  );
}
