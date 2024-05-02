import { FAQEntity } from "@/core/domain/entities/FAQEntity";
import FAQComponent from "./FAQComponent";

interface Props {
  faqList: FAQEntity[];
}
export default function FAQList({ faqList }: Props) {
  return (
    <div className="flex flex-col lg:gap-6 gap-4 lg:px-48 px-6">
      {faqList.map((faq, i) => (
        <FAQComponent faq={faq} key={i} />
      ))}
    </div>
  );
}
