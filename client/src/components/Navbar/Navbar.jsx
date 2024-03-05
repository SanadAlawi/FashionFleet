import React from 'react'
import { Link } from 'react-router-dom'
import { logo } from '../../static/Variables'
import NavList from '../NavList/NavList'
import style from './style.module.css'
import CartIcon from '../CartIcon/CartIcon'
import { men_list } from '../utils'


const Navbar = () => {
  console.log('Navbar rendered!!!')

  return (
    <header>

      <nav className={style['list']}>
        <Link to='/' className={style['logo']}>{logo}</Link>
        <NavList title='woman' list={men_list} />
        <NavList title='man' list={men_list} />
        {/* <NavList title='denim' list={men_list} /> */}
      </nav>

      <CartIcon />

    </header>
  )
}

export default Navbar