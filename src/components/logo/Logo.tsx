import * as React from 'react'

import { LogoBox2Svg } from './LogoBox2Svg'
// import { LogoCircle1Svg } from './LogoCircle1Svg'
// import { LogoTetrisSvg } from './LogoTetrisSvg'
import { container, logo } from './Logo.module.css'

export const Logo: React.FC = () => {
  return (
    <div className={container}>
      <div>
        <LogoBox2Svg />
      </div>
      <h1 className={logo}><a href="/">flsilva</a></h1>
    </div>
  )
}
