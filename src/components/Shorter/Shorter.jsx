import Image from "next/image";
import pic from "../../../public/images/bg-shorten-mobile.svg";
import ShorterItem from "./ShorterItem";

const Shorter = () => {
  return (
    <section>
      <div className=" mx-6 bg-Dark_Violet min-h-[12rem] mt-6 rounded-lg overflow-hidden flex justify-end relative mb-4">
        <div className="background-one h-[10rem] min-w-[15rem] text-center absolute "></div>
        <form
          action=""
          className="flex flex-col w-full z-10 space-y-6 p-4 px-6 justify-center"
        >
          <input
            type="text"
            id="link"
            name="link"
            placeholder="Shorter a link here..."
            className="px-5 py-4 rounded-lg relative"
          />
          <label for="link" className="absolute top-16 text-red-400">
            First Name
          </label>
          <button className="bg-Cyan px-5 py-3 rounded-lg font-bold text-white text-xl">
            shorten it!
          </button>
        </form>
      </div>
      <ShorterItem/>
      <ShorterItem/>
    </section>
  );
};

export default Shorter;
