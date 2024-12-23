import { createHashRouter } from "react-router-dom";
import { Layout } from "../Layout/Layout";
import Home1 from "../views/Home/Home1";

export const AppRoute = createHashRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home1 />,
      },
    ],
  },
]);
