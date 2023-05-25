import { createBrowserRouter} from "react-router-dom";
import Login from "../components/auth/Login";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Root from "./root";

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
