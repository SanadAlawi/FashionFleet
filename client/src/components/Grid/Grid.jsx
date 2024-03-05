import React from 'react'
import { products } from '../utils'
import Card from '../Card/Card'
import style from './style.module.css'

const Grid = () => {
  console.log('Grid renderd!!!!')


  const renderedProducts = products.map(product => <Card key={product.product_id} {...product} />)

  return (
    <div className={style['grid']}>
      {renderedProducts}
    </div>
  )
}

export default Grid