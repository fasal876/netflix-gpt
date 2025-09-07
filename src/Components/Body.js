import { useEffect, useNavigate } from "react";
import { createBrowserRouter, RouterProvider, useNavigate } from "react-router";
import Login from "./Login";
import Browse from "./Browse";
import { onAuthStateChanged, getAuth } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utilities/userSlice";
const Body = () => {
  const auth = getAuth();
  const dispatch = useDispatch();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user

        const { displayName, email, uid } = user;
        dispatch(addUser({ displayName, email, uid }));
        // ...
      } else {
        // User is signed out
        // ...
        dispatch(removeUser());
      }
    });
  }, []);
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    { path: "/browse", element: <Browse /> },
  ]);
  return <RouterProvider router={routes} />;
};
export default Body;
