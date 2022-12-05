import * as React from 'react'
import { Link } from "gatsby"
import { StaticImage } from 'gatsby-plugin-image'

import { logo, logoContainer } from './Logo.module.css'

export const Logo: React.FC = () => {
  return (
    <div className={logoContainer}>
      <div>
        <StaticImage
          alt="flsilva.com image logo"
          src="./logo-shape.png"
          width={30}
          height={26}
        />
      </div>
      <h1 className={logo}><Link to="/">flsilva.com</Link></h1>
    </div>
  )
}
