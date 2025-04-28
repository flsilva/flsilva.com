import * as React from "react";

export const HamburgerMenuSvg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    className="fill-primary-text"
    viewBox="0 0 100 80"
    width="25"
    height="25"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect width="100" height="12" rx="4" />
    <rect y="30" width="100" height="12" rx="4" />
    <rect y="60" width="100" height="12" rx="4" />
  </svg>
);
