import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className=" py-6 px-10 flex gap-10 flex-col border-t border-accent mt-10 h-max">
      <div className="flex flex-wrap w-full ">
        <div className="w-full sm:flex-1 flex sm:items-start justify-center items-center flex-col mb-10">
          <Image
            src="/logo.png"
            width={100}
            height={100}
            className="object-contain hover:scale-110 ease duration-300 cursor-pointer mb-4"
            alt="logo of rentopia"
          />{" "}
          <p className=" text-sm text-gray-500">Rentopia 2023</p>
          <p className="  text-sm text-gray-500">All Rights Reserved ©</p>
        </div>
        <div className="flex-1 gap-20 flex justify-center sm:justify-end">
          <div className="flex flex-col gap-2">
            <h5 className="cursor-pointer font-semibold mb-2">About</h5>
            <p className="cursor-pointer text-sm text-gray-500">How it works</p>
            <p className="cursor-pointer text-sm text-gray-500">Featured</p>
            <p className="cursor-pointer text-sm text-gray-500">Partnership</p>
            <p className="cursor-pointer text-sm text-gray-500">
              Bussiness Relation
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h5 className="cursor-pointer font-semibold mb-2">Company</h5>
            <p className="cursor-pointer text-sm text-gray-500">Events</p>
            <p className="cursor-pointer text-sm text-gray-500">Blog</p>
            <p className="cursor-pointer text-sm text-gray-500">Podcast</p>
            <p className="cursor-pointer text-sm text-gray-500">
              Invite a friend
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h5 className="cursor-pointer font-semibold mb-2">Socials</h5>
            <p className="cursor-pointer text-sm text-gray-500">Discord</p>
            <p className="cursor-pointer text-sm text-gray-500">Instagram</p>
            <p className="cursor-pointer text-sm text-gray-500">Twitter</p>
            <p className="cursor-pointer text-sm text-gray-500">Facebook</p>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center mt-10">
        <p className="text-sm text-gray-500">
          ©2023 Rentopia. All rights reserved
        </p>
        <div className="flex gap-5">
          <p className="cursor-pointer text-xs whitespace-nowrap text-gray-500">
            Privacy & Policy
          </p>
          <p className="cursor-pointer text-xs whitespace-nowrap text-gray-500">
            Terms & Condition
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
