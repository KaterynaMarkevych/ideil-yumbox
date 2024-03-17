import React from 'react'
import { useBasket } from "./BasketContext";
import styled from "styled-components";
import OrdersImage from "../assets/images/OrderSet.jpg";

export const Item = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
`;
export const Image = styled.img`
    width: 30px;
    margin: auto;
    padding: 20px;
`;
export const Mass = styled.p`
    color: rgb(140, 138, 138);
    font-size: 13px;
    font-weight: 500;
    line-height: 100%;
    letter-spacing: 0%;
    text-align: center;
    margin-top: 20px;
    margin-bottom: 20px;
`;
export const MinusButton = styled.button`
  margin-right: 7px;
  font-weight: 600;
  font-size: 15px;
`;
export const PlusButton = styled.button`
  margin-left: 7px;
  font-weight: 600;
  font-size: 15px;
`;
export const AddedItem = ({ updateQuantity }) => {
    const { basketItems, removeItemFromBasket } = useBasket();
    

    const handleRemoveItem = (itemId) => {
        removeItemFromBasket(itemId);
    };

    const handleMinusButtonClick = (itemId) => {
    const itemToUpdate = basketItems.find(item => item.id === itemId);
    if (itemToUpdate.quantity > 1) {
      const newQuantity = itemToUpdate.quantity - 1;
      updateQuantity(itemId, newQuantity); 
    }
  };

  const handlePlusButtonClick = (itemId) => {
    const itemToUpdate = basketItems.find(item => item.id === itemId);
    const newQuantity = parseInt(itemToUpdate.quantity) + 1;
    updateQuantity(itemId, newQuantity);
    setBasketCount(prevCount => prevCount + 1);
  };
    
  return (
    <div>
       {basketItems.map(item => (
        <Item key={item.id}>
        <Image src={OrdersImage} alt="OrdersImage"/>
        <p>{item.title} {item.number}</p>
        <br/>
        <Mass>{item.mass}</Mass>
        <p>{item.price} ₴</p>
        <button onClick={() => handleRemoveItem(item.id)}>Видалити</button>
        <MinusButton onClick={() => handleMinusButtonClick(item.id)}>
            -
        </MinusButton>
        <p>{item.quantity}</p>
        <PlusButton onClick={() => handlePlusButtonClick(item.id)}>
            +
        </PlusButton>
        </Item>
      ))}
    </div>
  )
}

export default AddedItem
