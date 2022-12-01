import * as React from 'react'
import { MainNav } from '../components/MainNav'
import { Logo } from '../components/Logo'
import { mainHeader } from './MainHeader.module.css'

export const MainHeader: React.FC = () => {
  return (
    <header className={mainHeader}>
      <Logo />
      <MainNav />
    </header>
  )
}
