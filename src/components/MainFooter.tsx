import * as React from 'react';
import { container, containerContent, nav } from './MainFooter.module.css';
import { GitHubLogoSvg } from './svg/GitHubLogoSvg';
import { LinkedInLogoSvg } from './svg/LinkedInLogoSvg';
import { MailIconSvg } from './svg/MailIconSvg';
import { TwitterLogoSvg } from './svg/TwitterLogoSvg';

export const MainFooter: React.FC = () => (
  <footer className={container}>
    <div className={containerContent}>
      <p>© 2023 Flavio Silva</p>
      <nav className={nav}>
        <ul>
          <li>
            <a href="http://www.github.com/flsilva">
              <GitHubLogoSvg />
            </a>
          </li>
          <li>
            <a href="http://www.twitter.com/flsilva7">
              <TwitterLogoSvg />
            </a>
          </li>
          <li>
            <a href="http://www.linkedin.com/in/flsilva">
              <LinkedInLogoSvg />
            </a>
          </li>
          <li>
            <a href="mailto:flsilva7@gmail.com">
              <MailIconSvg />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </footer>
);
