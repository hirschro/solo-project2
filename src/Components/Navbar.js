import React from "react";
import "../styles.css";
import Fill213 from "../images/Fill213.png"

export default function Navbar() {
  return(
    <nav className="navbar">
      <img src={Fill213} alt="logo" />
      <div className="navTitle">my travel journal.</div>
    </nav>
  )
}