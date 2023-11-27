import React from "react";
import Link from "next/link";
import Image from "next/image";
import Button from "./Button";

const Navbar = () => {
  return (
    <header className="w-full z-10 mx-auto ">
      <nav className=" flex justify-between items-center px-10 py-6">
        <Link href="/">
          <Image
            src="/logo.png"
            width={100}
            height={100}
            className="object-contain hover:scale-110 ease duration-300 cursor-pointer"
            alt="logo of rentopia"
          />
        </Link>

        <Button
          type="button"
          buttonStyles="text-primary bg-trasparent cursor-pointer"
          text="Sign In"
          status="true"
        />
      </nav>
    </header>
  );
};

export default Navbar;
