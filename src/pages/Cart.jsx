import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { products, currency, cartItems,removeFromCart } = useContext(ShopContext);
  const [cartData, setCartData] = useState([]);
 const navigate = useNavigate();

  useEffect(() => {
    const tempData = [];

    for (const productId in cartItems) {
      for (const size in cartItems[productId]) {
        if (cartItems[productId][size] > 0) {
          const product = products.find(p => p._id === productId);

          tempData.push({
            ...product,
            size,
            quantity: cartItems[productId][size],
          });
        }
      }
    }

    setCartData(tempData);
  }, [cartItems, products]);

  const totalAmount = cartData.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">

      {/* TITLE */}
      <h1 className="text-3xl font-semibold mb-8">Your Cart</h1>

      {cartData.length === 0 ? (
        <p className="text-gray-500 text-lg">Your cart is empty.</p>
      ) : (
        <div className="grid md:grid-cols-3 gap-8">

          {/* LEFT SIDE - ITEMS */}
          <div className="md:col-span-2 space-y-6">

            {cartData.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-6 border p-4 rounded-xl shadow-sm"
              >
                {/* IMAGE */}
                <img
                  src={item.image[0]}
                  alt={item.name}
                  className="w-24 h-24 object-cover rounded-lg"
                />

                {/* DETAILS */}
                <div className="flex-1">
                  <h2 className="font-medium text-lg">{item.name}</h2>
                  <p className="text-gray-500">Size: {item.size}</p>
                  <p className="text-gray-600">
                    {currency}{item.price}
                  </p>
                </div>

                {/* QUANTITY */}
                <div className="text-center">
                  <p className="text-sm text-gray-500">Qty</p>
                  <p className="font-semibold text-lg">
                    {item.quantity}
                  </p>
                </div>

                {/* SUBTOTAL */}
                <div className="font-semibold text-lg">
                  {currency}{item.price * item.quantity}
                </div>

                {/* REMOVE BUTTON */}
                <button
  onClick={() => removeFromCart(item._id, item.size)}
  className="text-red-500 hover:text-red-700 text-sm"
>
  Remove
</button>

              </div>
            ))}

          </div>

          {/* RIGHT SIDE - SUMMARY */}
          <div className="border rounded-xl p-6 h-fit shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>

            <div className="flex justify-between mb-2">
              <span>Subtotal</span>
              <span>{currency}{totalAmount}</span>
            </div>

            <div className="flex justify-between mb-2">
              <span>Delivery</span>
              <span>{currency}10</span>
            </div>

            <hr className="my-4" />

            <div className="flex justify-between text-lg font-semibold">
              <span>Total</span>
              <span>{currency}{totalAmount + 10}</span>
            </div>

           <button
  onClick={() => navigate("/place-order")}
  className="mt-6 w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition"
>
  Checkout
</button>

          </div>

        </div>
      )}
    </div>
  );
};

export default Cart;
