import * as React from 'react'
import { MainNav } from './MainNav'
import { Logo } from './logo/Logo'
import { HamburgerMenuDarkSvg } from './svg/HamburgerMenuDarkSvg'
import { HamburgerMenuLightSvg } from './svg/HamburgerMenuLightSvg'
import { mainHeader, logoAndHamburgerMenuButton, hamburgerMenuButton } from './MainHeader.module.css'

export const MainHeader: React.FC = () => {
  return (
    <header className={mainHeader}>
      <div className={logoAndHamburgerMenuButton}>
        <Logo />
        <button id="hamburger-menu-button" className={hamburgerMenuButton} type="button">
          <HamburgerMenuDarkSvg />
          <HamburgerMenuLightSvg />
          </button>
      </div>
      <MainNav />
    </header>
  )
}
