import * as React from 'react';
import { LeftArrowIconSvg } from '../svg/LeftArrowIconSvg';
import { RightArrowIconSvg } from '../svg/RightArrowIconSvg';
import { ChildrenProps } from '../ChildrenProps';
import {
  recommendationsList,
  recommendationsListContainer,
  title,
  textTapToSee,
  recommendationIndicator,
  recommendationsButtons,
  nextButton,
  prevButton,
} from './Recommendations.module.css';

export const Recommendations: React.FC<ChildrenProps> = ({ children }) => (
  <>
    <h3 className={title}>Recommendations</h3>
    <small className={textTapToSee}>Tap to see on LinkedIn</small>
    <div className={recommendationsListContainer}>
      <div id="recommendations-list" className={recommendationsList}>
        {children}
      </div>
    </div>
    <div id="recommendations-buttons" className={recommendationsButtons}>
      <div id="prev-button" className={prevButton}>
        <LeftArrowIconSvg />
      </div>
      <div className={[recommendationIndicator, 'recommendation-indicator'].join(' ')} />
      <div className={[recommendationIndicator, 'recommendation-indicator'].join(' ')} />
      <div className={[recommendationIndicator, 'recommendation-indicator'].join(' ')} />
      <div id="next-button" className={nextButton}>
        <RightArrowIconSvg />
      </div>
    </div>
  </>
);
