import { useEffect, useState } from "react";
import { MdSunny } from "react-icons/md";
import { FaMoon } from "react-icons/fa";

const ThemeToggle = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.setAttribute("data-theme", "dark");
    } else {
      root.setAttribute("data-theme", "light");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <div className="flex items-center">
      <input
        type="checkbox"
        checked={theme === "dark"}
        onChange={toggleTheme}
        className="hidden"
        id="theme-toggle"
      />
      <label htmlFor="theme-toggle" className="cursor-pointer">
        {theme === "light" ? (
          <MdSunny className="fill-current w-6 h-6" />
        ) : (
          <FaMoon className="fill-current w-6 h-6" />
        )}
      </label>
    </div>
  );
};

export default ThemeToggle;
