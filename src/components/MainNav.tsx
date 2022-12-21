import * as React from 'react'
import { Link } from "gatsby"
import { changeThemeButtonContainer, mainNav } from './MainNav.module.css'
import { MoonIconSvg } from '../components/svg/MoonIconSvg'
import { SunIconSvg } from '../components/svg/SunIconSvg'

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
          <a href="/open-source/" id="main-nav-opensource-button">Open Source</a>
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
