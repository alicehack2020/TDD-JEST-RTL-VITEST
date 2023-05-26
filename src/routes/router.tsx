import { createBrowserRouter} from "react-router-dom";
import Login from "../components/auth/Login";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Root from "./root";
import Form from "../components/Form";
import Register from "../components/auth/Register";

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
        path:'/register',
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export const router = createBrowserRouter(routes);
