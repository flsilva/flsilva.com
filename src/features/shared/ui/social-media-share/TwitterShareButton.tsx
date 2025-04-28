import { TwitterLogoSvg } from "../svg/TwitterLogoSvg";

export interface TwitterShareButtonProps {
  hashtags?: string;
  text: string;
  url: string;
  via?: string;
}

export const TwitterShareButton: React.FC<TwitterShareButtonProps> = ({
  hashtags = "",
  text,
  url,
  via = "",
}) => (
  <a
    className="flex items-center justify-center w-12 h-12 p-2 bg-[#50abf1]"
    href={`https://twitter.com/intent/tweet?text=${text}&url=${url}&hashtags=${hashtags}&via=${via}`}
    target="_blank"
    rel="noreferrer"
  >
    <TwitterLogoSvg className="w-6 h-6 [&_path]:fill-white" />
  </a>
);
