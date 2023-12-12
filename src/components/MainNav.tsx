import * as React from 'react';
import { container } from './MainNav.module.css';

export const MainNav: React.FC = () => (
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
        <a href="/Flavio-Silva-Resume-2023-12-12.pdf">Resume</a>
      </li>
    </ul>
  </nav>
);
