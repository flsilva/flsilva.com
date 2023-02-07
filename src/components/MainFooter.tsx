import * as React from 'react'
import { mainFooter, mainFooterContent, footerNav } from './MainFooter.module.css'
import { GitHubLogoSvg } from './svg/GitHubLogoSvg'
import { LinkedInLogoSvg } from './svg/LinkedInLogoSvg'
import { TwitterLogoSvg } from './svg/TwitterLogoSvg'

export const MainFooter: React.FC = () => {
  return (
    <footer className={mainFooter}>
      <div className={mainFooterContent}>
        <p>© 2012-2023 Flavio Silva</p>
        <nav className={footerNav}>
          <ul>
            <li>
              <a href="http://www.github.com/flsilva" target="_blank">
                <GitHubLogoSvg />
              </a>
            </li>
            <li>
              <a href="http://www.twitter.com/flsilva7" target="_blank">
                <TwitterLogoSvg />
              </a>
            </li>
            <li>
              <a href="http://www.linkedin.com/in/flsilva" target="_blank">
                <LinkedInLogoSvg />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  )
}
