import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { Link, NavLink } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";


const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const {setShowSearch,getCartCount,removeFromCart}=useContext(ShopContext);
  return (
    <div className="flex items-center justify-between py-5 font-medium relative">

      {/* Logo */}
      <Link to="/">
        <img src={assets.logo} className="w-36" alt="logo" />
      </Link>

      {/* Desktop Nav Links */}
      <ul className="hidden sm:flex gap-5 items-center text-gray-800">
        {["/", "/collection", "/about", "/contact"].map((path, i) => (
          <li key={i}>
            <NavLink
              to={path}
              className={({ isActive }) =>
                `flex flex-col items-center gap-1 ${
                  isActive ? "text-black" : "text-gray-400"
                }`
              }
            >
              {path === "/" ? "Home" : path.replace("/", "")}
            </NavLink>
          </li>
        ))}
      </ul>

      {/* Right Side Icons */}
      <div className="flex items-center gap-6">

        <img onClick={()=>setShowSearch(true)} src={assets.search_icon} className="w-5 cursor-pointer" alt="" />

        {/* Profile */}
        <div className="group relative">
         <Link to='/login'> <img src={assets.profile_icon} className="w-5 cursor-pointer" alt="" /></Link>
          <div className="hidden group-hover:block absolute right-0 pt-4">
            <div className="flex flex-col gap-3 w-32 py-3 px-3 bg-slate-100 text-gray-500 rounded">
              {/* <p className="cursor-pointer hover:text-black">My Profile</p>
              <p className="cursor-pointer hover:text-black">Orders</p>
              <p className="cursor-pointer hover:text-black">Logout</p> */}
            </div>
          </div>
        </div>

        {/* Cart */}
        <Link to="/cart" className="relative">
          <img src={assets.cart_icon} className="w-5" alt="" />
          <p className="absolute right-[5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">
            {getCartCount()}
          </p>
        </Link>

        {/* Mobile Menu Icon */}
        <img
          onClick={() => setVisible(true)}
          src={assets.menu_icon}
          className="w-5 cursor-pointer sm:hidden"
          alt=""
        />
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 bottom-0 bg-white z-50 overflow-hidden transition-all duration-300 ${
          visible ? "w-full" : "w-0"
        }`}
      >
        <div className="flex flex-col text-gray-600">
          <div
            onClick={() => setVisible(false)}
            className="flex items-center gap-4 p-4 cursor-pointer"
          >
            <img
              src={assets.dropdown_icon}
              className="h-4 rotate-180"
              alt=""
            />
            <p>Back</p>
          </div>

          {["/", "/collection", "/about", "/contact"].map((path, i) => (
            <NavLink
              key={i}
              to={path}
              onClick={() => setVisible(false)}
              className="py-2 pl-6 border"
            >
              {path === "/" ? "HOME" : path.replace("/", "").toUpperCase()}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
