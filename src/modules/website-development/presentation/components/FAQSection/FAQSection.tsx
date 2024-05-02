import { FAQEntity } from "@/core/domain/entities/FAQEntity";
import FAQList from "@/core/presentation/components/FAQList/FAQList";
import { SectionContainer } from "@/core/presentation/components/SectionContainer";

export default function FAQSection() {
  const faq: FAQEntity[] = [
    {
      question: "What if the project goes beyond scope?",
      answer: [
        "Since all the deliverables are confirmed before start of the work, if the project goes out of the scope - we will follow Change Request management process.",
      ],
    },
    {
      question: "Retainer or one-time projects?",
      answer: [
        "Website Development projects are usually one-time but with the exception of yearly domain and maintenance charges.",
      ],
    },
    {
      question: "How do refunds work?",
      answer: [
        "Refunds cannot be placed after we move onto designing fidelity.",
      ],
    },
    {
      question: "How do Revisions Work?",
      answer: [
        "Record a quick loom video about what you want to change/add/remove in terms of design, copy and structure, get delivered in 1-3 days with 0 cost. ",
      ],
    },
    {
      question: "What is needed from me?",
      answer: [
        "After onboarding, we will send you forms that help gather important information about your business. We might further require other information as we move forward with the project.",
      ],
    },
    {
      question: "How do I know that I'm qualified for this service?",
      answer: [
        "If you have a product, service or a startup with sizable monthly income and looking to redesign or create a new website from scratch.",
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
