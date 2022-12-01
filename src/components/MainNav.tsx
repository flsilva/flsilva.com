import * as React from 'react'
import { mainNav } from './MainNav.module.css'

export const MainNav: React.FC = () => {
  return (
    <nav className={mainNav}>
      <ul>
        <li>
          <a href="/" id="main-nav-blog-button">Blog</a>
        </li>
        <li>
          <a href="/portfolio/" id="main-nav-portfolio-button">Portfolio</a>
        </li>
        <li>
          <a href="/services/" id="main-nav-services-button">Services</a>
        </li>
        <li>
          <a href="/opensource/" id="main-nav-opensource-button">Open Source</a>
        </li>
        <li>
          <a href="/resume/" id="main-nav-resume-button">Resume</a>
        </li>
        <li>
          <a href="/contact/" id="main-nav-contact-button">Contact</a>
        </li>
      </ul>
    </nav>
  )
}
