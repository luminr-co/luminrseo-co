export default interface PricingEntity {
  title: string;
  subTitle: string;
  features: Array<String>;
  price?: string;
  salePrice?: string;
  billingPeriod?: "mo" | "yr";
}
