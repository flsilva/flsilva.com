import * as React from 'react'
import { Link } from "gatsby"

import { LogoDarkSvg } from './LogoDarkSvg'
import { LogoLightSvg } from './LogoLightSvg'
import { logo, logoContainer } from './Logo.module.css'

export const Logo: React.FC = () => {
  return (
    <div className={logoContainer}>
      <div>
        <LogoDarkSvg />
        <LogoLightSvg />
      </div>
      <h1 className={logo}><Link to="/">flsilva</Link></h1>
    </div>
  )
}
