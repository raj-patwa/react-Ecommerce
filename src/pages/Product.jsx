import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets'

const Product = () => {
  const { productId } = useParams();
  const { products,addToCart} = useContext(ShopContext);

  const [productData, setProductData] = useState(null);
  const [image, setImage] = useState('');
  const [size, setSize] = useState('');

  useEffect(() => {
    if (!products || products.length === 0) return;

    const item = products.find(p => p._id === productId);

    if (item) {
      setProductData(item);
      setImage(item.image[0]);
    }
  }, [productId, products]);

  if (!productData) {
    return <p className="pt-10 text-center">Loading product...</p>;
  }

  return (
    <div className="border-t pt-10">
      <div className="flex flex-col sm:flex-row gap-10">

        {/* LEFT — thumbnails */}
        <div className="flex sm:flex-col gap-3 sm:w-1/5">
          {productData.image.map((img, index) => (
            <img
              key={index}
              src={img}
              onClick={() => setImage(img)}
              className={`cursor-pointer border rounded-md
              ${image === img ? "border-black" : "border-gray-300"}
              w-16 h-16 object-cover`}
              alt=""
            />
          ))}
        </div>

        {/* CENTER — main image */}
        <div className="sm:w-2/5">
          <img
            src={image}
            alt=""
            className="w-full rounded-lg shadow-md"
          />
        </div>

        {/* RIGHT — product info */}
        <div className="sm:w-2/5 flex flex-col gap-4">

          <h1 className="text-2xl font-semibold">
            {productData.name}
          </h1>

          {/* rating */}
          <div className="flex items-center gap-1 mt-1">
            <img src={assets.star_icon} className="w-3.5" alt="" />
            <img src={assets.star_icon} className="w-3.5" alt="" />
            <img src={assets.star_icon} className="w-3.5" alt="" />
            <img src={assets.star_icon} className="w-3.5" alt="" />
            <img src={assets.star_dull_icon} className="w-3.5" alt="" />
            <p className="text-xs">(122)</p>
          </div>

          <p className="text-2xl font-bold">
            ₹{productData.price}
          </p>

          <p className="text-gray-600 leading-relaxed">
            {productData.description}
          </p>

          {/* SIZE SELECTOR */}
          <div className="mt-4">
            <p className="mb-2 font-medium">Select Size</p>

            <div className="flex gap-3">
              {productData.sizes.map((item, index) => (
                <button
                  key={index}
                  onClick={() => setSize(item)}
                  className={`px-4 py-2 border rounded-md text-sm transition
                  ${item === size
                      ? "bg-black text-white border-black"
                      : "border-gray-300 hover:border-black"}`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* ADD TO CART */}
          <div className="mt-6">
  <button
    onClick={() => {
      if (!size) {
        alert("Please select a size");
        return;
      }
      addToCart(productData._id, size);
    }}
    className="w-full bg-black text-white py-3 rounded-md hover:bg-gray-800 transition"
  >
    Add to Cart
  </button>
</div>
         

        </div>

      </div>
    </div>
  );
}

export default Product;
