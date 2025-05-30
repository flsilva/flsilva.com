import * as React from "react";
import { twMerge } from "tailwind-merge";

export const OpenQuoteIconSvg = ({
  className,
  ...otherProps
}: React.SVGProps<SVGSVGElement>) => (
  <svg
    className={twMerge("fill-primary-text", className)}
    viewBox="0 0 48 48"
    width="1rem"
    height="1rem"
    xmlns="http://www.w3.org/2000/svg"
    {...otherProps}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M18.853 9.116c-7.53 4.836-11.714 10.465-12.55 16.887C5 36 13.94 40.893 18.47 36.497 23 32.1 20.285 26.52 17.005 24.994c-3.28-1.525-5.286-.994-4.936-3.032.35-2.039 5.016-7.69 9.116-10.323a.749.749 0 0 0 .114-1.02L20.285 9.3c-.44-.572-.862-.55-1.432-.185ZM38.679 9.116c-7.53 4.836-11.714 10.465-12.55 16.887-1.303 9.997 7.637 14.89 12.167 10.494 4.53-4.397 1.815-9.977-1.466-11.503-3.28-1.525-5.286-.994-4.936-3.032.35-2.039 5.017-7.69 9.117-10.323a.749.749 0 0 0 .113-1.02L40.11 9.3c-.44-.572-.862-.55-1.431-.185Z"
    />
  </svg>
);
