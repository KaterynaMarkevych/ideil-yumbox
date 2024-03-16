import React, { createContext, useState, useContext } from 'react';

const BasketContext = createContext();

export const useBasket = () => {
  return useContext(BasketContext);
};

export const BasketProvider = ({ children }) => {
  const [basketItems, setBasketItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const addToBasket = (price) => {
    setBasketItems((prevItems) => [...prevItems, price]); 
    setTotalPrice((prevTotal) => prevTotal + parseInt(price));
  };

  const calculateDiscountedPrice = (price) => {
    if (price >= 1000) {
      return price * 0.9; 
    } else {
      return price;
    }
  };

  return (
    <BasketContext.Provider value={{ basketItems, totalPrice, addToBasket, calculateDiscountedPrice  }}>
      {children}
    </BasketContext.Provider>
  );
};
