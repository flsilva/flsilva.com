import * as React from 'react'
import { Link } from "gatsby"

import { container } from './PageContentHeader.module.css'

interface PageContentHeaderProps {
  linkTo: string;
  title: string;
}

export const PageContentHeader: React.FC<PageContentHeaderProps> = ({ linkTo, title }) => {
  return (
    <header className={container}>
      <Link to={linkTo}><h3>{title}</h3></Link>
    </header>
  )
}
