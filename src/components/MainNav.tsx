import * as React from 'react'
import { Link } from "gatsby"
import { changeThemeButton, mainNav } from './MainNav.module.css'
import { MoonIconDarkSvg } from '../components/svg/MoonIconDarkSvg'
import { SunIconLightSvg } from '../components/svg/SunIconLightSvg'

export const MainNav: React.FC = () => {
  return (
    <nav className={mainNav}>
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
        <li>
          <button id="change-theme-button" className={changeThemeButton} type="button">
            <MoonIconDarkSvg />
            <SunIconLightSvg />
          </button>
        </li>
      </ul>
    </nav>
  )
}
