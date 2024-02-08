import * as React from 'react';
import { container } from './BannerBox.module.css';

export const BannerBox: React.FC = () => (
  <div className={container}>
    <p>
      I&apos;m available to deliver your next SaaS MVP in <b>4-8 weeks</b>, full-stack with the new{' '}
      <a href="https://flsilva.com/blog/opentask-nextjs-app-router-case-study/">
        Next.js App Router.
      </a>{' '}
      Let&apos;s{' '}
      <a href="mailto:flsilva7@gmail.com">
        build something <b>unique</b>
      </a>
      .
    </p>
  </div>
);
