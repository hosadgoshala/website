import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import logo from "../../public/logo.svg";

const Navbar = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setIsOpen(false);
  };

  return (
    <nav className="bg-primary p-2 fixed top-0 left-0 w-full z-50 shadow shadow-black/20">
      <div className="container mx-auto flex justify-between items-center">
        <a href="#hero">
          <div className="flex items-center">
            <img src={logo} alt="logo" className="w-10 h-10 mr-2" />
            <span className="text-white text-lg font-semibold">
              {i18n.t("navbar.name")}
            </span>
          </div>
        </a>
        {/* Menu Items */}
        <div className="hidden lg:flex space-x-6 items-center">
          <a
            href="#about"
            className="text-white text-sm font-semibold hover:bg-primaryDark p-2 rounded transition-colors ease-in-out duration-300"
          >
            {i18n.t("navbar.about")}
          </a>
          <a
            href="#programs"
            className="text-white text-sm font-semibold hover:bg-primaryDark p-2 rounded transition-colors ease-in-out duration-300"
          >
            {i18n.t("navbar.programs")}
          </a>
          <a
            href="#facility"
            className="text-white text-sm font-semibold hover:bg-primaryDark p-2 rounded transition-colors ease-in-out duration-300"
          >
            {i18n.t("navbar.facility")}
          </a>
          <a
            href="#donate"
            className="text-white text-sm font-semibold bg-green-900 hover:bg-green-950 p-2 rounded transition-colors ease-in-out duration-300"
          >
            {i18n.t("navbar.donate")}
          </a>
          <a
            href="#contact"
            className="text-white text-sm font-semibold hover:bg-primaryDark p-2 rounded transition-colors ease-in-out duration-300"
          >
            {i18n.t("navbar.contact")}
          </a>
          {/* Language Selector for Desktop */}
          <div className="flex pl-8">
            <button
              onClick={() => changeLanguage("en")}
              className={`p-1 rounded-l text-xs  ${
                i18n.language === "en"
                  ? "bg-gray-800 text-white"
                  : "bg-gray-800 opacity-50 text-gray-300"
              }`}
            >
              English
            </button>
            <button
              onClick={() => changeLanguage("kn")}
              className={`p-1 rounded-r text-xs ${
                i18n.language === "kn"
                  ? "bg-gray-800 text-white"
                  : "bg-gray-800 opacity-50 text-gray-300"
              }`}
            >
              ಕನ್ನಡ
            </button>
          </div>
        </div>
        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button
            className="text-white focus:outline-none transform transition-transform duration-300"
            onClick={toggleMenu}
          >
            {/* Conditional rendering for hamburger and close icons */}
            {isOpen ? (
              <svg
                className="w-6 h-6 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
          {/* Mobile Menu Dropdown */}
          <div
            className={`absolute right-0 mt-1 w-full h-screen z-50 bg-primaryDark transition-all duration-300 ease-in-out transform ${
              isOpen
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-4 pointer-events-none"
            }`}
          >
            {isOpen && (
              <div className="relative flex flex-col py-4 h-full">
                {/* Language Selection Tab */}
                <div className="flex justify-center items-center py-2 ">
                  <button
                    onClick={() => changeLanguage("en")}
                    className={`p-1 rounded-l text-xs ${
                      i18n.language === "en"
                        ? "bg-gray-800 text-white"
                        : "bg-gray-800 opacity-50 text-gray-300"
                    }`}
                  >
                    English
                  </button>
                  <button
                    onClick={() => changeLanguage("kn")}
                    className={`p-1 rounded-r text-xs ${
                      i18n.language === "kn"
                        ? "bg-gray-800 text-white"
                        : "bg-gray-800 opacity-50 text-gray-300"
                    }`}
                  >
                    ಕನ್ನಡ
                  </button>
                </div>
                <hr className="mx-4 my-1 opacity-20" />
                <a
                  href="#about"
                  className="block px-4 py-2 text-white"
                  onClick={toggleMenu}
                >
                  {i18n.t("navbar.about")}
                </a>
                <hr className="mx-4 my-1 opacity-20" />
                <a
                  href="#programs"
                  className="block px-4 py-2 text-white"
                  onClick={toggleMenu}
                >
                  {i18n.t("navbar.programs")}
                </a>
                <hr className="mx-4 my-1 opacity-20" />
                <a
                  href="#facility"
                  className="block px-4 py-2 text-white"
                  onClick={toggleMenu}
                >
                  {i18n.t("navbar.facility")}
                </a>
                <hr className="mx-4 my-1 opacity-20" />
                <a
                  href="#donate"
                  className="block font-bold px-4 py-2 text-white"
                  onClick={toggleMenu}
                >
                  {i18n.t("navbar.donate")}
                </a>
                <hr className="mx-4 my-1 opacity-20" />
                <a
                  href="#contact"
                  className="block px-4 py-2 text-white"
                  onClick={toggleMenu}
                >
                  {i18n.t("navbar.contact")}
                </a>
                <p className="absolute bottom-0 text-center text-white">
                  footer
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
