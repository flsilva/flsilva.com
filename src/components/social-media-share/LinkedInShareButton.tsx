import * as React from 'react';

import { LinkedInInLogoSvg } from '../svg/LinkedInInLogoSvg';
import { anchor, anchorLinkedin } from './SocialMediaShareButton.module.css';

export interface LinkedInShareButtonProps {
  url: string;
}

export const LinkedInShareButton: React.FC<LinkedInShareButtonProps> = ({ url }) => (
  <a
    className={[anchor, anchorLinkedin].join(' ')}
    href={`https://www.linkedin.com/sharing/share-offsite/?url=${url}`}
    target="_blank"
    rel="noreferrer"
  >
    <LinkedInInLogoSvg />
  </a>
);
