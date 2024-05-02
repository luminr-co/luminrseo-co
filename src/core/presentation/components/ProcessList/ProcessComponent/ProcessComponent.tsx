import { ProcessEntity } from "../../../../domain/entities/ProcessEntity";

interface ProcessProps {
  process: ProcessEntity;
  
}

export default function ProcessComponent({ process }: ProcessProps) {
  return (
    <div className="flex lg:flex-row flex-col font-secondary lg:gap-12 lg:items-center p-10 border border-orange rounded-2xl w-full">
      <div className="mx-auto">{process.image}</div>
      <div className="flex flex-col">
        <h1 className="lg:mb-2 lg:text-3xl text-2xl font-medium text-beige">
          {process.title}
        </h1>
        <p className="lg:mb-6 mb-2 lg:text-2xl text-gray text-xl">{process.time}</p>
        <p className="lg:text-2xl font-normal text-beige w-fit text-xl">{process.description}</p>
      </div>
    </div>
  );
}
