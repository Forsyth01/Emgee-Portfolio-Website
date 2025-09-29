// BackButton.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import ThemeToggle from "./ThemeToggle";

const BackAndToggleButton = ({ fallback = "/", className }) => {
  const navigate = useNavigate();

  const goBack = () => {
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate(fallback);
    }
  };

  return (
    <div
      className={`sticky top-10 z-[999] md:w-[95%] m-auto md:px-6 px-4 flex items-center justify-between ${className}`}
    >
      {/* Back Arrow with hover animation */}
      <motion.button
        onClick={goBack}
        whileHover={{ scale: 1.1, rotate: -10 }}
        whileTap={{ scale: 0.95, rotate: 0 }}
        className="p-2 bg-[#C2DE3A] rounded-full shadow-lg"
      >
        <ArrowLeft className="text-black" size={28} />
      </motion.button>

      {/* Theme Toggle */}
      <div className="hidden md:flex">
      <ThemeToggle />
      </div>
    </div>
  );
};

export default BackAndToggleButton;
