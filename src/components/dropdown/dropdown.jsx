import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../contexts/cart';
import CartItem from '../cart-item/cart-item';
import CustomButton from '../custom-button/custom-buttom';
import './dropdown.scss'

const Dropdown = () => {
    const { cartItems } = useContext(CartContext);
    const navigate = useNavigate();

    const checkoutHandler = () => {
        navigate('/checkout')
    }
    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
                {cartItems.map(item => <CartItem key={item.id} cartItem={item} />)}
            </div>
            <CustomButton onClick={checkoutHandler}>CHECKOUT</CustomButton>
        </div>
    )
}

export default Dropdown;