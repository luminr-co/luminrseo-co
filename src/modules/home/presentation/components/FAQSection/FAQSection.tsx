import { FAQEntity } from "@/core/domain/entities/FAQEntity";
import FAQList from "@/core/presentation/components/FAQList/FAQList";
import { SectionContainer } from "@/core/presentation/components/SectionContainer";

export default function FAQSection() {
  const faq: FAQEntity[] = [
    {
      question: "What is the price?",
      answer: ["All prices are based on the complexity of the projects."],
    },
    {
      question: "Can I get access to both services?",
      answer: [
        "Yes. Since our Website development time is very less, we focus on building foundations for SEO while simultaneously making sure your time is well valued.",
      ],
    },
    {
      question: "How long does it take to start?",
      answer: ["We get started as soon as the contract are signed."],
    },
    {
      question: "How long does your process take?",
      answer: ["It depends on the complexity of the project."],
    },
    {
      question: "Why choose Luminr over other Agencies?",
      answer: [
        "Obsession with quality doesn't mean breaking the bank.",
        "Enjoy affordable prices without compromising excellence.",
        "We're your dedicated visionaries with a wealth of experience.",
      ],
    },
  ];
  return (
    <SectionContainer
      id="faq"
      sectionName="FAQ"
      sectionTitle={
        <>
          <span className="text-orange">Got Questions? </span>
          We Have Answers!
        </>
      }
    >
      <FAQList faqList={faq} />
    </SectionContainer>
  );
}
