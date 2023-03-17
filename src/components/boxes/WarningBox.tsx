import * as React from 'react';
import { ChildrenProps } from '../ChildrenProps';

import { ExclamationMarkTriangleSvg } from '../svg/ExclamationMarkTriangleSvg';
import { container } from './WarningBox.module.css';

export const WarningBox: React.FC<ChildrenProps> = ({ children }) => (
  <div className={container}>
    <ExclamationMarkTriangleSvg />
    {children}
  </div>
);
