import React from 'react'
import './Success.css'
import Footer from './Footer'

function Success() {
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
                    <p>Boyut:<strong> L</strong></p>
                    <p>Hamur: <strong>Süper ince</strong></p>
                    <p className='added-list'>Ek Malzemeler: <strong>Pepperoni, Sosis, Mısır, Ananas, Jalapeno</strong> </p>
                </div>
                <div className="order-summary">
                    <div className='order-summary-info'>
                        <div className='order-total'>
                            <p>Sipariş Toplamı</p>
                        </div>
                        <div className='user-selection'>
                            <p>Seçimler</p>
                            <p>25.50₺</p>
                        </div>
                        <div className='user-amount'>
                            <p>Toplam</p>
                            <p>110.50₺</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Success