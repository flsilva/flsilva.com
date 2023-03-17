import * as React from 'react';

import { ChildrenProps } from './ChildrenProps';

interface ImageWithCaptionProps extends ChildrenProps {
  caption: React.ReactNode;
}

export const ImageWithCaption: React.FC<ImageWithCaptionProps> = ({ caption, children }) => (
  <figure>
    {children}
    <figcaption>{caption}</figcaption>
  </figure>
);
