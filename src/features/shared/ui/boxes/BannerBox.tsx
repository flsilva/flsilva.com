import { twMerge } from "tailwind-merge";

import { A, SmallText } from "../typography/Typography";
import { InfoBox } from "./InfoBox";

export const BannerBox = ({ className }: { readonly className?: string }) => (
  <InfoBox className={twMerge("p-4 border-1 rounded-[20px]", className)}>
    <SmallText>
      I&#39;m available for challenging remote roles. Let&apos;s{" "}
      <A
        className="text-primary-text text-sm underline"
        href="mailto:flsilva7@gmail.com"
      >
        get in touch
      </A>
      .
    </SmallText>
  </InfoBox>
);
