import React from "react";
import { useParams } from "react-router-dom";
import products from "../../products";
import Rating from "../components/Rating";

const ProductScreen = () => {
  const { id: productId } = useParams();
  const product = products.find((p) => p._id === productId);
  if (!product) {
    return (
      <div className="container mx-auto p-4 text-center">
        Product not found.
      </div>
    );
  }
  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Image */}
        <div className="flex justify-center">
          <img
            src={product.image}
            alt={product.name}
            className="rounded-lg shadow-lg w-full md:w-3/4 lg:w-2/3"
          />
        </div>

        {/* Product Details */}
        <div className="flex flex-col justify-between">
          {/* Title and Rating */}
          <div>
            <h1 className="text-xl font-semibold mb-2">{product.name}</h1>
            <Rating
              value={product.rating}
              text={`${product.numReviews} reviews`}
            />
          </div>

          {/* Price */}
          <div className="text-xl font-semibold text-gray-800 my-4">
            ${product.price.toFixed(2)}
          </div>

          {/* Description */}
          <p className="text-gray-600 leading-relaxed mb-6 text-sm md:text-base">
            {product.description}
          </p>

          {/* Add to Cart Button */}
          <button className="btn btn-primary text-sm py-1 px-4 w-auto mt-4">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductScreen;
