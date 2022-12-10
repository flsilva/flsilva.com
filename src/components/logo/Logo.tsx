import * as React from 'react'
import { Link } from "gatsby"

import { LogoBox1DarkSvg } from './LogoBox1DarkSvg'
// import { LogoBox1LightSvg } from './LogoBox1LightSvg'
import { LogoBox2LightSvg } from './LogoBox2LightSvg'
// import { LogoBox3LightSvg } from './LogoBox3LightSvg'
// import { LogoBox4LightSvg } from './LogoBox4LightSvg'
// import { LogoBox5LightSvg } from './LogoBox5LightSvg'
// import { LogoCircle1LightSvg } from './LogoCircle1LightSvg'
// import { LogoCircle2LightSvg } from './LogoCircle2LightSvg'
// import { LogoCircle3LightSvg } from './LogoCircle3LightSvg'
// import { LogoCircle4LightSvg } from './LogoCircle4LightSvg'
// import { LogoCircle5LightSvg } from './LogoCircle5LightSvg'
// import { LogoCircle6LightSvg } from './LogoCircle6LightSvg'
// import { LogoCircle7LightSvg } from './LogoCircle7LightSvg'
// import { LogoCircle8LightSvg } from './LogoCircle8LightSvg'
// import { LogoCircle9LightSvg } from './LogoCircle9LightSvg'
// import { LogoCircle10LightSvg } from './LogoCircle10LightSvg'
// import { LogoCircle11LightSvg } from './LogoCircle11LightSvg'
// import { LogoCircle12LightSvg } from './LogoCircle12LightSvg'
// import { LogoCircle13LightSvg } from './LogoCircle13LightSvg'
// import { LogoCircle14LightSvg } from './LogoCircle14LightSvg'
// import { LogoTetrisLightSvg } from './LogoTetrisLightSvg'
import { logo, logoContainer } from './Logo.module.css'

export const Logo: React.FC = () => {
  return (
    <div className={logoContainer}>
      <div>
        <LogoBox1DarkSvg />
        <LogoBox2LightSvg />
      </div>
      <h1 className={logo}><Link to="/">flsilva</Link></h1>
    </div>
  )
}
