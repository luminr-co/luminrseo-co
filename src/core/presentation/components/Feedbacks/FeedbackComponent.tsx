import { FeedbackEntity } from "@/core/domain/entities/FeedbackEntity";
import Image from "next/image";

interface Props {
  feedbackCard: FeedbackEntity;
  variant?: "primary" | "secondary";
}

export default function FeedbackComponent({ feedbackCard, variant }: Props) {
  return (
    <>
      {variant == "primary" && (
        <div className="lg:px-56 px-5 min-w-full">
          <div className="lg:px-28 p-6 lg:py-14 rounded-xl bg-beige font-secondary text-black flex flex-col items-center  lg:gap-14 gap-6  object-cover min-w-full">
            <p className="lg:text-2xl text-base font-normal text-center">
              {feedbackCard.feedback}
            </p>
            <div className="flex flex-col justify-center items-center gap-3">
              <Image
                src={feedbackCard.image}
                className="lg:w-28 lg:h-28 w-24 h-24 rounded-full"
                alt=""
                width={112}
                height={112}
              />
              <div className="flex flex-col justify-center items-center">
                <p className="lg:text-2xl text-base font-bold text-center">
                  {feedbackCard.name}
                </p>
                <p className="lg:text-base text-xs font-medium text-center">
                  {feedbackCard.profession}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
      {variant == "secondary" && (
        <div className="p-6 lg:p-14 rounded-xl bg-beige font-secondary text-black flex lg:flex-col flex-col-reverse items-center lg:items-start lg:justify-start gap-4 lg:mr-6 basis-1/2">
          <div className="flex flex-col items-center justify-center gap-3 w-full">
            <Image
              src={feedbackCard.image}
              className="w-28 h-28 rounded-full"
              width={112}
              height={112}
              alt=""
            />

            <div className="flex flex-col justify-center">
              <p className="lg:text-2xl text-base font-bold text-center">
                {feedbackCard.name}
              </p>
              <p className="lg:text-base font-medium text-xs text-center">
                {feedbackCard.profession}
              </p>
            </div>
          </div>
          <p className="lg:text-2xl text-base font-normal  text-center">
            {feedbackCard.feedback}
          </p>
        </div>
      )}
    </>
  );
}
