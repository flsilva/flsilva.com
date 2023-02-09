import * as React from 'react'
import { Link } from "gatsby"

import { ChildrenProps } from '../ChildrenProps'
import { linkButton } from './LinkButton.module.css'

interface LinkButtonProps extends ChildrenProps {
  alignSelf?: 'flex-start' | 'flex-end'; // TODO: implememnt support to this feature or think something else like a <FlexStart /> and <FlexEnd /> components (not sure if it would work as intended here, i.e., align button to start or end of screen)
  external?: boolean;
  target?: string;
  text: string;
  to: string;
}

export const LinkButton: React.FC<LinkButtonProps> = ({ alignSelf, children, external, target, to, ...props }) => {
  return (external ?
    <a className={linkButton} href={to} target={target || '_self'} {...props}>{children}</a>
    :
    <Link className={linkButton} align-self={alignSelf} to={to} {...props}>{children}</Link>)
}
