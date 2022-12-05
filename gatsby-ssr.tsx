import * as React from 'react'

export const onPreRenderHTML = ({ getHeadComponents, replaceHeadComponents }) => {
  const headComponents = getHeadComponents()
  headComponents.push(<script src="/theming.js" key="theming-js" />)
  replaceHeadComponents(headComponents)
}