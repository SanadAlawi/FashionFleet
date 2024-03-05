import React from 'react'
import style from './style.module.css'
import { Link } from 'react-router-dom'
import { useCartContext } from '../../context/CartProvider/CartProvider'
import { ShoppingCart } from '@mui/icons-material'



const CartIcon = () => {

    const { list } = useCartContext()

    return (
        <div className={style['cart']}>
            <Link to='/cart' aria-label='Go to Cart'><ShoppingCart className={style['icon']} /></Link>
            <span>{list.length}</span>
        </div>
    )
}

export default CartIcon