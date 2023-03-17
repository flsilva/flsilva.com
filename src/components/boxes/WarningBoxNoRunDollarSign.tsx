import * as React from 'react';

import { WarningBox } from './WarningBox';

export const WarningBoxNoRunDollarSign: React.FC = () => (
  <WarningBox>
    <p>
      Do not type the <code>$</code> sign you see in the command examples in this article.
      That&#39;s just an indicator that you should run the command that follows it in your command
      line tool.
    </p>
  </WarningBox>
);
