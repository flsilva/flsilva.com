import * as React from 'react';
import { ChildrenProps } from '../ChildrenProps';

import { container } from './InfoBox.module.css';

export const InfoBox: React.FC<ChildrenProps> = ({ children }) => (
  <div className={container}>
    {children}
  </div>
);
