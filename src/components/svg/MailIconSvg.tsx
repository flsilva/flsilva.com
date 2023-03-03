import * as React from 'react';

export const MailIconSvg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="3.5rem"
    height="3.5rem"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fill="var(--primary-bg-color)"
      d="M15 2.5H1a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1zm-1.3 1.25L8.42 8.56a.62.62 0 0 1-.84 0L2.3 3.75zm-12.45 8.5V4.48l5.49 5a1.86 1.86 0 0 0 2.52 0l5.49-5v7.77z"
    />
  </svg>
);