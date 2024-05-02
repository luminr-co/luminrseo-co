import { BenefitList } from "@/core/presentation/components/BenefitList";
import AudienceImage from "../../assets/images/BenefitSection/AudienceImage";
import BrandInfluence from "../../assets/images/BenefitSection/BrandInfluence";
import CoreBusinessImage from "../../assets/images/BenefitSection/CoreBusinessImage";
import { ServiceEntity } from "@/core/domain/entities/ServiceEntity";
import { SectionContainer } from "@/core/presentation/components/SectionContainer";

export default function BenefitSection() {
  const benefits: ServiceEntity[] = [
    {
      title: "Focus on Your Core Business",
      description:
        "Reclaim your time by letting us handle landing page development, product creation, and SEO intricacies.",
      image: <CoreBusinessImage />,
    },
    {
      title: "Captivate Your Audience",
      description:
        "Our expert team tailors designs beyond templates, ensuring a visually appealing, user-friendly online presence that captures and retains your customers.",
      image: <AudienceImage />,
    },
    {
      title: "Amplify Your Brand's Influence",
      description:
        "We go beyond services, crafting a holistic online experience that resonates with your audience, making your brand memorable and influential.",
      image: <BrandInfluence />,
    },
  ];

  return (
    <section className="px-6 lg:px-0"> 
    <SectionContainer
      id="benefits"
      sectionName="BENEFITS"
      sectionTitle={
        <>
          <span className="text-orange"> Skyrocket Your Business: </span>
          Let&apos;s Craft Your Digital Success Together
        </>
      }
    >
      <BenefitList benefits={benefits} />
    </SectionContainer>
    </section>
  );
}
