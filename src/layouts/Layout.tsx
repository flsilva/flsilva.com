import * as React from 'react'
import { MainHeader } from '../components/MainHeader'
import { MainFooter } from '../components/MainFooter'
import { ChildrenProps } from '../components/ChildrenProps'
import { pageMainContent, pageOuterContainer, pageInnerContainer, pageHeaderAndMainContent } from './Layout.module.css'

export const Layout: React.FC<ChildrenProps> = ({ children }) => {
  return (
    <div className={pageOuterContainer}>
      <div className={pageInnerContainer}>
        <div className={pageHeaderAndMainContent}>
          <MainHeader />
          <main className={pageMainContent}>
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
