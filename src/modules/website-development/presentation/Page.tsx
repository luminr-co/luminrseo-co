import { Footer } from "../../../core/presentation/components/Footer";
import { PricingSectionWeb } from "./components/PricingSection";
import { BenefitSection } from "./components/BenefitSection";
import { HeroSection } from "./components/HeroSection";
import { ProcessSection } from "./components/ProcessSection";
import { TestimonialSection } from "./components/TestimonialSection";
import { WorkSection } from "./components/WorkSection";
import { FAQSection } from "./components/FAQSection";
import { CalendarSection } from "./components/CalendarSection";
import { SmoothScroll } from "@/core/presentation/components/SmoothScroll";

export default function WebsitePage() {
  return (
    <div className="bg-black max-w-full">
      <HeroSection />
      <WorkSection />
      <BenefitSection />
      <ProcessSection />
      <TestimonialSection />
      <PricingSectionWeb />
      <FAQSection />
      <CalendarSection />
      <Footer />
    </div>
  );
}
