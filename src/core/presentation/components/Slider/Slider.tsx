import { SliderEntity } from "@/core/domain/entities/SliderEntity";
import SliderComponent from "./SliderComponent";
import { SmoothScroll } from "../SmoothScroll";

interface Props {
  sliders: SliderEntity[];
}
export default function Slider({ sliders }: Props) {
  return (
    <div className="overflow-x-hidden">
      <div className="overflow-x-scroll no-scrollbar">
        <SmoothScroll>
          <div className="flex flex-row overflow-x-scroll lg:gap-6 gap-4 no-scrollbar justify-start">
            {sliders.map((image, i) => (
              <div className="lg:min-w-[74.313rem] min-w-[32.625rem]" key={i}>
                <SliderComponent image={image} />
              </div>
            ))}
          </div>
        </SmoothScroll>
      </div>
    </div>
  );
}
