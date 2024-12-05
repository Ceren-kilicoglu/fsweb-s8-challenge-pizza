import React from 'react';
import './Success.css';
import Footer from './Footer';
import { useLocation } from 'react-router-dom';

function Success() {
    const location = useLocation();
    const { order } = location.state || {};


    return (
        <div>
            <div className="order-confirmation">
                <div className='logo-success'>
                    <img src='../../Assets/Iteration-1-assets/logo.svg' alt="Teknolojik Yemekler Logosu" />
                </div>
                <div className='success-messages'>
                    <p className='subtitle'>Lezzetin yolda</p>
                    <p>SİPARİŞ ALINDI</p>
                    <hr />
                </div>
                <div className='user-pizza-selection'>
                    <h3>Position Absolute Acı Pizza</h3>
                    <p>Boyut: <strong>{order.size}</strong></p>
                    <p>Hamur: <strong>{order.crust}</strong></p>
                    <p className='added-list'>
                        Ek Malzemeler: <strong>{order.toppings.join(', ')}</strong>
                    </p>
                </div>
                <div className="order-summary-success">
                    <div className="order-summary-info-success">
                        <div className="order-total-success">
                            <p>Sipariş Toplamı</p>
                        </div>
                        <div className="user-selection-success">
                            <p>Seçimler</p>
                            <p>25.50₺</p>
                        </div>
                        <div className="user-amount-success">
                            <p>Toplam</p>
                            <p>110.50₺</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Success;
