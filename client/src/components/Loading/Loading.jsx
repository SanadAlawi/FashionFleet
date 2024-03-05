import React from 'react';
import style from './style.module.css';

const Loading = () => {
  return (
    <div className={style.loading}>
      <span className={style.dot} style={{ '--delay': '0s' }}></span>
      <span className={style.dot} style={{ '--delay': '0.3s' }}></span>
      <span className={style.dot} style={{ '--delay': '0.6s' }}></span>
      <span className={style.dot} style={{ '--delay': '0.9s' }}></span>
    </div>
  );
};

export default Loading;
