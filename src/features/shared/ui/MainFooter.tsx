import { GitHubLogoSvg } from "./svg/GitHubLogoSvg";
import { LinkedInLogoSvg } from "./svg/LinkedInLogoSvg";
import { MailIconSvg } from "./svg/MailIconSvg";
import { TwitterLogoSvg } from "./svg/TwitterLogoSvg";
import { SmallText } from "./typography/Typography";

export const MainFooter = () => (
  <footer className="flex flex-row w-full justify-center bg-primary-text">
    <div className="flex flex-col-reverse md:flex-row w-full max-w-5xl items-center justify-between pb-7 md:p-8">
      <SmallText className="text-primary-bg">© 2025 Flavio Silva</SmallText>
      <nav className="justify-between">
        <ul className="flex flex-row items-center justify-between mt-8 mb-8 pl-0">
          <li className="flex m-0 ml-0">
            <a href="http://www.github.com/flsilva" className="gtm-footer-link">
              <GitHubLogoSvg />
            </a>
          </li>
          <li className="flex m-0 ml-8">
            <a
              href="http://www.twitter.com/flsilva7"
              className="gtm-footer-link"
            >
              <TwitterLogoSvg />
            </a>
          </li>
          <li className="flex m-0 ml-8">
            <a
              href="http://www.linkedin.com/in/flsilva"
              className="gtm-footer-link"
            >
              <LinkedInLogoSvg />
            </a>
          </li>
          <li className="flex m-0 ml-8">
            <a href="mailto:flsilva7@gmail.com" className="gtm-footer-link">
              <MailIconSvg />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </footer>
);
