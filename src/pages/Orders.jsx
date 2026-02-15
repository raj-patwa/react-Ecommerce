import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";

const Orders = () => {

  const { cartItems, products, currency } = useContext(ShopContext);

  const orderData = [];

  for (const productId in cartItems) {
    for (const size in cartItems[productId]) {
      if (cartItems[productId][size] > 0) {
        const product = products.find(p => p._id === productId);

        orderData.push({
          ...product,
          size,
          quantity: cartItems[productId][size],
          date: "25 Jul, 2024",
          status: "Ready to ship"
        });
      }
    }
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">

      {/* TITLE */}
      <div className="flex items-center gap-4 mb-8">
        <h1 className="text-2xl font-semibold tracking-wide">MY ORDERS</h1>
        <div className="flex-1 h-[1px] bg-gray-300"></div>
      </div>

      {/* EMPTY STATE */}
      {orderData.length === 0 ? (
        <p className="text-gray-500">No orders yet.</p>
      ) : (
        <div className="space-y-6">

          {orderData.map((item, index) => (
            <div key={index} className="border-b pb-6">

              <div className="flex items-center gap-6">

                {/* IMAGE */}
                <img
                  src={item.image[0]}
                  alt={item.name}
                  className="w-16 h-20 object-cover"
                />

                {/* DETAILS */}
                <div className="flex-1">
                  <p className="font-medium">{item.name}</p>

                  <p className="text-gray-600 text-sm mt-1">
                    {currency}{item.price} &nbsp;
                    <span className="ml-2">Quantity: {item.quantity}</span>
                    <span className="ml-2">Size: {item.size}</span>
                  </p>

                  <p className="text-gray-400 text-sm mt-1">
                    Date: {item.date}
                  </p>
                </div>

                {/* STATUS */}
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <span className="w-2.5 h-2.5 bg-green-500 rounded-full"></span>
                  {item.status}
                </div>

                {/* BUTTON */}
                <button className="border px-4 py-2 text-sm hover:bg-black hover:text-white transition">
                  Track Order
                </button>

              </div>

            </div>
          ))}

        </div>
      )}
    </div>
  );
};

export default Orders;
