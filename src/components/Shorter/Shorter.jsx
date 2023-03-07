import ShorterItem from "./ShorterItem";

const Shorter = () => {
  return (
    <section className="bg-gray-200 md:mt-60">
      <div className=" mx-6 md:mx-40 bg-Dark_Violet min-h-[12rem] md:min-h-[10rem] rounded-lg flex justify-end relative -top-24 md:-top-20 overflow-hidden">
        <div className="background-one h-[10rem] min-w-[15rem] text-center absolute md:hidden "></div>

        {/* Desktop Images */}
        <div className="background-two h-full  text-center absolute m w-full hidden md:block"></div>

        <form
          action=""
          className="flex flex-col w-full z-10 space-y-6 p-4 px-6 justify-center md:flex-row md:justify-between md:space-x-4 md:items-center md:space-y-0"
        >
          <input
            type="text"
            id="link"
            name="link"
            placeholder="Shorter a link here..."
            className="px-5 py-4 rounded-lg relative md:flex-1 md:px-7 "
          />
          <label for="link" className="absolute top-14 text-red-400 md:top-28 md:left-3">
            First Name
          </label>
          <button className="bg-Cyan px-5 py-4 rounded-lg font-bold text-white text-xl cursor-pointer md:px-7 ">
            shorten it!
          </button>
        </form>
      </div>
      <div className="relative -top-16 space-y-4">
        <ShorterItem />
        <ShorterItem />
        <ShorterItem />
        <ShorterItem />
        <ShorterItem />
        <ShorterItem />
        <ShorterItem />
      </div>
    </section>
  );
};

export default Shorter;
