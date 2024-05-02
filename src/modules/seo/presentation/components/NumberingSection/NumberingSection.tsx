import { NumberEntity } from "../../../../../core/domain/entities/NumberEntity";
import { NumberingList } from "../../../../../core/presentation/components/NumberingSection";

export default function NumberingSection() {
    const numbers: NumberEntity[] = [
      {
        number: 1,
        downLine: true,
      },
      {
        number: 2,
        downLine: true,
      },
      {
        number: 3,
        downLine: true,
      },
      {
        number: 4,
        downLine: true,
      },
      {
        number: 5,
        downLine: true,
      },
      {
        number: 6,
        downLine: false,
      },
    ];
    return <div>{<NumberingList numbers={numbers} />}</div>;
  }
  