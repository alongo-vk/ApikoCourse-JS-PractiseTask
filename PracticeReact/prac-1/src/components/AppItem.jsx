import React from 'react';

const AppItem = ({ name, description, Image }) => {
  return (
    <div className='AppItem'>
      <h2 className='name'>{name}</h2>
      {Image}
      <div className='descriprion'>{description}</div>
    </div>
  );
};

export default AppItem;
