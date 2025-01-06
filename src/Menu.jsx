import React from 'react';
import "./Menu.css"
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const Menu = () => {
    const history = useHistory();

    const handleClick = () => {
        history.push('/siparis');
    };
    return (
        <div className="menu-row">
            <header>
                <nav class="menus">
                    <ul>
                        <img src='../../Iteration-2-aseets/icons/1.svg' />
                        <li>YENİ! Kore</li>
                        <img src='../../Iteration-2-aseets/icons/2.svg' />
                        <li>Pizza</li>
                        <img src='../../Iteration-2-aseets/icons/3.svg' />
                        <li>Burger</li>
                        <img src='../../Iteration-2-aseets/icons/4.svg' />
                        <li>Kızartmalar</li>
                        <img src='../../Iteration-2-aseets/icons/5.svg' />
                        <li>Fast food</li>
                        <img src='../../Iteration-2-aseets/icons/6.svg' />
                        <li>Gazlı içecek</li>
                    </ul>
                </nav>
            </header>
            <main className='menu-main'>
                <section class="menu-main">
                    <div class="featured">
                        <div class="special-offer-first">
                            <img src="../../Iteration-2-aseets/cta/kart-1.png" />
                            <h2>Özel Lezzetus</h2>
                            <p>Position: Absolute Acı Burger</p>
                            <button onClick={handleClick}>SİPARİŞ VER</button>
                        </div>
                        <div class="special-offer-second">
                            <div class="hackathon-menu">
                                <img src="../../Iteration-2-aseets/cta/kart-2.png" />
                                <p>Hackathon Burger Menüsü</p>
                                <button onClick={handleClick}>SİPARİŞ VER</button>
                            </div>
                            <div class="fast-delivery">
                                <img src="../../Iteration-2-aseets/cta/kart-3.png" />
                                <p> <span className='red-color'>Çoooooook</span> hızlı npm gibi kurye</p>
                                <button onClick={handleClick}>SİPARİŞ VER</button>
                            </div>
                        </div>
                    </div>
                </section>


                <section class="popular-menus">
                    <div className='popular-menus-text'>
                        <p>En çok paketlenen menüler</p>
                        <h2>Acıktıran Kodlara Doyuran Lezzetler</h2>
                    </div>
                    <div class='header-menu-second'>
                        <nav class="menus">
                            <ul>
                                <li><img src="../../Iteration-2-aseets/icons/1.svg" /> Ramen</li>
                                <li><img src="../../Iteration-2-aseets/icons/2.svg" /> Pizza</li>
                                <li><img src="../../Iteration-2-aseets/icons/3.svg" /> Burger</li>
                                <li><img src="../../Iteration-2-aseets/icons/4.svg" /> Kızartmalar</li>
                                <li><img src="../../Iteration-2-aseets/icons/5.svg" /> Fast food</li>
                                <li><img src="../../Iteration-2-aseets/icons/6.svg" /> Gazlı içecek</li>
                            </ul>
                        </nav>
                    </div>
                    <div class="menu-items">
                        <div class="menu-item">
                            <img src="../../Iteration-2-aseets/pictures/food-1.png" alt="Terminal Pizza" />
                            <h3>Terminal Pizza</h3>
                            <div className='menu-item-priceinfo'>
                                <p>4.9</p>
                                <p>(200)</p>
                                <div className='menu-item-priceinfo-price'>
                                    <p>60₺</p>
                                </div>
                            </div>
                        </div>
                        <div class="menu-item">
                            <img src="../../Iteration-2-aseets/pictures/food-2.png" alt="Position Absolute Acı Pizza" />
                            <h3>Position Absolute Acı Pizza</h3>
                            <div className='menu-item-priceinfo'>
                                <p>4.9</p>
                                <p>(200)</p>
                                <div className='menu-item-priceinfo-price'>
                                    <p>60₺</p>
                                </div>
                            </div>
                        </div>
                        <div class="menu-item">
                            <img src="../../Iteration-2-aseets/pictures/food-3.png" alt="useEffect Tavuklu Burger" />
                            <h3>useEffect Tavuklu Burger</h3>
                            <div className='menu-item-priceinfo'>
                                <p>4.9</p>
                                <p>(200)</p>
                                <div className='menu-item-priceinfo-price'>
                                    <p>60₺</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </main>
        </div >
    );
};

export default Menu;
