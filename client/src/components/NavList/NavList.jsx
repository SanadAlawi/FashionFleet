import React from 'react'
import style from './style.module.css'
import { Link } from 'react-router-dom'

const NavList = ({ title, list }) => {

  console.log("NavList rendered!!!")

  return (
    <aside className={style['nav-list']}>
      <h1 className={style['title']}>{title}</h1>
      <ul className={style['list']}>
        {
          list.map((items, index) =>
            <li className={style['li']} key={index}>
              {
                items.map((item, index) =>
                  <Link to={`/product-list/${item}`}
                    key={item}
                    className={index == 0 ? style['item-title'] : style['item']}>
                    {item}
                  </Link>
                )
              }
            </li>

          )
        }
      </ul>
    </aside>
  )
}

export default NavList