import React, { useState } from 'react'
import style from './style.module.css'
import { currency } from '../../static/Variables'
import { useCartContext } from '../../context/CartProvider/CartProvider'
import { Link, useNavigate } from 'react-router-dom'

const OrderSummary = () => {

  console.log('OrderSummary rendered!!!')

  const {list, deliveryMethod} = useCartContext()

  // const subtotal = list.reduce((sum, p) => sum + p.product_price * p.product_quantity, 0)
  const subtotal = list.reduce((sum, p) => sum + (p.product_price * p.product_quantity) * 0.3 , 0)
  
  const [delivery, setDelivery] = useState(20) 
  const total = subtotal + +delivery

  const navigate = useNavigate()
  const handleOrder = () => {
    deliveryMethod(delivery)
    navigate('/checkout')
  }

  return (
    <div className={style['order-summary']}>
      <div className={style['title']}>Order Summary</div>

      <div className={style['info']}>

        <div className={style['subtotal']}>
          <span>Subtotal</span>
          <span>{subtotal}{currency}</span>
        </div>

        <div className={style['delivery']}>
          <span>Delivery</span>
          <span>{delivery}{currency}</span>
        </div>

        <select className={style['size']} value={delivery} onChange={(e) => setDelivery(e.target.value)}>
          <option value={20}>West bank - 20,00 {currency}</option>
          <option value={30}>Jerusalem - 30,00 {currency}</option>
        </select>

        <div className={style['total']}>
          <span>Total</span>
          <span>{total}{currency}</span>
        </div>


        <button className='black-btn' onClick={handleOrder}>Checkout</button>

      </div>
    </div>
  )
}

export default OrderSummary