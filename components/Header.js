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
    <div className="px-10 py-4 flex justify-between fixed w-full z-50 text-primary">
      <MenuOverlay menuState={menuState} setMenuState={setMenuState} />
      <ul className="text-base font-semibold items-center hidden lg:flex">
        <li>
          <ActiveLink activeClassName="text-third" href="/shop">
            <a className="mr-5">Shop</a>
          </ActiveLink>
        </li>
        <li>
          <ActiveLink activeClassName="text-third" href="/about">
            <a className="mr-5">About</a>
          </ActiveLink>
        </li>
      </ul>
      <div className="flex items-center">
        <ActiveLink activeClassName="" href="/">
          <a className="text-2xl font-semibold cursor-pointer">Flatline</a>
        </ActiveLink>
      </div>
      <ul className="text-base font-semibold flex items-center hidden lg:flex">
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
