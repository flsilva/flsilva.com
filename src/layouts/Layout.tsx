import * as React from 'react'
import { MainHeader } from '../components/MainHeader'
import { MainFooter } from '../components/MainFooter'
import { pageOuterContainer, pageInnerContainer, pageHeaderAndMainContent } from './Layout.module.css'

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className={pageOuterContainer}>
      <div className={pageInnerContainer}>
        <div className={pageHeaderAndMainContent}>
          <MainHeader />
          <main>
            <article>
              {children}
          </article>
          </main>
        </div>
      </div>
      <MainFooter />
    </div>
  )
}
