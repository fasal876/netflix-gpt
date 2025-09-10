import { NETFLIX_BG, OPTIONS, QUERY_MOVIE_URL } from "../utilities/constants";
import { useRef } from "react";
import langConfig from "../utilities/langConfig";
import { useSelector } from "react-redux";
import GptSearchBar from "./GptSearchBar";
import GptSuggestion from "./GptSuggestion";

const GptSearch = () => {
  const lang = useSelector((store) => store.config.lang);
  return (
    <div className=" w-screen aspect-video bg-black/50 pt-[20%]  ">
      <img src={NETFLIX_BG} className="fixed left-0 top-0 -z-10" />
      <h1 className="text-6xl font-bold  text-center text-white mx-auto py-4">
        {langConfig[lang].gptHeading}
      </h1>
      <h2 className="text-4xl font-bold  text-center text-white py-4">
        {langConfig[lang].gptHeading2}
      </h2>
      <GptSearchBar lang={lang} />
      <GptSuggestion />
    </div>
  );
};

export default GptSearch;
