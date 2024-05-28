import App from "@/App";
import About from "@/Pages/About";
import Home from "@/Pages/Home";
import ServicesSection from "@/Pages/Home/ServicesSection";


import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/services",
        element: <ServicesSection />,
      },
    ],
  },
]);
export default router;
