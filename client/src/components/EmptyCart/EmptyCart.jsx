import React from 'react'
import style from './style.module.css'
import {ShoppingCart} from '@mui/icons-material';
import { Link } from 'react-router-dom';
const EmptyCart = () => {
  return (
    <div className={style['empty-cart']}>
      
    <ShoppingCart style={{fontSize: '10rem'}} className={style['icon']} />
      <div className={style['title']}>Cart Is Empty</div>
      <Link to='/' className='black-btn'>Go Home</Link>
    </div>
  )
}

export default EmptyCart