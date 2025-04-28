import * as React from "react";

import { ChildrenProps } from "./ChildrenProps";
import { ClassNamePropsOptional } from "./ClassNameProps";
import { twMerge } from "tailwind-merge";

interface ImageWithCaptionProps extends ChildrenProps, ClassNamePropsOptional {
  caption: React.ReactNode;
}

export const ImageWithCaption = ({
  caption,
  children,
  className,
}: ImageWithCaptionProps) => (
  <figure className={twMerge("mx-0 my-4", className)}>
    {children}
    <figcaption className="text-secondary-text text-center mt-2">
      {caption}
    </figcaption>
  </figure>
);
