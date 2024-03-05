import React from 'react'
import { DeliveryDetails, OrderSummaryDetails } from '../../components'
import style from './style.module.css'

const Checkout = () => {
  return (
    <section className={style['checkout']}>
        <DeliveryDetails />
        <OrderSummaryDetails />
    </section>
  )
}

export default Checkout