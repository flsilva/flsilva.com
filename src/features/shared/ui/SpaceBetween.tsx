import { twMerge } from "tailwind-merge";

import { ChildrenProps } from "./ChildrenProps";
import { ClassNamePropsOptional } from "./ClassNameProps";

export function SpaceBetween({
  children,
  className,
}: ChildrenProps & ClassNamePropsOptional) {
  return (
    <div
      className={twMerge(
        "flex flex-row justify-between items-center",
        className
      )}
    >
      {children}
    </div>
  );
}
