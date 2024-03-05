import React from 'react'
import { useCartContext } from '../../context/CartProvider/CartProvider'
import { CartList, EmptyCart, OrderSummary } from '../../components'
import style from './style.module.css'

const Cart = () => {

  const {list} = useCartContext()

  return (
    list.length > 0? 
    <section className={style['cart']}>
      <CartList />
      <OrderSummary />
    </section>
    :
    <EmptyCart />
  )
}

export default Cart