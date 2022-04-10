import CustomButton from '../custom-button/custom-buttom';
import './dropdown.scss'

const Dropdown = () => {
    return(
        <div className='cart-dropdown-container'>
            <div className='cart-items' />
            <CustomButton>CHECKOUT</CustomButton>
        </div>
    )
}

export default Dropdown;