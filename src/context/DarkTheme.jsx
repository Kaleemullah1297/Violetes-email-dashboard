import { useState, useEffect } from "react";
import DarkThemeContext from "./DarkThemeContext";

const DarkThemeState = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);

    if (theme === "dark") {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [theme]);

  return (
    <DarkThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </DarkThemeContext.Provider>
  );
};

export default DarkThemeState;
