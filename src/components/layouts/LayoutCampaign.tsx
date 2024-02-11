import * as React from 'react';
import { MainHeader } from '../MainHeader';
import { MainFooter } from '../MainFooter';
import { ChildrenProps } from '../ChildrenProps';
import {
  pageMainContent,
  pageOuterContainer,
  pageInnerContainer,
  pageHeaderAndMainContent,
} from './Layout.module.css';

export const LayoutCampaign: React.FC<ChildrenProps> = ({ children }): JSX.Element => (
  <div className={pageOuterContainer}>
    <div className={pageInnerContainer}>
      <div className={pageHeaderAndMainContent}>
        <MainHeader />
        <main className={pageMainContent}>
          <article>{children}</article>
        </main>
      </div>
    </div>
    <MainFooter />
  </div>
);
