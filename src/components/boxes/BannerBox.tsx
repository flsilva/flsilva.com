import * as React from 'react';
import { container } from './BannerBox.module.css';

export const BannerBox: React.FC = () => (
  <div className={container}>
    <p>
      I&apos;m available to deliver your next SaaS MVP in <b>2-8 weeks</b>, full-stack with the new{' '}
      Next.js App Router.{' '}
      <a href="mailto:flsilva7@gmail.com">
        <b>Let&apos;s build your SaaS product</b>
      </a>
      .
    </p>
  </div>
);
