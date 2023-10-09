"use client";

import { Transition } from "@headlessui/react";
import { Listbox } from "@headlessui/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { Fragment, useState } from "react";

const Filter = ({ title, options }) => {
  const router = useRouter();
  const [selected, setSelected] = useState(options[0]);

  const updateParams = (title, value) => {
    const searchParams = new URLSearchParams(window.location.search);

    if (title) {
      searchParams.set("title", title);
    } else {
      searchParams.delete("title");
    }

    if (value) {
      searchParams.set("value", e.value.toLowerCase());
    } else {
      searchParams.delete("value");
    }

    const newPathName = `${
      window.location.pathname
    }?${searchParams.toString()}`;

    router.push(newPathName);
  };

  return (
    <div className="w-[200px]">
      <Listbox
        value={selected}
        onChange={(e) => {
          setSelected(e);
          updateParams(e);
        }}
      >
        <div>
          <Listbox.Button className="relative flex w-full justify-between  cursor-default rounded-b-none rounded-t bg-white py-2 pl-3 pr-3  shadow-md focus:outline-none sm:text-sm">
            <span className="truncate">{selected.title}</span>
            <Image
              src="/chevron-up-down.svg"
              height={20}
              width={20}
              alt="chevron up and down "
              className="text-gray-200"
            />
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-1"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="bg-white absolute w-[200px] z-10 rounded">
              {options.map((option, id) => (
                <Listbox.Option
                  value={option}
                  key={id}
                  className={({ active }) =>
                    `cursor-pointer select-none py-2 px-4 rounded ${
                      active ? "bg-accent text-white" : "text-gray-900"
                    }`
                  }
                >
                  {({ selected }) => <span>{option.title}</span>}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
};

export default Filter;
