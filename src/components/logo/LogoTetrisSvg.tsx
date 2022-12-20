import * as React from "react"
import { SVGProps } from '../svg/SVGProps'

export const LogoTetrisLightSvg = (props: SVGProps) => (
  <svg
    viewBox="0 0 100 90"
    width="2rem"
    height="2rem"
    fill="var(--primary-text-color)"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect x="20" y="0" width="60" height="20"></rect>
    <rect x="40" y="20" width="20" height="20"></rect>
    <rect x="80" y="30" width="20" height="20"></rect>
    <rect x="0" y="30" width="20" height="20"></rect>
    <rect x="60" y="50" width="40" height="20"></rect>
    <rect x="0" y="50" width="40" height="20"></rect>
    <rect x="0" y="70" width="100" height="20"></rect>
  </svg>
)
