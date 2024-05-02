import { ProcessEntity } from "@/core/domain/entities/ProcessEntity";
import { SectionContainer } from "@/core/presentation/components/SectionContainer";
import DiscoveryCall from "@/modules/website-development/presentation/assets/images/ProcessSection/DiscoveryCall";
import Onboarding from "@/modules/website-development/presentation/assets/images/ProcessSection/Onboarding";
import Strategy from "../../assets/images/ProcessSection/Strategy";
import Technical from "../../assets/images/ProcessSection/Technical";
import OnPage from "../../assets/images/ProcessSection/OnPage";
import OffPage from "../../assets/images/ProcessSection/OffPage";
import { ProcessList } from "@/core/presentation/components/ProcessList";
import { NumberingSection } from "../NumberingSection";

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
      time: "30 minutes",
    },
    {
      image: <Strategy />,
      title: "Strategy and Planning",
      description:
        "We provide a master plan tailored to elevate your website's presence in search engines. Our proven methodologies will navigate your brand to new heights, ensuring sustained growth and dominance in your niche.",
      time: "2-3 Days (After Kick-Off Call)",
    },
    {
      image: <Technical />,
      title: "Technical SEO",
      description:
        "We optimize every digital technicality propelling your website to the top ranks and ensure it stays there, bringing in organic traffic and skyrocketing your business to new heights.",
      time: "Ongoing",
    },
    {
      image: <OnPage />,
      title: "On-Page Optimization",
      description:
        "From compelling content to seamless user journeys, we transform your web pages into conversion powerhouses, ensuring every click translates into meaningful engagement and revenue.",
      time: "Ongoing",
    },
    {
      image: <OffPage />,
      title: "Off Page Optimization",
      description:
        "We strategize authoritative link-building techniques to establish your brand as an industry leader, cultivating a presence that attracts, captivates, and converts your target audience.",
      time: "Ongoing",
    },
  ];
  return (
    <section className="px-5 lg:px-0">
    <SectionContainer
      id="process"
      sectionName="PROCESS"
      sectionTitle="
        At Luminr, We Have Well Defined Processes to Help You Save Time and
        Focus on Your Business
    "
    >
      <div className="flex flex-row gap-14 items-center">
        <div className="hidden lg:inline-block">
          <NumberingSection />
        </div>
        <div className="flex justify-center">
          <ProcessList processes={processlist} />
        </div>
      </div>
    </SectionContainer>
    </section>
  );
}
