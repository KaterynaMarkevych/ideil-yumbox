import React from 'react'
import { useBasket } from "./BasketContext";
import styled from "styled-components";
import OrdersImage from "../assets/images/OrderSet.jpg";
import { HiTrash } from "react-icons/hi";

export const Item = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
  width: 411px;
  height: 151px;
  margin-left: 15px;
  border-radius: 12px;
  background: rgb(34, 34, 34);
  margin-left: 35px;
  margin-top: 0;
  @media (min-width: 768px){
    margin-left: 20px;
  }
`;
export const Image = styled.img`
  width: 40px;
  margin: 10px;
  padding: 10px;
  margin-left: 20px;
  background: rgb(48, 48, 48);
`;
export const Mass = styled.p`
  color: rgb(140, 138, 138);
  font-size: 13px;
  font-weight: 500;
  line-height: 100%;
  letter-spacing: 0%;
  text-align: left;
  margin: 5px;
`;
export const MinusButton = styled.button`
  margin-right: 9px;
  font-weight: 600;
  font-size: 15px;
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  align-items: center;
`;
export const PlusButton = styled.button`
  margin-left: 9px;
  font-weight: 600;
  font-size: 15px;
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  align-items: center;
`;
const Title = styled.p`
  font-size: 18px;
  font-weight: 600;
  line-height: 100%;
  letter-spacing: 0%;
  text-align: left;
  margin: 0;
`;
const Delete = styled.button`
  background: none;
  border: none;
  color:rgb(252, 184, 82);
  margin-top: -15px;
  margin-left: 130px;
  cursor: pointer;
`;
const Quantity = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid rgb(255, 255, 255);
  border-radius: 21px;
  padding: 0 10px;
  max-width: 117px;
  height: 27px;
  margin-left: 250px;
`;
const Price = styled.p`
  display: flex;
  align-items: center;
  margin-left: 20px;
`;
const ControlsContainer = styled.div`
  display: flex;
  align-items: center;
`;
const Container = styled.div`
  display: flex;
  align-items: center;
`;
const Separator = styled.div`
  width: 100%;
  height: 2px;
  background-color: black;
  margin:0;
  top: 2px;
`;
const ItemConteiner = styled.div`
  display: block;
  width: 100%;
`;
const Data = styled.div`
  margin-left: 10px;
`;
export const AddedItem = () => {
  const { basketItems, removeItemFromBasket, updateQuantity } = useBasket();
    
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
    };

    const uniqueBasketItems = Array.from(new Set(basketItems.map(item => item.id)))
    .map(id => {
        return {
            ...basketItems.find(item => item.id === id),
            quantity: basketItems.filter(item => item.id === id).length
        };
    }); 
  return (
    <div>
       {uniqueBasketItems.map(item => (
        <Item key={item.id}>
          <ItemConteiner>
          <Container>
          <Image src={OrdersImage} alt="OrdersImage" />
          <Data>
          <Title>{item.title} {item.number}</Title>
          <Mass>{item.mass}</Mass>
          </Data>
          <Delete onClick={() => handleRemoveItem(item.id)}>
            <HiTrash size="25px" />
          </Delete>
          </Container>
          <Separator />
          <ControlsContainer>
            <Price>{parseInt(item.price) * parseInt(basketItems.find(basketItem => basketItem.id === item.id).quantity)} ₴</Price>
            <Quantity>
            <MinusButton onClick={() => handleMinusButtonClick(item.id)}>
                -
            </MinusButton>
            <p>{basketItems.find(basketItem => basketItem.id === item.id).quantity}</p>
            <PlusButton onClick={() => handlePlusButtonClick(item.id)}>
                +
            </PlusButton>
            </Quantity>
          </ControlsContainer>
          </ItemConteiner>
        </Item>
      ))}
    </div>
  )
}

export default AddedItem
