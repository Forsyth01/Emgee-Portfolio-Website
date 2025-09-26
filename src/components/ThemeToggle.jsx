import { useTheme } from "../context/ThemeContext";
import { Sun, Moon } from "lucide-react";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className=" text-gray-800 dark:text-white  dark:bg-white bg-gray-100 p-2 rounded-full cursor-pointer"
    >
      <Sun className="hidden dark:block" color="#f45e0b" size={20} />
      <Moon className="block dark:hidden " size={20} />
    </button>
  );
};

export default ThemeToggle;
