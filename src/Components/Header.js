import React from "react";
import { NETFLIX_LOGO } from "../utilities/constants";

const Header = () => {
  return (
    <div className="absolute left-10 top-0 w-44 h-18 z-10">
      <img src={NETFLIX_LOGO} className="p-2  bg-gradient-to-b from-black" />
    </div>
  );
};

export default Header;
