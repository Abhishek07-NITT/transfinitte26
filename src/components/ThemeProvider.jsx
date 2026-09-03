import React, { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext({
  theme: "dark",
  setTheme: () => null,
  toggleTheme: () => null,
});

export function ThemeProvider({
  children,
  defaultTheme = "dark",
  storageKey = "tf-theme",
}) {
  const [theme, setTheme] = useState(() => {
    try {
      const stored = localStorage.getItem(storageKey);
      if (stored) return stored;
    } catch {
      // Ignore localStorage errors
    }
    return defaultTheme;
  });

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove("light", "dark");

    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light";
      root.classList.add(systemTheme);
      return;
    }

    root.classList.add(theme);
  }, [theme]);

  const value = {
    theme,
    setTheme: (newTheme) => {
      try {
        localStorage.setItem(storageKey, newTheme);
      } catch {
        // Ignore localStorage errors
      }
      setTheme(newTheme);
    },
    toggleTheme: () => {
      const newTheme = theme === "dark" ? "light" : "dark";
      try {
        localStorage.setItem(storageKey, newTheme);
      } catch {
        // Ignore localStorage errors
      }
      setTheme(newTheme);
    },
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
