import { ServiceEntity } from "../../../domain/entities/ServiceEntity";
import { SmoothScroll } from "../SmoothScroll";
import { BenefitCard } from "./BenefitCard";

interface Props {
  benefits: ServiceEntity[];
}

export default function BenefitList({ benefits }: Props) {
  return (
    <div className="flex lg:flex-row flex-col justify-between lg:items-start items-center gap-14 lg:gap-0">
      {benefits.map((benefit, i) => (
        <SmoothScroll  key={i} >
        <BenefitCard benefit={benefit}/>
        </SmoothScroll>
      ))}
    </div>
  );
}
