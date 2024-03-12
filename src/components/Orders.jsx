import React from 'react'
import styled from "styled-components";
import { Container } from "./Header";
import OrdersImage from "../assets/images/OrderSet.jpg"

const SetContent = [
    {
        id: 1,
        title: "YumBox",
        number: "21 сет",
        mass: "1500 гр",
        price: "799 грн" 
    },
    {
        id: 2,
        title: "YumBox",
        number: "21 сет",
        mass: "1500 гр",
        price: "799 грн" 
    },
    {
        id: 3,
        title: "YumBox",
        number: "21 сет",
        mass: "1500 гр",
        price: "799 грн" 
    },
    {
        id: 4,
        title: "YumBox",
        number: "21 сет",
        mass: "1500 гр",
        price: "799 грн" 
    },
    {
        id: 5,
        title: "YumBox",
        number: "21 сет",
        mass: "1500 гр",
        price: "799 грн" 
    },
    {
        id: 6,
        title: "YumBox",
        number: "21 сет",
        mass: "1500 гр",
        price: "799 грн" 
    },
    {
        id: 7,
        title: "YumBox",
        number: "21 сет",
        mass: "1500 гр",
        price: "799 грн" 
    },
    {
        id: 8,
        title: "YumBox",
        number: "21 сет",
        mass: "1500 гр",
        price: "799 грн" 
    },
]
const OrdersWrapMobile = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media (min-width: 768px) {
        display: none;
    }
`;
const Image = styled.img`
    width: 254px;
    margin: auto;
    padding: 40px;
    @media (min-width: 1100px) {
    }
`;
const OrderMobile = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
`;
const Title = styled.p`
    color: rgb(255, 255, 255);
    font-size: 24px;
    font-weight: 600;
    line-height: 100%;
    letter-spacing: 0%;
    text-align: center;
    margin-top: 30px;
`;
const Mass = styled.p`
    color: rgb(140, 138, 138);
    font-size: 13px;
    font-weight: 500;
    line-height: 100%;
    letter-spacing: 0%;
    text-align: center;
    margin-top: 20px;
    margin-bottom: 20px;
`;
const PriceButton = styled.button`
    background: none;
    border: none;
    cursor: pointer;
    text-align: center;
    color: white;
    font-size: 18px;
    font-weight: 600;
    line-height: 100%;
    position: relative;
    margin-top: 20px;
  
    &::before {
    content: '${props => props.price}';
    }
    &:hover::before {
        opacity: 0;
    }
    &::after {
        content: "Добавити в кошик";
        position: absolute;
        font-weight: 500;
        font-size: 16px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        opacity: 0;
        transition: opacity 0.3s ease;
        padding: 20px 40px;
        border: 1px solid white;
        border-radius: 63px;
        white-space: nowrap;
    }
    &:hover::after {
        opacity: 1;
    }
`;
const Basket = styled.button`
  background: black;
  color: #fff;
  box-sizing: border-box;
  border: 1px solid white;
  border-radius: 21px;
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 0 10px;
  max-width: 117px;
  height: 27px;
  margin-left: 65%;
  z-index: 1;
  margin-bottom: 20px;
  position: fixed;
  bottom: 30px;
  @media (min-width: 768px) {
    display: none;
  }
`;
const BasketCounter = styled.span`
  margin-left: 5px;
  padding: 2px 6px;
  border-radius: 10px;
  background-color: #f00;
  color: #fff;
  font-size: 12px;
`;
export const Orders = () => {
  return (
    <Container>
        <OrdersWrapMobile>
            {SetContent.map(item => (
              <OrderMobile key={item.id}>
                <Image src={OrdersImage} alt="OrdersImage"/>
                <Title>{item.title}<br/>{item.number}</Title>
                <Mass>{item.mass}</Mass>
                <PriceButton price={item.price}></PriceButton>
              </OrderMobile>
            ))}
            <Basket>
            <BasketCounter>0</BasketCounter>
              1234 грн
            </Basket>
        </OrdersWrapMobile>
    </Container>
  )
}

export default Orders
