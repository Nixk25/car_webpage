"use client";

import React, { useState } from "react";
import { calculateCarRent, generateCarImageUrl } from "@/utils";
import Image from "next/image";
import Button from "./Button";
import CarDetails from "./CarDetails";

const CarCard = ({ car }) => {
  const { city_mpg, year, make, model, transmission, drive } = car;

  const carRent = calculateCarRent(city_mpg, year);

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      onClick={() => setIsOpen(true)}
      className="flex relative group  flex-col gap-5 w-[500px] m-auto mt-10 bg-white mb-10 rounded-lg p-4 border-2 border-transparent hover:border-secondary hover:scale-105  transition-all ease 300ms"
    >
      <div className="w-full">
        <div className="font-semibold mb-1 capitalize ">
          {make} {model}
        </div>
        <div className="flex gap-0.5 ">
          <span className="text-xs font-bold text-gray-500">$</span>
          <strong>
            <div className=" font-extrabold text-2xl">{carRent}</div>
          </strong>
          <span className="text-xs flex items-end text-gray-500">/day</span>
        </div>
        <div className="mt-5 flex justify-center item-center">
          <Image
            src={generateCarImageUrl(car)}
            width={250}
            height={250}
            className="object-cover"
            alt="car model image"
          />
        </div>
      </div>
      <div className="flex justify-between group-hover:invisible">
        <div className="flex justify-center flex-col items-center">
          <Image src="/steering-wheel.svg" width={15} height={15} />
          <div>{transmission === "a" ? "Automatic" : "Manual"}</div>
        </div>
        <div className="flex justify-center flex-col items-center">
          <Image src="/tire.svg" width={15} height={15} />
          <div className="uppercase">{drive}</div>
        </div>
        <div className="flex justify-center flex-col items-center">
          <Image src="/gas.svg" width={15} height={15} />
          <div>{city_mpg} MPG</div>
        </div>
      </div>
      <div className=" absolute bottom-2 left-0 w-full  justify-center items-center z-10 hidden group-hover:flex">
        <Button
          text="View More"
          buttonStyles="w-[90%] transition-transform ease 300ms rounded-lg bg-accent text-white cursor-pointer p-2 hover:scale-105"
          handleClick={() => setIsOpen(true)}
        />
      </div>

      <CarDetails
        isOpen={isOpen}
        closeModal={() => setIsOpen(false)}
        car={car}
      />
    </div>
  );
};

export default CarCard;
