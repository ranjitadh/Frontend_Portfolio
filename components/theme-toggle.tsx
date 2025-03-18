"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/theme-provider";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Ensure component is mounted to avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <Button variant="ghost" size="icon" className="w-9 h-9 opacity-0" />;
  }

  const handleToggle = () => {
    if (theme === "dark") {
      setTheme("light");
    } else if (theme === "light") {
      setTheme("dark");
    } else {
      // If "system", toggle to the opposite of the current system preference
      const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setTheme(systemPrefersDark ? "light" : "dark");
    }
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={handleToggle}
      className="relative w-9 h-9"
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    >
      <Sun
        className={`h-5 w-5 transition-all ${
          theme === "dark" ? "scale-100 opacity-100" : "scale-0 opacity-0"
        } absolute`}
      />
      <Moon
        className={`h-5 w-5 transition-all ${
          theme === "light" || theme === "system" ? "scale-100 opacity-100" : "scale-0 opacity-0"
        } absolute`}
      />
    </Button>
  );
}