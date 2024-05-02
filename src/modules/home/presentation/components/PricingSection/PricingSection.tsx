"use client";
import { SectionContainer } from "@/core/presentation/components/SectionContainer";
import ServiceToggleButton, {
  ServiceButtonItem,
} from "@/core/presentation/components/ServiceToggleButton/ServiceToggleButton";
import PricingPlanSeo from "@/modules/seo/presentation/components/PricingSection/PricingPlanSeo";
import PricingPlansWeb from "@/modules/website-development/presentation/components/PricingSection/PricingPlansWeb";
import { useState } from "react";

export default function PricingSection() {
  const [active, setActive] = useState<ServiceButtonItem>("WEBSITE");

  const handleToggleClick = (item: ServiceButtonItem) => {
    setActive(item);
  };

  return (
    <section className="px-6 lg:px-0">
    <SectionContainer
      id="pricing"
      sectionName="Pricing"
      sectionTitle={
        <>
          Tailored Solutions for Every Startup:
          <span className="text-orange"> Discover Your Perfect Package</span>
        </>
      }
    >
      <ServiceToggleButton active={active} onClick={handleToggleClick} />

      <div>
        {active === "WEBSITE" && <PricingPlansWeb />}
        {active === "SEO" && <PricingPlanSeo />}
      </div>
    </SectionContainer>
    </section>
  );
}
