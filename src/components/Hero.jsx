const Hero = () => {
  return (
    <section className="flex flex-col mt-6   md:flex-row md:h-[70vh] mb-18">
      <div className="hero min-h-[55vh]  md:w-1/2 md:order-1 ">
      </div>
      {/* texts & button container */}
      <div className="flex flex-col items-center mt-12  md:mt-32 px-6 md:w-1/2 md:items-start md:pl-40 ">
        <h1 className="text-5xl font-bold text-Very_Dark_Violet md:text-7xl">
          More than just
        </h1>
        <h1 className="text-5xl font-bold text-Very_Dark_Violet md:text-7xl mt-3">
          shorter links
        </h1>
        <p className="text-xl text-center mt-2 leading-relaxed w-11/12 text-Grayish_Violet md:text-start">
          Build your brand's recognition and get detailed insights on how your
          links are performing.
        </p>
        <button className="bg-Cyan font-bold text-white text-xl px-9 py-3 rounded-full mt-11 mb-48">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default Hero;
