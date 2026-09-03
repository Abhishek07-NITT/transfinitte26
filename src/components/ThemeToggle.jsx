import React from "react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "./ThemeProvider";

export function ThemeToggle({ className = "" }) {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      onClick={toggleTheme}
      type="button"
      aria-label={`Switch to ${isDark ? "light" : "dark"} theme`}
      className={`relative inline-flex items-center justify-center p-2 rounded-full border border-solid transition-all duration-300 group select-none ${
        isDark
          ? "border-white/20 bg-white/10 text-white hover:bg-white/20 hover:border-white/40"
          : "border-black/20 bg-black/5 text-black hover:bg-black/10 hover:border-black/40"
      } ${className}`}
      title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
    >
      <div className="relative w-4 h-4 flex items-center justify-center">
        <Sun
          className={`w-4 h-4 transition-all duration-300 absolute ${
            isDark
              ? "rotate-90 scale-0 opacity-0"
              : "rotate-0 scale-100 opacity-100 text-amber-600"
          }`}
        />
        <Moon
          className={`w-4 h-4 transition-all duration-300 absolute ${
            isDark
              ? "rotate-0 scale-100 opacity-100 text-sky-300"
              : "-rotate-90 scale-0 opacity-0"
          }`}
        />
      </div>
    </button>
  );
}

export default ThemeToggle;
