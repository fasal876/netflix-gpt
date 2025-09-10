import { useState, useRef } from "react";
import { checkValidate } from "./checkValidate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  getAuth,
} from "firebase/auth";
import { addUser } from "./userSlice";
import { useDispatch } from "react-redux";

const useLogin = () => {
  const dispatch = useDispatch();
  const [isSignIn, setIsSignIn] = useState(true);
  const [errMessage, setErrMessage] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const handleClick = () => {
    setIsSignIn(!isSignIn);
  };
  const handleSubmit = async (e) => {
    const auth = getAuth();
    e.preventDefault();
    setLoading(true);
    const validation = checkValidate(
      email.current.value,
      password.current.value
    );
    setErrMessage(validation);
    if (validation) {
      return;
    }
    if (!isSignIn) {
      try {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        );
        await updateProfile(userCredential.user, {
          displayName: name.current.value,
          photoURL: "",
        });
        setLoading(false);
        dispatch(
          addUser({
            displayName: auth.currentUser.displayName,
            email: auth.currentUser.email,
            uid: auth.currentUser.uid,
          })
        );
      } catch (err) {
        const errorCode = err.code;
        const errorMessage = err.message;
        setErrMessage(errorCode + errorMessage);
        setLoading(false);
      }
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          setLoading(false);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrMessage(errorCode + errorMessage);
          setLoading(false);
        });
    }
  };

  return {
    isSignIn,
    setIsSignIn,
    errMessage,
    setErrMessage,
    isLoading,
    setLoading,
    email,
    name,
    password,
    handleClick,
    handleSubmit,
  };
};
export default useLogin;
