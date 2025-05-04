import Link from "next/link";
import { twMerge } from "tailwind-merge";

import { textClassName } from "./typography/textClassName";
import { A } from "./typography/Typography";

interface MainMenuProps {
  readonly onItemClick?: () => void;
}

export const MainMenu = ({ onItemClick }: MainMenuProps) => {
  const menuItemClassName =
    "flex justify-center w-full border-b border-primary-text mt-1 pt-4 pb-4 md:border-b-0 md:justify-normal md:ml-8 md:p-0 md:w-auto";
  const menuItemLinkClassName = "font-bold hover:underline";
  const dynamicProps = onItemClick ? { onClick: onItemClick } : {};

  return (
    <nav
      id="main-nav"
      className={
        "transition-height duration-500 overflow-hidden w-full md:pt-2 md:pb-[0.4375rem] md:pr-7 md:overflow-auto md:transition-none md:w-auto"
      }
    >
      <ul className="flex flex-col items-center m-0 p-0 md:flex-row md:items-start md:m-[-0.375rem_0_0_4rem]">
        <li className={twMerge(menuItemClassName, "md:first:ml-0")}>
          <Link
            href="/blog/"
            className={twMerge(textClassName, menuItemLinkClassName)}
            {...dynamicProps}
          >
            Blog
          </Link>
        </li>
        <li className={menuItemClassName}>
          <Link
            href="/portfolio/"
            className={twMerge(textClassName, menuItemLinkClassName)}
            {...dynamicProps}
          >
            Portfolio
          </Link>
        </li>
        <li className={menuItemClassName}>
          <Link
            href="/open-source/"
            className={twMerge(textClassName, menuItemLinkClassName)}
            {...dynamicProps}
          >
            Open Source
          </Link>
        </li>
        <li className={menuItemClassName}>
          <A
            href="/resume/Flavio-Silva-Resume-2024-12-10.pdf"
            className={twMerge(textClassName, menuItemLinkClassName)}
            {...dynamicProps}
          >
            Resume
          </A>
        </li>
        <li className={menuItemClassName}>
          <Link
            href="/opentask-showcase/"
            className={twMerge(
              textClassName,
              menuItemLinkClassName,
              "relative"
            )}
            {...dynamicProps}
          >
            OpenTask
            <span
              className={twMerge(
                textClassName,
                menuItemLinkClassName,
                "text-xs absolute top-[-0.375rem]"
              )}
            >
              new
            </span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};
