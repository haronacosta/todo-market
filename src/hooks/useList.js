import { useEffect, useState } from 'react';

export const useList = (initialProducts) => {
  const pattern = /^[.,0-9a-zA-Zñ-]+$/;

  const [state, setState] = useState({
    product: '',
    products: initialProducts,
    error: false,
  });

  const { product, products, error } = state;

  const handleInputChange = ({ target }) => {
    const value = target.value;

    if (value === '' || pattern.test(value)) {
      setState({ ...state, product: target.value });
    }
  };

  const handleInputSubmit = (e) => {
    e.preventDefault();

    if (product !== '' && pattern.test(product) && product.length >= 2) {
      const new_products = [...products, product];

      saveProductsInLocalStorage(new_products);

      setState({
        ...state,
        product: '',
        products: new_products,
        error: false,
      });
    } else {
      setState({ ...state, error: true });
    }
  };

  const handleDeleteProduct = (product_to_delete) => {
    const result = products.filter((product) => product !== product_to_delete);

    saveProductsInLocalStorage(result);

    setState({ ...state, products: result });
  };

  useEffect(() => {
    const products_local = JSON.parse(localStorage.getItem('products'));

    if (products_local) {
      setState((s) => ({ ...s, products: products_local }));
    }
  }, []);

  const saveProductsInLocalStorage = (products) => {
    const products_string = JSON.stringify(products);

    localStorage.setItem('products', products_string);
  };

  return {
    product,
    handleInputChange,
    handleInputSubmit,
    products,
    handleDeleteProduct,
    error,
  };
};
