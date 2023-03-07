import ShorterItem from "./ShorterItem";

const Shorter = () => {
  return (
    <section className="bg-gray-200 md:mt-72">
      <div className=" mx-6 md:mx-40 bg-Dark_Violet min-h-[12rem] rounded-lg flex justify-end relative -top-24 overflow-hidden">
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
          <button className="bg-Cyan px-5 py-3 rounded-lg font-bold text-white text-xl cursor-pointer">
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
