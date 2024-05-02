"use client";
import { CalendarComponent } from "@/core/presentation/components/CalendarComponent";
import { SectionContainer } from "@/core/presentation/components/SectionContainer";
import { ServiceToggleButton } from "@/core/presentation/components/ServiceToggleButton";
import { ServiceButtonItem } from "@/core/presentation/components/ServiceToggleButton/ServiceToggleButton";
import { useState } from "react";

export default function CalendarSection() {
  const [active, setActive] = useState<ServiceButtonItem>("WEBSITE");

  const handleToggleClick = (item: ServiceButtonItem) => {
    setActive(item);
  };

  return (
    <SectionContainer
      id="call"
      sectionName=""
      sectionTitle={
        <>
          Hop on
          <span className="text-orange"> free call </span>
          today
        </>
      }
    >
      <ServiceToggleButton active={active} onClick={handleToggleClick} />

      {active === "WEBSITE" && (
        <CalendarComponent
          calllink={"luminr/discovery-call"}
          namespace={"discovery-call"}
          key={"discovery-call"}
        />
      )}

      {active === "SEO" && (
        <CalendarComponent
          calllink={"luminr/discovery-call-seo"}
          namespace={"discovery-call-seo"}
          key={"discovery-call-seo"}
        />
      )}
    </SectionContainer>
  );
}
