import * as React from "react"
import { SVGProps } from '../svg/SVGProps'

export const LogoLightSvg = (props: SVGProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 60 60"
    xmlSpace="preserve"
    width="1.5rem"
    height="1.5rem"
    className="svgLight"
    {...props}
  >
    <path
      style={{
        fill: "#050505",
      }}
      d="m29 25.882 26.482-13.241L29.434.099a.997.997 0 0 0-.895.014l-25 13c-.011.006-.018.015-.029.021l-.003.002L29 25.882zM30 27.618V60c.138 0 .272-.038.401-.094.015-.007.032-.004.046-.011l26-13c.339-.17.553-.516.553-.895V14.119L30 27.618zM28 27.618l-25-12.5V46c0 .379.214.725.553.895L28 59.119V27.618z"
    />
  </svg>
)
