import React from 'react'
import styled from 'styled-components';
import { SlMenu } from "react-icons/sl";

const Container = styled.div`
  padding-top: 20px;
  margin: 0 20px;
  @media (min-width: 768px) {
    padding-top: 25px;
    margin: 0 30px;
  }
  @media (min-width: 1110px) {
    padding-top: 32px;
    margin: 0 82px;
  }
`;

const HeaderContainer = styled.header`
  display: flex;
  text-align: center;
  justify-content: space-between;
  padding: 20px;
  color: #fff;
  
`;

const Logo = styled.img`
  z-index: 10;
  width: 75px;
  height: auto;
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
  list-style-type:none;
  padding:0;
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
  border-radius: 21px;
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 0 10px;
  @media (max-width: 768px) {
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
  font-family: Montserrat;
  font-size: 14px;
  font-weight: 700;
  line-height: 92%;
  letter-spacing: 0%;
  @media (min-width: 768px) {
    display: none;
  }
`;

const InfoMenu = styled.button` 
  display: flex;
  justify-content: center;
  align-items: center;
  background: none;
  border: none;
  cursor: pointer;
  color: white;
  @media (min-width: 768px) {
    display: none;
  }
`;
const Header = () => {
  return (
    <Container>
    <HeaderContainer>
        <Logo scr="logo.png" alt="YumBox" />
        <MenuButton>
          <MenuText>Меню</MenuText>
        </MenuButton>
        <Navigation>
        <List>
          <ListIteam>
            < Link href="/catalog">Каталог</Link>
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
        <Basket>
          <BasketCounter>0</BasketCounter>
          1234 грн
        </Basket>
        <InfoMenu>
        <SlMenu />
      </InfoMenu>
      </HeaderContainer>
      
    </Container>
  )
}

export default Header
