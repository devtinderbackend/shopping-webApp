// import React from 'react'
// import products from '../../products'
// import Product from '../components/Product';
// const HomeScreen = () => {
//   return (
//     <>
//       {products.map((product) => (
//         <Product key={product.id} product={product} />// Ensure `key` is unique
//       ))}
//     </>
//   );
// }

// export default HomeScreen;


import React from 'react';
import products from '../../products';
import Product from '../components/Product';

const HomeScreen = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-wrap">
        {products.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default HomeScreen;
