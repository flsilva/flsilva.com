import * as React from 'react'
import { MainNav } from './MainNav'
import { Logo } from './logo/Logo'
import { HamburgerMenuSvg } from './svg/HamburgerMenuSvg'
import { container, logoAndHamburgerMenuButtonContainer, hamburgerMenuButton } from './MainHeader.module.css'

export const MainHeader: React.FC = () => {
  return (
    <header className={container}>
      <div className={logoAndHamburgerMenuButtonContainer}>
        <Logo />
        <button id="hamburger-menu-button" className={hamburgerMenuButton} type="button">
          <HamburgerMenuSvg />
          </button>
      </div>
      <MainNav />
    </header>
  )
}
