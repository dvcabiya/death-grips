import React from "react";
import "./navbar.css"
import thirdWorlds from "./thirdWorlds.png"
import { NavLink } from "react-router-dom";

export default function Navbar() {
 return (
   <div>
     <nav className="navbar ">
       <NavLink className="nav-link" to="/">
            <h2 className="navbarFonts">Home</h2>
       </NavLink>
       <NavLink className="nav-link" to="/create">
            <h2 className="navbarFonts">Raise Issue</h2>
        </NavLink>
        <img src={thirdWorlds} className="thirdWorldsLogo" alt="Third Worlds logo"></img>
        <NavLink className="nav-link" to="/issues">
            <h2 className="navbarFonts">Present Issues</h2>
        </NavLink>
        <NavLink className="nav-link" to="/about">
            <h2 className="navbarFonts">About</h2>
        </NavLink>
     </nav>
   </div>
 );
}
