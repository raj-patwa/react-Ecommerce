import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { useNavigate } from "react-router-dom";




const PlaceOrder = () => {

  const { cartItems, products, currency, delivery_fee } = useContext(ShopContext);
const navigate = useNavigate();
  const cartData = [];

  for (const productId in cartItems) {
    for (const size in cartItems[productId]) {
      if (cartItems[productId][size] > 0) {
        const product = products.find(p => p._id === productId);

        cartData.push({
          ...product,
          size,
          quantity: cartItems[productId][size],
        });
      }
    }
  }

  const totalAmount = cartData.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">

      <h1 className="text-3xl font-semibold mb-8">Place Order</h1>

      <div className="grid md:grid-cols-2 gap-10">

        {/* LEFT: DELIVERY INFO */}
        <div className="space-y-4">

          <h2 className="text-xl font-semibold mb-4">Delivery Information</h2>

          <input className="w-full border p-3 rounded-lg" placeholder="Full Name" />
          <input className="w-full border p-3 rounded-lg" placeholder="Email Address" />
          <input className="w-full border p-3 rounded-lg" placeholder="Phone Number" />
          <input className="w-full border p-3 rounded-lg" placeholder="Street Address" />

          <div className="grid grid-cols-2 gap-4">
            <input className="border p-3 rounded-lg" placeholder="City" />
            <input className="border p-3 rounded-lg" placeholder="State" />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <input className="border p-3 rounded-lg" placeholder="Zip Code" />
            <input className="border p-3 rounded-lg" placeholder="Country" />
          </div>

        </div>

        {/* RIGHT: ORDER SUMMARY */}
        <div className="border rounded-xl p-6 shadow-sm h-fit">

          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>

          {cartData.map((item, index) => (
            <div key={index} className="flex justify-between mb-2 text-sm">
              <span>{item.name} ({item.size}) × {item.quantity}</span>
              <span>{currency}{item.price * item.quantity}</span>
            </div>
          ))}

          <hr className="my-4" />

          <div className="flex justify-between mb-2">
            <span>Subtotal</span>
            <span>{currency}{totalAmount}</span>
          </div>

          <div className="flex justify-between mb-2">
            <span>Delivery Fee</span>
            <span>{currency}{delivery_fee}</span>
          </div>

          <div className="flex justify-between font-semibold text-lg mt-4">
            <span>Total</span>
            <span>{currency}{totalAmount + delivery_fee}</span>
          </div>

          <button
  onClick={() => navigate("/order")}
  className="mt-6 w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition"
>
  Place Order
</button>

        </div>

      </div>
    </div>
  );
};

export default PlaceOrder;
