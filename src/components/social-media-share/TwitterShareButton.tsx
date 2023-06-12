import * as React from 'react';

import { TwitterLogoSvg } from '../svg/TwitterLogoSvg';
import { anchor, anchorTwitter } from './SocialMediaShareButton.module.css';

export interface TwitterShareButtonProps {
  hashtags?: string;
  text: string;
  url: string;
  via?: string;
}

export const TwitterShareButton: React.FC<TwitterShareButtonProps> = ({
  hashtags = '',
  text,
  url,
  via = '',
}) => (
  <a
    className={[anchor, anchorTwitter].join(' ')}
    href={`https://twitter.com/intent/tweet?text=${text}&url=${url}&hashtags=${hashtags}&via=${via}`}
    target="_blank"
    rel="noreferrer"
  >
    <TwitterLogoSvg />
  </a>
);
