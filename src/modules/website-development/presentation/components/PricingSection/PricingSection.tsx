import { SectionContainer } from "@/core/presentation/components/SectionContainer";
import PricingPlansWeb from "./PricingPlansWeb";

export default function PricingSection() {
  return (
    <section className="px-6 lg:px-0">
      <SectionContainer
        id="pricing"
        sectionName="PRICING"
        sectionTitle={
          <>
            Growth Plans for
            <span className="text-orange"> Everyone</span>
          </>
        }
      >
        <PricingPlansWeb />
      </SectionContainer>
    </section>
  );
}
