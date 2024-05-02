import { FAQEntity } from "@/core/domain/entities/FAQEntity";
import FAQList from "@/core/presentation/components/FAQList/FAQList";
import { SectionContainer } from "@/core/presentation/components/SectionContainer";

export default function FAQSection() {
  const faq: FAQEntity[] = [
    {
      question: "How much time does it take to get results from SEO?",
      answer:
       [ "It can usually take 6-12 months to get results from SEO. The time depends on the Keyword Difficulty, Search Volume and Domain Age & Authority."],
    },
    {
      question: "I am already running paid ads. Why do I need SEO?",
      answer:
        ["While paid ads can drive immediate traffic, SEO focuses on organic visibility. Paid ads deliver results as long as you pay for them. SEO, on the other hand, provides more sustainable results over time."],
    },
    {
      question: "Will SEO boost my revenue or is it just traffic?",
      answer:
        ["SEO is not just about increasing traffic; it also involves optimizing your website for conversions. By enhancing user experience, providing relevant content, and improving site performance, SEO aims to turn visitors into customers, ultimately boosting your revenue."],
    },
    {
      question:
        "Why is it better to onboard an agency rather than SEO employees?",
      answer:
        ["SEO agencies typically consist of professionals with diverse skills, including technical SEO, content creation, link building, and analytics. This collective expertise can provide a more comprehensive approach than hiring SEO employees. Also, agencies offer a range of services at a fixed cost, eliminating the needs for salary, benefits, and training making it a cost-effective option."],
    },
    {
      question: "Which package is best for me?",
      answer:
        ["Want more people to know your brand, get leads, or boost online sales? Check out the features of RANK IMPROVEMENT and KING OF YOUR NICHE packages. Pick the one that fits your goals and suits your business best. Still Confused? Hop on a call and we can decide together."],
    },
    {
      question: "Can I switch between packages if my needs change?",
      answer:
        ["Yes, you can switch between packages as your business needs change without any obligation."],
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
