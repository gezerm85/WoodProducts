// eslint-disable-next-line no-unused-vars
import React from "react";
import oldWood from "../../assets/images/old-wood-grain-background 2.png";
import wood from "../../assets/images/wood-texture-design-decoration 1.png";
import paleWood from "../../assets/images/pale-oak-wood-texture-design-background 1.png";
import { FaTimes } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";

function ContentCard() {
  return (
    <div className="mt-[414px] flex flex-col items-center ">
      <h1 className="text-[#f5f5f5] font-medium text-[90px]  w-[746px] leading-[132.9%] ">
        THE WOOD WE WORK WITH
      </h1>
      <div className="flex gap-44 mt-32 flex-wrap ">
        <div className=" flex flex-col  ">
          <img width={205} height={205} src={oldWood} alt="" />
          <h1 className="font-bold text-3xl text-[#f5f5f5] text-center my-9">
            Oak
          </h1>

          <div className="flex flex-col gap-6">
            <div className="flex items-center text-3xl text-[#f5f5f5] font-medium gap-2 ">
              <FaCheck color="#FFC099" />
              Durability
            </div>
            <div className="flex items-center text-3xl text-[#f5f5f5] font-medium gap-2">
              <FaCheck color="#FFC099" />
              Beautiful texture
            </div>
            <div className="flex items-center text-3xl text-[#f5f5f5] font-medium gap-2">
              <FaCheck color="#FFC099" />
              Water resistance
            </div>
            <div className="flex items-center text-3xl text-[#f5f5f5] font-medium gap-2">
              <FaTimes color="#FFC099" />
              Expensive
            </div>
          </div>
        </div>
        <div className=" flex flex-col  ">
          <img width={205} height={205} src={wood} alt="" />
          <h1 className="font-bold text-3xl text-[#f5f5f5] text-center my-9">
            Buk
          </h1>

          <div className="flex flex-col gap-6">
            <div className="flex items-center text-3xl text-[#f5f5f5] font-medium gap-2 ">
              <FaCheck color="#FFC099" />
              Durability
            </div>
            <div className="flex items-center text-3xl text-[#f5f5f5] font-medium gap-2">
              <FaTimes color="#FFC099" />
              Hard to handle
            </div>
          </div>
        </div>
        <div className=" flex flex-col  ">
          <img width={205} height={205} src={paleWood} alt="" />
          <h1 className="font-bold text-3xl text-[#f5f5f5] text-center my-9">
            Ash
          </h1>

          <div className="flex flex-col gap-6">
            <div className="flex items-center text-3xl text-[#f5f5f5] font-medium gap-2 ">
              <FaCheck color="#FFC099" />
              Durability
            </div>
            <div className="flex items-center text-3xl text-[#f5f5f5] font-medium gap-2">
              <FaTimes color="#FFC099" />
              Hard to handle
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContentCard;
