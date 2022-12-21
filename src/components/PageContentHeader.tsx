import * as React from 'react'

import { header } from './PageContentHeader.module.css'

interface PageContentHeaderProps {
  title: string;
}

export const PageContentHeader: React.FC<PageContentHeaderProps> = ({ title }) => {
  return (
    <header className={header}>
      <h3>{title}</h3>
    </header>
  )
}
