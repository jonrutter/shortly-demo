import React, { useState, useEffect } from 'react';

// styles
import s from './ShortenedLink.module.css';

const ShortenedLink = ({ url, short }) => {
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (copied) {
      const copiedTimeout = setTimeout(() => {
        setCopied(false);
      }, 3000);
      return () => clearTimeout(copiedTimeout);
    }
  }, [copied]);

  const copy = (text) => {
    try {
      navigator.clipboard.writeText(short);
    } catch (error) {
      setError(
        'Oops! We encountered an error. Your browser may not support direct copying to the clipboard.'
      );
    }
  };

  return (
    <div className={s.link}>
      <p className={s.linkFull}>{url}</p>
      <p className={s.linkShort}>{short}</p>
      <button
        className={copied ? `${s.linkButton} ${s.active}` : s.linkButton}
        onClick={() => {
          setCopied(true);
          copy(short);
        }}
      >
        {copied ? 'Copied!' : 'Copy'}
      </button>
      {error && <p className={s.msg}>{error}</p>}
    </div>
  );
};

export default ShortenedLink;
