import React from 'react'
import { Link } from 'react-router-dom'
import { logo } from '../../static/Variables'
import CartIcon from '../CartIcon/CartIcon'
import NavList from '../NavList/NavList'
import { men_list } from '../utils'
import style from './style.module.css'

const Navbar = () => {
  console.log('Navbar rendered!!!')

  return (
    <header>

      <nav className={style['list']}>
        <Link to='/' className={style['logo']}>{logo}</Link>
        <NavList title='woman' list={men_list} />
        <NavList title='man' list={men_list} />
      </nav>

      <CartIcon />

    </header>
  )
}

export default Navbar