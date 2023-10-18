import HomePage from "@/pages/Homepage";
import Login from "@/pages/auth/login";
import Register from "@/pages/auth/register";
import { useToken } from "@/utils/context/token";

import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

export default function Router() {
  const { token } = useToken();

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
    }
  ]);
  return <RouterProvider router={router} />;
}
