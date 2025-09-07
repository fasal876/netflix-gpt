import React from "react";
import { NETFLIX_LOGO } from "../utilities/constants";
import { signOut } from "firebase/auth";
import { auth } from "../firebase-config";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const displayName = user?.displayName;
  const handleClick = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
      });
  };
  return (
    <div className="absolute  top-0 w-full h-18 z-10 bg-gradient-to-b from-black flex items-center justify-between">
      <div>
        <img src={NETFLIX_LOGO} className="p-2 w-44  " />
      </div>
      {user && (
        <div className="mx-5 flex items-center">
          <h3 className="mx-5 font-bold text-white text-shadow-black">
            {displayName}
          </h3>
          <button
            className="text-white bg-red-700  rounded-lg px-3 py-2 hover:bg-red-900"
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
