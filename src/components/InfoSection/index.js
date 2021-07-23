import React from 'react';

// styles
import s from './InfoSection.module.css';

// components
import Section from '../Section';
import InfoCards from '../InfoCards';

const InfoSection = () => {
  return (
    <Section>
      <div className={s.wrapper}>
        <section className={s.content}>
          <h2>Advanced Statistics</h2>
          <p>
            Track how your links are performing across the web with our advanced
            statistics dashboard.
          </p>
        </section>
        <InfoCards />
      </div>
    </Section>
  );
};

export default InfoSection;
