import React, { useEffect, useState } from 'react';

// styles
import s from './Shortener.module.css';

// components
import Section from '../Section';
import ShortenedLink from '../ShortenedLink';

const links = [
  {
    url: 'https://www.jonrutter.com',
    short: 'https://rel.ink/534w5s',
    id: 548923740592345,
  },
  {
    url: 'https://www.google.com',
    short: 'https://rel.ink/sofdi',
    id: 504367045345,
  },
  {
    url: 'https://www.facebook.com',
    short: 'https://rel.ink/69tinsd',
    id: 34059340535,
  },
];

const Shortener = () => {
  const [value, setValue] = useState('');
  const [submit, setSubmit] = useState('');
  const [shortenedLinks, setShortenedLinks] = useState(links);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleInput = (e) => {
    setValue(e.target.value);

    // if the error was simply an empty form, provide real-time feedback to users by removing error as soon as a value is entered
    if (error === 'Please enter a link') {
      setError('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmit(value);

    console.log('Attempting to shorten: ' + submit);

    // handling empty values
    if (value === '') {
      setError('Please enter a link');
    } else {
      setError('');
    }
  };

  return (
    <Section>
      <div className={s.wrapper}>
        <div className={s.contentWrap}>
          <div className={s.shortener}>
            <form noValidate className={s.form} onSubmit={handleSubmit}>
              <label htmlFor="shortener-input" className={s.hiddenLabel}>
                Shorten a link.
              </label>
              <div className={s.inputWrap}>
                <input
                  id="shortener-input"
                  className={error ? `${s.input} ${s.inputError}` : s.input}
                  type="url"
                  placeholder="Shorten a link here..."
                  value={value}
                  onChange={handleInput}
                />
                {error && <p className={s.msg}>{error}</p>}
              </div>
              <button type="submit" className={s.submit}>
                Shorten It!
              </button>
            </form>
          </div>
          {links.length > 0 && (
            <div className={s.links}>
              {links.map((link) => {
                const { url, short, id } = link;
                return (
                  <div className={s.link} key={id}>
                    <p className={s.linkFull}>{url}</p>
                    <p className={s.linkShort}>{short}</p>
                    <button className={s.linkButton}>Copy</button>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
      {/* {loading && <LoadingSpinner />} */}
    </Section>
  );
};

export default Shortener;
