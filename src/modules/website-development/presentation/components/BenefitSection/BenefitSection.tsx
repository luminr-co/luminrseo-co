import { ServiceEntity } from "@/core/domain/entities/ServiceEntity";
import ExpertQuality from "../../assets/images/BenefitSection/ExpertQuality";
import UnmatchedCustomization from "../../assets/images/BenefitSection/UnmatchedCustomization";
import { SectionContainer } from "@/core/presentation/components/SectionContainer";
import LongTermValue from "../../assets/images/BenefitSection/LongTermValue";
import { BenefitList } from "@/core/presentation/components/BenefitList";
import { Button } from "@/core/presentation/components/Button";
import CallIcon from "@/core/presentation/assets/icons/CallIcon";
import { SmoothScroll } from "@/core/presentation/components/SmoothScroll";

export default function BenefitSection() {
  const benefits: ServiceEntity[] = [
    {
      image: <UnmatchedCustomization />,
      title: "Unmatched Customization",
      description: "Tailored, unique designs surpass DIY platforms.",
    },
    {
      image: <ExpertQuality />,
      title: "Expert Quality",
      description: "Pro-level, bug-free, responsive websites.",
    },
    {
      image: <LongTermValue />,
      title: "Long-term Value",
      description: "Future-proof, better ROI than quick DIY.",
    },
  ];
  return (
    <SmoothScroll>
      <SectionContainer
        id="benefits"
        sectionName="BENEFITS"
        sectionTitle=" 
        Why Luminr Will Be Your Guide to Success
    "
      >
        <div className="flex flex-col justify-center items-center px-6 lg:px-0">
          <BenefitList benefits={benefits} />
          <a href="#call">
            <Button className="flex flex-row gap-3 justify-center items-center text-beige font-secondary text-xl font-medium mt-16">
              <span>
                <CallIcon />
              </span>
              <p className="lg:text-xl text-sm">Book a Free Discovery Call</p>
            </Button>
          </a>
        </div>
      </SectionContainer>
    </SmoothScroll>
  );
}
