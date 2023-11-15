import React from 'react';
import style from './loader.module.scss';

const Loader = () => {
  return (
    <div className={style['loader-overlay']}>
      <div className={style['loader']}></div>
    </div>
  );
};

export default Loader;
