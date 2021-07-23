import React from 'react';

// styles
import s from './CTASection.module.css';

// components
import Section from '../Section';

const CTASection = () => {
  return (
    <Section>
      <div className={s.wrapper}>
        <div className={s.content}>
          <h2>Boost your links today</h2>
          <button type="button" className={s.getStarted}>
            Get Started
          </button>
        </div>
      </div>
    </Section>
  );
};

export default CTASection;
