import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import requestAPIs from '../api/reqAPIs';
import Prices from './Prices';
import Ratings from './Ratings';
import Reviews from './Reviews';

const Product = function () {
  const { id } = useParams();
  const [details, setDetails] = useState(null);

  useEffect(() => {
    requestAPIs.getProduct(id).then(setDetails);
  }, [id]);

  if (!details) {
    return <p>Loading...</p>;
  }

  const { title, imgUrl, price, rating } = details;

  return (
    <div className="product">
      <div className="details">
        <div className="img-holder">
          <img src={imgUrl} alt="product-img" />
        </div>
        <div className="info">
          <div className="title">{title}</div>
          <Prices price={price} />
          <Ratings rating={rating} />
        </div>
      </div>
      <Reviews id={id}/>
    </div>
  );
};

export default Product;
