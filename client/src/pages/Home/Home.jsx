import React from 'react'
import style from './style.module.css'

const Home = () => {
  return (
    <section className={style['home']}>


      <div className={style['grid']}>
        <div className={style['box']}>
          <img className={style['image']} src='https://source.unsplash.com//a-coat-hanging-on-a-clothes-line-M5F4vmEnxsA' alt="" />
          <span className={style['label']}>Women</span>
        </div>

        <div className={style['box']}>
          <img className={style['image']} src='https://source.unsplash.com/brown-long-sleeve-shirt-on-white-clothes-hanger-Fg15LdqpWrs' alt="" />
          <span className={style['label']}>Men</span>
        </div>
      </div>

      <img className={style['image']} src='https://source.unsplash.com//a-coat-hanging-on-a-clothes-line-M5F4vmEnxsA' alt="" />
      <img className={style['image']} src='https://source.unsplash.com/brown-long-sleeve-shirt-on-white-clothes-hanger-Fg15LdqpWrs' alt="" />

    </section>
  )
}

export default Home