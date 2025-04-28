"use client";

import "client-only";
import { Fragment } from "react";
import { Transition } from "@headlessui/react";
import { MainMenu } from "./MainMenu";

interface MainMenuMobileProps {
  readonly isOpen: boolean;
  readonly onItemClick?: () => void;
}

export const MainMenuMobile = ({
  isOpen,
  onItemClick,
}: MainMenuMobileProps) => {
  return (
    <Transition
      show={isOpen}
      as={Fragment}
      enter="transition-[height] duration-[400ms]"
      enterFrom="h-0"
      enterTo="opacity-100 h-[300px]"
      leave="transition-[height] duration-200 ease-in-out"
      leaveFrom="opacity-100 h-[300px]"
      leaveTo="h-0"
    >
      <div className="flex flex-col grow mb-10">
        <MainMenu onItemClick={onItemClick} />
      </div>
    </Transition>
  );
};
