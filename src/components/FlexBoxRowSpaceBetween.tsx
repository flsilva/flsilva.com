import * as React from 'react'

import { ChildrenProps } from './ChildrenProps'
import { container } from './FlexBoxRowSpaceBetween.module.css'

export const FlexBoxRowSpaceBetween: React.FC<ChildrenProps> = ({ children, ...props }) => {
  return (
    <div className={container} {...props}>
      {children}
    </div>
  )
}
