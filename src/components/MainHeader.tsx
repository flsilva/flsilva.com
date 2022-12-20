import * as React from 'react'
import { MainNav } from './MainNav'
import { Logo } from './logo/Logo'
import { HamburgerMenuSvg } from './svg/HamburgerMenuSvg'
import { mainHeader, logoAndHamburgerMenuButton, hamburgerMenuButton } from './MainHeader.module.css'

export const MainHeader: React.FC = () => {
  return (
    <header className={mainHeader}>
      <div className={logoAndHamburgerMenuButton}>
        <Logo />
        <button id="hamburger-menu-button" className={hamburgerMenuButton} type="button">
          <HamburgerMenuSvg />
          </button>
      </div>
      <MainNav />
    </header>
  )
}
