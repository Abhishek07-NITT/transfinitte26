import React from "react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "./ThemeProvider";

export function ThemeToggle({ className = "" }) {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      onClick={(e) => toggleTheme(e)}
      type="button"
      aria-label={`Switch to ${isDark ? "light" : "dark"} theme`}
      className={`relative inline-flex items-center justify-center p-2 rounded-full border border-solid transition-all duration-300 active:scale-90 active:rotate-12 group select-none shadow-sm cursor-pointer ${
        isDark
          ? "border-white/20 bg-white/10 text-white hover:bg-white/20 hover:border-white/40 hover:shadow-[0_0_12px_rgba(255,255,255,0.2)]"
          : "border-[#1D1D1F]/20 bg-[#1D1D1F]/5 text-[#1D1D1F] hover:bg-[#1D1D1F]/10 hover:border-[#1D1D1F]/40 hover:shadow-[0_0_12px_rgba(29,29,31,0.1)]"
      } ${className}`}
      title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
    >
      <div className="relative w-4 h-4 flex items-center justify-center">
        <Sun
          className={`w-4 h-4 transition-all duration-500 absolute [transition-timing-function:cubic-bezier(0.34,1.56,0.64,1)] ${
            isDark
              ? "rotate-180 scale-0 opacity-0"
              : "rotate-0 scale-100 opacity-100 text-amber-500 fill-amber-500/20"
          }`}
        />
        <Moon
          className={`w-4 h-4 transition-all duration-500 absolute [transition-timing-function:cubic-bezier(0.34,1.56,0.64,1)] ${
            isDark
              ? "rotate-0 scale-100 opacity-100 text-sky-300 fill-sky-300/20"
              : "-rotate-180 scale-0 opacity-0"
          }`}
        />
      </div>
    </button>
  );
}

export default ThemeToggle;
