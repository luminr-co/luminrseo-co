import { ProcessEntity } from "@/core/domain/entities/ProcessEntity";
import DiscoveryCall from "../../assets/images/ProcessSection/DiscoveryCall";
import { NumberingSection } from "../NumberingSection";
import Onboarding from "../../assets/images/ProcessSection/Onboarding";
import ContentWriting from "@/core/presentation/assets/images/process/ContentWriting";
import HighFidelity from "../../assets/images/ProcessSection/HighFidelity";
import Development from "@/core/presentation/assets/images/process/Development";
import HandOff from "../../assets/images/ProcessSection/HandOff";
import { SectionContainer } from "@/core/presentation/components/SectionContainer";
import { ProcessList } from "@/core/presentation/components/ProcessList";
import { SmoothScroll } from "@/core/presentation/components/SmoothScroll";

export default function ProcessSection() {
  const processlist: ProcessEntity[] = [
    {
      image: <DiscoveryCall />,
      title: "Discovery Call",
      description:
        "We hop on a call with you and gain an insight on your requirements and scope of work.",
      time: "30 minutes",
    },
    {
      image: <Onboarding />,
      title: "Onboarding",
      description:
        "We invite you to our communication channel and make you familiar with the process and set clear expectations moving forward.",
      time: "1 day",
    },
    {
      image: <ContentWriting />,
      title: "Content Writing and Wireframing",
      description:
        "We gather assets to help clear how you want the website’s design direction to be like. We also create low to mid fidelity wireframes. We have a DIY/DWY/DFY approach when it comes to content creation.",
      time: "3 days",
    },
    {
      image: <HighFidelity />,
      title: "High Fidelity Design",
      description:
        "High Fidelity Designs are created that communicate your business’s value and mission.",
      time: "4 days",
    },
    {
      image: <Development />,
      title: "Development",
      description:
        "High Fidelity Designs are converted into working product that you can show off to the world.",
      time: "5 days",
    },
    {
      image: <HandOff />,
      title: "Hand Off",
      description:
        "We give you full control and access over your website and handover all the required documents.",
      time: "1 day",
    },
  ];
  return (
    <section className="px-6 lg:px-0">
      <SectionContainer
        id="process"
        sectionName="PROCESS"
        sectionTitle="
        At Luminr, We Have Well Defined Processes to Help You Save Time and
        Focus on Your Business
    "
      >
        <SmoothScroll>
          <div className="flex flex-row gap-14 items-center">
            <div className="hidden lg:inline-block">
              <NumberingSection />
            </div>
            <div className="flex justify-center">
              <ProcessList processes={processlist} />
            </div>
          </div>
        </SmoothScroll>
      </SectionContainer>
    </section>
  );
}
