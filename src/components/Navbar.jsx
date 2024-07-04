import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <nav
      className="bg-gray-800 p-6 text-white fixed w-full z-10 top-0"
      style={{ cursor: "default" }}
    >
      <div className="mx-auto text-center flex w-5/6 justify-between font-semibold">
        <div className="hidden xl:flex space-x-12 items-center text-xl">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/projects">Projects</Link>
        </div>
        <div className="text-6x1 xl:text-2xl font-extrabold text-xl">
          <a href="/">SUJAL PAL</a>
        </div>
        <div className="hidden xl:flex space-x-12 items-center text-lg">
          <Link to="/Skills">Skills</Link>
          <Link to="/experience">Experience</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="sm:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-xl focus:outline-none"
          >
            {isMobileMenuOpen ? "✕" : "☰"}
          </button>
        </div>
        <div
          className={`sm:hidden fixed top-0 left-0 w-full h-full bg-gray-800 text-center ${
            isMobileMenuOpen
              ? "flex flex-col items-center justify-center"
              : "hidden"
          }`}
        >
          <button
            onClick={closeMobileMenu}
            className="text-xl absolute top-4 right-4 focus:outline-none"
          >
            ✕
          </button>
          <ul className="font-medium text-2xl space-y-4">
            <li>
              <Link to="/" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={closeMobileMenu}>
                About
              </Link>
            </li>
            <li>
              <Link to="/projects" onClick={closeMobileMenu}>
                Projects
              </Link>
            </li>
            <li>
              <Link to="/Skills" onClick={closeMobileMenu}>
                Skills
              </Link>
            </li>
            <li>
              <Link to="/experience" onClick={closeMobileMenu}>
                Experince
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={closeMobileMenu}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
