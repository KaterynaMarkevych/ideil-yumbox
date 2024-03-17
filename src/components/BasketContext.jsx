import React, { createContext, useState, useContext } from 'react';

const BasketContext = createContext();

export const useBasket = () => {
  return useContext(BasketContext);
};

export const BasketProvider = ({ children }) => {
  const [basketItems, setBasketItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const addToBasket = (item) => {
    setBasketItems((prevItems) => [...prevItems, item]); 
    setTotalPrice((prevTotal) => prevTotal + parseInt(item.price));
   };
   const removeItemFromBasket = (itemId) => {
    const itemToRemove = basketItems.find(item => item.id === itemId);
    if (itemToRemove) {
      setTotalPrice(prevTotal => prevTotal - parseInt(itemToRemove.price));
      setBasketItems(prevItems => prevItems.filter(item => item.id !== itemId));
    }
  };
  const updateQuantity = (itemId, newQuantity) => {
    const updatedItems = basketItems.map(item => {
      if (item.id === itemId) {
        const updatedItem = { ...item, quantity: newQuantity };
        setTotalPrice(prevTotal => prevTotal - item.price * item.quantity + updatedItem.price * updatedItem.quantity);
        return updatedItem;
      }
      return item;
    });
    setBasketItems(updatedItems);
  };
  const calculateDiscountedPrice = (price) => {
    if (price >= 1000) {
      return price * 0.9; 
    } else {
      return price;
    }
  };

  return (
    <BasketContext.Provider value={{ 
        basketItems, 
        totalPrice, 
        addToBasket, 
        calculateDiscountedPrice,
        removeItemFromBasket,
        updateQuantity  }}>
      {children}
    </BasketContext.Provider>
  );
};
