import React, { useState, useEffect } from "react";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";

const Layout = ({ children }) => {
  // Initialize dark mode based on localStorage value
  const [isDarkMode, setDarkMode] = useState(() => {
    const savedDarkMode = localStorage.getItem("darkMode") === "true";
    return savedDarkMode;
  });

  // Apply/remove the dark mode class on the first render and whenever dark mode is toggled
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    // Save to localStorage whenever dark mode changes
    localStorage.setItem("darkMode", isDarkMode);
  }, [isDarkMode]);

  const toggleDarkMode = () => {
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
