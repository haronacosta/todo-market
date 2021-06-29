import React from 'react';

const Form = ({ product, handleInputSubmit, handleInputChange }) => {
  return (
    <>
      <form className='row' action='post' onSubmit={handleInputSubmit}>
        <div className='col-10'>
          <input
            type='text'
            className='form-control bg-secondary bg-gradient'
            placeholder='Product name...'
            aria-label='Product'
            name='product'
            value={product}
            onChange={handleInputChange}
          />
        </div>
        <button className='btn btn-primary col-2'> Add </button>
      </form>
    </>
  );
};

export default Form;
