import * as React from "react"
import { SVGProps } from './SVGProps'

export const HamburgerMenuDarkSvg = (props: SVGProps) => (
  <svg
    viewBox="0 0 100 80"
    width="25"
    height="25"
    fill="#f5f5f5"
    xmlns="http://www.w3.org/2000/svg"
    className="svgDark"
    {...props}
  >
    <rect width="100" height="12" rx="4"></rect>
    <rect y="30" width="100" height="12" rx="4"></rect>
    <rect y="60" width="100" height="12" rx="4"></rect>
  </svg>
)
