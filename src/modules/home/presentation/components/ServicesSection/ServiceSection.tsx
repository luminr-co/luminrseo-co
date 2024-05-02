import { SectionContainer } from "@/core/presentation/components/SectionContainer";
import SeoServiceImage from "../../assets/images/ServiceSection/SeoServiceImage";
import WebServiceImage from "../../assets/images/ServiceSection/WebServiceImage";
import { ServiceList } from "./ServiceList";
import { ServiceEntity } from "@/core/domain/entities/ServiceEntity";

export default function ServiceSection() {
  const services: ServiceEntity[] = [
    {
      title: "Web Design and Development",
      description:
        "Elevate your brand with captivating landing and product pages. Our Web Design focuses on seamless user experiences, creating visually stunning sites for enhanced engagement.",
      image: <WebServiceImage />,
      variant: "imgRight",
      link: "/website-development",
    },
    {
      title: "SEO for Shopify Stores",
      description:
        "Strategies tailored to the unique needs of e-commerce stores and optimize for higher search rankings, ensuring your products shine. ",
      image: <SeoServiceImage />,
      variant: "imgLeft",
      link: "/seo",
    },
  ];
  return (
    <section className="px-7">
      <SectionContainer
        id="services"
        sectionName="SERVICES"
        sectionTitle={
          <>
            Refine Your Digital Presence:
            <span className="text-orange">
              {" "}
              Web Design & SEO Specializations
            </span>
          </>
        }
      >
        <ServiceList services={services} />
      </SectionContainer>
    </section>
  );
}
