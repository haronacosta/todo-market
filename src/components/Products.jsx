import React from 'react';
import Item from './Item';

const Products = ({ products, handleDeleteProduct }) => {
  return (
    <div className='Products'>
      <h5 className='mb-3 mt-3 text-dark'>Products list</h5>
      <ul className='list-group list-group-flush'>
        {products.length > 0 &&
          products.map((product, index) => (
            <Item
              product={product}
              key={index}
              handleDeleteProduct={handleDeleteProduct}
            />
          ))}

        {products.length === 0 && (
          <div className='Products--not-found fs-6'>
            Not found products, please add new product
          </div>
        )}
      </ul>
    </div>
  );
};

export default Products;
