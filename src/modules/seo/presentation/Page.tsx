import { Footer } from "../../../core/presentation/components/Footer";
import { PricingSectionSeo } from "./components/PricingSection";
import { BenefitSection } from "./components/BenefitSection";
import { HeroSection } from "./components/HeroSection";
import { ProcessSection } from "./components/ProcessSection";
import ResultsSection from "./components/ResultsSection/ResultsSection";
import { Testimonials } from "./components/Testimonials";
import { GuaranteeSection } from "./components/GuaranteeSection";
import { FAQSection } from "./components/FAQSection";
import { CalendarSection } from "./components/CalendarSection";

export default function SeoPage() {
  return (
    <>
      <div className="bg-black">
        <HeroSection />
        <ResultsSection />
        <BenefitSection />
        <ProcessSection />
        <Testimonials />
        <PricingSectionSeo />
        <FAQSection />
        <CalendarSection />
        <GuaranteeSection />
        <Footer />
      </div>
    </>
  );
}
