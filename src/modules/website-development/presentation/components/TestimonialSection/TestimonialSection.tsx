import { FeedbackList } from "@/core/presentation/components/Feedbacks";
import { FeedbackEntity } from "../../../../../core/domain/entities/FeedbackEntity";
import { SectionContainer } from "@/core/presentation/components/SectionContainer";
import HussianImage from "@/core/presentation/assets/images/feedback/hussian_shekh.webp";

export default function TestimonialSection() {
  const feedbacks: FeedbackEntity[] = [
    {
      feedback:
        "“Working with Luminr on our landing pages design and development was a game-changer for us. Prayatna and the team not only understood our brand vision but elevated it to new heights. Their creativity, attention to detail, and commitment to excellence set them apart. Highly recommended.”",
      name: "Hussain Shekh",
      profession: "CEO, Brand Spark Visuals",
      image: HussianImage,
    },
  ];
  return (
    <div className="px-5 lg:px-0">
    <SectionContainer
      id="testimonials"
      sectionName="TESTIMONIALS"
      sectionTitle={<>Trusted by Founders and Industry Leaders</>}
    >
      <FeedbackList variant="primary" feedbacks={feedbacks} />
    </SectionContainer>
    </div>
  );
}
