import * as React from 'react'
import { Link } from "gatsby"

import { LogoBox2Svg } from './LogoBox2Svg'
// import { LogoCircle1Svg } from './LogoCircle1Svg'
// import { LogoTetrisSvg } from './LogoTetrisSvg'
import { logo, logoContainer } from './Logo.module.css'

export const Logo: React.FC = () => {
  return (
    <div className={logoContainer}>
      <div>
        <LogoBox2Svg />
      </div>
      <h1 className={logo}><Link to="/">flsilva</Link></h1>
    </div>
  )
}
