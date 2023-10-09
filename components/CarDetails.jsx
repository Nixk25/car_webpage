import React from "react";
import { Transition, Dialog } from "@headlessui/react";
import { Fragment } from "react";
import Image from "next/image";
import { generateCarImageUrl } from "@/utils";

const CarDetails = ({ car, isOpen, closeModal }) => {
  const { make, model } = car;
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0  bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed max-h-[90%] w-full max-w-[500px]  top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] overflow-y-auto">
          <div className="flex max-h-[90%] w-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full  transform  overflow-hidden rounded-lg bg-white p-6 text-left align-middle shadow-xl transition-all">
                <div className=" flex items-center justify-end">
                  <button
                    type="button"
                    className="inline-flex justify-center items-end rounded-md border border-transparent bg-accent px-4 py-2 text-sm font-medium   focus:outline-none "
                    onClick={closeModal}
                  >
                    <Image src="/close.svg" width={15} height={15} />
                  </button>
                </div>
                <div className="flex justify-center items-center flex-col mt-2">
                  <div className="mb-3 bg-car-bg rounded-lg w-full flex justify-center items-center bg-accent">
                    <Image
                      src={generateCarImageUrl(car)}
                      width={200}
                      height={250}
                    />
                  </div>
                  <div className="flex gap-5 mb-5 justify-center items-center w-full">
                    <div className="h-20 object-cover flex-1 rounded-lg bg-slate-200  flex justify-center items-center">
                      <Image
                        src={generateCarImageUrl(car, "29")}
                        width={100}
                        height={100}
                      />
                    </div>
                    <div className="h-20 object-cover flex-1 rounded-lg bg-slate-200 flex justify-center items-end">
                      <Image
                        src={generateCarImageUrl(car, "33")}
                        width={100}
                        height={100}
                      />
                    </div>
                    <div className="h-20 object-cover flex-1 rounded-lg bg-slate-200  flex justify-center items-center">
                      <Image
                        src={generateCarImageUrl(car, "13")}
                        width={100}
                        height={100}
                      />
                    </div>
                  </div>
                </div>
                <Dialog.Title
                  as="h3"
                  className="text-xl font-semibold leading-6 text-text capitalize mb-4"
                >
                  {make} {model}
                </Dialog.Title>
                <div className="mt-2">
                  {Object.entries(car).map(([key, value]) => (
                    <div
                      className=" flex justify-between mt-3 capitalize"
                      key={key}
                    >
                      <h4 className=" text-slate-500">
                        {key.split("_").join(" ")}
                      </h4>
                      <p className="font-semibold">{value}</p>
                    </div>
                  ))}
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default CarDetails;
