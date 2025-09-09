import { NETFLIX_BG } from "../utilities/constants";
import { useRef } from "react";
import langConfig from "../utilities/langConfig";
import { useSelector } from "react-redux";
const GptSearch = () => {
  const searchText = useRef(null);
  const lang = useSelector((store) => store.config.lang);
  const handleForm = (e) => {
    e.preventDefault();
    const search = searchText.current.value;
    console.log(search);
  };
  return (
    <div className=" w-screen aspect-video bg-black/50 pt-[20%]  ">
      <img src={NETFLIX_BG} className="absolute left-0 top-0 -z-10" />
      <h1 className="text-6xl font-bold  text-center text-white mx-auto py-4">
        {langConfig[lang].gptHeading}
      </h1>
      <h2 className="text-4xl font-bold  text-center text-white py-4">
        {langConfig[lang].gptHeading2}
      </h2>
      <form
        className=" py-4 px-4 flex  w-6/12 mx-auto"
        onSubmit={(e) => {
          handleForm(e);
        }}
      >
        <input
          placeholder={langConfig[lang].gptPlaceHolder}
          className="py-5 px-4 border border-gray-600 flex-8 bg-black/90 text-white  rounded-sm"
          ref={searchText}
        />
        <button className="bg-red-600 font-bold text-white flex-4 mx-2  py-4 rounded-lg">
          {langConfig[lang].gptSubmit}
        </button>
      </form>
    </div>
  );
};

export default GptSearch;
