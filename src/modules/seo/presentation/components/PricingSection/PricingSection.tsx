import { SectionContainer } from "@/core/presentation/components/SectionContainer";
import PricingPlanSeo from "./PricingPlanSeo";

export default function PricingSection() {
  return (
    <section className="px-6 lg:px-0">
    <SectionContainer
      id="pricing"
      sectionName="PRICING"
      sectionTitle="Growth Plans for Everyone"
    >
      <PricingPlanSeo />
    </SectionContainer>
    </section>
  );
}
