"use client";

import React, { useState } from "react";
import { Combobox, Transition } from "@headlessui/react";
import Image from "next/image";
import { manufacturers } from "@/constants";

const SearchManufacturer = ({ manufacturer, setManufacturer }) => {
  const [query, setQuery] = useState("");

  const filteredManufactures =
    query === ""
      ? manufacturers
      : manufacturers.filter((item) =>
          item
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );
  return (
    <div className="w-full">
      <Combobox value={manufacturer} onChange={setManufacturer}>
        <div className="relative mb-2">
          <div className=" relative flex items-center gap-5">
            <Combobox.Button className="absolute top-[50%] select-none left-[10px] translate-y-[-50%]">
              <Image
                src="/car-logo.svg"
                width={20}
                height={20}
                alt="volkswagen logo on page Rentopia"
              />
            </Combobox.Button>
            <Combobox.Input
              placeholder="Volkswagen"
              displayValue={(manufacturer) => manufacturer}
              onChange={(e) => setQuery(e.target.value)}
              className=" placeholder:pointer-events-none placeholder:select-none bg-white p-3 outline-none border rounded-lg border-transparent pl-10  w-full"
            />
          </div>
          <Transition
            leave="ease-in duration-200"
            leaveFrom="opacity-1"
            leaveTo="opacity-0"
            afterLeave={() => {
              setQuery("");
            }}
          >
            <Combobox.Options className="absolute z-10 bg-slate-100 mt-1 max-h-20 rounded-lg w-full overflow-auto  text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {filteredManufactures.length === 0 && query !== "" ? (
                <div className="relative cursor-default select-none py-2 px-4 text-gray-700 bg-secondary">
                  Nothing Found, please contact our support.
                </div>
              ) : (
                filteredManufactures.map((item) => (
                  <Combobox.Option
                    key={item}
                    className={({ active }) =>
                      `pl-10 rounded-sm p-2 ${
                        active
                          ? "bg-accent cursor-pointer text-white"
                          : "text-gray-900 "
                      }`
                    }
                    value={item}
                  >
                    {item}
                  </Combobox.Option>
                ))
              )}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
};

export default SearchManufacturer;
