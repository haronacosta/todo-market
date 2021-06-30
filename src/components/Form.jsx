import React from 'react';

const Form = ({ product, handleInputSubmit, handleInputChange, error }) => {
  return (
    <>
      <form className='row' action='post' onSubmit={handleInputSubmit}>
        <div className='col-10'>
          <input
            type='text'
            className={`${
              error ? 'is-invalid' : ''
            } form-control bg-secondary bg-gradient`}
            placeholder='Product name...'
            aria-label='Product'
            autoComplete='off'
            name='product'
            value={product}
            onChange={handleInputChange}
          />
          <div className='invalid-feedback'>
            Please add a valid product name
          </div>
        </div>
        <button className='btn btn-primary col-2'> Add </button>
      </form>
    </>
  );
};

export default Form;
