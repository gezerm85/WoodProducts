// eslint-disable-next-line no-unused-vars
import React from "react";
import img1 from "../../assets/images/image1.png";
import img2 from "../../assets/images/image2.png";
import img3 from "../../assets/images/image3.png";

function SectionCard() {
  return (
    <div
      className="bg-[#1E0C06] mt-9 h-[714px] ml-[195px]
   rounded-tl-[43px] rounded-bl-[43px] flex justify-between "
    >
      <div className="w-1/2 h-full">
        <h1 className=" text-[#f5f5f5] text-[96px] font-medium mt-[75px] ml-[50px]   leading-[115.4%]  ">
          Solid <br />
          Wood <br />
          Products
        </h1>
        <h3 className="font-normal text-3xl leading-[130%] text-[#FFDBBB]  w-[333px] mt-6 ml-[50px] ">
          Oak, beech, ash from <b>1700 CZK</b> per m3
        </h3>
        <button className="py-3 px-[70px] bg-[#728BAD] text-[#f5f5f5] rounded-[42px] ml-[50px] mt-[58px] font-bold text-3xl ">
          Order
        </button>
      </div>
      <div className="border-l mt-[43px] mb-[160px]  "></div>
      <div className="w-1/2 h-full  flex flex-col items-end justify-center relative">
        <img
          className="mr-[115px] mb-52"
          width={205}
          height={205}
          src={img1}
          alt=""
        />
        <img
          className="mr-[360px] mt-[150px] absolute  "
          width={205}
          height={205}
          src={img2}
          alt=""
        />
        <img
          className="mr-[115px]"
          width={205}
          height={205}
          src={img3}
          alt=""
        />
      </div>
    </div>
  );
}

export default SectionCard;
