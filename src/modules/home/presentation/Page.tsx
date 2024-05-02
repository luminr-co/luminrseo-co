import { Footer } from "../../../core/presentation/components/Footer";
import { BenefitSection } from "./components/BenefitsSection";
import { HeroSection } from "./components/HeroSection";
import { ServiceSection } from "./components/ServicesSection";
import { TestimonialSection } from "./components/TestimonialSection";
import { WorkSection } from "./components/WorkSection";
import { FAQSection } from "./components/FAQSection";
import { PricingSection } from "./components/PricingSection";
import { CalendarSection } from "./components/CalendarSection";

export default function HomePage() {
  return (
    <div className="bg-black">
      <HeroSection />
      <ServiceSection />
      <BenefitSection />
      <WorkSection />
      <TestimonialSection />
      <PricingSection />
      <FAQSection />
      <CalendarSection />
      <Footer />
    </div>
  );
}
