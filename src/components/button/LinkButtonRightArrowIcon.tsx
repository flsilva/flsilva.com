import * as React from 'react';

import { LinkButton, LinkButtonProps } from './LinkButton';
import { RightArrowIconSvg } from '../svg/RightArrowIconSvg';
import { svg } from './LinkButtonRightArrowIcon.module.css';

export const LinkButtonRightArrowIcon: React.FC<LinkButtonProps & { text: string }> = ({
  text,
  ...props
}) => (
  <LinkButton {...props}>
    {text}
    <RightArrowIconSvg className={svg} />
  </LinkButton>
);
