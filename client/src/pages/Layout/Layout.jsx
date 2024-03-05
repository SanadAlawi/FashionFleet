import React from 'react'
import { Footer, Navbar, SalesBox } from '../../components'
import { Outlet } from 'react-router-dom'
import style from './style.module.css'

const Layout = () => {
  return (
    <main className={style['layout']}>
      <Navbar />
      {/* <SalesBox /> */}
      <Outlet />
      <Footer />
    </main>
  )
}

export default Layout