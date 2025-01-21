"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Switch from "react-switch";
import { Sun, Moon } from "lucide-react";

export const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="flex gap-4">
      <Switch
        aria-label="toggle dark/light mode"
        className="h-fit"
        onChange={() => setTheme(theme === "dark" ? "light" : "dark")}
        checked={theme === "light"}
        checkedIcon={
          <div className="flex justify-center items-center h-full">
            <Sun size={17} color="#0c0a09" />
          </div>
        }
        uncheckedIcon={
          <div className="flex justify-center items-center h-full">
            <Moon size={17} color="#0c0a09" />
          </div>
        }
        onColor="#a8a29e" // light mode color
        offColor="#d6d3d1" // dark mode color
        handleDiameter={18}
        activeBoxShadow="0 0 2px 3px #22c55e"
        onHandleColor="#fafaf9" // light mode bg
        offHandleColor="#0c0a09" // dark mode bg
      />
    </div>
  );
};
