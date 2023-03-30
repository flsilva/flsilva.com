import * as React from 'react';
import { ChildrenProps } from '../ChildrenProps';
import {
  recommendationsList,
  recommendationsListContainer,
  title,
  textTapToSee,
} from './Recommendations.module.css';

export const Recommendations: React.FC<ChildrenProps> = ({ children }) => (
  <>
    <h2 className={title}>Recommendations</h2>
    <small className={textTapToSee}>Tap to see on LinkedIn</small>
    <div className={recommendationsListContainer}>
      <div id="recommendations-list" className={recommendationsList}>
        {children}
      </div>
    </div>
  </>
);
