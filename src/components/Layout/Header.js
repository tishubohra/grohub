// Header.jsx

import React from "react";
//import SearchBar from "./SearchBar"; // Import the SearchBar component
import "./Header.css"; // Import your CSS file for header styling

const Header = () => {
  return (
    <div className="header">
      <button className="transparent-button">Home</button>
      <button className="transparent-button">Contact</button>
     
      <button className="transparent-button">Button 1</button>
      <button className="transparent-button">Button 2</button>
    </div>
  );
};

export default Header;
