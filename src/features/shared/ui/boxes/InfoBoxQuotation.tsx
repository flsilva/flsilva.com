import { ChildrenProps } from "../ChildrenProps";
import { Quotation } from "../typography/Quotation";
import { InfoBox } from "./InfoBox";

export const InfoBoxQuotation = ({ children }: ChildrenProps) => (
  <InfoBox className="pl-3 pt-4 pb-5 md:pl-4 md:pb-8">
    <Quotation>{children}</Quotation>
  </InfoBox>
);
