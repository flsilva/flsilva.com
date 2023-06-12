import * as React from 'react';

import { CreativeCommonsBySvg } from '../svg/CreativeCommonsBySvg';
import { CreativeCommonsCcSvg } from '../svg/CreativeCommonsCcSvg';
import { ccIconsContainer, container } from './CreativeCommonsBy.module.css';

export interface CreativeCommonsByProps {
  authorName: string;
  authorUrl: string;
  workTitle: string;
}

export const CreativeCommonsBy: React.FC<CreativeCommonsByProps> = ({
  authorName,
  authorUrl,
  workTitle,
}) => (
  <div className={container}>
    <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">
      <div className={ccIconsContainer}>
        <CreativeCommonsCcSvg />
        <CreativeCommonsBySvg />
      </div>
    </a>
    <p>
      <span {...{ 'xmlns:dct': 'http://purl.org/dc/terms/' }} property="dct:title">
        <em>{workTitle}</em>
      </span>{' '}
      by{' '}
      <a
        {...{ 'xmlns:cc': 'http://creativecommons.org/ns#' }}
        href={authorUrl}
        property="cc:attributionName"
        rel="cc:attributionURL"
      >
        {authorName}
      </a>{' '}
      is licensed under a{' '}
      <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">
        Creative Commons Attribution 4.0 International License
      </a>
      .
    </p>
  </div>
);
