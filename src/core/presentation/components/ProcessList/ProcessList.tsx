import { ProcessEntity } from "../../../domain/entities/ProcessEntity";
import { SmoothScroll } from "../SmoothScroll";
import { ProcessComponent } from "./ProcessComponent";

interface IProcessList {
  processes: ProcessEntity[];
}

export default function ProcessList({ processes }: IProcessList) {
  return (
    <>
      <section className="flex flex-col lg:gap-12 gap-4 justify-center items-center">
        {processes.map((process, i) => (
          <SmoothScroll key={i}>
            <ProcessComponent process={process} />
          </SmoothScroll>
        ))}
      </section>
    </>
  );
}
