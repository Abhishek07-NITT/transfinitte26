import React, { createContext, useContext, useEffect, useState } from "react";
import { flushSync } from "react-dom";

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

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    const root = window.document.documentElement;

    // Apply temporary synchronization class to ensure all elements animate together
    root.classList.add("theme-transitioning");

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (document.startViewTransition && !prefersReducedMotion) {
      const transition = document.startViewTransition(() => {
        flushSync(() => {
          try {
            localStorage.setItem(storageKey, newTheme);
          } catch {
            // Ignore storage errors
          }
          root.classList.remove("light", "dark");
          root.classList.add(newTheme);
          setTheme(newTheme);
        });
      });

      transition.finished.finally(() => {
        setTimeout(() => {
          root.classList.remove("theme-transitioning");
        }, 50);
      });
    } else {
      try {
        localStorage.setItem(storageKey, newTheme);
      } catch {
        // Ignore storage errors
      }
      root.classList.remove("light", "dark");
      root.classList.add(newTheme);
      setTheme(newTheme);

      setTimeout(() => {
        root.classList.remove("theme-transitioning");
      }, 450);
    }
  };

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
    toggleTheme,
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
