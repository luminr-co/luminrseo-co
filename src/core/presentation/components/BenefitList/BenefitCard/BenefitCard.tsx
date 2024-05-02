import { ServiceEntity } from "../../../../domain/entities/ServiceEntity";

interface Props {
  benefit: ServiceEntity;
}

export default function BenefitCard({ benefit }: Props) {
  return (
    <div className="flex flex-col lg:gap-4 gap-0 justify-center items-center text-beige font-secondary w-96 text-center">
      <div className="">{benefit.image}</div>
      <h2 className="lg:text-3xl text-xl font-medium mb-4">{benefit.title}</h2>
      <p className="lg:text-2xl text-base font-light">{benefit.description}</p>
    </div>
  );
}
