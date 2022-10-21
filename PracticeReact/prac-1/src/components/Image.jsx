import React from 'react';

function Image({ imgUrl }) {
  return (
    <div>
      <img className='image' src={imgUrl} alt='Club Image' />
      {console.log(imgUrl)}
    </div>
  );
}

export default Image;
