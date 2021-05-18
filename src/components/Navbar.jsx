import React from "react";
import { RiVirusFill } from "react-icons/ri";

const Navbar = () => {
  return (
    <div className="navbar">
      <header>
        <a href="/" className="logo">
          c<RiVirusFill /><span className="fas fa-virus"></span>vid-19
        </a>
        <div id="menu" className="fas fa-bars"></div>

        <nav className="navbar">
          <a className="active" href="#home">
            home
          </a>
          <a href="https://script.google.com/macros/s/AKfycbz7gBn_tpsVJW4N5XLxGHwuW2PP7631vCiwWNWjTA/exec">
            Check vaccine
          </a>
          <a href="/symptoms">C19Tracker</a>          
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
