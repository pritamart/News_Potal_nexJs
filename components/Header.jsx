import React from "react";
import moment from "moment";
import "moment/locale/bn";
import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";
import bg_header from "../assests/header-bg.jpg";
import adver_image from "../assests/sample-add.jpg";
import logo from "../assests/logo.png";
import Image from "next/image";
import Header_Category from "./Header_Category";

const Header = () => {
  moment.locale("bn");
  return (
    <div>
      <div className="px-5 lg:px-8 flex justify-between items-center bg-[#333333] text-[#cccccc]">
        <span className="11px font-medium">
          {moment().format("Do MMMM YYYY, dddd")}
        </span>
        <div className="flex gap-x-[1px]">
          <a
            href=""
            className="w-[37px] h-[37px] flex justify-center items-center bg-[#ffffff2b]"
          >
            <FaFacebook />
          </a>
          <a
            href=""
            className="w-[37px] h-[37px] flex justify-center items-center bg-[#ffffff2b]"
          >
            <FaTwitter />
          </a>
          <a
            href=""
            className="w-[37px] h-[37px] flex justify-center items-center bg-[#ffffff2b]"
          >
            <FaYoutube />
          </a>
        </div>
      </div>
      <div
        style={{
          backgroundImage: `url(${bg_header.src})`,
          backgroundSize: "cover",
        }}
      >
        <div className="px-8 py-14">
          <div className="flex justify-between items-center flex-wrap">
            <div className="md:w-4/12 w-full">
              <div className="flex flex-col justify-center items-center md:items-start">
                <Image className="w-[200px] h-[45px]" alt="logo" src={logo} />
                <h2 className="text-[#cccccc]">নতুন পথের সাহসের সন্ধানে </h2>
              </div>
            </div>
            <div className="md:w-8/12 w-full hidden md:block">
            <div className="w-full flex justify-end">
                <Image src={adver_image} height={90} />
            </div>
              
            </div>
          </div>
        </div>
      </div>
      <Header_Category />
    </div>
  );
};

export default Header;
