"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";

export const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = resolvedTheme === "dark";
  const label = isDark ? "Light" : "Dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={mounted ? `Switch to ${label.toLowerCase()} mode` : "Toggle theme"}
      className="focus-ring inline-flex h-8 min-w-[74px] items-center justify-center gap-2 border border-line px-3 font-mono text-xs text-fg transition-colors hover:border-fg"
    >
      {mounted ? (
        <>
          {isDark ? <Sun size={13} /> : <Moon size={13} />}
          {label}
        </>
      ) : (
        <span className="opacity-0">Theme</span>
      )}
    </button>
  );
};
