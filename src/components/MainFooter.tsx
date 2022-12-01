import * as React from 'react'
import { mainFooter, mainFooterContent, footerNav } from './MainFooter.module.css'
import { GitHubLogoSvg } from './GitHubLogoSvg'
import { LinkedInLogoSvg } from './LinkedInLogoSvg'
import { TwitterLogoSvg } from './TwitterLogoSvg'
/*
import { MainHeader } from './MainHeader'

export const MainFooter: React.FC = () => {
  return (
    <footer className={mainFooter}>
      <div className={footerInner}>
        <nav>
          <MainHeader />
          </nav>
        </div>
    </footer>
  )
}
*/

export const MainFooter: React.FC = () => {
  return (
    <footer className={mainFooter}>
      <div className={mainFooterContent}>
        <p>© 2012-2022 Flavio Silva</p>
        <nav className={footerNav}>
          <ul>
            <li>
              <a href="http://www.github.com/flsilva" target="_blank">
                <GitHubLogoSvg width="3rem" height="3rem" />
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
