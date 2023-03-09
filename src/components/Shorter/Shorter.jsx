import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import fetchContent from "../../../redux/reducers/fetchContent";
import ShorterItem from "./ShorterItem";

const Shorter = () => {
  const dispatch = useDispatch();
  const fullShortUrl = useSelector((state) => state?.data?.value?.url);
  const loading = useSelector((state) => state?.data?.value?.loading);
  const [link, setLink] = useState("");
  const [info, setInfo] = useState([]);
  const [err, setErr] = useState("");

  const handleChange = (e) => {
    setLink(e.target.value);
  };

  useEffect(() => {
    const getDataStorage = JSON.parse(localStorage.getItem("listOfShortLinks"));

    setInfo(getDataStorage);
  }, []);
  useEffect(() => {
    const getDataStorage = JSON.parse(localStorage.getItem("listOfShortLinks"));

    if (getDataStorage === null) {
      localStorage.setItem("listOfShortLinks", JSON.stringify([]));
    }

    if (fullShortUrl) {
      localStorage.setItem(
        "listOfShortLinks",
        JSON.stringify([
          ...getDataStorage,
          { userLink: link, shortLink: fullShortUrl },
        ])
      );

      setInfo((state) => {
        return [...state, { userLink: link, shortLink: fullShortUrl }];
      });
    }
    setLink("");
  }, [dispatch, fullShortUrl]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (link === "") {
      return setErr("You must to add something...");
    }
    dispatch(fetchContent(link));
    setErr("");
  };

  return (
    <section className="bg-gray-200 md:mt-60">
      <div className=" mx-6 md:mx-40 bg-Dark_Violet min-h-[12rem] md:min-h-[10rem] rounded-lg flex justify-end relative -top-24 md:-top-20 overflow-hidden">
        <div className="background-one h-[10rem] min-w-[15rem] text-center absolute md:hidden "></div>

        {/* Desktop Images */}
        <div className="background-two h-full  text-center absolute m w-full hidden md:block"></div>

        <form
          action="/"
          className="flex flex-col w-full z-10 space-y-6 p-4 px-6 justify-center md:flex-row md:justify-between md:space-x-4 md:items-center md:space-y-0"
        >
          <input
            type="text"
            id="link"
            name="link"
            placeholder="Shorter a link here..."
            className="px-5 py-4 rounded-lg relative md:flex-1 md:px-7 focus:outline-red-400"
            onChange={handleChange}
            value={link}
          />
          <label
            for="link"
            className="absolute top-14 text-red-400 md:top-28 md:left-3"
          >
            {err}
          </label>
          <button
            className={`bg-Cyan px-5 py-4 rounded-lg font-bold text-white text-xl cursor-pointer md:px-7 hover:brightness-105 ${
              loading && "cursor-wait bg-gray-500"
            }`}
            onClick={handleSubmit}
          >
            {loading ? "loading..." : "Shorten It!"}
          </button>
        </form>
      </div>
      <div className="relative -top-16 space-y-4">
        {info.map((data) => {
          return (
            <ShorterItem userLink={data.userLink} shortLink={data.shortLink} />
          );
        })}
      </div>
    </section>
  );
};

export default Shorter;
