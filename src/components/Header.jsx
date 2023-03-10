import Image from "next/image";
import { useState } from "react";
import pic from "../../public/images/logo.svg";
import Burger from "./Burger";

const Header = () => {
  const [open, setOpen] = useState(false);

  const handleBurger = () => {
    setOpen(!open);
  };

  return (
    <section className="flex justify-between  items-center p-4 mt-7 relative px-7 md:px-40 ">
      <div className="flex">
        <div>
          <Image alt="img" src={pic} className="h-10 w-36" />
        </div>
        <div className="md:flex space-x-6  items-center justify-between ml-9 text-Grayish_Violet hidden font-bold">
          <div className="cursor-pointer hover:text-Very_Dark_Blue duration-150">
            Features
          </div>
          <div className="cursor-pointer hover:text-Very_Dark_Blue duration-150">
            Pricing
          </div>
          <div className="cursor-pointer hover:text-Very_Dark_Blue duration-150">
            Resources
          </div>
        </div>
      </div>

      {/* login and signup */}
      <div className="md:flex justify-around  w-56 hidden ">
        <button className="text-Grayish_Violet font-bold cursor-pointer hover:text-Very_Dark_Blue duration-150">
          Login
        </button>
        <button className="py-2 px-6 rounded-full bg-Cyan font-bold text-white cursor-pointer hover:brightness-150 duration-150">
          Sign Up
        </button>
      </div>

      {/* <!-- Hamburger Button --> */}
      <Burger
        className="md:hidden cursor-pointer"
        status={open}
        onClick={handleBurger}
      />

      <div
        className={`rounded-lg flex flex-col items-center justify-center space-y-4 absolute bg-Dark_Violet left-0 right-0 top-20 h-60 m-4  md:hidden ${
          open || "hidden"
        }`}
      >
        <h3 className="text-2xl text-white ">Home</h3>
        <h3 className="text-2xl text-white">main Page</h3>
        <h3 className="text-2xl text-white">about us</h3>
      </div>
    </section>
  );
};

export default Header;
