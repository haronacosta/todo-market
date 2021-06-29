import React from 'react';

const Item = ({ product, handleDeleteProduct }) => {
  return (
    <li className='Product list-group-item'>
      <div className='Product__Name'>{product}</div>
      <button
        type='button'
        className='Product__Button btn btn-danger btn-sm'
        onClick={() => {
          handleDeleteProduct(product);
        }}
      >
        Delete
      </button>
    </li>
  );
};

export default Item;
