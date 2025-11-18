"use client";

import type React from "react";
import { createContext, useContext, useEffect, useState } from "react";

type Theme = "dark" | "" | "system";

type ThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
  attribute?: string;
  enableSystem?: boolean;
  disableTransitionOnChange?: boolean;
};

type ThemeProviderState = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

const ThemeProviderContext = createContext<ThemeProviderState | undefined>(undefined);

export function ThemeProvider({
  children,
  defaultTheme = "system",
  storageKey = "theme",
  attribute = "class", // Used as a class attribute by default
  enableSystem = true,
  disableTransitionOnChange = false,
  ...props
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(defaultTheme);

  useEffect(() => {
    const root = window.document.documentElement;
    const storedTheme = localStorage.getItem(storageKey) as Theme | null;

    if (storedTheme) {
      setTheme(storedTheme);
      if (attribute === "class") {
        root.classList.toggle("dark", storedTheme === "dark");
      } else {
        root.setAttribute(attribute, storedTheme);
      }
    } else if (enableSystem) {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
      setTheme(systemTheme as Theme);
      if (attribute === "class") {
        root.classList.toggle("dark", systemTheme === "dark");
      } else {
        root.setAttribute(attribute, systemTheme);
      }
    }
  }, [storageKey, enableSystem, attribute]);

  useEffect(() => {
    const root = window.document.documentElement;

    if (disableTransitionOnChange) {
      root.classList.add("[&_*]:!transition-none");

      // Force a reflow
      window.getComputedStyle(root).getPropertyValue("opacity");

      const removeTransitions = setTimeout(() => {
        root.classList.remove("[&_*]:!transition-none");
      }, 0);

      return () => clearTimeout(removeTransitions);
    }
  }, [theme, disableTransitionOnChange]);

  useEffect(() => {
    const root = window.document.documentElement;
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const applyTheme = (newTheme: Theme) => {
      if (attribute === "class") {
        root.classList.toggle("dark", newTheme === "dark" || (newTheme === "system" && mediaQuery.matches));
      } else {
        const value =
          newTheme === "system" ? (mediaQuery.matches ? "dark" : "light") : newTheme;
        root.setAttribute(attribute, value);
      }
    };

    applyTheme(theme);

    const handleChange = () => {
      if (theme === "system") {
        applyTheme("system");
      }
    };

    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [theme, attribute]);

  const value = {
    theme,
    setTheme: (newTheme: Theme) => {
      localStorage.setItem(storageKey, newTheme);
      setTheme(newTheme);
    },
  };

  return (
    <ThemeProviderContext.Provider value={value} {...props}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);

  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  return context;
};