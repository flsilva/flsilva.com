import * as React from 'react';

import { FacebookFLogoSvg } from '../svg/FacebookFLogoSvg';
import { anchor, anchorFacebook } from './SocialMediaShareButton.module.css';

export interface FacebookShareButtonProps {
  url: string;
}

export const FacebookShareButton: React.FC<FacebookShareButtonProps> = ({ url }) => (
  <a
    className={[anchor, anchorFacebook].join(' ')}
    href={`https://www.facebook.com/dialog/share?app_id=359267611157435&display=page&href=${url}&redirect_uri=https://www.facebook.com`}
    target="_blank"
    rel="noreferrer"
  >
    <FacebookFLogoSvg />
  </a>
);
