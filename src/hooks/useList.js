import { useState } from 'react';

export const useList = (initialProducts) => {
  const [state, setState] = useState({
    product: '',
    products: initialProducts,
  });

  const { product, products } = state;

  const handleInputChange = ({ target }) => {
    setState({ ...state, product: target.value });
  };

  const handleInputSubmit = (e) => {
    e.preventDefault();

    if (product !== '') {
      setState({
        ...state,
        product: '',
        products: [...products, product],
      });
    }
  };

  const handleDeleteProduct = (product_to_delete) => {
    const result = products.filter((product) => product !== product_to_delete);

    setState({ ...state, products: result });
  };

  return {
    product,
    handleInputChange,
    handleInputSubmit,
    products,
    handleDeleteProduct,
  };
};
