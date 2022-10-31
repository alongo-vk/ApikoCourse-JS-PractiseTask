import React from 'react';

import '../App.css';

function MenuItem({ title, link }) {
  const alertNoLink = () => {
    alert('This page is under construction yet');
  };

  return link !== null ? (
    <a className="navItems" href={link} target="_blank">
      {title}
    </a>
  ) : (
    <div className="no-link" onClick={alertNoLink}>
      {title}
    </div>
  );
}

export default MenuItem;
