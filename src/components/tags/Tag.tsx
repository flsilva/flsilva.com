import * as React from 'react';

import { tag } from './Tag.module.css';

interface TagProps {
  readonly children: string;
}

export const Tag: React.FC<TagProps> = ({ children }) => (
  <a href={`/blog/${children}`} className={tag}>
    <small>{children}</small>
  </a>
);
