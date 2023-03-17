import * as React from 'react';

import { ChildrenProps } from './ChildrenProps';
import { container } from './ImageWithCaption.module.css';

interface ImageWithCaptionProps extends ChildrenProps {
  caption: React.ReactNode;
}

export const ImageWithCaption: React.FC<ImageWithCaptionProps> = ({ caption, children }) => (
  <figure className={container}>
    {children}
    <figcaption>{caption}</figcaption>
  </figure>
);
