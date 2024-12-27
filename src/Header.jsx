import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'


function Header() {
    return (
        <header className="header">
            <div className="header-content">
                <img src='../../Assets/Iteration-1-assets/logo.svg' alt="Teknolojik Yemekler Logosu" className="logo-header" />
            </div>
        </header>
    );

}

export default Header