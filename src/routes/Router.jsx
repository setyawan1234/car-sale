import HomePage from "@/pages/Homepage";
import Login from "@/pages/auth/login";
import Register from "@/pages/auth/register";
import ListCar from "@/pages/ListCar";
import DetailCar from "@/pages/DetailCar";
import Admin from "@/pages/admin/Admin";
import BuyCar from "@/pages/BuyCar";
import ChatBotOpenAI from "@/pages/openAI/ChatBotOpenAI";
import StatusPayment from "@/pages/StatusPayment";
import History from "@/pages/DetailPaymentCar";
import LoginAdmin from "@/pages/auth/loginAdmin";

import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { useEffect } from "react";
import { setAxiosConfig } from "@/utils/axiosWithConfig";
import { useToken } from "@/utils/context/token";

export default function Router() {
  const { token } = useToken();
  const { role } = useToken();

  useEffect(() => {
    setAxiosConfig("", "https://651a7bf5340309952f0d5dfd.mockapi.io/api/v1");
  });
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/list-car",
      element: <ListCar />,
    },
    {
      path: "/detail-car/:id",
      element: <DetailCar />,
    },
    {
      path: "/bot",
      element: token === "" ? <Navigate to="/login" /> : <ChatBotOpenAI />,
    },
    {
      path: "/payments/:id",
      element: token === "" ? <Navigate to="/login" /> : <BuyCar />,
    },
    {
      path: "/status",
      element: token === "" ? <Navigate to="/list-car"/> : <StatusPayment/>
    },
    {
      path: "/history",
      element: token === "" ? <Navigate to="/login"/> : <History/>
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/role-admin",
      element: role === "" ? <Navigate to="/login-admin"/> : <Admin />,
    },
    {
      path: "/login-admin",
      element: <LoginAdmin/>
    }
  ]);
  return <RouterProvider router={router} />;
}
