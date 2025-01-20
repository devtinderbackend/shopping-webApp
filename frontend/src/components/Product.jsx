import React from "react";
import { Link } from "react-router-dom";
import Rating from "./Rating";

/* eslint-disable react/prop-types */ // Disable ESLint warning for now

const Product = ({ product }) => {
  return (
    <div className="w-full p-4 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/3">
      {/* Use `_id` instead of `id` */}
      <Link to={`/product/${product._id}`} className="block">
        <div className="card bg-base-100 shadow-xl hover:scale-105 transition-transform">
          <figure>
            <img
              src={product.image}
              alt={product.name}
              className="h-48 w-full object-cover"
            />
          </figure>
          <div className="card-body p-4">
            <h2 className="card-title text-lg font-bold">{product.name}</h2>
            {/* Add Rating component here */}
            <Rating value={product.rating} text={`${product.numReviews} reviews`} />
            <p className="text-gray-600 mt-2 font-semibold">${product.price}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Product;
