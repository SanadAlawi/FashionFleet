import React from 'react'
import style from './style.module.css'

const Home = () => {


  return (
    <section className={style['home']}>


      <div className={style['grid']}>
        <div className={style['box']}>
          <img className={style['image']} src='/images/white dress 1.jpeg' alt="" />
          <span className={style['label']}>Women</span>
        </div>

        <div className={style['box']}>
          <img className={style['image']} src='/images/green jacket 2.jpeg' alt="" />
          <span className={style['label']}>Men</span>
        </div>
      </div>

      <img className={style['image']} src='/images/red jacket 1.jpeg' alt="" />
      <img className={style['image']} src='/images/white dress 6.jpeg' alt="" />

    </section>
  )
}

export default Home