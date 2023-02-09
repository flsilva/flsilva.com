import * as React from 'react'

export const onPreRenderHTML = ({ getHeadComponents, replaceHeadComponents }) => {
  const headComponents = getHeadComponents()
  headComponents.push(<script src="/theming.js" key="theming-js" />)
  headComponents.push(<script src="/main-nav-menu.js" key="main-nav-menu-js" />)
  headComponents.push(<script src="/home.js" key="home-js" />)
  replaceHeadComponents(headComponents)
}