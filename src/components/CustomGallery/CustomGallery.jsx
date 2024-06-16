import { useRef } from "react";
import { Carousel } from "antd";
import GalleryPhoto from "../../assets/images/GalleryPhoto.png";
import { IoMdArrowBack, IoMdArrowForward } from "react-icons/io";

const contentStyle = {
  margin: 0,
  height: "550px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
};

function CustomGallery() {
  const ref = useRef();
  return (
    <div className="flex flex-col px-44 mt-52  ">
      <h1 className="font-medium text-[90px] text-[#f5f5f5] leading-[132.9%] ml-[238px] mb-32 ">
        Our work
      </h1>
      <div className="relative p-7">
        <IoMdArrowBack
          className="absolute bottom-[310px] left-0 cursor-pointer "
          color="#A3B8D7"
          size={50}
          onClick={() => {
            ref.current.prev();
          }}
        />
        <IoMdArrowForward
          className="absolute bottom-[310px] right-0 cursor-pointer"
          color="#A3B8D7"
          size={50}
          onClick={() => {
            ref.current.next();
          }}
        />
        <Carousel className="px-6 py-10 rounded-[42px] flex" ref={ref} autoplay>
          <div className="">
            <img
              className="object-cover select-none w-full rounded-[42px]"
              style={contentStyle}
              src={GalleryPhoto}
              alt=""
            />
          </div>
          <div className="rounded-[42px]">
            <img
              className="object-cover select-none w-full rounded-[42px]"
              style={contentStyle}
              src={GalleryPhoto}
              alt=""
            />
          </div>
          <div className="rounded-[42px]">
            <img
              className="object-cover select-none w-full rounded-[42px]"
              style={contentStyle}
              src={GalleryPhoto}
              alt=""
            />
          </div>
          <div className="rounded-[42px]">
            <img
              className="object-cover select-none w-full rounded-[42px]"
              style={contentStyle}
              src={GalleryPhoto}
              alt=""
            />
          </div>
        </Carousel>
      </div>
    </div>
  );
}

export default CustomGallery;
