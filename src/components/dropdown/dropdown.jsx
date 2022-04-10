import { useContext } from 'react';
import { CartContext } from '../../contexts/cart';
import CartItem from '../cart-item/cart-item';
import CustomButton from '../custom-button/custom-buttom';
import './dropdown.scss'

const Dropdown = () => {
    const {cartItems} = useContext(CartContext);
    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
                {cartItems.map(item => <CartItem key={item.id} cartItem={item} />)}
            </div>
            <CustomButton>CHECKOUT</CustomButton>
        </div>
    )
}

export default Dropdown;