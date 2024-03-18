import React, { useState, useEffect } from 'react';
import { createGlobalStyle } from "styled-components";
import logo from "../assets/logo.png";
import styled from "styled-components";
import { IoMdMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { ImLinkedin2 } from "react-icons/im";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { useBasket } from "./BasketContext";
import AddedItem  from './AddedItem';
import Backdrop from './Backdrop'; 

const GlobalStyle = createGlobalStyle`
  body.mobile-menu-open {
    overflow: hidden;
  }
  body.basket-open {
    overflow: hidden;
  }
`;

export const Container = styled.div`
  padding-top: 20px;
  margin: 0 20px;
  @media (min-width: 768px) {
    padding-top: 25px;
    margin: 0 30px;
  }
  @media (min-width: 1110px) {
    padding-top: 75px;
    margin: 0 82px;
  }
`;

const HeaderContainer = styled.header`
  display: flex;
  text-align: center;
  justify-content: space-between;
  padding: 30px;
  color: #fff;
  position:fixed;
  z-index:4;
  background: black;
  top:0;
  right:0;
  left:0;
  margin-left: 0px;
  @media (max-width: 1110px){
    position: relative; 
  }
`;

const Logo = styled.img`
  z-index: 3;
  width: 75px;
  height: 49px;
  @media (min-width: 768px){
    width: 114px;
    height: 73px;
    margin-left: 80px;
  }
`;

const Navigation = styled.nav`
  display: none;
  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
const List = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
`;

const ListIteam = styled.li`
  margin: 0 10px;
`;

const Link = styled.a`
  color: rgb(255, 255, 255);
  text-decoration: none;
`;

const Basket = styled.button`
  background: none;
  color: #fff;
  box-sizing: border-box;
  border: 1px solid white;
  border-radius: 24px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 10px;
  max-width: 127px;
  height: 27px;
  margin-top: 15px;
  margin-right: 60px;
  @media (max-width: 768px) {
  background: black;
  margin-left: 55%;
  z-index: 1;
  margin-bottom: 20px;
  position: fixed;
  bottom: 30px;
  max-width: none;
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

const MenuButton = styled.button`
  display: flex;
  align-items: center;
  background: none;
  border: none;
  cursor: pointer;
  @media (min-width: 768px) {
    display: none;
  }
`;

const MenuText = styled.p`
  position: absolute;
  right: 70px;
  color: rgb(255, 255, 255);
  font-size: 14px;
  font-weight: 700;
  line-height: 92%;
  letter-spacing: 0%;
  @media (min-width: 768px) {
    display: none;
  }
`;
const MenuText2 = styled.p`
  position: absolute;
  right: 40px;
  top: -6px;
  color: rgb(255, 255, 255);
  font-size: 14px;
  font-weight: 700;
  line-height: 92%;
  letter-spacing: 0%;
  z-index: 1;
  @media (min-width: 768px) {
    display: none;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  align-items: center;
  border: none;
  background: none;
  cursor: pointer;
  padding-top: 0px;
  top: 40px;
  right: 50px;
  z-index: 3;
`;

const MobileNavigation = styled.nav`
  display: flex;
  flex-direction: column;
  padding-right: 66px;
  margin-bottom: 20px;
  margin-top: 20%;
  flex-grow: 1;
  justify-content: flex-start;
  margin-left: 64px;
`;
const MobileList = styled.ul`
  list-style-type: none;
  padding: 0;
  align-self: flex-start;
`;
const MobileListIteam = styled.li`
  text-decoration: none;
  color: white;
  font-weight: 500;
  font-size: 24px;
  line-height: 246.4%;
  letter-spacing: 0%;
  margin-left: 35px;
  text-align: left;
`;
const Mobile = styled.div`
  display: flex; 
  flex-direction: column; 
  position: fixed;
  top: 0;
  left: 0; 
  right: 0;
  bottom: 0;
  background-color: black; 
  z-index: 2;
  margin-top: 80px;
  overflow: hidden;
  @media (min-width: 768px) {
    display: none;
  }
`;
const Info = styled.ul`
  list-style-type: none;
  padding-bottom: 275px;
`;
const InfoList = styled.li`
  padding-bottom: 10px;
  text-align: left;
`;
const Email = styled.a`
  text-decoration: none;
  color: rgb(243, 186, 79);
  font-size: 18px;
  font-weight: 600;
  line-height: 100%;
  letter-spacing: 0%;
  text-align: center;
  margin-left: 64px;
`;
const Phone = styled.a`
  text-decoration: none;
  color: white;
  font-weight: 600;
  font-size: 18px;
  font-style: normal;
  text-align: center;
  margin-left: 64px;
`;
const SocialMedia = styled.ul`
  display: flex;
  gap: 44px;
  margin-top: 75px;
  margin-left: 25px;
`;
const InfoBasket = styled(Basket)`
  background: none;
  color: #fff;
  box-sizing: border-box;
  border: 1px solid white;
  border-radius: 21px;
  cursor: pointer;
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  top: 0;
  left: 0; 
  right: 0;
  bottom: 0;
  padding: 0 10px;
  margin-left: 94px;
  margin-top: 25%;
  max-width: 117px;
  height: 27px;
  @media (min-width: 768px) {
    display: none;
  }
`;
const BasketContainer = styled.div`
  display: flex; 
  flex-direction: column; 
  position: fixed;
  top: 0;
  right: 0;
  width: 470px;;
  height: 100%;
  z-index: 3;
  background: black;
  overflow-y: auto;
  @media (max-width: 768px) {
    width: 100%;
    left: 0;
  }
`;
const BasketTitle = styled.p`
  text-align: left;
  font-size: 36px;
  width: 279px;
  height: 72px;
  padding: 20px;
`;
const CloseBasket = styled(CloseButton)`
  margin-top: 28px;
  margin-right: -18px;
`;
const Text = styled.p`
  text-align: center;
  font-size: 20px;
  margin: 0;
`;
const Order = styled.div`
  border-radius: 31px 31px 0px 0px;
  background: rgb(34, 34, 34);
  margin-top: auto;
`;
const OrderButton = styled.button`
  border-radius: 63px;
  background: rgb(252, 184, 82);
  width: 410px;
  height: 65px;
  padding: 0 10px;
  color: white;
  cursor: pointer;
  margin-bottom: 20px;
  color: rgb(0, 0, 0);
  font-size: 18px;
  font-weight: 600;
  line-height: 100%;
  letter-spacing: 0%;
  text-align: center;
`;
const Delivery = styled.p`
  font-size: 18px;
  font-weight: 600;
  text-align: left;
  margin-left: 40px;
  margin-top: 20px
`;
const DeliveryPrice = styled.p`
  font-size: 18px;
  font-weight: 600;
  text-align: right;
  margin-right: 40px;
  margin-top: -35px;
`;
export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { basketItems, totalPrice, updateQuantity, calculateDiscountedPrice } = useBasket();
  const [basketOpen, setBasketOpen] = useState(false);
  const basketCount = basketItems.reduce((total, item) => total + parseInt(item.quantity), 0);

  useEffect(() => {
    if (menuOpen || basketOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [menuOpen, basketOpen]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleBasket = () => {
    setBasketOpen(!basketOpen);
    const updatedBasket = basketItems.filter(item => item.id !== item.id); 
    const updatedTotalPrice = updatedBasket.reduce((total, item) => total + item.price, 0);
    setBasketItems(updatedBasket);
    setTotalPrice(updatedTotalPrice);
    setBasketCount(updatedBasket.length);

    if (!basketOpen) {
      document.body.classList.add("basket-open");
    } else {
      document.body.classList.remove("basket-open");
    }
  };

  const discountedPrice = calculateDiscountedPrice(totalPrice);
  const totalPriceWithDelivery = discountedPrice + 50;

  return (
    <Container>
      <GlobalStyle />
      <HeaderContainer>
        <Logo src={logo} alt="YumBox" />
        <MenuButton onClick={toggleMenu}>
          {menuOpen ? (
            <CloseButton>
              <MenuText2>Меню</MenuText2>
              <IoClose color="white" size="30px" />
            </CloseButton>
          ) : (
            <>
              <MenuText>Меню</MenuText>
              <IoMdMenu color="white" size="30px" />
            </>
          )}
        </MenuButton>
        {menuOpen && (
          <Mobile>
            <InfoBasket onClick={toggleBasket}>
              <BasketCounter>{basketCount}</BasketCounter>
              {totalPrice} грн
            </InfoBasket>
            <MobileNavigation>
              <MobileList>
                <MobileListIteam>
                  <Link href="/catalog">Каталог</Link>
                </MobileListIteam>
                <MobileListIteam>
                  <Link href="/catering">Кейтеринг</Link>
                </MobileListIteam>
                <MobileListIteam>
                  <Link href="/about">Про нас</Link>
                </MobileListIteam>
                <MobileListIteam>
                  <Link href="/contact">Контакти</Link>
                </MobileListIteam>
              </MobileList>
            </MobileNavigation>

            <Info>
              <InfoList>
                <Email href="/yumbox.lutsk@gmail.com">
                  yumbox.lutsk@gmail.com
                </Email>
              </InfoList>
              <InfoList>
                <Phone href="tel:+380938239293"> +380 93 823 92 93</Phone>
              </InfoList>
              <SocialMedia>
                <List>
                  <ImLinkedin2 color="white" size={24} />
                </List>
                <List>
                  <FaInstagram color="white" size={24} />
                </List>
                <List>
                  <FaFacebookF color="white" size={24} />
                </List>
              </SocialMedia>
            </Info>
          </Mobile>
        )}
        <Navigation>
          <List>
            <ListIteam>
              <Link href="/catalog">Каталог</Link>
            </ListIteam>
            <ListIteam>
              <Link href="/catering">Кейтеринг</Link>
            </ListIteam>
            <ListIteam>
              <Link href="/about">Про нас</Link>
            </ListIteam>
            <ListIteam>
              <Link href="/contact">Контакти</Link>
            </ListIteam>
          </List>
        </Navigation>
        <Basket onClick={toggleBasket}>
          <BasketCounter>{basketCount}</BasketCounter>
          {totalPrice} грн
        </Basket>
        {basketOpen && (
        <>
          <Backdrop onClick={toggleBasket} />
          <BasketContainer>
            {basketCount > 0 ? (
              <>
                <CloseBasket onClick={toggleBasket}>
                  <IoClose color="white" size="30px" />
                </CloseBasket>
                <BasketTitle>Корзина</BasketTitle>
                <AddedItem updateQuantity={updateQuantity} />
                <Order>
                  <Delivery>Доставка</Delivery>
                  <DeliveryPrice>50 ₴</DeliveryPrice>
                  <OrderButton>Оформити за {totalPriceWithDelivery} ₴</OrderButton>
                </Order>
              </>
            ) : (
              <>
                <CloseBasket onClick={toggleBasket}>
                  <IoClose color="white" size="30px" />
                </CloseBasket>
                <BasketTitle>Корзина</BasketTitle>
                <Text>У вашій корзині поки порожньо.</Text>
                <Text>Оберіть страву з нашого меню:)</Text>
              </>
            )}
          </BasketContainer>
        </>
      )}
      </HeaderContainer>
    </Container>
  );
};

export default Header;
