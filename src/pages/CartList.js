import { useEffect, useState } from 'react';
import '../App.css';
import './CartList.css'; // Import the CSS file for CartList styling

function CartList({ cart }) {
    const [CART, setCART] = useState([]);

    useEffect(() => {
        setCART(cart);
    }, [cart]);

    // Calculate total
    const total = CART.reduce((total, item) => total + item.price * item.quantity, 0);

    // Function to handle payment
    const handlePayment = () => {
        // Trigger an alert with the "Thank you" message
        alert("Thank you for your purchase!");
    };

    return (
        <div className="cart-container">
            <h2 className='chead'>Welcome to Your Shopping List</h2>
            {CART?.map((cartItem, cartindex) => {
                return (
                    <div className="cart-item" key={cartindex}>
                        <img src={cartItem.url} width={120} />
                        <span>{cartItem.name}</span>
                        <button
                            onClick={() => {
                                const _CART = CART.map((item, index) => {
                                    return cartindex === index ? { ...item, quantity: item.quantity > 0 ? item.quantity - 1 : 0 } : item
                                });
                                setCART(_CART);
                            }}
                        >-</button>
                        <span>{cartItem.quantity}</span>
                        <button
                            onClick={() => {
                                const _CART = CART.map((item, index) => {
                                    return cartindex === index ? { ...item, quantity: item.quantity + 1 } : item
                                });
                                setCART(_CART);
                            }}
                        >+</button>
                        <span>Rs. {cartItem.price * cartItem.quantity}</span>
                    </div>
                );
            })}
            <div className="button-container">
                <button className="total-button">
                    The amount you are contributing in environment : Rs. {total}
                </button>
                <button className="payment-button" onClick={handlePayment}>
                    Make Payment
                </button>
            </div>
        </div>
    );
}

export default CartList;
