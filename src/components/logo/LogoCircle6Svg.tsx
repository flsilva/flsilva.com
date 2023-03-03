import * as React from 'react';

export const LogoCircle6Svg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="2rem"
    height="2rem"
    fill="var(--primary-text-color)"
    viewBox="0 0 32 32"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M26 16a3.961 3.961 0 0 0-2.02.566l-2.859-2.859 2.293-2.293a2 2 0 0 0 0-2.828l-6-6a2 2 0 0 0-2.828 0l-6 6a2 2 0 0 0 0 2.828l2.293 2.293-2.859 2.859a4.043 4.043 0 1 0 1.414 1.414l2.859-2.859 2.293 2.293a1.977 1.977 0 0 0 .414.31V22h-3v8h8v-8h-3v-4.277a1.977 1.977 0 0 0 .414-.309l2.293-2.293 2.859 2.859A3.989 3.989 0 1 0 26 16ZM8 20a2 2 0 1 1-2-2 2.002 2.002 0 0 1 2 2Zm10 4v4h-4v-4h4Zm-2-8-6-6 6-6 6 6Zm10 6a2 2 0 1 1 2-2 2.002 2.002 0 0 1-2 2Z" />
    <path
      style={{
        fill: 'none',
      }}
      d="M0 0h32v32H0z"
    />
  </svg>
);
