import { CalendarComponent } from "@/core/presentation/components/CalendarComponent";
import { SectionContainer } from "@/core/presentation/components/SectionContainer";

export default function CalendarSection() {
  return (
    <SectionContainer
      id="call"
      sectionName=""
      sectionTitle={
        <>
       Hop on a 30 Minute 
          <span className="text-orange block">{" "}
No-Obligation Call
          today
          </span>
        </>
      }
    >
      <CalendarComponent
        calllink="luminr/discovery-call-seo"
        namespace="discovery-call"
      />
    </SectionContainer>
  );
}
