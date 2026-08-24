"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

export type Mode = "am" | "pm";

interface ThemeContextValue {
  mode: Mode;
  setMode: (mode: Mode) => void;
  toggleMode: () => void;
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);
const STORAGE_KEY = "omonro-mode";

function getModeFromClock(): Mode {
  const hour = new Date().getHours();
  return hour >= 10 && hour < 15 ? "am" : "pm";
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [mode, setModeState] = useState<Mode>("am");

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY) as Mode | null;
    setModeState(stored === "am" || stored === "pm" ? stored : getModeFromClock());
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-mode", mode);
  }, [mode]);

  const setMode = (next: Mode) => {
    setModeState(next);
    window.localStorage.setItem(STORAGE_KEY, next);
  };
  const toggleMode = () => setMode(mode === "am" ? "pm" : "am");

  return (
    <ThemeContext.Provider value={{ mode, setMode, toggleMode }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme doit être utilisé dans un ThemeProvider");
  return ctx;
}
