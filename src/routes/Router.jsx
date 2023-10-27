import HomePage from "@/pages/Homepage";
import Login from "@/pages/auth/login";
import Register from "@/pages/auth/register";
import ListCar from "@/pages/ListCar";
import DetailCar from "@/pages/DetailCar";
import Admin from "@/pages/admin/Admin";
import BuyCar from "@/pages/BuyCar";
import ChatBotOpenAI from "@/pages/openAI/ChatBotOpenAI";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { useEffect } from "react";
import { setAxiosConfig } from "@/utils/axiosWithConfig";
import { useToken } from "@/utils/context/token";
import StatusPayment from "@/pages/StatusPayment";
import History from "@/pages/DetailPaymentCar";

export default function Router() {
  const { token } = useToken();

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
      element: <History/>
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
      element: <Admin />,
    },
  ]);
  return <RouterProvider router={router} />;
}
