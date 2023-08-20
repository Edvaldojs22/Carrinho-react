import {GiShoppingCart} from 'react-icons/gi';
import './CartButton.css';

const CartButton = () => {
    return (

        <button type="buttton" className="cart_button">
            <GiShoppingCart/>
            <span className= "cart_status">1</span>
        </button>
    );
}



export default CartButton;