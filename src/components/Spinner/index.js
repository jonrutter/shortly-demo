import React from 'react';

// styles
import s from './Spinner.module.css';

const Spinner = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.spinner}></div>
    </div>
  );
};

export default Spinner;
