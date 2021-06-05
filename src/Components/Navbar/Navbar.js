/* Navbar component
 *
 *
 */
import React from "react";
import "./Navbar.css";
function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <h1>Movie Point</h1>
      </div>
      <div className="sign_in">
        <i className="fas fa-globe"></i>
        <h2>EN</h2>
        <h2>Sign In</h2>
      </div>
    </div>
  );
}

export default Navbar;
