import React from 'react';
import './home.css';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';




function HomeBanner() {
    const history = useHistory();

    const handleClick = () => {
        history.push('/siparis');
    };
    return (
        <div className="background">
            <div className="home-text">
                <div className='logo-homebanner'>
                    <img src='../../Assets/Iteration-1-assets/logo.svg' alt="Teknolojik Yemekler Logosu" className="logo" />
                </div>
                <p>KOD ACIKTIRIR</p>
                <p>PİZZA, DOYURUR</p>
                <button onClick={handleClick}>ACIKTIM</button>
            </div>
        </div>
    );
}

export default HomeBanner;


