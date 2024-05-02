import { CalendarComponent } from "@/core/presentation/components/CalendarComponent";
import { SectionContainer } from "@/core/presentation/components/SectionContainer";

export default function CalendarSection() {
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
      <CalendarComponent
        calllink="luminr/discovery-call"
        namespace="discovery-call"
      />
    </SectionContainer>
  );
}
