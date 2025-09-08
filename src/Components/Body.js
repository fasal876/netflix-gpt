import { useEffect, useNavigate } from "react";
import { createBrowserRouter, RouterProvider, useNavigate } from "react-router";
import Login from "./Login";
import Browse from "./Browse";
import { onAuthStateChanged, getAuth } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utilities/userSlice";
const Body = () => {
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
