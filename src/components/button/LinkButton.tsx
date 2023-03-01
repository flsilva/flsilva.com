import * as React from 'react'
import { Link } from "gatsby"

import { ChildrenProps } from '../ChildrenProps'
import { linkButton } from './LinkButton.module.css'

export interface LinkButtonProps extends ChildrenProps {
  alignSelf?: 'flex-start' | 'flex-end';
  external?: boolean;
  target?: string;
  to: string;
}

export const LinkButton: React.FC<LinkButtonProps> = ({ alignSelf, children, external, target, to, ...props }) => {
  return (external ?
    <a className={linkButton} href={to} target={target || '_self'} {...props}>{children}</a>
    :
    <Link className={linkButton} align-self={alignSelf} to={to} {...props}>{children}</Link>)
}
