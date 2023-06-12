import * as React from 'react';

import { FacebookShareButton } from './FacebookShareButton';
import { LinkedInShareButton } from './LinkedInShareButton';
import { TwitterShareButton } from './TwitterShareButton';
import { container } from './SocialMediaShareButtons.module.css';

export interface SocialMediaShareButtonsProps {
  hashtags?: Array<string>;
  tweetText: string;
  tweetVia?: string;
  url: string;
}

const joinHashtags = (hashtags: Array<string> | undefined): string | undefined => {
  if (hashtags && hashtags.length > 0) return hashtags.join(',');
  return undefined;
};

export const SocialMediaShareButtons: React.FC<SocialMediaShareButtonsProps> = ({
  hashtags,
  tweetText,
  tweetVia,
  url,
}) => (
  <div className={container}>
    <TwitterShareButton
      hashtags={joinHashtags(hashtags)}
      text={tweetText}
      url={url}
      via={tweetVia}
    />
    <LinkedInShareButton url={url} />
    <FacebookShareButton url={url} />
  </div>
);
