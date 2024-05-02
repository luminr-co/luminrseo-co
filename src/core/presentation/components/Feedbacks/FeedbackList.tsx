import { FeedbackEntity } from "@/core/domain/entities/FeedbackEntity";
import FeedbackComponent from "./FeedbackComponent";
import { SmoothScroll } from "../SmoothScroll";

interface Props {
  feedbacks: FeedbackEntity[];
  variant?: "primary" | "secondary";
}

export default function FeedbackList({ variant, feedbacks }: Props) {
  return (
    <SmoothScroll>
    <div className="container mx-auto">
      {variant == "primary" && (
        <div className="overflow-x-hidden w-full pt-4" id="testimonials">
          <div className=" overflow-x-scroll no-scrollbar">
            <div className=" flex flex-row overflow-x-scroll no-scrollbar">
              {feedbacks.map((feedback, i) => (
                <FeedbackComponent
                  feedbackCard={feedback}
                  variant="primary"
                  key={i}
                />
              ))}
            </div>
          </div>
        </div>
        
      )}
      {variant == "secondary" && (
        <div
          className="lg:overflow-x-hidden w-full lg:px-24 px-5"
          id="testimonials"
        >
          <div className="flex lg:flex-row flex-col gap-4">
            {feedbacks.map((feedback, i) => (
              <FeedbackComponent
                feedbackCard={feedback}
                variant="secondary"
                key={i}
              />
            ))}
          </div>
        </div>
      )}
    </div>
    </SmoothScroll>
  );
}
