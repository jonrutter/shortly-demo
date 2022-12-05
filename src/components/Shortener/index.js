import React, { useEffect, useState } from 'react';

// styles
import s from './Shortener.module.css';

// components
import Section from '../Section';
import Spinner from '../Spinner';
import ShortenedLink from '../ShortenedLink';

// helper functions
import { getLocalStorage } from '../../utils/helper';

const BASE_URL = 'https://api.shrtco.de/v2/shorten?url=';

const Shortener = () => {
  const [value, setValue] = useState('');
  const [links, setLinks] = useState(getLocalStorage());
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Updates localStorage
  useEffect(() => {
    localStorage.setItem('links', JSON.stringify(links));
  }, [links]);

  // handles changes to the input field
  const handleInput = (e) => {
    setValue(e.target.value);
  };

  // handles form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // handling multiple fetch attempts
    if (loading) {
      setError('Please wait until the previous link is finished generating.');
      return;
    }

    // handling empty values
    if (value === '') {
      setError('Please enter a link');
      return;
    }

    setError('');
    fetchURL(value);
  };

  const fetchURL = async (url) => {
    setLoading(true);
    try {
      const endpoint = BASE_URL + url;
      const response = await fetch(endpoint);
      const data = await response.json();
      if (!data.ok) {
        setError(data.error);
        throw new Error(error);
      }
      const newLink = {
        url: data.result['original_link'],
        short: data.result['full_short_link2'],
        id: Date.now(),
      };
      setLinks((prev) => prev.concat(newLink));
    } catch (error) {
      console.log(error);
      // provide a stock error message if none other provided
      if (!error) {
        setError('Sorry! We ran into an error. Please try again.');
      }
    } finally {
      setLoading(false);
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
                return <ShortenedLink key={id} url={url} short={short} />;
              })}
            </div>
          )}
          {loading && <Spinner />}
        </div>
      </div>
    </Section>
  );
};

export default Shortener;
