import CallIcon from "@/core/presentation/assets/icons/CallIcon";
import { Button } from "@/core/presentation/components/Button";
import { SmoothScroll } from "@/core/presentation/components/SmoothScroll";

export default function HeroSection() {
  return (
    
    <section className="flex flex-col lg:gap-8 gap-6 lg:px-56 px-6 mx-2 items-center lg:pt-56 pt-36">
      <h1 className="font-extrabold lg:text-6xl text-3xl text-beige font-primary text-center">
        Crafting Unique, Pro-Grade Websites for Long-Term Success.
      </h1>
      <p className="font-normal font-secondary lg:text-3xl text-sm text-gray text-center">
        We Build Professional Websites for Products, Services and Startups So
        They Can Save Time and Focus on Their High ROI Activities.
      </p>
      <a href="#call">
        <Button className="flex flex-row justify-center gap-3 items-center mt-8">
          <span>
            <CallIcon />
          </span>
          <p className="text-sm lg:text-xl">Hop on a Call</p>
        </Button>
      </a>
    </section>
  
  );
}
