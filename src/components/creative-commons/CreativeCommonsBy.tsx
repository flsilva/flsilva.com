import * as React from 'react';

import { CreativeCommonsBySvg } from '../svg/CreativeCommonsBySvg';
import { CreativeCommonsCcSvg } from '../svg/CreativeCommonsCcSvg';
import { ccIconsContainer, container } from './CreativeCommonsBy.module.css';

export interface CreativeCommonsByProps {
  authorName: string;
  authorURL: string;
  workTitle: string;
  workURL: string;
}

export const CreativeCommonsBy: React.FC<CreativeCommonsByProps> = ({
  authorName,
  authorURL,
  workTitle,
  workURL,
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
        href={authorURL}
        property="cc:attributionName"
        rel="cc:attributionURL"
      >
        {authorName}
      </a>{' '}
      is licensed under a{' '}
      <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">
        Creative Commons Attribution 4.0 International License
      </a>
      .<br />
      Based on a work at{' '}
      <a
        {...{ 'xmlns:dct': 'http://purl.org/dc/terms/' }}
        href={workURL}
        rel="dct:source"
        style={{ lineBreak: 'anywhere' }}
      >
        {workURL}
      </a>
      .
    </p>
  </div>
);

/*
<a rel="license" href="http://creativecommons.org/licenses/by/4.0/">
  <img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by/4.0/88x31.png" />
</a>
<br />
<span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">Introduction to Git</span> by <a xmlns:cc="http://creativecommons.org/ns#" href="http://flsilva.com" property="cc:attributionName" rel="cc:attributionURL">Flavio Silva</a> is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution 4.0 International License</a>.<br />Based on a work at <a xmlns:dct="http://purl.org/dc/terms/" href="http://flsilva.com/blog/introducing-git/" rel="dct:source">http://flsilva.com/blog/introducing-git/</a>.
*/
