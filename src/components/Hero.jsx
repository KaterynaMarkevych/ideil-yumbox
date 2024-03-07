import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styled from "styled-components";
import { Container } from "./Header";
import heroImage from "../assets/images/Hero.png";

const BoxSlides = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  max-width: 1270px;
  border-radius: 24.44px;
  background: rgb(34, 34, 34);
`;
const Image = styled.img`
  position: absolute;
  width: 310px;
  height: 280px;
`;
const Text = styled.p`
  width: 1111.94px;
  height: 319.08px;
  color: rgb(233, 229, 225);
  text-align: center;
`;
const HeroText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 20px;
  padding-top: 20px;
`;
const Text2 = styled.p`
  position: absolute;
  width: 104px;
  height: 24px;
  color: rgb(252, 184, 82);
`;
const HeroButton = styled.button`
  border: 3.px solid rgb(252, 184, 82);
  border-radius: 17px;
  background: none;
  border: none;
  cursor: pointer;
  text-transform: uppercase;
  font-size: 25px;
  padding: 5px 34px;
`;
const Hero = () => {
  return (
    <Container>
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={30}
        slidesPerView={1}
      >
        <SwiperSlide key={1}>
          <BoxSlides>
            <Image src={heroImage} alt="Hero Image" />
            <Text>
              YUM
              <br />
              BOX
            </Text>
            <HeroText>
              <Text2>сет 21</Text2>
              <HeroButton>934 грн</HeroButton>
            </HeroText>
          </BoxSlides>
        </SwiperSlide>
        <SwiperSlide key={2}>Slide 2</SwiperSlide>
        <SwiperSlide key={3}>Slide 3</SwiperSlide>
      </Swiper>
    </Container>
  );
};

export default Hero;
