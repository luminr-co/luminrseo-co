import { twMerge } from "tailwind-merge";
import Link from "next/link";
import { ServiceEntity } from "@/core/domain/entities/ServiceEntity";
import { Button } from "@/core/presentation/components/Button";
import { SmoothScroll } from "@/core/presentation/components/SmoothScroll";

export interface ServiceComponentProps {
  service: ServiceEntity;
}

export default function ServiceComponent({ service }: ServiceComponentProps) {
  return (
    <>
    <SmoothScroll>
      <section
        className={twMerge(
          " text-beige flex lg:flex-row flex-col-reverse items-center max-w-full justify-between gap-6 lg:gap-0",
          service.variant == "imgLeft" && "lg:flex-row-reverse lg:gap-28"
        )}
      >
        <div className="flex flex-col lg:gap-6 gap-4 items-center lg:items-start">
          <div className="">
            <h2 className="lg:text-5xl text-xl font-extrabold font-primary lg:mb-2 mb-4 text-center lg:text-left">
              {service.title}
            </h2>
            <p className="font-secondary lg:text-2xl text-base font-normal text-center lg:text-left">
              {service.description}
            </p>
          </div>
          <Link href={service.link ?? ""}>
            <Button className=" py-4 px-8 text-sm lg:text-2xl">
              Learn More
            </Button>
          </Link>
        </div>
        <div className="">{service.image}</div>
      </section>
      </SmoothScroll>
    </>
  );
}
