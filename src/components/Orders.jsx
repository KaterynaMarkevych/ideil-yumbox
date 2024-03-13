import React, {useState} from 'react'
import styled from "styled-components";
import { Container } from "./Header";
import OrdersImage from "../assets/images/OrderSet.jpg";
import ShoppingCart from "./ShoppingCart";

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
        width: 220px;
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
    margin-bottom: 50px;
  
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
const OrderDesktopWrap = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap:20px;
    justify-content: center;
    margin-top: 40px;
    @media (max-width: 768px) {
        display: none;
    }
`;
const OrderDesktop = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;
export const Orders = () => {
    const [addedItems, setAddedItems] = useState([]); // стейт для зберігання доданих товарів
    const [buttonValue, setButtonValue] = useState("799 грн"); // стейт для зберігання значення кнопки
    const [totalPrice, setTotalPrice] = useState(0); // стейт для зберігання загальної суми доданих товарів

    // Функція, яка викликається при натисканні кнопки додавання товару в кошик
    const handleAddToCart = (id, price) => {
        setAddedItems([...addedItems, id]); // додаємо id товару до масиву доданих товарів
        setButtonValue(price); // оновлюємо значення кнопки
        setTotalPrice(totalPrice + parseInt(price)); // додаємо ціну товару до загальної суми
    };

    return (
    <Container>
        <OrdersWrapMobile>
            {SetContent.map(item => (
              <OrderMobile key={item.id}>
                <Image src={OrdersImage} alt="OrdersImage"/>
                <Title>{item.title}<br/>{item.number}</Title>
                <Mass>{item.mass}</Mass>
                {/* Передаємо ціну як пропс до функції handleAddToCart */}
                <PriceButton onClick={() => handleAddToCart(item.id, item.price)} price={item.price}></PriceButton>
              </OrderMobile>
            ))}
            {/* Передаємо кількість доданих товарів як пропс до компонента ShoppingCart */}
            <ShoppingCart addedItemsCount={addedItems.length} totalPrice={totalPrice} />
        </OrdersWrapMobile>
        <OrderDesktopWrap>
        {SetContent.map(item => (
              <OrderDesktop key={item.id}>
                <Image src={OrdersImage} alt="OrdersImage"/>
                <Title>{item.title}<br/>{item.number}</Title>
                <Mass>{item.mass}</Mass>
                {/* Передаємо ціну як пропс до функції handleAddToCart */}
                <PriceButton onClick={() => handleAddToCart(item.id, item.price)} price={item.price}></PriceButton>
              </OrderDesktop>
            ))}
        </OrderDesktopWrap>
    </Container>
  )
}

export default Orders
