import { FeedbackEntity } from "@/core/domain/entities/FeedbackEntity";
import { FeedbackList } from "@/core/presentation/components/Feedbacks";

import HussianImage from "@/core/presentation/assets/images/feedback/hussian_shekh.webp";
import ShristiImage from "@/core/presentation/assets/images/feedback/shristi_mishra.webp";
import { SectionContainer } from "@/core/presentation/components/SectionContainer";

export default function TestimonialSection() {
  const feedbacks: FeedbackEntity[] = [
    {
      feedback:
        "“Working with Luminr on our landing pages design and development was a game-changer for us. Prayatna and the team not only understood our brand vision but elevated it to new heights. Their creativity, attention to detail, and commitment to excellence set them apart. Highly recommended.”",
      name: "Hussain Shekh",
      profession: "CEO, Brand Spark Visuals",
      image: HussianImage,
    },
  //   {
  //     feedback:
  //       "“Partnering with Luminr for SEO was a game-changer for Yak9chews. We witnessed a significant boost in our Shopify store's organic sales. Luminr's Foundational Sprint, with its strategic and comprehensive approach, played a crucial role in enhancing our store's visibility and overall performance. Their expertise in SEO is unparalleled, making them an invaluable asset for any Shopify store aiming to thrive in the competitive digital landscape”",
  //     name: "Shristi Mishra",
  //     profession: "CEO, Yak9chews",
  //     image: ShristiImage,
  //   },
  ];

  return (
    <section className="px-5 lg:px-0">
      <SectionContainer
        id="testimonials"
        sectionName="TESTIMONIALS"
        sectionTitle={"What Our Clients Say"}
      >
        <FeedbackList feedbacks={feedbacks} variant="primary" />;
      </SectionContainer>
    </section>
  );
}
