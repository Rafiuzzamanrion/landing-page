import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Main = () => {
  return (
    <div className="mx-2 max-w-screen-2xl">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Main;
