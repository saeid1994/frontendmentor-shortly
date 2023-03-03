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
    <section className="flex justify-between  items-center p-4 mt-7 relative">
      <div>
        <Image src={pic} className="h-10 w-36" />
      </div>

      {/* <!-- Hamburger Button --> */}
      <Burger status={open} onClick={handleBurger} />

      <div
        className={`rounded-lg flex flex-col items-center justify-center space-y-4 absolute bg-Dark_Violet left-0 right-0 top-20 h-60 m-4  md:hidden ${
          open || "hidden"
        }`}
      >
        <h3 className="text-2xl text-white">Home</h3>
        <h3 className="text-2xl text-white">main Page</h3>
        <h3 className="text-2xl text-white">about us</h3>
      </div>
    </section>
  );
};

export default Header;
