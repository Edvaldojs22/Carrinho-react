import './CartItem.css'
import {BsCartXFill} from 'react-icons/bs'


const CartItem = () => {
    return (
        <section className='cart_item_product'>
            <img src="" alt="imagem do produto" className='cart_item_imagem'/>
            <div className='cart_item_content'>
                <h3>Título do produto</h3>
                <h3 className='cart_item_price'>R$100,00</h3>
                <button className='buttom_remove_icon' type='buttom'>
                    <BsCartXFill />
                </button>
            </div>
        </section>
    )
}

export default CartItem;