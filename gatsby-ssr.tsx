import * as React from 'react'

export const onPreRenderHTML = ({ getHeadComponents, replaceHeadComponents }) => {
  const headComponents = getHeadComponents()
  headComponents.push(<script src="/global.js" key="global-js" />)
  replaceHeadComponents(headComponents)
}