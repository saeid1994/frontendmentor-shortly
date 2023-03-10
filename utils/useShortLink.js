import { useEffect, useState } from "react";

const useShortLink = (fullShortUrl = null) => {
  const [link, setLink] = useState("");
  const [info, setInfo] = useState([]);

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
  }, [fullShortUrl]);

  return [info, link,setLink];
};

export default useShortLink;
