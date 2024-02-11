import * as React from 'react';
import { container, logo } from './Logo.module.css';

export const Logo: React.FC = () => (
  <h1 className={logo}>
    <a href="/">fls</a>
  </h1>
);

/*
import { LogoBox2Svg } from './LogoBox2Svg';
import { container, logo } from './Logo.module.css';

export const Logo: React.FC = () => (
  <div className={container}>
    <div>
      <LogoBox2Svg />
    </div>
    <h1 className={logo}>
      <a href="/">flsilva</a>
    </h1>
  </div>
);
*/
