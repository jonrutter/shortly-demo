import React from 'react';

// styles
import s from './InfoCard.module.css';

const InfoCard = ({ children, index }) => {
  return (
    <section className={`${s.card} ${s.card}-${index}`}>{children}</section>
  );
};

export default InfoCard;
