import CartItem from '../CartItem/CartItem';
import './Cart.css';

const Cart = () => {
    return (
        <section className='cart'>
            <div className="cart_item">
                <CartItem />
            </div>
            <div className="cart_resume">Resumo do carrinho</div>
        </section>
    )
    
}


export default Cart;