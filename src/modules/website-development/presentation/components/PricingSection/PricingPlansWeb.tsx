import PricingEntity from "@/core/domain/entities/PricingEntity";
import PricingComponent from "@/core/presentation/components/PricingComponent/PricingComponent";

export default function PricingPlansWeb() {
  const starter = {
    title: "Starter",
    subTitle:
      "Great for brands that are just launching with limited capital and low time.",
    features: [
      "Single Page ",
      "DIY/DWY/DFY Copywriting approach",
      "Hassle Free Process",
      "Uniquely tailored to your brand",
      "8-10 days turnaround time",
    ],
  };
  const growth = {
    title: "Growth",
    subTitle:
      "Great for brands with diverse needs and a wide array of content.",
    features: [
      "Multiple Pages",
      "Custom Illustration",
      "DIY/DWY/DFY Copywriting approach",
      "Hassle Free Process",
      "Uniquely tailored to your brand",
      "12-14 days turnaround time.",
    ],
  };

  return (
    <>
      <div
        className="flex lg:flex-row flex-col lg:gap-11 gap-14 justify-center mx-6 lg:mx-8 items-stretch"
        id="packages"
      >
        <PricingComponent pricing={starter} />
        <PricingComponent
          pricing={growth}
          variant="orange"
          tagNode={<>Best Value</>}
        />
      </div>
    </>
  );
}
