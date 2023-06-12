import * as React from 'react';

export const onPreRenderHTML = ({ getHeadComponents, replaceHeadComponents }) => {
  const headComponents = getHeadComponents();
  headComponents.push(<script src="/theming.js" key="theming-js" defer />);
  headComponents.push(<script src="/main-nav-menu.js" key="main-nav-menu-js" defer />);
  headComponents.push(<script src="/home.js" key="home-js" defer />);
  headComponents.push(<script src="/portfolio-project.js" key="portfolio-project-js" defer />);

  replaceHeadComponents(headComponents);
};