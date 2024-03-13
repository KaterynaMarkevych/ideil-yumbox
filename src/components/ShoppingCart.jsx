import React from 'react'
import styled from "styled-components";

export const Basket = styled.button`
    background: none;
    color: #fff;
    box-sizing: border-box;
    border: 1px solid white;
    border-radius: 21px;
    cursor: pointer;
    display: flex;
    align-items: center;
    padding: 0 10px;
    @media (max-width: 768px) {
    background: black;
    max-width: 117px;
    height: 27px;
    margin-left: 65%;
    z-index: 1;
    margin-bottom: 20px;
    position: fixed;
    bottom: 30px;
    }
`;

export const BasketCounter = styled.span`
  margin-left: 5px;
  padding: 2px 6px;
  border-radius: 10px;
  background-color: #f00;
  color: #fff;
  font-size: 12px;
`;

export const ShoppingCart = ({ addedItemsCount, totalPrice }) => {
    let discountedPrice = totalPrice;

    if (totalPrice >= 1000) {
        discountedPrice = totalPrice * 0.9; 
    }
    return (
      <Basket>
        <BasketCounter>{addedItemsCount}</BasketCounter>
        {discountedPrice.toFixed(0)} грн
      </Basket>
    );
}

export default ShoppingCart
