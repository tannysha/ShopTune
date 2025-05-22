import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const stored = localStorage.getItem("cart");
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existing = prevCart.find(item => item.product_id === product.product_id);
      if (existing) {
        return prevCart.map(item =>
          item.product_id === product.product_id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) =>
      prevCart.flatMap((item) => {
        if (item.product_id === productId) {
          if (item.quantity > 1) {
            return [{ ...item, quantity: item.quantity - 1 }];
          } else {
            return [];
          }
        }
        return [item];
      })
    );
  };

  const removeAllFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter(item => item.product_id !== productId));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, removeAllFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
