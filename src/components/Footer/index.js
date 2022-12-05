import React from 'react';

// styles
import s from './Footer.module.css';

// logo
import LogoImg from '../../assets/images/logo-footer.svg';

// links data
import { links } from '../../data/links';
import { socialLinks } from '../../data/social-links';

const Footer = () => {
  return (
    <footer className={s.wrapper}>
      <div className={s.content}>
        <img src={LogoImg} alt="Shortly" />
        {links.map((linkGroup, index) => {
          const { title, sublinks } = linkGroup;
          return (
            <article className={s.links} key={index}>
              <h2>{title}</h2>
              <ul>
                {sublinks.map((link, index) => {
                  const { label, url } = link;
                  return (
                    <li key={index}>
                      <a href={url}>{label}</a>
                    </li>
                  );
                })}
              </ul>
            </article>
          );
        })}
        <ul className={s.socialLinks}>
          {socialLinks.map((socialLink, index) => {
            const { icon, url, label } = socialLink;
            return (
              <li key={index}>
                <a href={url} className={s.socialLink} aria-label={label}>
                  {icon}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
