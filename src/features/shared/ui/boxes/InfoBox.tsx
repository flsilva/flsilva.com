import { twMerge } from "tailwind-merge";

import { ChildrenProps } from "../ChildrenProps";
import { ClassNamePropsOptional } from "../ClassNameProps";
import { textClassName } from "../typography/textClassName";
import { ExclamationMarkTriangleSvg } from "../svg/ExclamationMarkTriangleSvg";

export interface InfoBoxProps extends ChildrenProps, ClassNamePropsOptional {
  readonly theme?: "danger" | "info" | "success" | "warning";
}

export const InfoBox = ({
  children,
  className,
  theme = "info",
}: InfoBoxProps) => {
  let classNameTheme = "";
  if (theme === "danger") {
    classNameTheme = "bg-danger-bg text-danger-text border-danger-detail";
  } else if (theme === "info") {
    classNameTheme = "bg-info-bg text-info-text border-info-detail";
  } else if (theme === "success") {
    classNameTheme = "bg-success-bg text-success-text border-success-detail";
  } else if (theme === "warning") {
    classNameTheme = "bg-warning-bg text-warning-text border-warning-detail";
  }

  return (
    <div
      className={twMerge(
        textClassName,
        classNameTheme,
        "grid gap-y-6 border-1 border-l-4 px-7 py-6",
        className
      )}
    >
      {theme === "warning" && (
        <ExclamationMarkTriangleSvg className="w-10 h-10" />
      )}
      {children}
    </div>
  );
};
