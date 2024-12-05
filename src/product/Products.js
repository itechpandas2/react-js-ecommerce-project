import React from 'react'
import {Link } from 'react-router-dom';

function Products({ name, image, price, description }) {
  return (
    <div className='col-lg-3 col-sm-6'>
      <div className='card'>
        <img src={image} className='card-img-top' alt="Products Image" height={200} width={200} />
        <div className='card-body'>
          <h5 className='card-title'>{name}</h5>
          <p className='card-text'>{description.slice(0, 80)}....</p>
          <p className='card-text'>Price: ${price}</p>
          <button className='btn btn-primary me-2'><Link to="/">Buy Now</Link></button>
          <button className='btn btn-primary me-2'><Link to="/">Add to cart</Link></button>
        </div>

      </div>

    </div>
  )
}

export default Products;
