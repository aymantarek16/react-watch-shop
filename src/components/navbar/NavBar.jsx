import React, { useEffect, useState } from "react";
import "./navbar.scss";
import { FaSearch } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";
// import Search from '../../page/Search';
import { useRef } from "react";

const NavBar = () => {
  const searchPage = useRef();

  const [toggleNav, setToggleNav] = useState(false);
  const [scroll, setScroll] = useState(true);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 0) {
        setScroll(false);
      } else {
        setScroll(true);
      }
    });
  }, []);

  const handleToggleNav = () => {
    setToggleNav(false);
  };

  const openSearch = (e) => {
    searchPage.current.classList.add("open");
  };

  const closeSearch = () => {
    searchPage.current.classList.remove("open");
  };



  // Close Search Page When Click On ESC On Keyboard
  document.addEventListener("keydown", function (e) {
    if (e.keyCode === 27) {
      closeSearch();
    }
  });

  return (
    <div className={scroll ? "navbar" : "navbar navbar2 "}>
      {/* Start Search Page */}
      <div className="searchPage" ref={searchPage}>
        <input type={"search"} placeholder="Searching key....." />
        <button className="closeBtn" onClick={closeSearch}>
          {<FaTimes />}
        </button>
      </div>
      {/* End Search Page */}

      {/* Start Top Navbar */}
      <h1>
        <span>Time</span>
        <span>Zone</span>
      </h1>

      <div
        className="toggle"
        onClick={() => {
          setToggleNav(!toggleNav);
        }}
      >
        {!toggleNav ? <FaBars /> : <FaTimes />}
      </div>

      <ul className={toggleNav ? "showList" : ""}>
        <li onClick={handleToggleNav}>
          <NavLink to="/">Home</NavLink>
        </li>
        <li onClick={handleToggleNav}>
          <NavLink to="about">About</NavLink>
        </li>
        <li onClick={handleToggleNav}>
          <NavLink to="shop">Shop</NavLink>
        </li>
        <li onClick={handleToggleNav}>
          <NavLink to="blog">Blog</NavLink>
        </li>
        <li onClick={handleToggleNav}>
          <NavLink to="contact">Contact</NavLink>
        </li>

        <div className="iconsTablet">
          <div className="icon" onClick={openSearch}>
            <FaSearch onClick={handleToggleNav} />
          </div>
          <div className="icon" onClick={handleToggleNav}>
            <NavLink to="login">{<FaUserAlt />}</NavLink>
          </div>
          <div className="icon" onClick={handleToggleNav}>
            <NavLink to="cart">{<AiOutlineShoppingCart />}</NavLink>
          </div>
        </div>
      </ul>

      <div className="icons">
        <div className="icon" onClick={openSearch}>
          <FaSearch />
        </div>
        <div className="icon">
          <NavLink to="login">{<FaUserAlt />}</NavLink>
        </div>
        <div className="icon">
          <NavLink to="cart">{<AiOutlineShoppingCart />}</NavLink>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
