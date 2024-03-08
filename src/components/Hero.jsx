import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styled from "styled-components";
import { Container } from "./Header";
import heroImage from "../assets/images/Hero.png";

const HeroSwiper = styled(Swiper)`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const BoxSlides = styled.div`
  position: relative;
  max-width: 1270px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  z-index: 1;
  background: rgb(34, 34, 34);
`;
const Image = styled.img`
  top: 0;
  z-index: 1;
  width: 300px;
  height: 280px;

`;
const Text = styled.p`
  font-weight: 700;
  font-size: 100px;
  color: rgb(233, 229, 225);
  text-align: center;
`;
const HeroText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  padding-bottom: 20px;
`;
const Text2 = styled.p`
  text-transform: uppercase;
  font-size: 30px;
  padding-right: 10px;
  color: rgb(252, 184, 82);
  font-weight: 600;
`;
const HeroButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  text-transform: uppercase;
  font-size: 25px;
  padding: 5px 34px; 
  border: 3.px solid 
  rgb(252, 184, 82);
  border-radius: 17px;
  color: rgb(252, 184, 82);
`;
const HeroContent = styled.div`
position: absolute;
bottom: 0;
margin-top: 80px;
width: 100%;
text-align: center;
`;
/*position: absolute; margin-top: 80px; text-align: center; */ 
const Hero = () => {
  return (
    <Container>
      <HeroSwiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={30}
        slidesPerView={1}
      >
        <SwiperSlide key={1}>
          <BoxSlides>
            <Image src={heroImage} alt="Hero Image" />
            <HeroContent>
            <Text>
              YUM
              <br />
              BOX
            </Text>
            <HeroText>
              <Text2>сет 21</Text2>
              <HeroButton>934 грн</HeroButton>
            </HeroText>
           </HeroContent>
          </BoxSlides>
        </SwiperSlide>
        <SwiperSlide key={2}>Slide 2</SwiperSlide>
        <SwiperSlide key={3}>Slide 3</SwiperSlide>
      </HeroSwiper>
    </Container>
  );
};

export default Hero;
