import React from 'react';

import '../App.css';

import headerData from '../navData';
import MenuItem from './MenuItem';

function Menu() {
  return (
    <div className="nav">
      {headerData.map(({ title, link }, index) => (
        <MenuItem key={index} title={title} link={link} />
      ))}
    </div>
  );
}

export default Menu;
