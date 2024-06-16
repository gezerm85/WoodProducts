// eslint-disable-next-line no-unused-vars
import React from "react";
import SectionCard from "../components/SectionCard/SectionCard";
import ContentCard from "../components/ContentCard/ContentCard";
import CustomGallery from "../components/CustomGallery/CustomGallery";
import photo from "../assets/images/photo.png";

function Home() {
  return (
    <div className="">
      <SectionCard />
      <ContentCard />
      <CustomGallery />
      <div className=" mt-[278px] flex flex-col items-center">
        <h1 className="text-[90px] font-medium leading-[132.9%] text-[#f5f5f5] text-left mb-[122px]">
          Advantages <br />
          working with us
        </h1>
        <div className="flex items-center justify-evenly  w-full">
          <div className="">
            <img className="" width={600} height={300} src={photo} alt="" />
          </div>
          <div className="flex flex-col gap-12">
            <h1 className="font-medium text-[30px] text-[#f5f5f5] leading-[139%]  max-w-[387px] ">
              In-house carpentry production
            </h1>
            <h1 className="font-medium text-[30px] text-[#f5f5f5] leading-[139%]  max-w-[387px] ">
              We only treat wood with environmentally friendly and safe products
            </h1>
            <h1 className="font-medium text-[30px] text-[#f5f5f5] leading-[139%]  max-w-[453px] ">
              Prices from the manufacturer, no extra charges
            </h1>
          </div>
        </div>
        <button className="font-bold text-3xl text-[#f5f5f5] px-[70px] py-3 bg-[#728BAD]  rounded-[42px] text-center mt-32 mb-[294px]">
          Receive a consultation
        </button>
      </div>
    </div>
  );
}

export default Home;
