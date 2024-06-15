// eslint-disable-next-line no-unused-vars
import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.png";

function Header() {
  return (
    <div className="flex justify-between items-center h-[181px] rounded-b-[79px] bg-[#1E0C06] ">
      <div className="ml-[102px]">
        <NavLink className="">
          <img width={197} height={83.8} src={logo} alt="..." />
        </NavLink>
      </div>
      <div className="flex mr-24 gap-14 text-[#F5F5F5] font-bold text-xl ">
        <NavLink>Gallery</NavLink>
        <NavLink>Prices for service</NavLink>
        <NavLink>Logo</NavLink>
        <NavLink>Logo</NavLink>
        <NavLink>Logo</NavLink>
      </div>
    </div>
  );
}

export default Header;
