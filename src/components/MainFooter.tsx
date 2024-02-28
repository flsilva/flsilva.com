import * as React from 'react';
import { container, containerContent, nav } from './MainFooter.module.css';
import { GitHubLogoSvg } from './svg/GitHubLogoSvg';
import { LinkedInLogoSvg } from './svg/LinkedInLogoSvg';
import { MailIconSvg } from './svg/MailIconSvg';
import { TwitterLogoSvg } from './svg/TwitterLogoSvg';

export const MainFooter: React.FC = () => (
  <footer className={container}>
    <div className={containerContent}>
      <p>© 2024 Flavio Silva</p>
      <nav className={nav}>
        <ul>
          <li>
            <a href="http://www.github.com/flsilva" className="gtm-footer-link">
              <GitHubLogoSvg />
            </a>
          </li>
          <li>
            <a href="http://www.twitter.com/flsilva7" className="gtm-footer-link">
              <TwitterLogoSvg />
            </a>
          </li>
          <li>
            <a href="http://www.linkedin.com/in/flsilva" className="gtm-footer-link">
              <LinkedInLogoSvg />
            </a>
          </li>
          <li>
            <a href="mailto:flsilva7@gmail.com" className="gtm-footer-link">
              <MailIconSvg />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </footer>
);
