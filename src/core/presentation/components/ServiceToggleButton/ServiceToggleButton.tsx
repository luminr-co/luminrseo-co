import { twMerge } from "tailwind-merge";

export type ServiceButtonItem = "SEO" | "WEBSITE";

interface Props {
  active: ServiceButtonItem;
  onClick: (item: ServiceButtonItem) => void;
}

export default function ServiceToggleButton({ active, onClick }: Props) {
  return (
    <>
      <div className="flex flex-row lg:border-8 border-4 border-orange gap-0 justify-between rounded-xl w-min mx-auto mb-24">
        <button
          className={twMerge(
            "lg:px-4 lg:py-2 px-3 py-1 font-bold lg:text-3xl text-lg text-beige text-center lg:w-48 w-32",
            active === "WEBSITE" && "bg-orange"
          )}
          onClick={() => onClick("WEBSITE")}
        >
          WEBSITE
        </button>
        <button
          className={twMerge(
            "lg:px-4 lg:py-2 px-3 py-1 font-bold lg:text-3xl text-lg text-beige text-center lg:w-48 w-32",
            active === "SEO" && "bg-orange"
          )}
          onClick={() => onClick("SEO")}
        >
          SEO
        </button>
      </div>
    </>
  );
}
