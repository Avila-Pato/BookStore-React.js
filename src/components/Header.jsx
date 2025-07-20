import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logoImg from "../assets/logo.png";
import userImg from "../assets/user.png";
import { FaBars, FaBarsStaggered } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { RiUserLine } from "react-icons/ri";
import { ShopContext } from "../context/ShopContext.jsx";
import Navbar from "./Navbar";

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  const { navigate, user, setUser, searchQuery, setSearchQuery,} = useContext(ShopContext);

  // Redireccionar a la pagina de busqueda
  const isShopPage = useLocation().pathname.endsWith("/shop");
  useEffect(() => {
    if(searchQuery.length > 0 && !isShopPage){
      navigate('/shop');;
    }
  })
  

  const toggleMenu = () => setMenuOpened((prev) => !prev);

  return (
    <header className="sticky top-0 left-0 right-0 z-50 bg-white shadow-md py-2">
  <div className="max-padd-container flex items-center justify-between gap-4">
    {/* Logo */}
    <Link to={"/"} className="bold-22 xl:bold-28 flex items-end gap-1">
      <img src={logoImg} alt="Logo" className="hidden sm:block h-9" />
      <div className="sm:relative top-1.5">
        <span className="text-secondary">Book</span>Store
      </div>
    </Link>

    {/* Navbar */}
    <Navbar
      setMenuOpened={setMenuOpened}
      containerStyles={`${
        menuOpened
          ? "flex items-start flex-col gap-y-8 fixed top-16 right-6 p-5 bg-white shadow-md w-52 ring-1 ring-slate-900/5 z-50"
          : "hidden lg:flex gap-x-5 xl:gap-x-7 medium-15 ring-1 ring-slate-900/15 rounded-full p-1 bg-primary"
      }`}
    />

    {/* Icons: Search, Toggle, Cart, User */}
    <div className="flex items-center gap-x-4 sm:gap-x-6">
      {/* SearchBar */}
      <div className="relative hidden xl:flex items-center">
        <div
          className={`bg-white ring-1 ring-slate-900/10 rounded-full overflow-hidden transition-all duration-300 ease-in-out ${
            showSearch
              ? "w-[266px] opacity-100 px-4 py-2.5"
              : "w-0 opacity-0 p-0"
          }`}
        >
          <input
            // acttualiza el searchQuery cuando se escribe en el input desde shopContext hacia Shop.jsx
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}

            type="text"
            placeholder="Busca tu libro..."
            className="bg-transparent w-full text-sm outline-none pr-10 placeholder:text-gray-400"
          />
        </div>
        <div
          className="absolute right-0.5 bg-primary p-2.5 rounded-full cursor-pointer z-10"
          onClick={() => setShowSearch((prev) => !prev)}
        >
          <FaSearch className="text-xl" />
        </div>
      </div>

      {/* Menu Toggle (mobile only) */}
      {menuOpened ? (
        <FaBarsStaggered
          className="text-xl cursor-pointer lg:hidden"
          onClick={toggleMenu}
        />
      ) : (
        <FaBars
          className="text-xl cursor-pointer lg:hidden"
          onClick={toggleMenu}
        />
      )}

      {/* Cart */}
      <Link to={"/cart"} className="relative bold-16">
        Carrito
        <span className="bg-secondary text-white text-[12px] font-semibold absolute -top-3.5 -right-2 flexCenter w-4 h-4 rounded-full shadow-md">
          0
        </span>
      </Link>

      {/* User Profile */}
      <div className="group relative">
        {user ? (
          <div className="flex gap-2 items-center cursor-pointer rounded-full bg-white">
            <img src={userImg} alt="user" height={44} width={44} />
          </div>
        ) : (
          <button className="btn-light flexCenter gap-x-2">
            Login <RiUserLine className="text-xl" />
          </button>
        )}
        {/* Dropdown */}
        {user && (
          <ul className="bg-white p-2 w-32 ring-1 ring-slate-900/5 rounded absolute right-0 top-10 hidden group-hover:flex flex-col font-medium-14 shadow-md z-50">
            <li
              onClick={() => navigate("/my-orders")}
              className="p-2 rounded-md hover:bg-primary cursor-pointer"
            >
              Orders
            </li>
            <li className="p-2 rounded-md hover:bg-primary cursor-pointer">
              Logout
            </li>
          </ul>
        )}
      </div>
    </div>
  </div>
</header>

  );
};

export default Header;
