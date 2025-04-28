import { AnchorHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

import { A, SmallText } from "../typography/Typography";

export const Tag = ({
  children,
  className = "",
  ...otherProps
}: AnchorHTMLAttributes<HTMLAnchorElement>) => (
  <A
    href={`/blog/${children}`}
    className={twMerge("hover:no-underline", className)}
    {...otherProps}
  >
    <SmallText className="block border rounded-lg px-2 py-2 hover:border-primary-link hover:text-primary-link">
      {children}
    </SmallText>
  </A>
);
