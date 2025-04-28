import { LinkedInInLogoSvg } from "../svg/LinkedInInLogoSvg";

export interface LinkedInShareButtonProps {
  url: string;
}

export const LinkedInShareButton: React.FC<LinkedInShareButtonProps> = ({
  url,
}) => (
  <a
    className="flex items-center justify-center w-12 h-12 p-2 bg-[#0a66c2]"
    href={`https://www.linkedin.com/sharing/share-offsite/?url=${url}`}
    target="_blank"
    rel="noreferrer"
  >
    <LinkedInInLogoSvg className="w-6 h-6 [&_path]:fill-white" />
  </a>
);
