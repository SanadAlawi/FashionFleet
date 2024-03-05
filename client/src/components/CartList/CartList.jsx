import React, { useMemo } from 'react'
import { useCartContext } from '../../context/CartProvider/CartProvider'
import CartItem from '../CartItem/CartItem'
import style from './style.module.css'

const CartList = () => {
    console.log('CartList rendered!!!')



    const { list, clearCart } = useCartContext()

    const renderedCartItems = list.map(product => <CartItem key={product.product_id} {...product} />)
    
    const handleClear = () => {
        clearCart()
    }

    return (
        <div className={style['cart-list']}>
            <div className={style['title']}>My Cart</div>
            <div className={style['clear']} onClick={handleClear}>Clear</div>
            <div className={style['grid']}>
                {renderedCartItems}
            </div>
        </div>
    )
}

export default CartList