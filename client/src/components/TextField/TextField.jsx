import React, { useState } from 'react'
import style from './style.module.css'

const TextField = (props) => {
    console.log('TextField rendered!!!')
    const { id, value, onChange, label, errorMessage, ...prop } = props

    const [blur, setBlur] = useState(false)
    return (
        <div className={style['text-field']}>
            <input {...prop}
                className={style['input']}
                value={value}
                onChange={onChange}
                onBlur={() => setBlur(true)} 
                blured={blur.toString()}/>

            <label className={style['label']}>{label}</label>
            <span className={style['error']}>{errorMessage}</span>
        </div>
    )
}

export default React.memo(TextField)