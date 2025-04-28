import Image from "next/image";

import { ChildrenProps } from "../ChildrenProps";
import { OpenQuoteIconSvg } from "../svg/OpenQuoteIconSvg";
import { SmallText } from "../typography/Typography";

interface RecommendationProps extends ChildrenProps {
  image: string;
  name: string;
  position: string;
}

export const Recommendation = ({
  children,
  image,
  name,
  position,
}: RecommendationProps) => (
  <div className="flex flex-col">
    <OpenQuoteIconSvg />
    <div>
      <SmallText>{children}</SmallText>
      <div className="flex flex-row mt-2">
        <Image
          src={image}
          alt={name}
          width={48}
          height={48}
          className="rounded-full mt-4"
        />
        <div className="flex flex-col justify-center mt-3.5 ml-1.5">
          <SmallText>{name}</SmallText>
          <SmallText>{position}</SmallText>
        </div>
      </div>
    </div>
  </div>
);
