import Image from "next/image";
import pic from "../../public/images/bg-boost-mobile.svg";

const GetStarted = () => {
  return (
    <section className=" bg-Dark_Violet relative">
      <div className="">
        <Image
          src={pic}
          width={300}
          height={300}
          className="w-[40rem] h-[25rem]"
        ></Image>
      </div>
      <div className="absolute top-0 left-0 right-0 bottom-0  text-center text-4xl ">
        <h2 className="max-w-[75%] m-auto font-bold text-white mt-28">
          Boost your links today
        </h2>
        <button className="bg-Cyan font-bold text-white text-xl px-11 py-5 rounded-full mt-5  hover:brightness-105">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default GetStarted;
