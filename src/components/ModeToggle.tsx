"use client";

import { useEffect, useState } from "react";

export default function ColorModeToggle() {
  const [checked, setChecked] = useState(false); //default state
  const [loading, setLoading] = useState(true); //default state
  const [theme, setTheme] = useState<string>(); //default state

  const toggleDarkMode = () => {
    console.log("clicked");
    if (checked) {
      setChecked(false);
      setTheme("dark");
      document.documentElement.classList.add("dark");
      localStorage.setItem("darkMode", "enabled");
    } else {
      setChecked(true);
      setTheme("light");
      document.documentElement.classList.remove("dark");
      localStorage.setItem("darkMode", "disabled");
    }
  };

  useEffect(() => {
    //Check if dark mode is enabled in local storage
    const darkMode = localStorage.getItem("darkMode");
    const prefersDarkMode =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;

    //Set the checked state based on local storage value or by default user preference if there is no value in local storage
    if (
      (darkMode && darkMode === "enabled") ||
      (!darkMode && prefersDarkMode)
    ) {
      document.documentElement.classList.add("dark");
      setChecked(true);
      setTheme("dark");
    }
    setLoading(false);
  }, []);

  return {
    checked,
    loading,
    theme,
    toggleDarkMode,
  };
}
