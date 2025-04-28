import { twMerge } from "tailwind-merge";

import { ClassNamePropsOptional } from "../ClassNameProps";
import { FacebookShareButton } from "./FacebookShareButton";
import { LinkedInShareButton } from "./LinkedInShareButton";
import { TwitterShareButton } from "./TwitterShareButton";

export interface SocialMediaShareButtonsProps extends ClassNamePropsOptional {
  readonly hashtags?: Array<string>;
  readonly tweetText?: string;
  readonly tweetVia?: string;
  readonly url: string;
}

const joinHashtags = (
  hashtags: Array<string> | undefined
): string | undefined => {
  if (hashtags && hashtags.length > 0) return hashtags.join(",");
  return undefined;
};

export const SocialMediaShareButtons: React.FC<
  SocialMediaShareButtonsProps
> = ({ className, hashtags, tweetText, tweetVia, url }) => (
  <div className={twMerge("flex flex-row", className)}>
    {tweetText && (
      <TwitterShareButton
        hashtags={joinHashtags(hashtags)}
        text={tweetText}
        url={url}
        via={tweetVia}
      />
    )}
    <LinkedInShareButton url={url} />
    <FacebookShareButton url={url} />
  </div>
);
