import * as React from 'react';

import { ChildrenProps } from '../ChildrenProps';
import { linkButton } from './LinkButton.module.css';

export interface LinkButtonProps extends ChildrenProps {
  alignSelf?: 'flex-start' | 'flex-end';
  target?: string;
  to: string;
}

export const LinkButton: React.FC<LinkButtonProps> = ({
  alignSelf = 'flex-start',
  children,
  target,
  to,
  ...props
}) => (
  <a
    className={linkButton}
    href={to}
    target={target || '_self'}
    data-align-self={alignSelf}
    {...props}
  >
    {children}
  </a>
);
