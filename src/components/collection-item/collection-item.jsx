import React from 'react';

import './collection-item.scss';

const CollectionItem = ({ name, imageUrl, price}) => {
  return (
    <div className={`collection-item`}>
      <div className='background-image'
      style={ {backgroundImage: `url(${imageUrl})`} }
      />
      <div className='content'>
      </div>
      <div className='item-details'>
        <span className='item-name'>{name}</span>
        <span className='price'>${price.toFixed(2)}</span>
      </div>
    </div>
  );
};

export default CollectionItem;