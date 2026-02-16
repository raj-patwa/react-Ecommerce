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

  // prevent background scroll when menu open
  useEffect(() => {
    document.body.style.overflow = visible ? "hidden" : "auto";
  }, [visible]);

  return (
    <>
      {/* NAVBAR */}
      <div className="flex items-center justify-between py-4 font-medium relative">

        {/* Logo */}
        <Link to="/">
          <img src={assets.logo} className="w-28 sm:w-36" alt="logo" />
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden sm:flex gap-6 items-center text-gray-700">
          {["/", "/collection", "/about", "/contact"].map((path, i) => (
            <li key={i}>
              <NavLink
                to={path}
                className={({ isActive }) =>
                  isActive ? "text-black font-semibold" : "hover:text-black"
                }
              >
                {path === "/" ? "Home" : path.replace("/", "")}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Right Icons */}
        <div className="flex items-center gap-4 sm:gap-6">

          {/* Search */}
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
                    onClick={() => navigate("/orders")}
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
            <p className="absolute right-[5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white rounded-full text-[8px]">
              {getCartCount()}
            </p>
          </Link>

          {/* Hamburger Icon (Mobile) */}
         <button
  onClick={() => setVisible(true)}
  className="sm:hidden"
>
  <img
    src={assets.menu_icon}
    alt="menu"
    className="w-6 h-6"
  />
</button>

        </div>
      </div>

      {/* MOBILE MENU DRAWER */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ${
          visible ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6 flex flex-col gap-5 text-lg">

          {/* Close */}
          <button
            onClick={() => setVisible(false)}
            className="self-end text-2xl"
          >
            ✕
          </button>

          <NavLink onClick={() => setVisible(false)} to="/">
            Home
          </NavLink>
          <NavLink onClick={() => setVisible(false)} to="/collection">
            Collection
          </NavLink>
          <NavLink onClick={() => setVisible(false)} to="/about">
            About
          </NavLink>
          <NavLink onClick={() => setVisible(false)} to="/contact">
            Contact
          </NavLink>

          {!isLoggedIn && (
            <NavLink onClick={() => setVisible(false)} to="/login">
              Login
            </NavLink>
          )}
        </div>
      </div>

      {/* DARK OVERLAY */}
      {visible && (
        <div
          onClick={() => setVisible(false)}
          className="fixed inset-0 bg-black/30 z-40"
        />
      )}
    </>
  );
};

export default Navbar;
