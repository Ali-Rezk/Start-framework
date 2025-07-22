import React, { useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const navbarRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        navbarRef.current.classList.add("navbar-scrolled");
      } else {
        navbarRef.current.classList.remove("navbar-scrolled");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      ref={navbarRef}
      className="navbar navbar-expand-lg bg-indigo py-4 fixed-top"
    >
      <div className="container">
        <Link className="navbar-brand text-white fs-2" to="/">
          Start Framework
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div
          className="collapse navbar-collapse ms-auto"
          id="navbarNavAltMarkup"
        >
          <ul className="navbar-nav">
            <li className="me-3 mt-3 mt-md-0">
              <NavLink
                className="nav-link text-uppercase px-2"
                aria-current="page"
                to="/about"
              >
                About
              </NavLink>
            </li>
            <li className="me-3 mt-3 mt-md-0">
              <NavLink
                className="nav-link text-uppercase px-2 "
                to="/portfolio"
              >
                Portfolio
              </NavLink>
            </li>
            <li className="me-3 mt-3 mt-md-0">
              <NavLink className="nav-link text-uppercase px-2 " to="contact">
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
