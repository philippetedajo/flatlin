import React, { useState } from "react";
import { MenuOverlay } from "../components";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import ActiveLink from "../utils/Links";

const Header = () => {
  const [menuState, setMenuState] = useState(false);

  const handleToggleMenu = () => {
    setMenuState(!menuState);
  };

  return (
    <div className="px-10 py-4 flex justify-between ">
      <div className="flex items-center">
        <ActiveLink activeClassName="text-third" href="/">
          <a className="text-2xl cursor-pointer">Flatline</a>
        </ActiveLink>
      </div>
      <MenuOverlay menuState={menuState} setMenuState={setMenuState} />
      <ul className="text-lg items-center hidden lg:flex">
        <li>
          <ActiveLink activeClassName="text-third" href="/about">
            <a className="mr-5">About</a>
          </ActiveLink>
        </li>
        <li>
          <ActiveLink activeClassName="text-third" href="/news">
            <a className="mr-5">News</a>
          </ActiveLink>
        </li>
        <li>
          <ActiveLink activeClassName="text-third" href="/contact">
            <a>Contact</a>
          </ActiveLink>
        </li>
      </ul>
      <ul className="text-lg flex items-center hidden lg:flex">
        <li>
          <ActiveLink activeClassName="text-third" href="/login">
            <a className="mr-5">Login</a>
          </ActiveLink>
        </li>
        <li>
          <ActiveLink activeClassName="text-third" href="/register">
            <a className="">Register</a>
          </ActiveLink>
        </li>
      </ul>
      <div className="flex items-center lg:hidden z-10">
        {menuState ? (
          <IoCloseSharp
            onClick={handleToggleMenu}
            fill="#fff"
            size={26}
            className="menu-close cursor-pointer transition-all"
          />
        ) : (
          <GiHamburgerMenu
            onClick={handleToggleMenu}
            size={23}
            className="cursor-pointer transition-all"
          />
        )}
      </div>
    </div>
  );
};

export default Header;
