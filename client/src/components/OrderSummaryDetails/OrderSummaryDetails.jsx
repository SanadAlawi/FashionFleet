import React from 'react'
import { useCartContext } from '../../context/CartProvider/CartProvider'
import style from './style.module.css'
import { currency } from '../../static/Variables'
import SummaryItem from '../SummaryItem/SummaryItem'

const OrderSummaryDetails = () => {

  const { list, delivery } = useCartContext()

  const subtotal = list.reduce((sum, p) => sum + (p.product_price * p.product_quantity) * 0.3, 0)
  
  const total = subtotal + +delivery

  return (
    <div className={style['order-summary']}>

      <div className={style['title']}>
        Order summary ({list.length})
      </div>

      <div className={style['list']}>
        {
          list.map((item, index) => 
              <SummaryItem key={index} {...item} />
            )
        }
      </div>

      <div className={style['summary']}>
        <div className={style['subtotal']}>
          <span>Subtotal</span>
          <span>{subtotal}{currency}</span>
        </div>
        <div className={style['delivery']}>
          <span>Delivery</span>
          <span>{delivery}{currency}</span>
        </div>
      </div>

      <div className={style['total']}>
          <span>Total</span>
          <span>{total}{currency}</span>
      </div>

    </div>
  )
}

export default OrderSummaryDetails