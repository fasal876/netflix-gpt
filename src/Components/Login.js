import { useRef, useState } from "react";
import { useNavigate } from "react-router";
import { NETFLIX_BG } from "../utilities/constants";
import Header from "./Header";
import { checkValidate } from "../utilities/checkValidate";

import { useDispatch } from "react-redux";
import { addUser } from "../utilities/userSlice";
import useLogin from "../utilities/useLogin";
//clear your dougt about diffing algorithm when it see same element eg:input
const Login = () => {
  const {
    isSignIn,
    errMessage,
    isLoading,
    email,
    name,
    password,
    handleClick,
    handleSubmit,
  } = useLogin();

  return (
    <div className="">
      <Header />
      <img src={NETFLIX_BG} className="absolute left-0 top-0 -z-10" />
      <form
        className="w-3/12 bg-black/80 mx-auto my-30 bg-opa px-10 py-15 "
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <h1 className="text-white font-bold text-4xl mb-4">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
            type="text"
            className="w-full  bg-gray-900/80 border border-gray-600 p-3 my-4 text-gray-300"
            placeholder="Enter your Full name"
            ref={name}
          />
        )}
        <input
          type="text"
          className={
            "w-full  bg-gray-900/80 border border-gray-600 p-3 my-4 text-gray-300 " +
            (errMessage ? "border-red-600" : "border-gray-600")
          }
          placeholder="Enter your email"
          ref={email}
        />
        <input
          type="password"
          className={
            "w-full bg-gray-900/80 border  p-3 my-4 text-gray-300 " +
            (errMessage ? "border-red-600" : "border-gray-600")
          }
          placeholder="Enter you password"
          ref={password}
        />
        <button
          className={
            "w-full my-8 p-2 text-white rounded-lg hover:bg-red-800 " +
            (isLoading ? "bg-red-900" : "bg-red-700")
          }
        >
          Submit
        </button>
        {errMessage && (
          <p className="text-red-800 font-bold text-sm">{errMessage}</p>
        )}
        <p className="text-white my-5">
          {isSignIn ? "New to netflix ?" : "Already have an account?"}
          <span
            className="font-bold cursor-pointer hover:underline"
            onClick={handleClick}
          >
            {isSignIn ? "Sign up now " : "Sign in now"}
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
