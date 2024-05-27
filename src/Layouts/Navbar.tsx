import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="mb-16 lg:mb-5">
      <header className="h-16">
        <nav className="w-full h-full items-center flex justify-between font-semibold">
          <span className="text-3xl">iRepair</span>
          <ul className=" space-x-6">
            <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"/about"}>About</NavLink>
            <Button>
              <NavLink to={"/login"}>Login</NavLink>
            </Button>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
