import * as React from 'react'
import { Link } from "gatsby"

import { header } from './PageContentHeader.module.css'

interface PageContentHeaderProps {
  linkTo: string;
  title: string;
}

export const PageContentHeader: React.FC<PageContentHeaderProps> = ({ linkTo, title }) => {
  return (
    <header className={header}>
      <Link to={linkTo}><h3>{title}</h3></Link>
    </header>
  )
}
