import PricingEntity from "@/core/domain/entities/PricingEntity";
import PricingComponent from "@/core/presentation/components/PricingComponent/PricingComponent";

export default function PricingPlanSeo() {
  const rankImprovement: PricingEntity = {
    title: "Rank Improvement",
    subTitle:
      "For Shopify Stores that want to improve their rankings with limited capital and low time.",
    features: [
      "Keyword Performances Target Rankings",
      "Conversion-Driven Optimization",
      "Traffic and Engagement Increment*",
      "Domain Authority Escalation*",
      "Performance Review Meeting",
      "Traffic and Engagement Increment by 30%",
      "Domain Authority Escalation by 20%",
    ],
    price: "$800",
    salePrice: "$440",
    billingPeriod: "mo"
  };
  const kingOfYourNiche: PricingEntity = {
    title: "King of your Niche",
    subTitle: "Everything in Rank Improvement Package plus:",
    features: [
      "Revenue-Driven SEO",
      "Sale Goals and SEO Campaign Alignment",
      "Advanced Conversion Optimization",
      "Comprehensive E-Commerce Analytics",
      "Strategic Content Development",
      "Proactive Competitor Analysis",
    ],
    price: "$1200",
    billingPeriod: "mo"
  };

  return (
    <div
      className="flex lg:flex-row flex-col lg:gap-11 gap-14 justify-center mx-6 lg:mx-8 items-stretch"
      id="packages"
    >
      <PricingComponent pricing={rankImprovement} variant="white" tagNode="Risk Free Initial Month" tagNodeOrange="(45% off)"/>

      <PricingComponent pricing={kingOfYourNiche} variant="orange" tagNode="Best Value"/>
    </div>
  );
}
