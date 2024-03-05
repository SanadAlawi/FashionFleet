import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { products } from '../utils'
import style from './style.module.css'
import { currency } from '../../static/Variables'
import { useCartContext } from '../../context/CartProvider/CartProvider'

const ProductDetails = () => {
  console.log('ProductDetails rendered!!!')

  const { product_id } = useParams()
  const product = products.find(product => product.product_id === +product_id)
  const { product_image, product_name, product_price } = product


  const [size, setSize] = useState('')
  const [quantity, setQuantity] = useState(1)
  const [message, setMessage] = useState('')

  const { addProduct } = useCartContext()

  const handleAddProduct = () => {
    if (size == '') {
      setMessage('Please Choose a size.')
      return
    }
    addProduct({ ...product, product_size: size, product_quantity: quantity })
    setMessage('Added successfully!!!')
  }

  const handleSize = (e) => {
    setSize(e.target.value)
    setMessage('')
  }

  const color = size.length == 0 && message.length > 0? 'var(--red-color)': 'var(--blue-color)'

  return (
    <article className={style['product']}>
      <div className={style['left']}>
        <img loading='lazy' src={product_image} alt={product.product_name} />
      </div>
      <div className={style['right']}>
        <div className={style['name']}>{product_name}</div>
        <div className={style['price']}><s>{`${product_price}${currency}`}</s> {`${product_price * 0.3}${currency}`}</div>


        <div className={style['size']}>
          <div className={style['sub']}>Size <span style={{color: color}} className={style['error']}>{message}</span> </div>
          <select value={size} onChange={handleSize}>
            <option>Select</option>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
            <option value="XXL">XXL</option>
          </select>
        </div>


        <div className={style['quantity']}>
          <div className={style['sub']}>Quantity</div>
          <input type="number" value={quantity} onChange={(e) => setQuantity(+e.target.value)} />
        </div>


        <button onClick={handleAddProduct} className='brown-btn'>Add to Cart</button>

      </div>
    </article>
  )
}

export default ProductDetails