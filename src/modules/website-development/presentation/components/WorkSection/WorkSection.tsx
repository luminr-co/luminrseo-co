import { SliderEntity } from "@/core/domain/entities/SliderEntity";
import tiggImage from "@/core/presentation/assets/images/work/tiggapp.webp";
import { SectionContainer } from "@/core/presentation/components/SectionContainer";
import { Slider } from "@/core/presentation/components/Slider";
import brandspark from "@/core/presentation/assets/images/work/brandpark.webp";
import vistamails from "@/core/presentation/assets/images/work/vista-mails.webp";
import chewybliss from "@/core/presentation/assets/images/work/chewybliss.webp";


export default function WorkSection() {
  const works: SliderEntity[] = [
    {
      image: brandspark,
    },
    {
      image: vistamails,
    },
    {
      image: tiggImage,
    },
    {
      image: chewybliss,
    }
  ];

  return (
    <SectionContainer
      id="work"
      sectionName="WORK"
      sectionTitle="Some Brands We've Transformed Digitally"
    >
      <Slider sliders={works} />
    </SectionContainer>
  );
}
