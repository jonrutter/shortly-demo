import React from 'react';

// styles
import s from './InfoCards.module.css';

// images
import BrandRecognitionIcon from '../../images/icon-brand-recognition.svg';
import DetailedRecordsIcon from '../../images/icon-detailed-records.svg';
import FullyCustomizableIcon from '../../images/icon-fully-customizable.svg';

// components
import InfoCard from '../InfoCard';

const InfoCards = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.content}>
        <InfoCard index={0}>
          <img src={BrandRecognitionIcon} alt="Brand Recognition" />
          <h3>Brand Recognition</h3>
          <p>
            Boost your brand recognition with each click. Generic links don't
            mean a thing. Branded links help instill confidence in your content.
          </p>
        </InfoCard>
        <InfoCard index={1}>
          <img src={DetailedRecordsIcon} alt="Detailed Records" />
          <h3>Detailed Records</h3>
          <p>
            Gain insights into who is clicking your links. Knowing when and
            where people engage with your content helps inform better decisions.
          </p>
        </InfoCard>
        <InfoCard index={2}>
          <img src={FullyCustomizableIcon} alt="Fully Customizable" />
          <h3>Fully Customizable</h3>
          <p>
            Improve brand awareness and content discoverability through
            customizable links, supercharging audience engagement.
          </p>
        </InfoCard>
      </div>
    </div>
  );
};

export default InfoCards;
