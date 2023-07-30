import {GiShoppingCart} from 'react-icons/gi';
import './CartButton.css';

const CartButton = () => {
    return (

        <button type="buttton" className="cart_button">
            <GiShoppingCart/>
            <spana className= "cart_status">1</spana>
        </button>
    );
}



export default CartButton;