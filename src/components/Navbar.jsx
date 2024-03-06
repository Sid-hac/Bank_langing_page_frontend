import { useState } from "react";
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";
const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <img src={logo} alt="axis_bank" className="w-[100px] h-[40px]" />

      <ul className="list-none sm:flex hidden flex justify-between gap-8">
        {navLinks.map((nav, index) => (
          <li key={index} className="font-poppins text-white cursor-pointer">
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu_icon"
          className="w-[20px] h-[20px] object-contain"
          onClick={() => setToggle((prev) => !prev)}
        />

        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-4 bg-black-gradient absolute top-20 right-0 mx-3 my-2 min-w-[130px] rounded-xl sidebar`}
        >
          <ul className="list-none flex flex-col flex-1 justify-between gap-4">
            {navLinks.map((nav, index) => (
              <li
                key={index}
                className="font-poppins text-white cursor-pointer"
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
