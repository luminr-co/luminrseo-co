import { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";


export interface ButtonProps extends PropsWithChildren {
  variant?: "orange" | "black";
  onClick?: () => void;
  hover?: boolean;
  className?: string;
}

export default function Button({
  variant = "orange",
  onClick,
  children,
  hover = false,
  className,
}: ButtonProps) {
  let classname =
    "py-5 lg:px-5 px-6 rounded-lg text-lg font-medium font-secondary text-beige cursor-pointer h-fit w-fit container transition-colors";
  return (
    <>
      {variant == "orange" && (
        <button
          className={twMerge(
            " bg-orange",
            hover && "hover:bg-black",
            classname,
            className
          )}
          onClick={onClick}
        >
          {children}
        </button>
      )}

      {variant == "black" && (
        <button
          className={twMerge(
            " bg-black",
            hover && "hover:bg-orange",
            classname,
            className
          )}
          onClick={onClick}
        >
          {children}
        </button>
      )}
    </>
  );
}
