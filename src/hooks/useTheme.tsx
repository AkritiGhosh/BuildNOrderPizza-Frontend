import { createContext, ReactNode, useContext, useEffect } from "react";
import { useState } from "react";

const ThemeContext = createContext({ darkTheme: false, toggleTheme: () => {} });

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [darkTheme, setDarkTheme] = useState(
    document.body.classList.contains("dark") ?? false
  );
  const toggleTheme = () => setDarkTheme((prev) => !prev);

  useEffect(() => {
    document.body.classList.remove("dark", "light");
    if (darkTheme) document.body.classList.add("dark");
    else document.body.classList.add("light");
  }, [darkTheme]);

  return (
    <ThemeContext.Provider value={{ darkTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = () => useContext(ThemeContext);

export default useTheme;
