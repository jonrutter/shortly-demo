import React from 'react';

import {
  FaFacebookSquare,
  FaTwitter,
  FaPinterest,
  FaInstagram,
} from 'react-icons/fa';

export const links = [
  {
    title: 'Features',
    sublinks: [
      { text: 'Link Shortening', url: '#' },
      { text: 'Branded Links', url: '#' },
      { text: 'Branded Links', url: '#' },
    ],
  },
  {
    title: 'Resources',
    sublinks: [
      { text: 'Blog', url: '#' },
      { text: 'Developers', url: '#' },
      { text: 'Support', url: '#' },
    ],
  },
  {
    title: 'Company',
    sublinks: [
      { text: 'About', url: '#' },
      { text: 'Our Team', url: '#' },
      { text: 'Careers', url: '#' },
      { text: 'Contact', url: '#' },
    ],
  },
];

export const socialLinks = [
  { icon: <FaFacebookSquare />, url: '#' },
  { icon: <FaTwitter />, url: '#' },
  { icon: <FaPinterest />, url: '#' },
  { icon: <FaInstagram />, url: '#' },
];
