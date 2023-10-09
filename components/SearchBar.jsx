"use client";

import Image from "next/image";
import React, { useState } from "react";
import SearchManufacturer from "./SearchManufacturer";
import { useRouter } from "next/navigation";

const SearchButton = () => (
  <button
    type="submit"
    className={`ml-3 cursor-pointer flex justify-center items-center `}
  >
    <Image
      src="/magnifying-glass.svg"
      alt="magnifying glass "
      width={40}
      height={40}
    />
  </button>
);

const SearchBar = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (manufacturer === "" && model === "") {
      return alert("Please fill in the search bar");
    }

    updateParams(manufacturer.toLowerCase(), model.toLowerCase());
  };

  const updateParams = (manufacturer, model) => {
    const searchParams = new URLSearchParams(window.location.search);

    if (manufacturer) {
      searchParams.set("manufacturer", manufacturer);
    } else {
      searchParams.delete("manufacturer");
    }

    if (model) {
      searchParams.set("model", model);
    } else {
      searchParams.delete("model");
    }

    const newPathName = `${
      window.location.pathname
    }?${searchParams.toString()}`;

    router.push(newPathName);
  };

  const [manufacturer, setManufacturer] = useState("");
  const [model, setModel] = useState("");
  const router = useRouter();
  return (
    <form
      onSubmit={handleSubmit}
      className="w-[500px] mb-3 relative flex gap-5"
    >
      <div className="flex gap-5">
        <div className="flex items-center justify-center w-[200px]">
          <SearchManufacturer
            manufacturer={manufacturer}
            setManufacturer={setManufacturer}
          />
        </div>
        <div className="relative">
          <Image
            src="/model-icon.png"
            height={20}
            width={20}
            alt="model of the car"
            className="absolute top-[45%] translate-y-[-50%] ml-2"
          />
          <input
            type="text"
            name="model"
            value={model}
            onChange={(e) => setModel(e.target.value)}
            placeholder="Tiguan"
            className="pl-10 w-[200px] placeholder:pointer-events-none placeholder:select-none bg-white p-3 outline-none border rounded-lg border-transparent "
          />
        </div>
      </div>
      <SearchButton />
    </form>
  );
};

export default SearchBar;
