import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 text-black dark:text-white transition-colors duration-200">
      <div className="px-4 mx-auto sm:px-6 lg:px-8">
        <div className="py-4">
          <p>nav 1 here</p>
        </div>
      </div>

      <nav className="py-4 bg-white dark:bg-gray-900 transition-colors duration-200">
        <div className="px-4 mx-auto sm:px-6 lg:px-8">
          <p>nav 2 here</p>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
