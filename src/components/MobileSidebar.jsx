import React from "react";
import ThemeToggle from "./ThemeToggle";

const MobileSidebar = ({ isOpen, navLinks, activeLink, setActiveLink, onClose }) => {
  return (
    <div
      className={`${
        isOpen ? "translate-x-0" : "translate-x-full"
      } fixed top-0 right-0 h-full w-full bg-[#F5F8E9] shadow-lg md:hidden transition-transform duration-300 ease-in-out z-40`}
    >
      <div className="flex flex-col items-start p-6 bg-[#daddcf] h-full">
        {/* Nav Links */}
        <ul className="flex flex-col gap-4 w-full">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                {...(link.download ? { download: true } : {})}
                className={`block px-4 py-2 text-base font-medium tracking-tight transition-colors duration-200 ${
                  link.isButton
                    ? "bg-white text-gray-900 rounded-full hover:bg-gray-100"
                    : activeLink === link.href
                    ? "text-white bg-black/20 rounded-full"
                    : "text-gray-900 hover:text-white hover:bg-black/10 rounded-full"
                }`}
                onClick={() => {
                  if (!link.download) {
                    setActiveLink(link.href);
                  }
                  onClose(); // close sidebar on link click
                }}
              >
                {link.label}
              </a>
            </li>
          ))}
          <ThemeToggle/>
        </ul>
      </div>
    </div>
  );
};

export default MobileSidebar;
