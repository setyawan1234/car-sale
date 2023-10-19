import HomePage from "@/pages/Homepage";
import Login from "@/pages/auth/login";
import Register from "@/pages/auth/register";
import ListCar from "@/pages/ListCar";
import { useToken } from "@/utils/context/token";

import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { useEffect } from "react";
import { setAxiosConfig } from "@/utils/axiosWithConfig";

export default function Router() {
  const { token } = useToken();

  useEffect(() => {
    setAxiosConfig("","https://651a7bf5340309952f0d5dfd.mockapi.io/api/v1");
  })
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/login",
      element: token === "" ? <Login /> : <Navigate to="/" />,
    },
    {
        path: "/register",
        element: token === "" ? <Register/> : <Navigate to="/"/> ,
    },
    {
      path: "/list-car",
      element: <ListCar />,
    }
  ]);
  return <RouterProvider router={router} />;
}
