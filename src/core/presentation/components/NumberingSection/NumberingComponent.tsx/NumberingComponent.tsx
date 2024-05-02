import { NumberEntity } from "../../../../domain/entities/NumberEntity";

interface NumberProp {
  number: NumberEntity;
}

export default function NumberingComponent({ number }: NumberProp) {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="px-6 py-3 border border-orange rounded-full bg-black z-20">
        <span className="text-secondary text-3xl font-normal text-orange">
          {number.number}
        </span>
      </div>
      {number.downLine == true && (
        <div className="w-0 h-96 border-r border-r-orange"></div>
      )}
    </div>
  );
}
