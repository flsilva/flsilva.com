"use client";

import "client-only";
import { useState } from "react";

import { Logo } from "./logo/Logo";
import { MainMenu } from "./MainMenu";
import { MainMenuMobile } from "./MainMenuMobile";
import { HamburgerMenuSvg } from "./svg/HamburgerMenuSvg";
import { XIcon } from "@/features/shared/ui/svg/XIcon";

export const MainHeader = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="flex flex-col items-start mt-4 md:flex-row md:items-center">
      <div className="flex flex-row items-center justify-between w-full md:justify-start md:w-auto">
        <Logo onClick={() => setIsMobileMenuOpen(false)} />
        {!isMobileMenuOpen && (
          <button
            type="button"
            className="md:hidden -m-2.5 p-2.5"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <HamburgerMenuSvg aria-hidden="true" />
          </button>
        )}
        {isMobileMenuOpen && (
          <button
            type="button"
            className="md:hidden -m-2.5 p-2.5"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <span className="sr-only">Close menu</span>
            <XIcon aria-hidden="true" />
          </button>
        )}
        <div className="hidden md:flex">
          <MainMenu />
        </div>
      </div>
      <div className="flex w-full md:hidden">
        <MainMenuMobile
          isOpen={isMobileMenuOpen}
          onItemClick={() => setIsMobileMenuOpen(false)}
        />
      </div>
    </header>
  );
};
