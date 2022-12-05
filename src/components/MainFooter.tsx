import * as React from 'react'
import { mainFooter, mainFooterContent, footerNav } from './MainFooter.module.css'
import { GitHubLogoDarkSvg } from './svg/GitHubLogoDarkSvg'
import { GitHubLogoLightSvg } from './svg/GitHubLogoLightSvg'
import { LinkedInLogoDarkSvg } from './svg/LinkedInLogoDarkSvg'
import { LinkedInLogoLightSvg } from './svg/LinkedInLogoLightSvg'
import { TwitterLogoDarkSvg } from './svg/TwitterLogoDarkSvg'
import { TwitterLogoLightSvg } from './svg/TwitterLogoLightSvg'

export const MainFooter: React.FC = () => {
  return (
    <footer className={mainFooter}>
      <div className={mainFooterContent}>
        <p>© 2012-2022 Flavio Silva</p>
        <nav className={footerNav}>
          <ul>
            <li>
              <a href="http://www.github.com/flsilva" target="_blank">
                <GitHubLogoDarkSvg />
                <GitHubLogoLightSvg />
              </a>
            </li>
            <li>
              <a href="http://www.twitter.com/flsilva7" target="_blank">
                <TwitterLogoDarkSvg />
                <TwitterLogoLightSvg />
              </a>
            </li>
            <li>
              <a href="http://www.linkedin.com/in/flsilva" target="_blank">
                <LinkedInLogoDarkSvg />
                <LinkedInLogoLightSvg />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  )
}
