import { useContext } from 'react';
import { CartContext } from '../../contexts/cart';
import './checkout.scss'

const Checkout = () => {
    const { cartItems, addItemToCart, removeItemToCart } = useContext(CartContext);
    return (
        <div>
            <h1>Hi there</h1>
            <div>
                {
                    cartItems.map((cartItem) => {
                        const { id, name, quantity } = cartItem;
                        return <div key={id}>
                            <h2>{name}</h2>
                            <span>{quantity}</span>
                            <span onClick={() => addItemToCart(cartItem)}>Add</span>
                            <span onClick={() => removeItemToCart(cartItem)}>Substract</span>
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default Checkout;