import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
  padding-top: 20px;
  margin: 0 20px;
`;

const HeaderContainer = styled.header`
  display: flex;
  text-align: center;
  justify-content: space-between;
  padding: 20px;
  background-color: lightblue;
  color: #fff;
`;

const Logo = styled.img`
  z-index: 10;
  width: 75px;
  height: auto;
`;

const Navigation = styled.nav`
  display: flex;
  justify-content: center;
  margin-top: 20px;
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
  @media (max-width: 768px) {
    display: none;
  }
`;
const Header = () => {
  return (
    <Container>
    <HeaderContainer>
        <Logo scr="logo.png" alt="YumBox"/>
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
        <Basket>basket</Basket>
      </HeaderContainer>
    </Container>
  )
}

export default Header
