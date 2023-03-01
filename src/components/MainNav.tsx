import * as React from 'react'
import { Link } from "gatsby"
import { changeThemeButtonContainer, container } from './MainNav.module.css'
import { MoonIconSvg } from '../components/svg/MoonIconSvg'
import { SunIconSvg } from '../components/svg/SunIconSvg'

export const MainNav: React.FC = () => {
  return (
    <nav id="main-nav" className={container}>
      <ul>
        <li>
          <Link to="/blog/">Blog</Link>
        </li>
        <li>
          <Link to="/portfolio/">Portfolio</Link>
        </li>
        <li>
          <Link to="/open-source/">Open Source</Link>
        </li>
        <li>
          <Link to="/resume/">Resume</Link>
        </li>
        <li className={changeThemeButtonContainer}>
          <button id="change-theme-button" type="button">
            <MoonIconSvg />
            <SunIconSvg />
          </button>
        </li>
      </ul>
    </nav>
  )
}
