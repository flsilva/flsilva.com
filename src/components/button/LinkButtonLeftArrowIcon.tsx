import * as React from 'react'

import { LinkButton, LinkButtonProps } from './LinkButton'
import { LeftArrowIconSvg } from '../svg/LeftArrowIconSvg'
import { svg } from './LinkButtonLeftArrowIcon.module.css'

export const LinkButtonLeftArrowIcon: React.FC<LinkButtonProps> = ({ text, ...props }) => {
  return (<LinkButton {...props}>
    <LeftArrowIconSvg className={svg} /> {text}
  </LinkButton>)
}
