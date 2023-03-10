import Image from "next/image";
import pic from "../../public/images/icon-brand-recognition.svg";
import pic2 from "../../public/images/icon-detailed-records.svg";
import pic3 from "../../public/images/icon-fully-customizable.svg";

const Description = () => {
  return (
    <section className="bg-gray-100  text-center p-4 px-5 pb-20">
      <h2 className="text-3xl font-bold"> Advanced Statistics</h2>
      <p className="text-Grayish_Violet text-center text-lg mt-5">
        Track how your links are performing across the web with our advanced
        statistics dashboard.
      </p>
      <div className=" px-3 flex flex-col  relative items-center mt-28">
        <div className="h-full bg-Cyan w-[8px] absolute"></div>

        <div className="bg-white w-full min-h-56 rounded-lg z-10 relative p-4 px-7">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full w-20 bg-Very_Dark_Violet h-20 flex justify-center items-center">
            <Image src={pic} width={100} height={100} className="h-10 w-10" />
          </div>
          <h2 className="mt-10 text-2xl font-bold">Brand Recognition</h2>
          <p className=" text-centr mt-3 text-Grayish_Violet">
            Boost your brand recognition with each click. Generic links don't
            mean a thing. Branded links help instil confidence in your content.
          </p>
        </div>
        <div className="bg-white w-full min-h-56 rounded-lg z-10 relative p-4 px-7 mt-20">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full w-20 bg-Very_Dark_Violet h-20 flex justify-center items-center">
            <Image src={pic2} width={100} height={100} className="h-10 w-10" />
          </div>
          <h2 className="mt-10 text-2xl font-bold">Detailed Records</h2>
          <p className=" text-centr mt-3 text-Grayish_Violet">
            Gain insights into who is clicking your links. Knowing when and
            where people engage with your content helps inform better decisions.
          </p>
        </div>
        <div className="bg-white w-full min-h-56 rounded-lg z-10 relative p-4 px-7 mt-20">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full w-20 bg-Very_Dark_Violet h-20 flex justify-center items-center">
            <Image src={pic3} width={100} height={100} className="h-10 w-10" />
          </div>
          <h2 className="mt-10 text-2xl font-bold">Detailed Records</h2>
          <p className=" text-centr mt-3 text-Grayish_Violet">
            Improve brand awareness and content discoverability through
            customizable links, supercharging audience engagement.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Description;
