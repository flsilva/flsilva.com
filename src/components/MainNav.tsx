import * as React from 'react';
import { container, caseStudyItem } from './MainNav.module.css';

export const MainNav: React.FC = () => (
  <nav id="main-nav" className={container}>
    <ul>
      <li>
        <a href="/blog/" className="gtm-main-menu-link">
          Blog
        </a>
      </li>
      <li>
        <a href="/portfolio/" className="gtm-main-menu-link">
          Portfolio
        </a>
      </li>
      <li>
        <a href="/open-source/" className="gtm-main-menu-link">
          Open Source
        </a>
      </li>
      <li>
        <a href="/Flavio-Silva-Resume-2024-11-03.pdf" className="gtm-main-menu-link">
          Resume
        </a>
      </li>
      <li>
        <a href="/opentask-showcase/" className={`${caseStudyItem} gtm-main-menu-link`}>
          OpenTask
          <span>new</span>
        </a>
      </li>
    </ul>
  </nav>
);
