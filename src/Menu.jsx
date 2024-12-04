import React from 'react';
import "./menu.css"

const Menu = () => {
    return (
        <div className="menu">
            <header>
                <nav>
                    <ul>
                        <img src='../../Assets/Iteration-2-aseets/icons/1.svg' />
                        <li>YENİ! Kore</li>
                        <img src='../../Assets/Iteration-2-aseets/icons/2.svg' />
                        <li>Pizza</li>
                        <img src='../../Assets/Iteration-2-aseets/icons/3.svg' />
                        <li>Burger</li>
                        <img src='../../Assets/Iteration-2-aseets/icons/4.svg' />
                        <li>Kızartmalar</li>
                        <img src='../../Assets/Iteration-2-aseets/icons/5.svg' />
                        <li>Fast food</li>
                        <img src='../../Assets/Iteration-2-aseets/icons/6.svg' />
                        <li>Gazlı içecek</li>
                    </ul>
                </nav>
            </header>
            <main className='menu-main'>
                <section class="menu-main">
                    <div class="featured">
                        <div class="special-offer-first">
                            <img src="../../Assets/Iteration-2-aseets/cta/kart-1.png" />
                            <h2>Özel Lezzetus</h2>
                            <p>Position: Absolute Acı Burger</p>
                            <button>SİPARİŞ VER</button>
                        </div>
                        <div class="special-offer-second">
                            <div class="hackathon-menu">
                                <img src="../../Assets/Iteration-2-aseets/cta/kart-2.png" />
                                <p>Hackathon Burger Menüsü</p>
                                <button>SİPARİŞ VER</button>
                            </div>
                            <div class="fast-delivery">
                                <img src="../../Assets/Iteration-2-aseets/cta/kart-3.png" />
                                <p> <span className='red-color'>Çoooooook</span> hızlı npm gibi kurye</p>
                                <button>SİPARİŞ VER</button>
                            </div>
                        </div>
                    </div>
                </section>


                <section className="popular-menus">
                    <p>En çok paketlenen menüler</p>
                    <h2>Acıktıran Kodlara Doyuran Lezzetler</h2>
                    <nav>
                        <ul>
                            <img src='../../Assets/Iteration-2-aseets/icons/1.svg' />
                            <li>YENİ! Kore</li>
                            <img src='../../Assets/Iteration-2-aseets/icons/2.svg' />
                            <li>Pizza</li>
                            <img src='../../Assets/Iteration-2-aseets/icons/3.svg' />
                            <li>Burger</li>
                            <img src='../../Assets/Iteration-2-aseets/icons/4.svg' />
                            <li>Kızartmalar</li>
                            <img src='../../Assets/Iteration-2-aseets/icons/5.svg' />
                            <li>Fast food</li>
                            <img src='../../Assets/Iteration-2-aseets/icons/6.svg' />
                            <li>Gazlı içecek</li>
                        </ul>
                    </nav>
                    <div className="menu-items">
                        <div className="menu-item">
                            <img src="../../Assets/Iteration-2-aseets/pictures/food-1.png" alt="Terminal Pizza" />
                            <h3>Terminal Pizza</h3>
                            <p>4.9 (200)</p>
                            <p>60₺</p>
                        </div>
                        <div className="menu-item">
                            <img src="../../Assets/Iteration-2-aseets/pictures/food-2.png" alt="Position Absolute Acı Pizza" />
                            <h3>Position Absolute Acı Pizza</h3>
                            <p>4.9 (200)</p>
                            <p>60₺</p>
                        </div>
                        <div className="menu-item">
                            <img src="../../Assets/Iteration-2-aseets/pictures/food-3.png" alt="useEffect Tavuklu Burger" />
                            <h3>useEffect Tavuklu Burger</h3>
                            <p>4.9 (200)</p>
                            <p>60₺</p>
                        </div>
                    </div>
                </section>
            </main>
        </div >
    );
};

export default Menu;
