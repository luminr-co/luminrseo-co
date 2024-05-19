import { FeedbackEntity } from "@/core/domain/entities/FeedbackEntity";
import { FeedbackList } from "@/core/presentation/components/Feedbacks";
import { SectionContainer } from "@/core/presentation/components/SectionContainer";
import MarcoImage from "@/core/presentation/assets/images/feedback/prof.jpg";

export default function Testimonials() {
  const feedbacks: FeedbackEntity[] = [
    {
      feedback:
        "“Partnering with Luminr for SEO was a game-changer for The Himalayan Co. We witnessed a significant boost in our Shopify store's organic sales. Luminr's Foundational Sprint, with its strategic and comprehensive approach, played a crucial role in enhancing our store's visibility and overall performance. Their expertise in SEO is unparalleled, making them an invaluable asset for any Shopify store aiming to thrive in the competitive digital landscape”",
      name: "Marco Policicchio",
      profession: "Founder, The Himalayan Co.",
      image: MarcoImage,
    },
  ];
  return (
    <SectionContainer
      id="testimonials"
      sectionName="TESTIMONIALS"
      sectionTitle={"Trusted by Founders and Industry Leaders"}
    >
      <FeedbackList feedbacks={feedbacks} variant="primary" />;
    </SectionContainer>
  );
}
