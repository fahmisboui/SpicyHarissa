import React from "react"
import './Header.css'

function Header(){
    return(
            <nav className="navbar">
                <div className="logo">
                    <img src="./images/logo.png" alt="Gaming Logo" />
                </div>
            <ul className="nav-links">
                <li><a href="#">Home</a></li>
                <li><a href="#">Games</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
            </nav>
    );
}

export default Header