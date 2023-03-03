import * as React from 'react';

import { OpenQuoteIconSvg } from '../svg/OpenQuoteIconSvg';
import { ChildrenProps } from '../ChildrenProps';
import {
  recommendationContainer,
  recommendedByContainer,
  recommendedBySignature,
  recommendationContent,
} from './Recommendation.module.css';

interface RecommendationProps extends ChildrenProps {
  readonly imgComponent: React.ReactNode;
  readonly name: string;
  readonly position: string;
}

export const Recommendation: React.FC<RecommendationProps> = ({
  children,
  imgComponent,
  name,
  position,
}) => (
  <div className={recommendationContainer}>
    <OpenQuoteIconSvg />
    <div className={recommendationContent}>
      <p>{children}</p>
      <div className={recommendedByContainer}>
        {imgComponent}
        <div className={recommendedBySignature}>
          <small>{name}</small>
          <small>{position}</small>
        </div>
      </div>
    </div>
  </div>
);
