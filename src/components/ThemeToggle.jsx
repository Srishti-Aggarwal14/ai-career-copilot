import { useState, useEffect } from "react";
import "./ThemeToggle.css";
import { getTheme, setTheme } from "../utils/theme";

function ThemeToggle() {

  const [theme, setCurrentTheme] = useState(getTheme());

  useEffect(() => {
    setTheme(theme);
  }, [theme]);

  const toggleTheme = () => {
    setCurrentTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <button
      className="theme-btn"
      onClick={toggleTheme}
    >
      {theme === "light" ? "🌙" : "☀️"}
    </button>
  );
}

export default ThemeToggle;