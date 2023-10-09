"use client";

import React from "react";
import Button from "./Button";
import Image from "next/image";

const Hero = () => {
  return (
    <main className=" flex mt-10 lg:flex-row flex-col gap-5  mx-auto px-10 ">
      <div className="flex-1  text-txtColor sm:mt-12 mt-8">
        <h1 className=" text-4xl mb-5 font-extrabold leading-relaxed tracking-tighter">
          <span className="text-primary">Find</span>,{" "}
          <span className="text-primary">Book</span>, and{" "}
          <span className="text-primary">Pick Up</span> a car <br /> quickly and
          easily!
        </h1>
        <p className=" text-xl font-light mb-5">
          Streamline your car rental experience with our effortless booking
          process.
        </p>
        <a href="#catalogue">
          <Button
            text="Explore Cars"
            buttonStyles="bg-accent text-gray-100 rounded-full p-3 outline-none justify-start hover:rounded-tl-lg hover:rounded-br-lg hover:scale-105 ease duration-300 active:scale-90"
            type="button"
          />
        </a>
      </div>
      <div className="lg:flex-[1] w-full flex justify-end">
        <div className="relative lg:w-[100%] w-[90%] sm:h-[350px] h-[250px]">
          <Image
            src="/hero.png"
            fill
            className=" object-contain w-full h-full z-[1]"
            alt="the main image of hero section "
          />
          <div className="  z-[-1] polygon absolute right-[-80px]   top-0 xl:top-[-20px]  h-[150%] xl:h-[120%] lg:h-[100%] sm:h-[110%] sm:w-[100%] w-[120%] bg-secondary"></div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
