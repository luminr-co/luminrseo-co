import { StaticImageData } from "next/image";

export interface FeedbackEntity {
  feedback: string;
  image?: string | StaticImageData;
  name: string;
  profession: string;
}
