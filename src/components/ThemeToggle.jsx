import { useTheme } from "../context/ThemeContext";
import { Sun, Moon } from "lucide-react";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className=" text-gray-800 dark:text-white rounded-md cursor-pointer"
    >
      <Sun className="hidden dark:block" color="#f45e0b" size={20} />
      <Moon className="block dark:hidden " size={20} />
    </button>
  );
};

export default ThemeToggle;
