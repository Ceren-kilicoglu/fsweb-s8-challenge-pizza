import React from 'react'
import './header.css'
import { Link } from 'react-router-dom'


function Header() {
    return (
        <header className="header">
            <div className="header-content">
                <img src='../../Assets/Iteration-1-assets/logo.svg' alt="Teknolojik Yemekler Logosu" className="logo-header" />
                <nav>
                    <ul className="nav-list">
                        <li><Link to="/">Anasayfa</Link></li>
                        <li><Link to="/siparis">Sipariş Oluştur</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );

}

export default Header