import * as React from 'react'
import { changeThemeButtonContainer, container } from './MainNav.module.css'
import { MoonIconSvg } from '../components/svg/MoonIconSvg'
import { SunIconSvg } from '../components/svg/SunIconSvg'

export const MainNav: React.FC = () => {
  return (
    <nav id="main-nav" className={container}>
      <ul>
        <li>
          <a href="/blog/">Blog</a>
        </li>
        <li>
          <a href="/portfolio/">Portfolio</a>
        </li>
        <li>
          <a href="/open-source/">Open Source</a>
        </li>
        <li>
          <a href="/resume/">Resume</a>
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
