import Image from "next/image";
import HamburgerMenu from "./HamburgerMenu";
import { Button } from "@heroui/react";

const NavBar = () => {
  const navLinks = ["Home", "Events", "About", "Contact Us"];
  return (
    <nav className="flex items-center justify-between p-4 md:mx-auto md:w-[95%] lg:w-[90%]">
      <a href="/">
        <Image
          src={"/navlogo.svg"}
          width={153}
          height={40}
          alt="Logo"
          className="h-[40px] w-[153px] cursor-pointer md:h-[35px] md:w-[203px]"
        />
      </a>
      <div className="hidden min-w-fit items-center justify-between gap-3 rounded-xl bg-[#ABBEC9] bg-opacity-50 px-2 py-1 md:flex">
        {navLinks.map((item) => (
          <a
            key={item}
            href={`/${item.toLowerCase()}`}
            className="rounded-md px-2 py-1 transition-colors duration-200 hover:bg-[#ABBEC9] hover:bg-opacity-90"
          >
            {item}
          </a>
        ))}
      </div>
      <Button className="ml-4 hidden rounded-lg bg-[#6DA27D] px-4 py-2 text-white transition-all duration-200 hover:scale-105 hover:shadow-lg md:block">
        Register
      </Button>
      <HamburgerMenu navLinks={navLinks} />
    </nav>
  );
};

export default NavBar;
