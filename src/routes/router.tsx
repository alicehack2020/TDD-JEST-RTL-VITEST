import { createBrowserRouter} from "react-router-dom";
import Login from "../components/auth/Login";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Root from "./root";
import Form from "../components/Form";
import Register from "../components/auth/Register";
import { CounterPage } from "../pages/CounterPage";
import Products from "../pages/Products";

export const routes = [
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index:true,
        element: <Home />,
      },
      {
        path:'/form',
        element: <Form />,
      },
      {
        path:'/counter',
        element: <CounterPage />,
      },
      {
        path:'/register',
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/products",
        element: <Products />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export const router = createBrowserRouter(routes);
