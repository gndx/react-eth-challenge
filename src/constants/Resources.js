import React from 'react';

import { CgNotes } from 'react-icons/cg';
import { FaRegUser, FaWrench } from 'react-icons/fa';

export const menuItem = [
  {
    id: '01',
    name: 'About',
    link: '/about',
    icon: <FaRegUser />,
  },
  {
    id: '02',
    name: 'Resume',
    link: '/resume',
    icon: <CgNotes />,
  },
  {
    id: '05',
    name: 'Skills',
    link: '/skills',
    icon: <FaWrench />,
  },
];

export const lineColors = [
  {
    color: '#FF6464',
  },
  {
    color: '#9272D4',
  },
  {
    color: '#5185D4',
  },
  {
    color: '#CA56F2',
  },
];
