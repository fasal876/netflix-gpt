import { NETFLIX_LOGO, supportedLang } from "../utilities/constants";
import { useSelector, useDispatch } from "react-redux";
import useAuthChange from "../hooks/useAuthChange";
import { setShowGptPage } from "../utilities/gptSlice";
import { changeLang } from "../utilities/configSlice";
const Header = () => {
  const { user, displayName, handleClick } = useAuthChange();
  const gpt = useSelector((store) => store.gpt.showGptPage);
  const defaultLang = useSelector((store) => store.config.lang);
  const dispatch = useDispatch();
  const handleLangChange = (e) => {
    dispatch(changeLang(e.target.value));
  };
  return (
    <div className="absolute  top-0 w-full h-18 z-20 bg-gradient-to-b from-black flex items-center justify-between">
      <div>
        <img src={NETFLIX_LOGO} className="p-2 w-44  " />
      </div>
      {user && (
        <div className="mx-5 flex items-center">
          <h3 className="mx-5 font-bold text-white text-shadow-lg text-shadow-white/30">
            Welecome {displayName}
          </h3>
          {gpt && (
            <select
              className="  py-2 px-2 bg-black/50 text-white mx-2"
              onChange={(e) => {
                handleLangChange(e);
              }}
              value={defaultLang}
            >
              {supportedLang.map((lang) => (
                <option key={lang.id} value={lang.id}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <button
            className="bg-white text-red-800  rounded-lg px-4 py-2 mx-4  hover:bg-white/80"
            onClick={() => {
              dispatch(setShowGptPage());
            }}
          >
            {gpt ? "Home" : "GPT Search"}
          </button>
          <button
            className="text-white bg-red-800/100  rounded-lg px-4 py-2 mx-4 hover:bg-red-900"
            onClick={handleClick}
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
