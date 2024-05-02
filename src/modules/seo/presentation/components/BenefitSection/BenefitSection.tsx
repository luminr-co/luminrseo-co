import { ServiceEntity } from "@/core/domain/entities/ServiceEntity";
import { SectionContainer } from "@/core/presentation/components/SectionContainer";
import Tailored from "../../assets/images/BenefitSection/Tailored";
import DataDriven from "../../assets/images/BenefitSection/DataDriven";
import Ethical from "../../assets/images/BenefitSection/Ethical";
import { BenefitList } from "@/core/presentation/components/BenefitList";
import { Button } from "@/core/presentation/components/Button";
import CallIcon from "@/core/presentation/assets/icons/CallIcon";

export default function BenefitSection() {
  const benefits: ServiceEntity[] = [
    {
      image: <Tailored />,
      title: "Unmatched Customization",
      description: "Tailored, unique designs surpass DIY platforms.",
    },
    {
      image: <DataDriven />,
      title: "Expert Quality",
      description: "Pro-level, bug-free, responsive websites.",
    },
    {
      image: <Ethical />,
      title: "Long-term Value",
      description: "Future-proof, better ROI than quick DIY.",
    },
  ];
  return (
    <section className="lg:px-0">
    <SectionContainer
      id="benefits"
      sectionName="BENEFITS"
      sectionTitle="Get in front of users who are already searching for the products you sell"
    >
      <div className="flex flex-col justify-center items-center">
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
    </section>
  );
}
