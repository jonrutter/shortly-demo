import React from 'react';

// styles
import s from './Hero.module.css';

// components
import Section from '../Section';

// images
import HeroImg from '../../assets/images/illustration-working.svg';

const Hero = () => {
  return (
    <Section>
      <div className={s.wrapper}>
        <div className={s.wrapperRight}>
          <img
            className={s.img}
            src={HeroImg}
            alt="Graphical illustration of a person working on a computer"
          />
        </div>
        <div className={s.wrapperLeft}>
          <h1>More than just shorter links</h1>
          <p>
            Build your brand's recognition and get detailed insights on how your
            links are performing.
          </p>
          <button className={s.btn}>Get Started</button>
        </div>
      </div>
    </Section>
  );
};

export default Hero;
