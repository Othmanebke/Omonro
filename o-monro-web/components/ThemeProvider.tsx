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
  hasChosen: boolean;
  setMode: (mode: Mode) => void;
  toggleMode: () => void;
  openPicker: () => void;
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);
const STORAGE_KEY = "omonro-mode";

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [mode, setModeState] = useState<Mode>("am");
  const [hasChosen, setHasChosen] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY) as Mode | null;
    if (stored === "am" || stored === "pm") {
      setModeState(stored);
      setHasChosen(true);
    }
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-mode", mode);
  }, [mode]);

  useEffect(() => {
    document.body.style.overflow = hasChosen ? "" : "hidden";
  }, [hasChosen]);

  const setMode = (next: Mode) => {
    setModeState(next);
    setHasChosen(true);
    window.localStorage.setItem(STORAGE_KEY, next);
  };

  const toggleMode = () => setMode(mode === "am" ? "pm" : "am");
  const openPicker = () => setHasChosen(false);

  return (
    <ThemeContext.Provider value={{ mode, hasChosen, setMode, toggleMode, openPicker }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme doit être utilisé dans un ThemeProvider");
  return ctx;
}
