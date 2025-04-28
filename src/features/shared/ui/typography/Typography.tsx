import { AnchorHTMLAttributes, HTMLAttributes, LiHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

import { textClassName } from "./textClassName";

export const H1 = ({
  className = "",
  ...otherProps
}: HTMLAttributes<HTMLHeadingElement>) => (
  <h1
    className={twMerge(
      textClassName,
      "group h font-semibold pt-14 text-2xl leading-8 tracking-[-0.0625rem] md:text-5xl md:leading-15",
      className
    )}
    {...otherProps}
  />
);

export const H2 = ({
  className = "",
  ...otherProps
}: HTMLAttributes<HTMLHeadingElement>) => (
  <h2
    className={twMerge(
      textClassName,
      "group h font-semibold pt-14 text-2xl leading-8 tracking-[-0.0625rem] md:text-3xl md:leading-10",
      className
    )}
    {...otherProps}
  />
);

export const H3 = ({
  className = "",
  ...otherProps
}: HTMLAttributes<HTMLHeadingElement>) => (
  <h3
    className={twMerge(
      textClassName,
      "group h font-semibold pt-8 text-xl leading-7 tracking-[-0.03125rem] md:text-2xl md:leading-8",
      className
    )}
    {...otherProps}
  />
);

export const H4 = ({
  className = "",
  ...otherProps
}: HTMLAttributes<HTMLHeadingElement>) => (
  <h4
    className={twMerge(
      textClassName,
      "group h text-secondary-text font-semibold pt-4 text-base leading-5",
      className
    )}
    {...otherProps}
  />
);

export const H5 = ({
  className = "",
  ...otherProps
}: HTMLAttributes<HTMLHeadingElement>) => (
  <h5
    className={twMerge(
      textClassName,
      "group h text-secondary-text font-semibold pt-4 text-base leading-5",
      className
    )}
    {...otherProps}
  />
);

export const H6 = ({
  className = "",
  ...otherProps
}: HTMLAttributes<HTMLHeadingElement>) => (
  <h6
    className={twMerge(
      textClassName,
      "group h text-secondary-text font-semibold pt-4 text-base leading-5",
      className
    )}
    {...otherProps}
  />
);

export const P = ({
  className = "",
  ...otherProps
}: HTMLAttributes<HTMLParagraphElement>) => (
  <p
    className={twMerge(
      textClassName,
      "group-[.quotation]:text-[1.25rem] md:group-[.quotation]:text-[1.375rem] group-[.quotation]:leading-7 md:group-[.quotation]:leading-8 group-[.quotation]:tracking-[-0.03125rem]",
      className
    )}
    {...otherProps}
  />
);

export const Strong = ({
  className = "",
  ...otherProps
}: HTMLAttributes<HTMLElement>) => (
  <strong className={twMerge("font-semibold", className)} {...otherProps} />
);

export const SmallText = ({
  className = "",
  ...otherProps
}: HTMLAttributes<HTMLElement>) => (
  <small
    className={twMerge(textClassName, "text-sm leading-4.5", className)}
    {...otherProps}
  />
);

export const A = ({
  className = "",
  ...otherProps
}: AnchorHTMLAttributes<HTMLAnchorElement>) => (
  <a
    className={twMerge(
      textClassName,
      "text-primary-link hover:underline group-[.h]:[color:inherit] group-[.h]:[font-size:inherit] group-[.h]:[font-weight:inherit] group-[.quotation]:text-[1.25rem] md:group-[.quotation]:text-[1.375rem]",
      className
    )}
    {...otherProps}
  />
);

export const UL = ({
  className = "",
  ...otherProps
}: HTMLAttributes<HTMLUListElement>) => (
  <ul
    className={twMerge("group ul list-disc pl-8 group-[.li]:pt-2", className)}
    {...otherProps}
  />
);

export const OL = ({
  className = "",
  ...otherProps
}: HTMLAttributes<HTMLUListElement>) => (
  <ol
    className={twMerge(
      "group ol pl-8 list-decimal group-[.li]:pt-2",
      className
    )}
    {...otherProps}
  />
);

export const LI = ({
  className = "",
  ...otherProps
}: LiHTMLAttributes<HTMLLIElement>) => (
  <li
    className={twMerge(textClassName, "group li py-2", className)}
    {...otherProps}
  />
);
