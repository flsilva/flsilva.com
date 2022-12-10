import * as React from 'react'
import { Link } from "gatsby"
import { changeThemeButtonContainer, mainNav } from './MainNav.module.css'
import { MoonIconDarkSvg } from '../components/svg/MoonIconDarkSvg'
import { SunIconLightSvg } from '../components/svg/SunIconLightSvg'

export const MainNav: React.FC = () => {
  return (
    <nav id="main-nav" className={mainNav}>
      <ul>
        <li>
          <a href="/" id="main-nav-blog-button">Blog</a>
        </li>
        <li>
          <a href="/portfolio/" id="main-nav-portfolio-button">Portfolio</a>
        </li>
        <li>
          <a href="/opensource/" id="main-nav-opensource-button">Open Source</a>
        </li>
        <li>
          <Link to="/resume/">Resume</Link>
        </li>
        <li className={changeThemeButtonContainer}>
          <button id="change-theme-button" type="button">
            <MoonIconDarkSvg />
            <SunIconLightSvg />
          </button>
        </li>
      </ul>
    </nav>
  )
}
