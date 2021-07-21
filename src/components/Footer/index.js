import React from 'react';

// styles
import s from './Footer.module.css';

// logo
import LogoImg from '../../images/logo-footer.svg';

// links data
import { links, socialLinks } from '../../footer-links';

const Footer = () => {
  return (
    <footer className={s.wrapper}>
      <div className={s.content}>
        <img src={LogoImg} alt="Shortly" />
        {links.map((linkGroup) => {
          const { title, sublinks } = linkGroup;
          return (
            <article className={s.links}>
              <h2>{title}</h2>
              <ul>
                {sublinks.map((link) => {
                  const { text, url } = link;
                  return (
                    <li>
                      <a href={url}>{text}</a>
                    </li>
                  );
                })}
              </ul>
            </article>
          );
        })}
        <ul className={s.socialLinks}>
          {socialLinks.map((socialLink) => {
            const { icon, url } = socialLink;
            return (
              <li>
                <a href={url} className={s.socialLink}>
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
