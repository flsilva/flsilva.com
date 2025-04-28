import { ClassNamePropsOptional } from "../ClassNameProps";
import { CreativeCommonsBySvg } from "../svg/CreativeCommonsBySvg";
import { CreativeCommonsCcSvg } from "../svg/CreativeCommonsCcSvg";
import { A, P } from "../typography/Typography";
import { InfoBox } from "../boxes/InfoBox";

export interface CreativeCommonsByProps extends ClassNamePropsOptional {
  readonly authorName: string;
  readonly authorUrl: string;
  readonly workTitle: string;
}

export const CreativeCommonsBy: React.FC<CreativeCommonsByProps> = ({
  authorName,
  authorUrl,
  className,
  workTitle,
}) => (
  <InfoBox className={className}>
    <A rel="license" href="http://creativecommons.org/licenses/by/4.0/">
      <div className="flex flex-row gap-4">
        <CreativeCommonsCcSvg className="w-12 h-12 md:w-[3rem] md:h-[3rem]" />
        <CreativeCommonsBySvg className="w-12 h-12 md:w-[3rem] md:h-[3rem]" />
      </div>
    </A>
    <P>
      <span
        {...{ "xmlns:dct": "http://purl.org/dc/terms/" }}
        property="dct:title"
      >
        <em>{workTitle}</em>
      </span>{" "}
      by{" "}
      <A
        {...{ "xmlns:cc": "http://creativecommons.org/ns#" }}
        href={authorUrl}
        property="cc:attributionName"
        rel="cc:attributionURL"
      >
        {authorName}
      </A>{" "}
      is licensed under a{" "}
      <A rel="license" href="http://creativecommons.org/licenses/by/4.0/">
        Creative Commons Attribution 4.0 International License
      </A>
      .
    </P>
  </InfoBox>
);
