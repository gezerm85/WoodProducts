// eslint-disable-next-line no-unused-vars
import React from "react";
import Err from "../assets/images/404.png";
import { NavLink } from "react-router-dom";

function NotFoundPage() {
  return (
    <div className=" flex flex-col items-center justify-center">
      <img src={Err} alt="" />
      <h1 className="text-[90px] font-medium text-[#f5f5f5]">Woops</h1>
      <h1 className="text-[30px] text-[#FFDBBB] font-normal mt-9 mb-11 ">
        Oh, you must be lost, there is no such page.
      </h1>
      <NavLink className="text-[#f5f5f5] font-bold text-[30px] bg-[#728BAD] py-3 px-[70px] rounded-[42px]   ">
        Go to the home page
      </NavLink>
    </div>
  );
}

export default NotFoundPage;
