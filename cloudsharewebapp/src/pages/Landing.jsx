import HeroSection from "../components/landing/HeroSection";
import FeaturesSection from "../components/landing/FeaturesSection";
import PricingSection from "../components/landing/PricingSection";
import TestimonialsSection from "../components/landing/TestimonialsSection";
import CTASection from "../components/landing/CTASection";
import Footer from "../components/landing/Footer";
import { features, pricingPlans,testimonials } from "../assets/data";
import { useClerk } from "@clerk/clerk-react";
import { useUser } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";

const Landing = () => {
 const{openSignIn, openSignUp} =useClerk();
const{isSignedIn}= useUser();
const navigate = useNavigate();
  return (
    <div className="landing-page bg-gradient-to-b from-gray-50 to-gray-100">
      <HeroSection  openSignIn={openSignIn} openSignUp={openSignUp}/>
      <FeaturesSection  features={features}/>
      <PricingSection  pricingPlans={pricingPlans}/>
      <TestimonialsSection  testimonials={testimonials}/>
      <CTASection />
      <Footer />
    </div>
  );
};

export default Landing;