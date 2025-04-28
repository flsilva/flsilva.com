import { twMerge } from "tailwind-merge";

import { OpenQuoteIconSvg } from "../svg/OpenQuoteIconSvg";
import { ChildrenProps } from "../ChildrenProps";

interface QuotationProps extends ChildrenProps {
  readonly classNameContainer?: string;
  readonly classNameIcon?: string;
  readonly classNameTextContainer?: string;
}

export const Quotation = ({
  children,
  classNameContainer,
  classNameIcon,
  classNameTextContainer,
}: QuotationProps) => (
  <div className={twMerge("flex", classNameContainer)}>
    <OpenQuoteIconSvg
      className={twMerge(
        "mr-1 w-8 h-8 shrink-0 md:w-10 md:h-10",
        classNameIcon
      )}
    />
    <div
      className={twMerge(
        "group quotation grid gap-y-6 -ml-1 mt-7 md:mt-8 md:ml-0",
        classNameTextContainer
      )}
    >
      {children}
    </div>
  </div>
);
