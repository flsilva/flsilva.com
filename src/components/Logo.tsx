import * as React from 'react'
import { logo } from './Logo.module.css'

export const Logo: React.FC = () => {
  return (
    <h1 className={logo}><a href="/">flsilva.com</a></h1>
  )
}
