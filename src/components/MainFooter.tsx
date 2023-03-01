import * as React from 'react'
import { container, containerContent, nav } from './MainFooter.module.css'
import { GitHubLogoSvg } from './svg/GitHubLogoSvg'
import { LinkedInLogoSvg } from './svg/LinkedInLogoSvg'
import { TwitterLogoSvg } from './svg/TwitterLogoSvg'

export const MainFooter: React.FC = () => {
  return (
    <footer className={container}>
      <div className={containerContent}>
        <p>© 2012-2023 Flavio Silva</p>
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
          </ul>
        </nav>
      </div>
    </footer>
  )
}
