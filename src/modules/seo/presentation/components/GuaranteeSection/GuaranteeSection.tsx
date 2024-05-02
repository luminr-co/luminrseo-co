import Image from "next/image";
import imgSrc from "../../assets/images/GuaranteeSection/guaranteeImage.png";
import { SectionContainer } from "@/core/presentation/components/SectionContainer";

export default function GuaranteeSection() {
  return (
    <SectionContainer id="guarantee" sectionName="" sectionTitle="">
      <div className="flex flex-col justify-center items-center">
        <Image
          src={imgSrc}
          alt="error loading the image"
          className="w-52 h-52 lg:w-auto lg:h-auto"
          width={368}
          height={368}
        />
        <h3 className="lg:text-5xl text-2xl font-extrabold font-primary text-beige text-center lg:px-32 lg:mx-10 px-6 lg:mt-12 mt-6">
          We guarantee higher traffic or we’ll{" "}
          <span className="text-orange">continue to work</span>
        </h3>
      </div>
    </SectionContainer>
  );
}
