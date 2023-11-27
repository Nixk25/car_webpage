import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className=" py-6 px-10 flex gap-10 flex-col border-t border-primary mt-10 h-max">
      <div className="flex flex-wrap w-full ">
        <div className="w-full  sm:flex-1 flex sm:items-start justify-center items-center flex-col mb-10">
          <Image
            src="/logo.png"
            width={100}
            height={100}
            className="object-contain hover:scale-110 ease duration-300 cursor-pointer mb-4"
            alt="logo of rentopia"
          />{" "}
          <p className=" text-sm text-[#030303]">Rentopia 2023</p>
          <p className="  text-sm text-[#030303]">All Rights Reserved ©</p>
        </div>
        <div className="flex-1 sm:justify-end justify-center text-center gap-20 flex-wrap sm:flex-nowrap flex ">
          <div className="flex flex-col gap-2">
            <h5 className="cursor-pointer font-semibold mb-2">About</h5>
            <p className="cursor-pointer text-sm text-[#030303]">
              How it works
            </p>
            <p className="cursor-pointer text-sm text-[#030303]">Featured</p>
            <p className="cursor-pointer text-sm text-[#030303]">Partnership</p>
            <p className="cursor-pointer text-sm text-[#030303]">
              Bussiness Relation
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h5 className="cursor-pointer font-semibold mb-2">Company</h5>
            <p className="cursor-pointer text-sm text-[#030303]">Events</p>
            <p className="cursor-pointer text-sm text-[#030303]">Blog</p>
            <p className="cursor-pointer text-sm text-[#030303]">Podcast</p>
            <p className="cursor-pointer text-sm text-[#030303]">
              Invite a friend
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h5 className="cursor-pointer font-semibold mb-2">Socials</h5>
            <p className="cursor-pointer text-sm text-[#030303]">Discord</p>
            <p className="cursor-pointer text-sm text-[#030303]">Instagram</p>
            <p className="cursor-pointer text-sm text-[#030303]">Twitter</p>
            <p className="cursor-pointer text-sm text-[#030303]">Facebook</p>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center sm:flex-row flex-col text-center sm:text-left mt-10">
        <p className="text-sm text-[#030303] sm:mb-0 mb-5">
          ©2023 Rentopia. All rights reserved
        </p>
        <div className="flex gap-5">
          <p className="cursor-pointer text-xs whitespace-nowrap text-[#030303]">
            Privacy & Policy
          </p>
          <p className="cursor-pointer text-xs whitespace-nowrap text-[#030303]">
            Terms & Condition
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
