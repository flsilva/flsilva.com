import * as React from 'react';
import { container } from './BannerBox.module.css';

export const BannerBox: React.FC = () => (
  <div className={container}>
    <p>
      I&#39;m available for challenging remote roles. Let&apos;s{' '}
      <a className="gtm-get-in-touch-mailto-link" href="mailto:flsilva7@gmail.com">
        get in touch
      </a>
      .
    </p>
  </div>
);
