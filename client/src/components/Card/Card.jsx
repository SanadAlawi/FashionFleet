import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCartContext } from '../../context/CartProvider/CartProvider'
import { currency } from '../../static/Variables'
import style from './style.module.css'

const CardMemo = React.memo(({ product, addProduct }) => {
  console.log('CardMemo rendered!!!')

  const handleAddProduct = () => {
    if(size == ''){
      setMessage('Please Choose a size.')
      return
    }
    addProduct({...product, product_size: size})
    setMessage('Added successfully!!!')
    // setSize('')
  }

  const { product_id, product_image, product_name, product_price } = product
  const [size, setSize] = useState('')
  const [message, setMessage] = useState('')


  const handleSize = (e) => {
    setSize(e.target.value)
    setMessage('')
  }

  const color = size.length == 0 && message.length > 0? 'var(--red-color)': 'var(--blue-color)'

  return (
    <article className={style['card']}>
      <span className={style['message']} style={{color: color}}>{message}</span>
      <Link to={`/product/${product_id}`} className={style['image']}>
        <img loading='lazy' src={product_image} alt={product_name} />
      </Link>

      <aside className={style['info']}>
        <div className={style['title']}>{product_name}</div>
        <div className={style['price']}><s>{`${product_price}${currency}`}</s>{`${product_price * 0.3}${currency}`}</div>
        <select id='size' className={style['size']} value={size} onChange={handleSize}>
          <option >Size</option>
          <option value="S">S</option>
          <option value="M">M</option>
          <option value="L">L</option>
          <option value="XL">XL</option>
          <option value="XXL">XXL</option>
        </select>

        <button onClick={handleAddProduct} className='black-btn'>Add to Cart</button>
      </aside>
    </article>
  )
})


const Card = (product) => {
  console.log('Card rendered!!!')

  const { addProduct } = useCartContext()

  return <CardMemo product={product} addProduct={addProduct} />
}

export default Card