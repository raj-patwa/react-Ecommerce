import React, { useContext, useState, useEffect } from "react";
import { assets } from "../assets/assets";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";

const Navbar = () => {

  const [visible, setVisible] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const navigate = useNavigate();

  const { setShowSearch, getCartCount } = useContext(ShopContext);

  // check login status
  useEffect(() => {
    const status = localStorage.getItem("isLoggedIn");
    setIsLoggedIn(status === "true");
  }, []);

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

      {/* Right Icons */}
      <div className="flex items-center gap-6">

        <img
          onClick={() => setShowSearch(true)}
          src={assets.search_icon}
          className="w-5 cursor-pointer"
          alt=""
        />

        {/* Profile */}
        <div className="relative group">

          <img
            onClick={() => {
              if (!isLoggedIn) navigate("/login");
            }}
            src={assets.profile_icon}
            className="w-5 cursor-pointer"
            alt=""
          />

          {isLoggedIn && (
            <div className="hidden group-hover:block absolute right-0 pt-4">
              <div className="flex flex-col gap-2 w-36 py-3 px-4 bg-white shadow-md rounded text-sm">

                <p
                  onClick={() => navigate("/order")}
                  className="cursor-pointer hover:text-black"
                >
                  Orders
                </p>

                <p
                  onClick={() => {
                    localStorage.clear();
                    setIsLoggedIn(false);
                    navigate("/");
                  }}
                  className="cursor-pointer hover:text-black"
                >
                  Logout
                </p>

              </div>
            </div>
          )}

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
    </div>
  );
};

export default Navbar;
