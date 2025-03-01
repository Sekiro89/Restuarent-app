import React, { useState } from "react";
import logo from "../images/Logo.svg";
import Menu from './ResMenu.jsx';

const Nav=()=>{
    const[menuOpen, setMenuopen]=useState(false)
    const toggleMenu=()=>{
        setMenuopen(!menuOpen);
    }
    return(
        <nav className= {`navbar ${menuOpen ? "open" :""}`}>
            <a href="/" className="logo">
            <img src={logo} alt="logo"/>
            </a>
            {/*<a href="/">
                <img src={logo} alt="logo"/>
            </a>*/}

            {/*Mobile nav bar*/}
            <div className="menu-icon" onClick={toggleMenu}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>

            {/*Nav items*/}
            <ul className={`nav-links ${menuOpen ?  "visible":""    }`}>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/">About</a>
                </li>
                <li>
                    <a href="/">Service</a>
                </li>
                <li>
                    <a href="/">Menu</a>
                </li>
                <li>
                    <a href="/">Reservations</a>
                </li>
                <li>
                    <a href="/">Order Online</a>
                </li>
                <li>
                    <a href="/">Login</a>
                </li>
            </ul>
        </nav>
    )
}

export default Nav;