import React from "react";

const ShorterItem = (props) => {
  return (
    <section className="bg-white mx-6 rounded-sm h-40 md:h-20 flex flex-col md:flex-row p-4 items-center space-y-2 md:mx-40 md:justify-between  md:space-y-0">
      <p className="text-xl md:flex-1 text-black md:ml-6">{props.userLink}</p>
      <p className="text-lg text-Cyan flex-1 md:text-end md:mr-7">
        {props.shortLink}
      </p>
      <button
        className={` md:flex-none px-5 py-3 rounded-sm font-bold text-white text-xl cursor-pointer w-full md:w-28 md:py-2 md:rounded-sm hover:brightness-105 ${
          props.textStatus === props.index ? "bg-Dark_Violet" : "bg-Cyan"
        }
        }`}
        onClick={() => props.handleCopy(props.shortLink, props.index)}
      >
        {props.textStatus === props.index ? "copied" : "copy"}
      </button>
    </section>
  );
};

export default React.memo(ShorterItem);
