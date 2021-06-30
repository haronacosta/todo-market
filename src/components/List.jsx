import React from 'react';
import { useList } from '../hooks/useList';
import Form from './Form';
import Products from './Products';

const List = () => {
  const {
    product,
    handleInputChange,
    handleInputSubmit,
    products,
    handleDeleteProduct,
    error,
  } = useList([]);

  return (
    <div className='List'>
      <div className='fs-6 pt-4'>Add a new product...</div>
      <Form
        product={product}
        handleInputChange={handleInputChange}
        handleInputSubmit={handleInputSubmit}
        error={error}
      />

      <Products products={products} handleDeleteProduct={handleDeleteProduct} />
    </div>
  );
};

export default List;
