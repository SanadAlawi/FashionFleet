import React, { startTransition } from 'react'
import style from './style.module.css'
import { Link, useNavigate } from 'react-router-dom'

const ErrorPage = () => {

  const navigate = useNavigate()

  const backToHome = () => {
    startTransition(() => {
      navigate('/')
    })
  }

  return (
    <section className={style['error']}>
      <h1 className={style['title']}>page not found</h1>
      <p className={style['desc']}>We looked everywhere for this page.<br />
      Are you sure the website URL is correct? <br />
      Get in touch with the site owner.</p>
    
      <button onClick={backToHome} className='blue-btn'>Go Back Home</button>
      {/* <Link to='/' className='error-btn'>Go Back Home</Link> */}
    </section>
  )
}

export default ErrorPage