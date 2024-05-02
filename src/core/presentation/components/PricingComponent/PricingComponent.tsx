import PricingEntity from "../../../domain/entities/PricingEntity";
import { Button } from "../Button";
import TickIcon from "../../assets/icons/TickIcon";
import { twMerge } from "tailwind-merge";
import React from "react";
import CallIcon from "../../assets/icons/CallIcon";
import Link from "next/link";
import { SmoothScroll } from "../SmoothScroll";

interface Props {
  pricing: PricingEntity;
  variant?: "orange" | "white";
  tagNode?: React.ReactNode;
  tagNodeOrange?:string;
}

export default function PricingComponent({
  pricing,
  variant = "white",
  tagNode,
  tagNodeOrange
}: Props) {
  return (
    <>
      <SmoothScroll>
        <div
          className={twMerge(
            `flex flex-col border-4 rounded-xl font-secondary border-beige lg:p-8 p-6 text-beige gap-8 relative flex-1 lg:max-w-[430px] h-full `,
            variant == "orange" && "border-orange mt-3 lg:mt-0"
          )}
        >
          <div className="flex flex-row items-center justify-center ">
            {tagNode && (
              <div
                className={` ${
                  variant == "white" ? "text-black" : "text-beige"
                } text-base font-bold ${
                  variant == "white" ? "bg-beige" : "bg-orange"
                } px-4 py-3 w-fit absolute rounded lg:-translate-y-8 -translate-y-1/2 `}
              >
                {tagNode}
                {tagNodeOrange && (
                <span className="text-orange">
                {tagNodeOrange}
                </span>
                )}
              </div>
            )}
          </div>
          <div className="flex flex-col gap-1">
            <h3 className="font-secondary lg:text-4xl text-2xl font-bold">
              {pricing.title}
            </h3>
            {pricing.price && (
              <div>
                <span
                  className={twMerge(
                    "font-secondary text-4xl font-bold",
                    pricing.salePrice
                      ? "text-beige line-through decoration-orange decoration-4"
                      : "text-orange"
                  )}
                >
                  {pricing.price}
                </span>
                {pricing.salePrice && (
                  <span className="text-orange font-bold text-4xl ml-3">
                    {pricing.salePrice}
                  </span>
                )}
                {pricing.billingPeriod && (
                  <span className="text-beige text-2xl font-bold">{`/${pricing.billingPeriod}`}</span>
                )}
              </div>
            )}
            <p className="text-gray lg:text-xl text-base font-normal">
              {pricing.subTitle}
            </p>
            <hr className="h-px lg:mb-8 mb-5 mt-4 bg-gray border-0 bg-opacity-20"></hr>
          </div>

          <div className="flex flex-col gap-6 flex-1">
            {pricing.features.map((feature, i) => (
              <div className="flex flex-row gap-2" key={i}>
                <span>
                  <TickIcon />
                </span>
                <p className="lg:text-xl text-base font-normal">{feature}</p>
              </div>
            ))}
          </div>
          <Link href={"#call"}>
            <Button className="w-full text-xl px-4 py-3 lg:py-5 lg:px-5 flex flex-row gap-3 justify-center items-center">
              <span>
                <CallIcon />
              </span>
              <p>Hop on a Call</p>
            </Button>
          </Link>
        </div>
      </SmoothScroll>
    </>
  );
}
