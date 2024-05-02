import { ServiceEntity } from "@/core/domain/entities/ServiceEntity";
import { ServiceComponent } from "../ServiceComponent";

interface Props{
    services : ServiceEntity[];
}

export default function ServiceList({services}: Props) {
  return (
    <div className="flex flex-col lg:gap-80 gap-12 my-12 lg:my-64">
        {services.map((service, i)=>(
            <ServiceComponent service={service} key={i} />
        ))}
    </div>
  )
}
