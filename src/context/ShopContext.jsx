import { createContext, useState } from "react";
import { products } from "../assets/assets";

export const ShopContext = createContext();

const ShopContextProvider = ({ children }) => {

  const [search, setSearch] = useState('');
  const [showSearch, setShowSearch] = useState(false);
  const [cartItems, setCartItems] = useState({});

  // ✅ ADD TO CART
  const addToCart = (itemId, size) => {

    let cartData = structuredClone(cartItems);

    if (cartData[itemId]) {
      if (cartData[itemId][size]) {
        cartData[itemId][size] += 1;
      } else {
        cartData[itemId][size] = 1;
      }
    } else {
      cartData[itemId] = {};
      cartData[itemId][size] = 1;
    }

    setCartItems(cartData);
  };

  // ✅ REMOVE FROM CART
  const removeFromCart = (itemId, size) => {
    setCartItems(prev => {
      const updatedCart = { ...prev };

      if (updatedCart[itemId]?.[size]) {
        delete updatedCart[itemId][size];

        // remove product if no sizes left
        if (Object.keys(updatedCart[itemId]).length === 0) {
          delete updatedCart[itemId];
        }
      }

      return updatedCart;
    });
  };

  // ✅ GET CART COUNT
  const getCartCount = () => {
    let totalCount = 0;

    for (const productId in cartItems) {
      for (const size in cartItems[productId]) {
        if (cartItems[productId][size] > 0) {
          totalCount += cartItems[productId][size];
        }
      }
    }

    return totalCount;
  };

  const currency = '$';
  const delivery_fee = 10;

  const value = {
    products,
    currency,
    delivery_fee,
    search,
    showSearch,
    setSearch,
    cartItems,
    addToCart,
    removeFromCart,
    setShowSearch,
    getCartCount
  };

  return (
    <ShopContext.Provider value={value}>
      {children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
