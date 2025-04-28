import { FacebookFLogoSvg } from "../svg/FacebookFLogoSvg";

export interface FacebookShareButtonProps {
  url: string;
}

export const FacebookShareButton: React.FC<FacebookShareButtonProps> = ({
  url,
}) => (
  <a
    className="flex items-center justify-center w-12 h-12 p-2 bg-[#405b93]"
    href={`https://www.facebook.com/dialog/share?app_id=359267611157435&display=page&href=${url}&redirect_uri=https://www.facebook.com`}
    target="_blank"
    rel="noreferrer"
  >
    <FacebookFLogoSvg className="w-8 h-8 [&_path]:fill-white" />
  </a>
);
