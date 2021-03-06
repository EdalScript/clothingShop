import { useContext } from 'react';
import { CartContext } from '../../contexts/cart';
import CustomButton from '../custom-button/custom-buttom';
import './product-card.scss'

const ProductCard = ({ product }) => {
    const { name, price, imageUrl } = product;
    const { addItemToCart } = useContext(CartContext);

    const addProductToCart = () => addItemToCart(product);
    return (
        <div className="product-card-container">
            <img src={imageUrl} alt={`${name}`} />
            <div className='footer'>
                <span className='name'>{name}</span>
                <span className='price'>€{price}.00</span>
            </div>
            <CustomButton buttonType='inverted' onClick={addProductToCart}>Add to cart</CustomButton>
        </div>
    )
}

export default ProductCard;