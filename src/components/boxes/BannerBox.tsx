import * as React from 'react';
import { container } from './BannerBox.module.css';

export const BannerBox: React.FC = () => (
  <div className={container}>
    <p>
      I&apos;m available to deliver your SaaS MVP <b>in a few weeks</b>, full-stack with the new{' '}
      Next.js App Router.{' '}
      <a href="mailto:flsilva7@gmail.com" className="gtm-top-message-cta-link">
        <b>Accelerate Your MVP Launch Now</b>
      </a>
      .
    </p>
  </div>
);
