import React from "react";
import Link from "next/link";
import Router from "next/router";

const MenuOverlay = ({ menuState, setMenuState }) => {
  Router.events.on("routeChangeStart", () => setMenuState(false));

  return (
    <div
      className={
        menuState
          ? "lg:hidden fixed top-0 right-0 h-full w-full z-10 text-white transition-all z-50"
          : "fixed z-50"
      }
      onClick={() => setMenuState(false)}
    >
      <div
        className={
          menuState
            ? "lg:hidden w-80 fixed bg-black h-full z-20 top-0 right-0 overflow-x-hidden transition-all ease-in-out duration-700"
            : "lg:hidden w-0 fixed bg-black h-full z-20 top-0 right-0 overflow-x-hidden transition-all ease-in-out duration-700"
        }
      >
        <div className="relative top-14 flex flex-col items-end pr-10">
          <Link href="/">
            <a className="text-xl my-3 cursor-pointer">Home</a>
          </Link>
          <Link href="/shop">
            <a className="text-xl my-3 cursor-pointer">Shop</a>
          </Link>
          <Link href="/login">
            <a className="text-xl my-3 cursor-pointer ">Login</a>
          </Link>
          <Link href="/register">
            <a className="text-xl my-3 cursor-pointer">Register</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MenuOverlay;
