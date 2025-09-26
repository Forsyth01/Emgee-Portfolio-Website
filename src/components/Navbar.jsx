import React, { useState, useEffect } from "react";
import ThemeToggle from "./ThemeToggle";
import MobileSidebar from "./MobileSidebar";
import { MenuIcon } from "lucide-react";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState(window.location.hash || "#");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleHashChange = () => {
      setActiveLink(window.location.hash || "#");
      setIsOpen(false);
    };
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const navLinks = [
    { href: "#", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#portfolio", label: "Portfolio" },
    { href: "#testimonial", label: "Testimonial" },
    {
      href: "/Erhokhon_George_CV.pdf",
      label: "Resume",
      download: true,
      isButton: true,
    },
  ];

  return (
    <>
      {/* Dark/Light Mode Button */}
      <div className="fixed z-[500] top-[5%] right-[2%]">
        <ThemeToggle />
      </div>

      {/* Navbar */}
      <nav className="fixed w-full z-10 top-0 py-4 sm:py-0 backdrop-blur-sm">
        <div className="py-4 relative">
          {/* Toggle Button for Mobile */}
          <div className="md:hidden flex justify-between item-center mx-4">
            <img src="/images/mobilehead.png" alt="" className="h-12" />
          <button
            className=" text-gray-900 dark:text-white focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <MenuIcon size={30} />
          </button>
          </div>

          {/* Mobile Sidebar */}
          <MobileSidebar
            isOpen={isOpen}
            navLinks={navLinks}
            activeLink={activeLink}
            setActiveLink={setActiveLink}
            onClose={() => setIsOpen(false)}
          />

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="container xs:w-[85%] sm:w-[70%] md:w-[80%] lg:w-[80%] mx-auto grid place-items-center">
              <div className="bg-[#C2DE3A] rounded-full px-6 py-3">
                <ul className="flex items-center gap-1">
                  {navLinks.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        {...(link.download ? { download: true } : {})}
                        className={`block px-3 py-1 text-base font-medium tracking-tight transition-colors duration-200 ${
                          link.isButton
                            ? "bg-white text-gray-900 rounded-full hover:bg-gray-100 px-6 py-2"
                            : activeLink === link.href
                            ? "text-white bg-black/20 rounded-full"
                            : "text-gray-900 hover:text-white"
                        }`}
                        onClick={() => {
                          if (!link.download) {
                            setActiveLink(link.href);
                          }
                        }}
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
