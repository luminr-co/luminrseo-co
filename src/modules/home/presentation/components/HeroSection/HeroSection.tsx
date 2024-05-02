import { Button } from "../../../../../core/presentation/components/Button";
import CallIcon from "../../../../../core/presentation/assets/icons/CallIcon";
import HeroImage from "../../assets/images/HeroSection/HeroImage";
export default function HeroSection() {
  return (
    <section className="flex lg:flex-row w-full lg:bg-beige bg-black relative pt-32 max-w-full lg:pt-0">
      <div className="bg-black absolute top-0 bottom-0 right-0 w-1/2 z-10 lg:inline-block hidden"></div>
      <div className="container mx-auto flex lg:flex-row flex-col-reverse justify-center items-center">
        <div className="flex flex-col lg:gap-12 lg:bg-beige bg-black pl-10 lg:py-56 pr-6 mr-4 basis-1/2">
          <div className="flex flex-col gap-8 w-full items-center lg:items-start">
            <div className="flex flex-col gap-8 ">
              <h1 className="lg:text-6xl font-extrabold font-primary text-4xl text-beige lg:text-black text-center lg:text-left pt-10 lg:pt-0">
                Unlock Your Business’s Online Potential with Seamless Web
                <br /> Presence
              </h1>
              <p className="lg:text-2xl font-normal font-secondary w-full text-sm text-beige lg:text-black text-center lg:text-left">
                We Build, Optimize, and Elevate Your Digital Presence, So You
                Can Focus on Growing Your Business.
              </p>
            </div>
            <a href="#call">
              <Button className="flex flex-row justify-center gap-3 items-center">
                <span>
                  <CallIcon />
                </span>
                <p className="text-sm lg:text-xl">Hop on a Call</p>
              </Button>
            </a>
          </div>
        </div>
        <div className="w-full bg-black h-full flex items-center basis-1/2 z-20 lg:px-10 px-20 lg:pt-32">

          <HeroImage />
        </div>
      </div>
    </section>
  );
}
