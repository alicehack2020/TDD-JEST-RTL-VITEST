import { createBrowserRouter } from "react-router-dom";
import Login from "../components/auth/Login";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Root from "./root";
export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <NotFound />,
      children: [
        {
          errorElement: <NotFound />,
          children: [
            {
              path: "/",
              element: <Home />,
            },
            {
              path: "/login",
              element: <Login />,
            } 
          ],
        },
      ],
    },
  ]);
 