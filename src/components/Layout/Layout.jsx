import React, { useState, useEffect } from "react";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";

const Layout = ({ children }) => {
  // Initialize dark mode based on localStorage value
  const [isDarkMode, setDarkMode] = useState(() => {
    const savedDarkMode = localStorage.getItem("darkMode") === "true";
    console.log("Initial dark mode from localStorage:", savedDarkMode);
    return savedDarkMode;
  });

  // Apply/remove the dark mode class on the first render and whenever dark mode is toggled
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      console.log("Dark mode enabled");
    } else {
      document.documentElement.classList.remove("dark");
      console.log("Dark mode disabled");
    }

    // Save to localStorage whenever dark mode changes
    localStorage.setItem("darkMode", isDarkMode);
    console.log("Saved dark mode to localStorage:", isDarkMode);
  }, [isDarkMode]);

  // Log when the user clicks the dark mode toggle
  const toggleDarkMode = () => {
    console.log("Toggling dark mode. Current state:", isDarkMode);
    setDarkMode(!isDarkMode);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white transition-colors duration-200">
      <Navbar isDarkMode={isDarkMode} setDarkMode={toggleDarkMode} />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
