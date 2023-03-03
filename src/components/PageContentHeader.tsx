import * as React from 'react';

import { container } from './PageContentHeader.module.css';

interface PageContentHeaderProps {
  linkTo: string;
  title: string;
}

export const PageContentHeader: React.FC<PageContentHeaderProps> = ({ linkTo, title }) => (
  <header className={container}>
    <a href={linkTo}>
      <h3>{title}</h3>
    </a>
  </header>
);
