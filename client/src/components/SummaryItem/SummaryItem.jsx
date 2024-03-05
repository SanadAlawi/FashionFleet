import React from 'react'
import style from './style.module.css'
import { currency } from '../../static/Variables'
const SummaryItem = ({product_image, product_name, product_quantity, product_size, product_price}) => {


    return (
        <div className={style['summary_item']}>

            <div className={style['left']}>
                <img className={style['image']} src={product_image} alt={product_name} />
                <div className={style['info']}>
                    <div className={style['name']}>{product_name}</div>
                    <div className={style['quantity']}>Qty: {product_quantity}</div>
                    <div className={style['size']}>Size: {product_size}</div>
                </div>
            </div>

            <div className={style['right']}>
                <s>{product_price * product_quantity}{currency}</s> {(product_price * product_quantity) * 0.3}{currency}
            </div>

        </div>
    )
}

export default SummaryItem