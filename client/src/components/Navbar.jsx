import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useLocation } from "react-router-dom";
import { setNavbar } from "../redux/navbarSlice";
import { useEffect, useState } from "react";
import { IoReorderThreeSharp } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";

const Navbar = () => {
  const dispatch = useDispatch();
  const navbar = useSelector((store) => store.navbar.navbar);
  const location = useLocation();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (location.pathname === "/contact-us" || location.pathname === "/chat") {
      dispatch(setNavbar(false));
    } else {
      dispatch(setNavbar(true));
    }
  }, [location.pathname, dispatch]);

  return (
    <>
      {" "}
      <div className="flex justify-between items-center py-3 px-4 md:px-8 xl:px-16 fixed top-0 right-0 left-0 bg-white z-50">
        <NavLink to="/">
          <h1 className="text-3xl font-bold tracking-wide text-black">Viraj</h1>
        </NavLink>
        {navbar && (
          <nav className="hidden md:flex  gap-5 border-gray-50 border px-6 py-2 rounded-full shadow-sm">
            <a href="#hero">Home</a>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#services">Services</a>
            <a href="#contact">Contact</a>
          </nav>
        )}
        <div className="flex items-center gap-4">
          <NavLink to="/contact-us">
            <button className="border border-gray-700 px-6 py-2 rounded-full">
              Contact Us
            </button>
          </NavLink>
          <span onClick={() => setOpen(true)} className="flex md:hidden">
            <IoReorderThreeSharp className="w-8 h-8" />
          </span>
        </div>
      </div>
      <div className="flex justify-between items-center py-3 px-4 md:px-8 xl:px-16 fixed top-0 right-0 left-0 bg-white z-50">
        <NavLink to="/">
          <h1 className="text-3xl font-bold tracking-wide text-black">Viraj</h1>
        </NavLink>
        {navbar && (
          <nav className="hidden md:flex  gap-5 border-gray-50 border px-6 py-2 rounded-full shadow-sm">
            <a href="#hero">Home</a>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#services">Services</a>
            <a href="#contact">Contact</a>
          </nav>
        )}
        <div className="flex items-center gap-4">
          <NavLink to="/contact-us">
            <button className="border border-gray-700 px-6 py-2 rounded-full">
              Contact Us
            </button>
          </NavLink>
          <span onClick={() => setOpen(true)} className="flex md:hidden">
            <IoReorderThreeSharp className="w-8 h-8" />
          </span>
        </div>
        <div
          className={`absolute top-0 right-0 md:hidden flex flex-col transition-transform duration-300 ${
            open ? "translate-x-0" : "translate-x-full"
          } h-screen bg-gray-50 w-[50%] sm:w-[40%] z-40 py-4`}
        >
          <span
            onClick={() => setOpen(false)}
            className="flex justify-end px-4 mb-2"
          >
            <RxCross1 className="w-6 h-6" />
          </span>
          <nav className="flex flex-col gap-2">
            <a
              href="#hero"
              className="py-2 px-3 hover:bg-gray-200"
              onClick={() => setOpen(false)}
            >
              Home
            </a>
            <a
              href="#about"
              className="py-2 px-3 hover:bg-gray-200"
              onClick={() => setOpen(false)}
            >
              About
            </a>
            <a
              href="#projects"
              className="py-2 px-3 hover:bg-gray-200"
              onClick={() => setOpen(false)}
            >
              Projects
            </a>
            <a
              href="#services"
              className="py-2 px-3 hover:bg-gray-200"
              onClick={() => setOpen(false)}
            >
              Services
            </a>
            <a
              href="#contact"
              className="py-2 px-3 hover:bg-gray-200"
              onClick={() => setOpen(false)}
            >
              Contact
            </a>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
