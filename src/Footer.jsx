import React from 'react';
import './Footer.css'; 


const Footer = () => {
  return (
    <footer className="footer">
     <div className='footer-row'>
      < div className="footer-info">
       <img src='../../Assets/Iteration-2-aseets/footer/logo-footer.svg' alt="Teknolojik Yemekler " className="logo-footer" />
        <div className='adress-info'>
        <img src="./../../Assets/Iteration-2-aseets/footer/icons/icon-1.png" alt="icon1" className='icon1'/>        
        <p className='adres'> 341 Londonderry Road, Istanbul Türkiye</p>
        </div>
        <div className='mail-adress-info'>
        <img src="./../../Assets/Iteration-2-aseets/footer/icons/icon-2.png" alt="icon2" className='icon2'/>
        <p> aciktim@teknolojikyemekler.com</p>
        </div>
        <div className='telefon-info'>
        <img src="./../../Assets/Iteration-2-aseets/footer/icons/icon-3.png" alt="icon2" className='icon3'/>
        <p> +90 216 123 45 67</p>
        </div>
      </div>
      <div className="footer-menu">
        <h2>Hot Menu</h2>
        <div className='menu'>
          <p>Terminal Pizza</p>
          <p>5 Kişilik Hackathlon Pizza</p>
          <p>useEffect Tavuklu Pizza</p>
          <p>Beyaz Console Frosty</p>
          <p>Testler Geçti Mutlu Burger</p>
          <p>Position Absolute Acı Burger</p>
          </div>
      </div>
      <div className="footer-img">
        <h2>Instagram</h2>
        <div className="instagram-images">
          <img src="../../Assets/Iteration-2-aseets/footer/insta/li-0.png" alt="Food 1" className='food-img'/>
          <img src="../../Assets/Iteration-2-aseets/footer/insta/li-1.png"alt="Food 2" className='food-img'/>
          <img src="../../Assets/Iteration-2-aseets/footer/insta/li-2.png" alt="Food 3" className='food-img'/>
          <img src="../../Assets/Iteration-2-aseets/footer/insta/li-3.png" alt="Food 4" className='food-img'/>
          <img src="../../Assets/Iteration-2-aseets/footer/insta/li-4.png" alt="Food 5" className='food-img'/>
          <img src="../../Assets/Iteration-2-aseets/footer/insta/li-5.png" alt="Food 6" className='food-img'/>
        </div>
      </div>
      </div>
      <hr/>
      <div className="footer-bottom">
        <p>© 2023 Teknolojik Yemekler.</p>
        
      </div>
    </footer>
  );
};

export default Footer;
