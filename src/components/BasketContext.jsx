import React, { createContext, useState, useContext } from 'react';

const BasketContext = createContext();

export const useBasket = () => {
  return useContext(BasketContext);
};

export const BasketProvider = ({ children }) => {
  const [basketItems, setBasketItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [basketCount, setBasketCount] = useState(0);

  const addToBasket = (item) => {
    const existingIndex = basketItems.findIndex(basketItem => basketItem.id === item.id);
    if (existingIndex !== -1) {
      const updatedBasketItems = basketItems.map(basketItem => {
        if (basketItem.id === item.id) {
        return { ...basketItem, quantity: basketItem.quantity + 1 }; // Збільшуємо кількість на 1
        }
        return basketItem;
      });
        setBasketItems(updatedBasketItems);
    } else {
      setBasketItems(prevItems => [...prevItems, { ...item, quantity: 1 }]);
    }
    setBasketCount(prevCount => prevCount + 1);
    const updatedTotalPrice = totalPrice + parseInt(item.price); // Оновлюємо загальну ціну
  setTotalPrice(updatedTotalPrice);
  };

  const removeItemFromBasket = (itemId) => {
      const itemToRemove = basketItems.find(item => item.id === itemId);
      if (itemToRemove) {
          setTotalPrice(prevTotal => prevTotal - parseInt(itemToRemove.price) * parseInt(itemToRemove.quantity));
          setBasketItems(prevItems => prevItems.filter(item => item.id !== itemId));
          setBasketCount(prevCount => prevCount - parseInt(itemToRemove.quantity)); // Оновлення кількості товарів у кошику
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
      return parseInt(price * 0.9); 
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
