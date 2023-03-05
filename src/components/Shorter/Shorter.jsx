import Image from "next/image";
import pic from "../../../public/images/bg-shorten-mobile.svg";
import ShorterItem from "./ShorterItem";

const Shorter = () => {
  return (
    <section>
      <div className="bg-Dark_Violet mx-6 h-[11.5rem] mt-8 rounded-lg overflow-hidden relative">
        <div className="flex justify-end ">
          <Image src={pic} className=""></Image>
        </div>
        <form
          action=""
          className="flex flex-col absolute top-0  p-6 w-full space-y-6"
        >
          <input
            type="text"
            id="link"
            name="link"
            placeholder="Shorter a link here..."
            className="px-5 py-4 rounded-lg"
          />
          <label for="link" className="absolute top-14 text-red-400">
            First Name
          </label>
          <button className="bg-Cyan px-5 py-3 rounded-lg font-bold text-white text-xl">
            shorten it!
          </button>
        </form>
      </div>
      <ShorterItem/>
      <ShorterItem/>
      <ShorterItem/>
      <ShorterItem/>
    </section>
  );
};

export default Shorter;
