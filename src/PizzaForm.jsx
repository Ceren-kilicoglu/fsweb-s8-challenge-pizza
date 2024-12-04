import React, { useState, useEffect, } from 'react';
import './pizzaform.css';
import './header.css';
import Header from './Header';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Footer from './Footer';

function PizzaForm() {
    const [size, setSize] = useState('');
    const [crust, setCrust] = useState('');
    const [toppings, setToppings] = useState([]);
    const [notes, setNotes] = useState('');
    const [quantity, setQuantity] = useState(0);
    const [sizeError, setSizeError] = useState('');
    const [crustError, setCrustError] = useState('');
    const [toppingsError, setToppingsError] = useState('');
    const [quantityError, setQuantityError] = useState('');
    const [hasAttemptedSubmit, setHasAttemptedSubmit] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isFormValid, setIsFormValid] = useState(true);
    const [name, setName] = useState('Ceren');


    const availableToppings = [
        'Pepperoni', 'Sosis', 'Kanada Jambonu', 'Tavuk Izgara', 'Soğan', 'Domates', 'Mısır',
        'Jalapeno', 'Sarımsak', 'Biber', 'Sucuk', 'Ananas', 'Kabak'
    ];
    const history = useHistory();

    // Toppings seçimi
    function toppingOption(topping, isChecked) {
        if (isChecked) {
            if (toppings.length < 10) {
                setToppings([...toppings, topping]);
            }
        } else {
            setToppings(toppings.filter((item) => item !== topping));
        }
    }

    function validateForm() {
        let valid = true;

        // Boyut kontrolü
        if (!size) {
            setSizeError('Lütfen bir boyut seçiniz');
            valid = false;
        } else {
            setSizeError('');
        }

        // Hamur tipi kontrolü
        if (!crust) {
            setCrustError('Lütfen bir hamur tipi seçiniz');
            valid = false;
        } else {
            setCrustError('');
        }

        // Toppings kontrolü
        if (toppings.length < 4) {
            setToppingsError('Lütfen en az 4 adet topping seçiniz');
            valid = false;
        } else {
            setToppingsError('');
        }

        // Quantity kontrolü
        if (quantity <= 0) {
            valid = false;
        } else {
            setQuantityError('');
        }

        setIsFormValid(valid);
        return valid;
    }

    function handleSubmit(e) {
        e.preventDefault();
        setHasAttemptedSubmit(true);

        const isValid = validateForm();

        if (!isValid) {
            alert('Lütfen eksik alanları doldurunuz');
            return;
        }

        setIsSubmitting(true);

        const order = {
            name,
            size,
            crust,
            toppings,
            notes,
            quantity,
        };

        axios
            .post('https://reqres.in/api/pizza', order)
            .then((response) => {
                console.log('API Yanıtı:', response.data);
                setIsSubmitting(false);
                history.push('/success');
            })
            .catch((error) => {
                console.error('API Hatası:', error);
                setIsSubmitting(false);
            });
    }


    useEffect(() => {
        if (hasAttemptedSubmit) {
            validateForm();
        }
    }, [name, toppings, size, crust, quantity]);

    return (
        <>
            <Header />
            <div className='header-row'>
                <img src='../../Assets/Iteration-2-aseets/pictures/form-banner.png' alt="header-pizza" className="header-pizza" />
                <nav>
                    <ul className="nav-list">
                        <li><Link to="/">Anasayfa</Link></li>
                        <li><Link to="/siparis">Sipariş Oluştur</Link></li>
                    </ul>
                </nav>
                <div className="pizza">
                    <h2>Position Absolute Acı Pizza</h2>
                    <div className="price">
                        <p>85.50₺</p>
                        <div className='price-like'>
                            <p>4.9 </p>
                            <p>(200) </p>
                        </div>
                    </div>
                    <p className="description">
                        Frontend Dev olarak hala position : absolute kullanıyorsan bu çok acı pizza tam sana göre.
                        Pizza, domates, peynir ve genellikle çeşitli diğer malzemeler ile kaplanmış, daha sonra geleneksel olarak
                        odun ateşinde bir fırında yüksek sıcaklıkta pişirilen genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı
                        hamurdan oluşan İtalyan kökenli lezzetli bir yemektir.. Küçük bir pizzaya bazen pizzetta denir.
                    </p>
                </div>
            </div>

            <div className='pizza-form'>
                <form onSubmit={handleSubmit}>
                    <div className="selection-row">
                        <label>
                            <h4>Boyut Seç  </h4>
                            <div className="options-column">
                                {['Küçük', 'Orta', 'Büyük'].map((option) => (
                                    <label key={option}>
                                        <input
                                            type="checkbox"
                                            value={option}
                                            checked={size === option}
                                            onChange={(e) => setSize(e.target.value)}
                                        />
                                        {option}
                                    </label>
                                ))}
                            </div>
                            {hasAttemptedSubmit && sizeError && <p className="error">{sizeError}</p>}
                        </label>
                        <label>
                            <div className='select-row'>
                                <h4>Hamur Seç  </h4>
                                <select value={crust} onChange={(e) => setCrust(e.target.value)}>
                                    <option value="Hamur Kalınlığı-">Hamur Kalınlığı</option>
                                    <option value="İnce">İnce</option>
                                    <option value="Kalın">Kalın</option>
                                </select>
                                {hasAttemptedSubmit && crustError && <p className="error">{crustError}</p>}
                            </div>
                        </label>
                    </div>

                    <h4>Ek Malzemeler</h4>
                    <p className='option-number'>En az 4 adet, en fazla 10 adet malzeme seçebilirsiniz.  5₺ </p>
                    <div className="toppings-grid">
                        {availableToppings.map((topping) => (
                            <label key={topping}>
                                <input
                                    type="checkbox"
                                    value={topping}
                                    checked={toppings.includes(topping)}
                                    onChange={(e) => toppingOption(topping, e.target.checked)}
                                />
                                {topping}
                            </label>
                        ))}
                    </div>
                    {hasAttemptedSubmit && toppingsError && <p className="error">{toppingsError}</p>}

                    <label className='note-row'>
                        <h4>Sipariş Notu</h4>
                        <textarea
                            value={notes}
                            onChange={(e) => setNotes(e.target.value)}
                            placeholder="Ceren, Siparişine eklemek istediğin bir not var mı?"
                        />
                    </label>

                    <label>
                        <hr />
                        <div className='order'>
                            <div className="quantity-control">
                                <button type="button" onClick={() => setQuantity(quantity > 0 ? quantity - 1 : 0)}>-</button>
                                <span>{quantity}</span>
                                <button type="button" onClick={() => setQuantity(quantity + 1)}>+</button>
                            </div>
                            {hasAttemptedSubmit && quantityError && <p className="error">{quantityError}</p>}
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
                                <div className='order-button'>
                                    <button type="submit" className="order-button" disabled={!isFormValid}>SİPARİŞ VER</button>
                                </div>
                            </div>
                        </div>
                    </label>
                </form>
            </div>
            <Footer />
        </>
    );
}

export default PizzaForm;
