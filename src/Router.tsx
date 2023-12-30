import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./components/Layout";

const router = createBrowserRouter([
  {
    Component: Layout,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      // {
      //   path: "about",
      //   element: <About />,
      // },
    ],
  },
]);

export default router;
