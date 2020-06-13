import React from 'react'

import './Navbar.scss';


export default function Navbar() {
    return (
        <nav className="navbar">
            <i className="far fa-building"></i>
            <ul className="nav-links">
                <li>
                    <a href="/" className="nav-link">
                     HOME
                    </a>
                
                </li>
                <li>
                    <a href="/#about-footer" className="nav-link">
                    ABOUT
                    </a>
                </li>
                <li>
                    <a href="/" className="nav-link active">
                    JOIN THE TEAM
                    
                    </a>
                </li>
                    
                <li>
                    <a href="/contact" className="nav-link">
                    CONTACT US
                    
                    </a>
                </li>
              
            </ul>
        </nav>
    )
}
